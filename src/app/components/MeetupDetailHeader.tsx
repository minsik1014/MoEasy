import { Users, Award, MapPin } from 'lucide-react';

interface MeetupDetailHeaderProps {
  name: string;
  region: string;
  members: number;
  tier: 'gold' | 'silver' | 'bronze';
  coverImage?: string;
}

const tierConfig = {
  gold: {
    color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    icon: '🏆',
    label: 'Gold Tier',
  },
  silver: {
    color: 'bg-gradient-to-br from-gray-300 to-gray-500',
    icon: '🥈',
    label: 'Silver Tier',
  },
  bronze: {
    color: 'bg-gradient-to-br from-orange-400 to-orange-600',
    icon: '🥉',
    label: 'Bronze Tier',
  }
};

export function MeetupDetailHeader({ name, region, members, tier, coverImage }: MeetupDetailHeaderProps) {
  const tierInfo = tierConfig[tier];

  return (
    <div className="relative">
      <div className="h-48 bg-gradient-to-br from-primary via-blue-500 to-accent relative overflow-hidden">
        {coverImage && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-blue-500/50 to-accent/60"></div>
        )}
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-border">
        <div className={`w-8 h-8 rounded-full ${tierInfo.color} flex items-center justify-center text-sm`}>
          {tierInfo.icon}
        </div>
        <span className="text-sm pr-1">{tierInfo.label}</span>
      </div>

      <div className="bg-card rounded-t-3xl -mt-6 relative z-10 pt-6 px-4 pb-4">
        <h1 className="mb-3">{name}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>{region}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{members}명의 멤버</span>
          </div>
        </div>
      </div>
    </div>
  );
}
