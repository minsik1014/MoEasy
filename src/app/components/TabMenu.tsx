interface TabMenuProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabMenu({ tabs, activeTab, onTabChange }: TabMenuProps) {
  return (
    <div className="bg-card border-b border-border sticky top-16 z-30">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 px-4 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-3 whitespace-nowrap transition-all relative ${
                activeTab === tab
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
