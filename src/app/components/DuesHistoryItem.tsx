import { CheckCircle2, XCircle } from 'lucide-react';

interface DuesHistoryItemProps {
  month: string;
  amount: number;
  isPaid: boolean;
  paidDate?: string;
}

export function DuesHistoryItem({ month, amount, isPaid, paidDate }: DuesHistoryItemProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isPaid
              ? 'bg-green-100'
              : 'bg-gray-100'
          }`}>
            {isPaid ? (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-gray-400" />
            )}
          </div>
          <div>
            <h4>{month}</h4>
            {isPaid && paidDate && (
              <p className="text-xs text-muted-foreground">납부일: {paidDate}</p>
            )}
          </div>
        </div>

        <div className="text-right">
          <div className={`font-medium ${
            isPaid ? 'text-green-600' : 'text-muted-foreground'
          }`}>
            {amount.toLocaleString()}원
          </div>
          <div className={`text-xs px-2 py-0.5 rounded-full inline-block ${
            isPaid
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-600'
          }`}>
            {isPaid ? '완료' : '미납'}
          </div>
        </div>
      </div>
    </div>
  );
}
