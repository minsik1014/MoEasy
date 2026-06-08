import {
  Receipt,
  Megaphone,
  CreditCard,
  Calendar,
  UserPlus,
  MessageCircle,
  Heart,
  CheckCircle,
  Bell
} from 'lucide-react';

interface NotificationItemProps {
  id: number;
  type: 'settlement' | 'notice' | 'dues' | 'schedule' | 'approval' | 'comment' | 'like' | 'general';
  title: string;
  message: string;
  timeAgo: string;
  isRead: boolean;
  onRead: (id: number) => void;
}

const iconMap = {
  settlement: Receipt,
  notice: Megaphone,
  dues: CreditCard,
  schedule: Calendar,
  approval: UserPlus,
  comment: MessageCircle,
  like: Heart,
  general: Bell,
};

const iconColorMap = {
  settlement: 'bg-green-100 text-green-600',
  notice: 'bg-blue-100 text-blue-600',
  dues: 'bg-amber-100 text-amber-600',
  schedule: 'bg-purple-100 text-purple-600',
  approval: 'bg-pink-100 text-pink-600',
  comment: 'bg-indigo-100 text-indigo-600',
  like: 'bg-red-100 text-red-600',
  general: 'bg-gray-100 text-gray-600',
};

export function NotificationItem({
  id,
  type,
  title,
  message,
  timeAgo,
  isRead,
  onRead,
}: NotificationItemProps) {
  const Icon = iconMap[type];
  const iconColor = iconColorMap[type];

  return (
    <button
      onClick={() => onRead(id)}
      className={`w-full px-4 py-4 flex items-start gap-3 transition-colors border-b border-border hover:bg-secondary/50 ${
        isRead ? 'bg-card' : 'bg-blue-50/30'
      }`}
    >
      {/* Icon */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="text-sm line-clamp-1">{title}</h4>
          {!isRead && (
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1" />
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-1">
          {message}
        </p>
        <p className="text-xs text-muted-foreground">{timeAgo}</p>
      </div>
    </button>
  );
}
