import { Megaphone, Pin } from 'lucide-react';

interface NoticeCardProps {
  title: string;
  content: string;
  date: string;
  isPinned?: boolean;
}

export function NoticeCard({ title, content, date, isPinned = true }: NoticeCardProps) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-4 shadow-sm">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0 text-white">
          <Megaphone className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {isPinned && (
              <Pin className="w-4 h-4 text-amber-600 fill-amber-600" />
            )}
            <h4 className="text-amber-900">{title}</h4>
          </div>
          <p className="text-sm text-amber-800/80 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-amber-700">
        <span>{date}</span>
        <span className="bg-amber-200 px-2 py-1 rounded-full">공지</span>
      </div>
    </div>
  );
}
