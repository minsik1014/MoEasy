import { Users, TrendingUp } from 'lucide-react';

interface CommunityCardProps {
  name: string;
  description: string;
  members: number;
  isActive?: boolean;
  category: string;
}

export function CommunityCard({ name, description, members, isActive, category }: CommunityCardProps) {
  return (
    <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
      <div className="flex items-start justify-between mb-3">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
          <Users className="w-7 h-7" />
        </div>
        {isActive && (
          <div className="flex items-center gap-1 text-xs text-primary bg-accent px-2 py-1 rounded-full">
            <TrendingUp className="w-3 h-3" />
            <span>활발</span>
          </div>
        )}
      </div>
      <div className="mb-2">
        <div className="text-xs text-muted-foreground mb-1">{category}</div>
        <h4>{name}</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{members.toLocaleString()}명</span>
        </div>
        <button className="text-sm text-primary bg-accent px-4 py-1.5 rounded-lg transition-transform active:scale-95">
          가입하기
        </button>
      </div>
    </div>
  );
}
