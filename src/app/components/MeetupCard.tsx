import { MapPin, Users, Award } from 'lucide-react';

interface MeetupCardProps {
  name: string;
  region: string;
  description: string;
  members: number;
  tier: 'gold' | 'silver' | 'bronze';
  category: string;
  imageUrl?: string;
  onScheduleClick?: () => void;
}

const tierConfig = {
  gold: {
    color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    icon: '🏆',
    label: 'Gold',
    textColor: 'text-yellow-600'
  },
  silver: {
    color: 'bg-gradient-to-br from-gray-300 to-gray-500',
    icon: '🥈',
    label: 'Silver',
    textColor: 'text-gray-600'
  },
  bronze: {
    color: 'bg-gradient-to-br from-orange-400 to-orange-600',
    icon: '🥉',
    label: 'Bronze',
    textColor: 'text-orange-600'
  }
};

export function MeetupCard({ name, region, description, members, tier, category, imageUrl, onScheduleClick }: MeetupCardProps) {
  const tierInfo = tierConfig[tier];

  return (
    <div
      className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer"
      onClick={onScheduleClick}
    >
      <div className="relative">
        <div className="h-36 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 relative overflow-hidden">
          {imageUrl && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/40"></div>
          )}
        </div>

        <div className={`absolute top-3 right-3 ${tierInfo.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white`}>
          <span className="text-xl">{tierInfo.icon}</span>
        </div>

        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">
          {category}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="flex-1 line-clamp-1">{name}</h3>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>{region}</span>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{members}명</span>
          </div>
          <div className={`flex items-center gap-1 text-xs ${tierInfo.textColor}`}>
            <Award className="w-4 h-4" />
            <span>{tierInfo.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
