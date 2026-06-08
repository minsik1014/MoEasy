import { X, CreditCard, ArrowRight, Shield } from 'lucide-react';

interface PaymentBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  recipient: string;
  purpose: string;
  accountName?: string;
  accountNumber?: string;
  bankName?: string;
}

export function PaymentBottomSheet({
  isOpen,
  onClose,
  amount,
  recipient,
  purpose,
  accountName = '김모이지',
  accountNumber = '1002-****-1234',
  bankName = '우리은행',
}: PaymentBottomSheetProps) {
  if (!isOpen) return null;

  const handlePayment = () => {
    alert(`${amount.toLocaleString()}원 송금이 완료되었습니다.`);
    onClose();
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-50 animate-slide-up">
        <div className="max-w-md mx-auto bg-card rounded-t-3xl shadow-2xl">
          {/* Handle Bar */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-10 h-1 bg-border rounded-full" />
          </div>

          {/* Header */}
          <div className="px-6 py-4 flex items-center justify-between border-b border-border">
            <h3 className="text-lg">송금하기</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 space-y-6">
            {/* Recipient Info */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">보내는 곳</p>
              <h4 className="text-lg mb-1">{recipient}</h4>
              <p className="text-xs text-muted-foreground">{purpose}</p>
            </div>

            {/* Amount */}
            <div className="text-center py-6">
              <div className="text-5xl font-bold text-foreground mb-2">
                {amount.toLocaleString()}
                <span className="text-3xl ml-1">원</span>
              </div>
            </div>

            {/* Account Info */}
            <div className="bg-secondary border-2 border-border rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">출금 계좌</p>
                    <h4 className="text-sm">{bankName}</h4>
                  </div>
                </div>
                <button className="text-xs text-primary hover:underline">
                  변경
                </button>
              </div>
              <div className="flex items-center justify-between pl-13">
                <div>
                  <p className="text-sm">{accountNumber}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {accountName}
                  </p>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl p-3">
              <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-800 leading-relaxed">
                안전한 송금을 위해 보안 인증을 거칩니다
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="px-6 pb-6 pt-2">
            <button
              onClick={handlePayment}
              className="w-full bg-primary text-primary-foreground py-4 rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-lg font-medium"
            >
              <span>{amount.toLocaleString()}원 송금하기</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
