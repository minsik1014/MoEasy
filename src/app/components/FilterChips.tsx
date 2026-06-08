import { MapPin, Heart, TrendingUp, ChevronDown } from 'lucide-react';

interface FilterChipsProps {
  selectedRegion: string;
  selectedInterest: string;
  selectedTier: string;
  onRegionChange: (region: string) => void;
  onInterestChange: (interest: string) => void;
  onTierChange: (tier: string) => void;
}

export function FilterChips({
  selectedRegion,
  selectedInterest,
  selectedTier,
  onRegionChange,
  onInterestChange,
  onTierChange
}: FilterChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onRegionChange(selectedRegion === '전체' ? '서울' : '전체')}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
          selectedRegion !== '전체'
            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
            : 'bg-secondary text-secondary-foreground border-border hover:bg-secondary/80'
        }`}
      >
        <MapPin className="w-4 h-4" />
        <span>{selectedRegion}</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      <button
        onClick={() => onInterestChange(selectedInterest === '전체' ? '운동' : '전체')}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
          selectedInterest !== '전체'
            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
            : 'bg-secondary text-secondary-foreground border-border hover:bg-secondary/80'
        }`}
      >
        <Heart className="w-4 h-4" />
        <span>{selectedInterest}</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      <button
        onClick={() => onTierChange(selectedTier === '전체' ? 'Gold' : '전체')}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
          selectedTier !== '전체'
            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
            : 'bg-secondary text-secondary-foreground border-border hover:bg-secondary/80'
        }`}
      >
        <TrendingUp className="w-4 h-4" />
        <span>{selectedTier}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
    </div>
  );
}
