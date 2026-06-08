import { Home, Search, Calendar, Users, Settings, Plus, LogOut } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'home', icon: Home, label: '홈' },
    { id: 'search', icon: Search, label: '모임 찾기' },
    { id: 'create', icon: Plus, label: '모임 개설' },
    { id: 'schedule', icon: Calendar, label: '내 일정' },
    { id: 'mygroups', icon: Users, label: '내 모임' },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-foreground border-2 border-foreground px-3 py-1 rounded inline-block">MoEasy</h1>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-border">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors">
          <Settings className="w-5 h-5" />
          <span>설정</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-secondary transition-colors mt-1">
          <LogOut className="w-5 h-5" />
          <span>로그아웃</span>
        </button>
      </div>
    </aside>
  );
}
