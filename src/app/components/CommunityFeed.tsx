import { Pin, PenSquare } from 'lucide-react';
import { FeedPost } from './FeedPost';

const pinnedNotice = {
  title: '이번 주 모임 장소 변경 안내',
  content: '안녕하세요! 이번 주 목요일 모임은 기존 뚝섬 한강공원에서 반포 한강공원으로 변경되었습니다. 참고 부탁드립니다!',
  date: '2일 전',
};

const feedPosts = [
  {
    id: 1,
    author: '김철수',
    authorAvatar: '👨',
    timeAgo: '10분 전',
    content: '오늘 아침 러닝 너무 좋았어요! 날씨도 딱 좋고 함께 뛰니까 더 즐겁네요 🏃‍♂️',
    images: ['img1.jpg'],
    likes: 24,
    comments: 5,
    isLiked: false,
  },
  {
    id: 2,
    author: '이영희',
    authorAvatar: '👩',
    timeAgo: '1시간 전',
    content: '주말 장거리 러닝 참여하실 분들!\n올림픽공원에서 만나요~ 저는 7시까지 도착할 예정입니다 💪',
    likes: 18,
    comments: 12,
    isLiked: true,
  },
  {
    id: 3,
    author: '박민수',
    authorAvatar: '🧑',
    timeAgo: '3시간 전',
    content: '어제 개인 베스트 기록 갱신했습니다! 5km를 23분대로! 크루 여러분 덕분에 실력이 늘고 있어요 감사합니다 🎉',
    images: ['img1.jpg', 'img2.jpg'],
    likes: 45,
    comments: 18,
    isLiked: true,
  },
  {
    id: 4,
    author: '정지원',
    authorAvatar: '👨',
    timeAgo: '5시간 전',
    content: '러닝화 추천 좀 부탁드려요! 초보자인데 어떤 걸 사야할지 모르겠네요 😅',
    likes: 12,
    comments: 23,
    isLiked: false,
  },
  {
    id: 5,
    author: '최수진',
    authorAvatar: '👩',
    timeAgo: '8시간 전',
    content: '아침 6시 러닝 정말 추천합니다. 공기도 맑고 사람도 적어서 너무 좋아요!',
    images: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'],
    likes: 31,
    comments: 9,
    isLiked: false,
  },
  {
    id: 6,
    author: '강동욱',
    authorAvatar: '🧑',
    timeAgo: '12시간 전',
    content: '다음주 정기 모임 때 뵙겠습니다! 날씨 좋다고 하니 기대되네요 ☀️',
    likes: 15,
    comments: 4,
    isLiked: false,
  },
];

export function CommunityFeed() {
  return (
    <div className="space-y-4">
      {/* Pinned Notice */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
            <Pin className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-amber-900">필독 공지사항</h4>
              <span className="text-xs text-amber-700">{pinnedNotice.date}</span>
            </div>
            <h5 className="text-sm text-amber-900 mb-1">{pinnedNotice.title}</h5>
            <p className="text-sm text-amber-800 leading-relaxed">
              {pinnedNotice.content}
            </p>
          </div>
        </div>
      </div>

      {/* Feed Posts */}
      {feedPosts.map((post) => (
        <FeedPost key={post.id} {...post} />
      ))}
    </div>
  );
}
