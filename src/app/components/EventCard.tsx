import { Calendar, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  maxParticipants: number;
  imageUrl?: string;
  category: string;
}

export function EventCard({ title, date, time, location, participants, maxParticipants, imageUrl, category }: EventCardProps) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border">
      {imageUrl && (
        <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/30 relative overflow-hidden">
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">
            {category}
          </div>
        </div>
      )}
      <div className="p-4">
        <h3 className="mb-3">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date} · {time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{participants}/{maxParticipants}명 참여중</span>
          </div>
        </div>
        <button className="mt-4 w-full bg-primary text-primary-foreground py-2.5 rounded-xl transition-transform active:scale-95">
          참여하기
        </button>
      </div>
    </div>
  );
}
