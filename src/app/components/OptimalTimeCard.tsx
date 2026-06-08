import { Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';

interface OptimalTimeCardProps {
  day: string;
  date: string;
  time: string;
  participants: number;
  totalMembers: number;
}

export function OptimalTimeCard({ day, date, time, participants, totalMembers }: OptimalTimeCardProps) {
  const percentage = Math.round((participants / totalMembers) * 100);

  return (
    <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-5 text-white shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        <CheckCircle2 className="w-5 h-5" />
        <h3 className="text-white">최적의 모임 시간</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm opacity-90">날짜</div>
            <div className="font-medium">{day}, {date}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm opacity-90">시간</div>
            <div className="font-medium">{time}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm opacity-90">참여 가능</div>
            <div className="font-medium">{participants}명 / {totalMembers}명 ({percentage}%)</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex items-center justify-between text-sm">
          <span className="opacity-90">모두가 가능한 최적의 시간입니다</span>
          <span className="bg-white/20 px-2 py-1 rounded-full text-xs backdrop-blur-sm">
            추천
          </span>
        </div>
      </div>
    </div>
  );
}
