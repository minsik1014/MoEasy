import { Edit3, Star } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  bio: string;
  profileImage: string;
  mannerScore: number;
}

export function ProfileHeader({ name, bio, profileImage, mannerScore }: ProfileHeaderProps) {
  return (
    <div className="bg-card border-b border-border px-4 py-6">
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
            {profileImage}
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-card">
            <Edit3 className="w-3 h-3 text-primary-foreground" />
          </div>
        </div>

        <div className="flex-1">
          <h2 className="mb-1">{name}</h2>
          <p className="text-sm text-muted-foreground mb-3">{bio}</p>

          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 w-fit">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm">매너 온도</span>
            <span className="text-sm font-medium text-amber-700">{mannerScore}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
