import { Calendar, MessageCircle, Star, Award, CheckCircle2 } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'attendance' | 'review' | 'rating' | 'achievement';
  title: string;
  description?: string;
  date: string;
  rating?: number;
  badge?: string;
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    type: 'rating',
    title: '매너 온도 상승',
    description: '모임 참석률이 높아 매너 온도가 올랐어요!',
    date: '오늘',
    rating: 4.5,
  },
  {
    id: 2,
    type: 'attendance',
    title: '주간 러닝 모임 참석',
    description: '반포 한강공원',
    date: '1일 전',
  },
  {
    id: 3,
    type: 'review',
    title: '모임 후기 작성',
    description: '날씨도 좋고 함께 달리니 너무 즐거웠어요! 다음에도 참석할게요.',
    date: '2일 전',
  },
  {
    id: 4,
    type: 'achievement',
    title: '성실한 멤버 뱃지 획득',
    description: '10회 연속 참석 달성',
    date: '3일 전',
    badge: '🏅',
  },
  {
    id: 5,
    type: 'attendance',
    title: '주말 장거리 러닝 참석',
    description: '올림픽공원',
    date: '5일 전',
  },
  {
    id: 6,
    type: 'review',
    title: '모임 후기 작성',
    description: '오랜만에 장거리 러닝이었는데 완주했어요! 뿌듯합니다.',
    date: '5일 전',
  },
  {
    id: 7,
    type: 'attendance',
    title: '주간 러닝 모임 참석',
    description: '뚝섬 한강공원',
    date: '1주일 전',
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'attendance':
      return <CheckCircle2 className="w-5 h-5" />;
    case 'review':
      return <MessageCircle className="w-5 h-5" />;
    case 'rating':
      return <Star className="w-5 h-5" />;
    case 'achievement':
      return <Award className="w-5 h-5" />;
    default:
      return <Calendar className="w-5 h-5" />;
  }
};

const getColor = (type: string) => {
  switch (type) {
    case 'attendance':
      return 'bg-green-500';
    case 'review':
      return 'bg-blue-500';
    case 'rating':
      return 'bg-amber-500';
    case 'achievement':
      return 'bg-purple-500';
    default:
      return 'bg-gray-500';
  }
};

export function ActivityTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

      <div className="space-y-6">
        {timelineItems.map((item, index) => (
          <div key={item.id} className="relative flex gap-4">
            <div className={`w-12 h-12 rounded-full ${getColor(item.type)} flex items-center justify-center text-white flex-shrink-0 z-10 border-4 border-background`}>
              {getIcon(item.type)}
            </div>

            <div className="flex-1 pt-1">
              <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <h4>{item.title}</h4>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>

                {item.description && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.description}
                  </p>
                )}

                {item.rating && (
                  <div className="flex items-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating!)
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm ml-1">{item.rating}</span>
                  </div>
                )}

                {item.badge && (
                  <div className="mt-2 inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 px-3 py-1.5 rounded-full text-xs">
                    <span className="text-base">{item.badge}</span>
                    <span>새 뱃지</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
