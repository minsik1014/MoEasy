import { Sparkles } from 'lucide-react';

interface ExtractedDataFormProps {
  storeName: string;
  dateTime: string;
  totalAmount: string;
}

export function ExtractedDataForm({ storeName, dateTime, totalAmount }: ExtractedDataFormProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm text-primary">AI가 자동으로 추출했습니다</span>
      </div>

      <div>
        <label className="text-sm text-muted-foreground mb-1.5 block">상호명</label>
        <div className="relative">
          <input
            type="text"
            value={storeName}
            className="w-full px-4 py-3 bg-accent/50 border border-accent rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            readOnly
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
            AI
          </div>
        </div>
      </div>

      <div>
        <label className="text-sm text-muted-foreground mb-1.5 block">결제 일시</label>
        <div className="relative">
          <input
            type="text"
            value={dateTime}
            className="w-full px-4 py-3 bg-accent/50 border border-accent rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            readOnly
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
            AI
          </div>
        </div>
      </div>

      <div>
        <label className="text-sm text-muted-foreground mb-1.5 block">총 금액</label>
        <div className="relative">
          <input
            type="text"
            value={totalAmount}
            className="w-full px-4 py-3 bg-accent/50 border border-accent rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            readOnly
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
            AI
          </div>
        </div>
      </div>
    </div>
  );
}
