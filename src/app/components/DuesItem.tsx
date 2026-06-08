import { Calendar, CheckCircle2, Clock } from 'lucide-react';

interface DuesItemProps {
  id: number;
  title: string;
  amount: number;
  dueDate: string;
  paidCount: number;
  totalCount: number;
  status: 'pending' | 'completed';
}

export function DuesItem({ title, amount, dueDate, paidCount, totalCount, status }: DuesItemProps) {
  const percentage = Math.round((paidCount / totalCount) * 100);
  const isPending = status === 'pending';

  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4>{title}</h4>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              isPending
                ? 'bg-amber-100 text-amber-700'
                : 'bg-green-100 text-green-700'
            }`}>
              {isPending ? '진행중' : '완료'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>마감: {dueDate}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-medium text-primary">
            {amount.toLocaleString()}원
          </div>
          <div className="text-xs text-muted-foreground">
            1인당
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">납부 현황</span>
          <span className="font-medium">{paidCount}/{totalCount}명 ({percentage}%)</span>
        </div>
        <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
          <div
            className={`h-full transition-all ${
              isPending ? 'bg-amber-500' : 'bg-green-500'
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {isPending && (
        <button className="w-full mt-3 bg-primary text-primary-foreground py-2 rounded-lg text-sm transition-transform active:scale-95">
          미납자 알림 보내기
        </button>
      )}
    </div>
  );
}
