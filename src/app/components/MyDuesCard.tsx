import { useState } from 'react';
import { CreditCard, CheckCircle2, AlertCircle } from 'lucide-react';
import { PaymentBottomSheet } from './PaymentBottomSheet';

interface MyDuesCardProps {
  amount: number;
  dueDate: string;
  isPaid: boolean;
  onPay: () => void;
  meetupName?: string;
}

export function MyDuesCard({ amount, dueDate, isPaid, onPay, meetupName = '강남 러닝 크루' }: MyDuesCardProps) {
  const [showPayment, setShowPayment] = useState(false);

  const handlePayClick = () => {
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    setShowPayment(false);
    onPay();
  };
  return (
    <div className={`rounded-2xl p-5 border-2 ${
      isPaid
        ? 'bg-green-50 border-green-200'
        : 'bg-amber-50 border-amber-200'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {isPaid ? (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-600" />
            )}
            <h3 className={isPaid ? 'text-green-900' : 'text-amber-900'}>
              {isPaid ? '납부 완료' : '미납'}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            마감: {dueDate}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-semibold text-primary">
            {amount.toLocaleString()}원
          </div>
          <div className="text-xs text-muted-foreground">
            이번 달 회비
          </div>
        </div>
      </div>

      {!isPaid && (
        <button
          onClick={handlePayClick}
          className="w-full bg-primary text-primary-foreground py-3 rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-2"
        >
          <CreditCard className="w-5 h-5" />
          <span>회비 납부하기</span>
        </button>
      )}

      {isPaid && (
        <div className="bg-green-100 border border-green-200 rounded-xl p-3 text-center">
          <p className="text-sm text-green-700">
            납부해주셔서 감사합니다! 🎉
          </p>
        </div>
      )}

      <PaymentBottomSheet
        isOpen={showPayment}
        onClose={handlePaymentComplete}
        amount={amount}
        recipient={meetupName}
        purpose="월 회비"
      />
    </div>
  );
}
