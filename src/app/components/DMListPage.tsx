import { ArrowLeft, MessageCircle, Search } from 'lucide-react';

interface DMListPageProps {
  onBack: () => void;
  onChatClick: (chatId: number) => void;
}

interface ChatRoom {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isGroup: boolean;
}

const chatRooms: ChatRoom[] = [
  {
    id: 1,
    name: '강남 러닝 크루',
    avatar: '🏃',
    lastMessage: '오늘 모임 장소가 변경되었습니다',
    lastMessageTime: '10분 전',
    unreadCount: 3,
    isGroup: true,
  },
  {
    id: 2,
    name: '판교 개발자 스터디',
    avatar: '💻',
    lastMessage: '다음주 스터디 자료 공유드립니다',
    lastMessageTime: '1시간 전',
    unreadCount: 0,
    isGroup: true,
  },
  {
    id: 3,
    name: '북한산 등산 클럽',
    avatar: '⛰️',
    lastMessage: '다들 무사히 하산하셨나요?',
    lastMessageTime: '3시간 전',
    unreadCount: 1,
    isGroup: true,
  },
  {
    id: 4,
    name: '홍대 독서 모임',
    avatar: '📚',
    lastMessage: '이번 달 책 추천 받습니다',
    lastMessageTime: '5시간 전',
    unreadCount: 0,
    isGroup: true,
  },
  {
    id: 5,
    name: '이태원 맛집 탐방',
    avatar: '🍽️',
    lastMessage: '다음주 토요일 어떠세요?',
    lastMessageTime: '1일 전',
    unreadCount: 0,
    isGroup: true,
  },
  {
    id: 6,
    name: '여의도 사진 동호회',
    avatar: '📷',
    lastMessage: '주말 출사 일정 확정되었습니다!',
    lastMessageTime: '2일 전',
    unreadCount: 5,
    isGroup: true,
  },
  {
    id: 7,
    name: '성수동 보드게임 모임',
    avatar: '🎲',
    lastMessage: '금요일 뵙겠습니다~',
    lastMessageTime: '3일 전',
    unreadCount: 0,
    isGroup: true,
  },
];

export function DMListPage({ onBack, onChatClick }: DMListPageProps) {
  return (
    <div className="size-full bg-background flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-card border-b border-border z-40">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2>메시지</h2>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="채팅방 검색"
              className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>
        </div>
      </header>

      {/* Chat Rooms List */}
      <main className="flex-1 overflow-y-auto pt-32">
        <div className="max-w-md mx-auto">
          {chatRooms.length > 0 ? (
            <div>
              {chatRooms.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => onChatClick(chat.id)}
                  className="w-full px-4 py-4 flex items-center gap-3 hover:bg-secondary transition-colors border-b border-border"
                >
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-secondary border-2 border-border flex items-center justify-center text-2xl">
                      {chat.avatar}
                    </div>
                    {chat.unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                        {chat.unreadCount > 9 ? '9+' : chat.unreadCount}
                      </div>
                    )}
                  </div>

                  {/* Chat Info */}
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium truncate">
                        {chat.name}
                      </h4>
                      <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                        {chat.lastMessageTime}
                      </span>
                    </div>
                    <p
                      className={`text-sm truncate ${
                        chat.unreadCount > 0
                          ? 'text-foreground font-medium'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {chat.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="mb-2">메시지가 없습니다</h4>
              <p className="text-sm text-muted-foreground">
                모임에 가입하면 채팅방이 여기에 표시됩니다
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
