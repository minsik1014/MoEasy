import { useState } from 'react';
import { ArrowLeft, CheckCheck } from 'lucide-react';
import { NotificationItem } from './NotificationItem';

interface NotificationCenterProps {
  onBack: () => void;
}

interface Notification {
  id: number;
  type: 'settlement' | 'notice' | 'dues' | 'schedule' | 'approval' | 'comment' | 'like' | 'general';
  title: string;
  message: string;
  timeAgo: string;
  isRead: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: 'settlement',
    title: '정산 요청',
    message: '해운대 횟집 모임 정산 요청이 도착했습니다. 15,000원을 확인해주세요.',
    timeAgo: '2시간 전',
    isRead: false,
  },
  {
    id: 2,
    type: 'notice',
    title: '공지사항 등록',
    message: '이번 주 모임 장소 변경 안내 - 뚝섬 한강공원에서 반포 한강공원으로 변경되었습니다.',
    timeAgo: '5시간 전',
    isRead: false,
  },
  {
    id: 3,
    type: 'dues',
    title: '회비 납부 요청',
    message: '5월 월 회비 15,000원 납부 기한이 3일 남았습니다.',
    timeAgo: '1일 전',
    isRead: false,
  },
  {
    id: 4,
    type: 'schedule',
    title: '일정 확정',
    message: '주간 러닝 모임 일정이 확정되었습니다. 4월 22일 오후 7시에 만나요!',
    timeAgo: '1일 전',
    isRead: true,
  },
  {
    id: 5,
    type: 'approval',
    title: '가입 신청 승인',
    message: '강남 러닝 크루 가입 신청이 승인되었습니다. 환영합니다!',
    timeAgo: '2일 전',
    isRead: true,
  },
  {
    id: 6,
    type: 'comment',
    title: '댓글 알림',
    message: '김철수님이 회원님의 게시글에 댓글을 남겼습니다.',
    timeAgo: '2일 전',
    isRead: true,
  },
  {
    id: 7,
    type: 'like',
    title: '좋아요',
    message: '이영희님 외 12명이 회원님의 게시글을 좋아합니다.',
    timeAgo: '3일 전',
    isRead: true,
  },
  {
    id: 8,
    type: 'schedule',
    title: '일정 리마인더',
    message: '내일 오후 7시 주간 러닝 모임이 있습니다. 잊지 마세요!',
    timeAgo: '3일 전',
    isRead: true,
  },
  {
    id: 9,
    type: 'notice',
    title: '공지사항',
    message: '4월 정기 총회 안내 - 4월 30일 오후 8시에 진행됩니다.',
    timeAgo: '5일 전',
    isRead: true,
  },
  {
    id: 10,
    type: 'settlement',
    title: '정산 완료',
    message: '스타벅스 모임 정산이 완료되었습니다. 7,500원이 차감되었습니다.',
    timeAgo: '1주 전',
    isRead: true,
  },
];

export function NotificationCenter({ onBack }: NotificationCenterProps) {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleRead = (id: number) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  return (
    <div className="size-full bg-background flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-card border-b border-border z-40">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2>알림</h2>
              {unreadCount > 0 && (
                <p className="text-xs text-primary">{unreadCount}개의 새 알림</p>
              )}
            </div>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <CheckCheck className="w-4 h-4" />
              <span>모두 읽음</span>
            </button>
          )}
        </div>
      </header>

      {/* Notifications List */}
      <main className="flex-1 overflow-y-auto pt-16">
        <div className="max-w-md mx-auto">
          {notifications.length > 0 ? (
            <div>
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  {...notification}
                  onRead={handleRead}
                />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center">
                <CheckCheck className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="mb-2">모든 알림을 확인했어요</h4>
              <p className="text-sm text-muted-foreground">
                새로운 알림이 오면 여기에 표시됩니다
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
