import { ArrowDownLeft, ArrowUpRight, Receipt, Users } from 'lucide-react';

interface TransactionItemProps {
  id: number;
  type: 'income' | 'expense';
  category: string;
  description: string;
  amount: number;
  date: string;
  time: string;
}

export function TransactionItem({ type, category, description, amount, date, time }: TransactionItemProps) {
  const isIncome = type === 'income';

  const getIcon = () => {
    if (category === '회비 납부') return <Users className="w-5 h-5" />;
    if (category === '영수증 정산') return <Receipt className="w-5 h-5" />;
    return isIncome ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />;
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
          isIncome
            ? 'bg-green-100 text-green-600'
            : 'bg-red-100 text-red-600'
        }`}>
          {getIcon()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex-1">
              <h4 className="truncate">{category}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className={`text-right font-medium ${
              isIncome ? 'text-green-600' : 'text-red-600'
            }`}>
              {isIncome ? '+' : '-'}{amount.toLocaleString()}원
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            {date} · {time}
          </div>
        </div>
      </div>
    </div>
  );
}
