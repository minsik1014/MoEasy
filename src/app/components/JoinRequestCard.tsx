import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface JoinRequestCardProps {
  id: number;
  name: string;
  avatar: string;
  greeting: string;
  requestedAt: string;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
}

export function JoinRequestCard({
  id,
  name,
  avatar,
  greeting,
  requestedAt,
  onApprove,
  onReject,
}: JoinRequestCardProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleApprove = () => {
    setIsProcessing(true);
    onApprove(id);
  };

  const handleReject = () => {
    setIsProcessing(true);
    onReject(id);
  };

  return (
    <div className="bg-card border-2 border-border rounded-2xl p-4 hover:shadow-sm transition-shadow">
      <div className="flex gap-3 mb-3">
        <div className="w-14 h-14 rounded-full bg-secondary border-2 border-border flex items-center justify-center flex-shrink-0 text-2xl">
          {avatar}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="mb-1">{name}</h4>
          <p className="text-xs text-muted-foreground">{requestedAt}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {greeting}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleApprove}
          disabled={isProcessing}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-xl transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Check className="w-4 h-4" />
          <span className="text-sm">수락</span>
        </button>

        <button
          onClick={handleReject}
          disabled={isProcessing}
          className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground border-2 border-border py-2.5 rounded-xl transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <X className="w-4 h-4" />
          <span className="text-sm">거절</span>
        </button>
      </div>
    </div>
  );
}
