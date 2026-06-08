import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star } from 'lucide-react';
import { ReviewModal } from './ReviewModal';

interface UpcomingEventItemProps {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  maxAttendees: number;
  defaultAttendance?: boolean;
  isPastEvent?: boolean;
}

export function UpcomingEventItem({
  title,
  date,
  time,
  location,
  attendees,
  maxAttendees,
  defaultAttendance = false,
  isPastEvent = false
}: UpcomingEventItemProps) {
  const [isAttending, setIsAttending] = useState(defaultAttendance);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleReviewSubmit = (rating: number, comment: string) => {
    alert(`후기가 등록되었습니다!\n별점: ${rating}점\n내용: ${comment || '(내용 없음)'}`);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className="flex-1">{title}</h4>
        <button
          onClick={() => setIsAttending(!isAttending)}
          className={`px-4 py-1.5 rounded-lg text-sm transition-all flex-shrink-0 ${
            isAttending
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-secondary text-secondary-foreground border border-border'
          }`}
        >
          {isAttending ? '참석' : '불참'}
        </button>
      </div>

      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 flex-shrink-0" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 flex-shrink-0" />
          <span>{attendees}/{maxAttendees}명 참석</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-full transition-all"
              style={{ width: `${(attendees / maxAttendees) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs text-muted-foreground">
            {Math.round((attendees / maxAttendees) * 100)}%
          </span>
        </div>
      </div>

      {isPastEvent && (
        <div className="mt-3">
          <button
            onClick={() => setShowReviewModal(true)}
            className="w-full py-2.5 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm"
          >
            <Star className="w-4 h-4" />
            <span>후기 작성하기</span>
          </button>
        </div>
      )}

      <ReviewModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        eventTitle={title}
        onSubmit={handleReviewSubmit}
      />
    </div>
  );
}
