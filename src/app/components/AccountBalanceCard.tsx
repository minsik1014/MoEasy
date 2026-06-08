import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

interface AccountBalanceCardProps {
  balance: number;
  totalIncome: number;
  totalExpense: number;
}

export function AccountBalanceCard({ balance, totalIncome, totalExpense }: AccountBalanceCardProps) {
  return (
    <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Wallet className="w-5 h-5" />
        <span className="text-sm opacity-90">마스터 계좌 잔액</span>
      </div>

      <div className="mb-6">
        <div className="text-3xl font-semibold mb-1">
          {balance.toLocaleString()}원
        </div>
        <div className="text-sm opacity-75">
          강남 러닝 크루 공동 계좌
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs opacity-90">총 입금</span>
          </div>
          <div className="text-lg font-medium">
            +{totalIncome.toLocaleString()}원
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingDown className="w-4 h-4" />
            <span className="text-xs opacity-90">총 출금</span>
          </div>
          <div className="text-lg font-medium">
            -{totalExpense.toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
}
