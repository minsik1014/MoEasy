import { Users, MapPin } from 'lucide-react';

interface ActiveMeetupCardProps {
  name: string;
  region: string;
  members: number;
  color: string;
}

export function ActiveMeetupCard({ name, region, members, color }: ActiveMeetupCardProps) {
  return (
    <div className={`${color} rounded-2xl p-4 min-w-[200px] shadow-sm`}>
      <h4 className="mb-2 line-clamp-1">{name}</h4>

      <div className="space-y-1.5 text-sm opacity-80">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs">{region}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" />
          <span className="text-xs">{members}명</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-black/10">
        <span className="text-xs">활동 중</span>
      </div>
    </div>
  );
}
