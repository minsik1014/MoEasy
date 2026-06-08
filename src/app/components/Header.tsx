import { Bell, MessageCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNotificationClick?: () => void;
  onDMClick?: () => void;
}

export function Header({ onNotificationClick, onDMClick }: HeaderProps) {
  const [currentLocation, setCurrentLocation] = useState('강남구');

  return (
    <header className="fixed top-0 left-0 right-0 bg-card border-b border-border z-40">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        {/* Location */}
        <button
          onClick={() => alert('위치 변경')}
          className="flex items-center gap-1 hover:bg-secondary px-2 py-1.5 rounded-lg transition-colors"
        >
          <h2 className="font-semibold">{currentLocation}</h2>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onDMClick}
            className="p-2 hover:bg-secondary rounded-xl transition-colors relative"
          >
            <MessageCircle className="w-5 h-5 text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
          <button
            onClick={onNotificationClick}
            className="p-2 hover:bg-secondary rounded-xl transition-colors relative"
          >
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
