import { useState } from 'react';
import { X, Star } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  onSubmit: (rating: number, comment: string) => void;
}

export function ReviewModal({
  isOpen,
  onClose,
  eventTitle,
  onSubmit,
}: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (rating === 0) {
      alert('별점을 선택해주세요');
      return;
    }
    onSubmit(rating, comment);
    setRating(0);
    setComment('');
    onClose();
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="max-w-sm w-full bg-card rounded-3xl shadow-2xl p-6 animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg">후기 작성</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Event Title */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">{eventTitle}</p>
              <h4 className="text-lg">오늘 모임은 어떠셨나요?</h4>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform active:scale-90 hover:scale-110"
                >
                  <Star
                    className={`w-12 h-12 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-border'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Rating Text */}
            <div className="text-center">
              {rating === 0 && (
                <p className="text-sm text-muted-foreground">별점을 선택해주세요</p>
              )}
              {rating === 1 && (
                <p className="text-sm text-amber-600">아쉬웠어요</p>
              )}
              {rating === 2 && (
                <p className="text-sm text-orange-600">그저 그랬어요</p>
              )}
              {rating === 3 && (
                <p className="text-sm text-yellow-600">괜찮았어요</p>
              )}
              {rating === 4 && (
                <p className="text-sm text-green-600">좋았어요</p>
              )}
              {rating === 5 && (
                <p className="text-sm text-blue-600">최고였어요! ⭐</p>
              )}
            </div>

            {/* Comment Input */}
            <div>
              <label className="block text-sm mb-2">
                후기 남기기 <span className="text-muted-foreground">(선택)</span>
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="오늘 모임에 대한 짧은 소감을 남겨주세요"
                rows={4}
                className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-2xl focus:outline-none focus:border-primary transition-colors resize-none text-sm"
              />
              <p className="text-xs text-muted-foreground mt-2">
                {comment.length}/200자
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-secondary text-foreground border-2 border-border rounded-2xl transition-transform active:scale-95"
              >
                취소
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 py-3 bg-primary text-primary-foreground rounded-2xl transition-transform active:scale-95 shadow-lg"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
