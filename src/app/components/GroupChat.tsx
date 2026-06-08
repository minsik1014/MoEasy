import { ChatMessage } from './ChatMessage';
import { LocationShareCard } from './LocationShareCard';
import { PollCard } from './PollCard';
import { ChatInput } from './ChatInput';

const chatMessages = [
  {
    id: 1,
    type: 'message' as const,
    sender: '김철수',
    message: '이번 주 모임 장소 어디로 할까요?',
    time: '오후 2:30',
    isMe: false,
    avatar: '👨'
  },
  {
    id: 2,
    type: 'message' as const,
    sender: '나',
    message: '저번에 갔던 곳 괜찮았는데요!',
    time: '오후 2:31',
    isMe: true,
  },
  {
    id: 3,
    type: 'location' as const,
    sender: '이영희',
    placeName: '강남역 러닝 스타트 지점',
    address: '서울특별시 강남구 강남대로 396',
    time: '오후 2:35',
  },
  {
    id: 4,
    type: 'message' as const,
    sender: '박민수',
    message: '좋아요! 러닝 끝나고 회식도 하면 어떨까요?',
    time: '오후 2:40',
    isMe: false,
    avatar: '🧑'
  },
  {
    id: 5,
    type: 'poll' as const,
    sender: '정지원',
    title: '회식 메뉴 투표!',
    options: [
      { id: 1, text: '고기 🥩', votes: 5 },
      { id: 2, text: '횟집 🐟', votes: 3 },
      { id: 3, text: '중식 🍜', votes: 2 },
      { id: 4, text: '이탈리안 🍝', votes: 4 },
    ],
    time: '오후 2:45',
    totalVoters: 14,
  },
  {
    id: 6,
    type: 'message' as const,
    sender: '나',
    message: '고기 한 표 추가요!',
    time: '오후 2:46',
    isMe: true,
  },
  {
    id: 7,
    type: 'message' as const,
    sender: '최수진',
    message: '시간은 몇 시로 할까요?',
    time: '오후 2:50',
    isMe: false,
    avatar: '👩'
  },
];

export function GroupChat() {
  return (
    <div className="h-full flex flex-col bg-background">
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-32">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <div className="inline-block bg-secondary px-4 py-1.5 rounded-full text-xs text-muted-foreground">
              2026년 4월 19일 토요일
            </div>
          </div>

          {chatMessages.map((msg) => {
            if (msg.type === 'message') {
              return (
                <ChatMessage
                  key={msg.id}
                  sender={msg.sender}
                  message={msg.message}
                  time={msg.time}
                  isMe={msg.isMe}
                  avatar={msg.avatar}
                />
              );
            }

            if (msg.type === 'location') {
              return (
                <LocationShareCard
                  key={msg.id}
                  sender={msg.sender}
                  placeName={msg.placeName}
                  address={msg.address}
                  time={msg.time}
                />
              );
            }

            if (msg.type === 'poll') {
              return (
                <PollCard
                  key={msg.id}
                  sender={msg.sender}
                  title={msg.title}
                  options={msg.options}
                  time={msg.time}
                  totalVoters={msg.totalVoters}
                />
              );
            }

            return null;
          })}
        </div>
      </div>

      <ChatInput />
    </div>
  );
}
