import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="지역, 모임 이름으로 검색..."
        className="w-full pl-12 pr-4 py-3 bg-input-background rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
      />
    </div>
  );
}
