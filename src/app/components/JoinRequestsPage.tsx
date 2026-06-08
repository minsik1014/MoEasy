import { useState } from 'react';
import { ArrowLeft, UserPlus, Filter } from 'lucide-react';
import { JoinRequestCard } from './JoinRequestCard';

interface JoinRequestsPageProps {
  onBack: () => void;
  meetupName: string;
}

interface JoinRequest {
  id: number;
  name: string;
  avatar: string;
  greeting: string;
  requestedAt: string;
}

const initialRequests: JoinRequest[] = [
  {
    id: 1,
    name: '김민준',
    avatar: '👨',
    greeting: '안녕하세요! 러닝에 관심이 많아서 가입 신청합니다. 초보지만 열심히 배우고 싶어요. 함께 달릴 수 있기를 기대합니다!',
    requestedAt: '5분 전',
  },
  {
    id: 2,
    name: '이서연',
    avatar: '👩',
    greeting: '반갑습니다. 매일 아침 혼자 달리다가 함께 뛸 사람들을 찾고 있었어요. 잘 부탁드립니다!',
    requestedAt: '10분 전',
  },
  {
    id: 3,
    name: '박준혁',
    avatar: '🧑',
    greeting: '안녕하세요! 마라톤 준비 중인데 좋은 크루를 찾고 있었습니다. 함께 뛰면서 실력도 향상시키고 싶어요.',
    requestedAt: '1시간 전',
  },
  {
    id: 4,
    name: '최지우',
    avatar: '👩',
    greeting: '러닝을 시작한 지 6개월 정도 됐어요. 건강한 러닝 문화를 함께 만들어가고 싶습니다!',
    requestedAt: '2시간 전',
  },
  {
    id: 5,
    name: '정태양',
    avatar: '👨',
    greeting: '안녕하세요. 회사 동료 추천으로 알게 되었습니다. 주말에 같이 달릴 수 있으면 좋겠어요.',
    requestedAt: '3시간 전',
  },
  {
    id: 6,
    name: '한예진',
    avatar: '👩',
    greeting: '처음 뵙겠습니다! 건강을 위해 러닝을 시작했는데 혼자 하니까 작심삼일이더라구요. 함께 하고 싶어요!',
    requestedAt: '5시간 전',
  },
];

export function JoinRequestsPage({ onBack, meetupName }: JoinRequestsPageProps) {
  const [requests, setRequests] = useState<JoinRequest[]>(initialRequests);

  const handleApprove = (id: number) => {
    const request = requests.find(r => r.id === id);
    if (request) {
      alert(`${request.name}님의 가입을 승인했습니다.`);
      setRequests(requests.filter(r => r.id !== id));
    }
  };

  const handleReject = (id: number) => {
    const request = requests.find(r => r.id === id);
    if (request) {
      if (confirm(`${request.name}님의 가입을 거절하시겠습니까?`)) {
        alert(`${request.name}님의 가입을 거절했습니다.`);
        setRequests(requests.filter(r => r.id !== id));
      }
    }
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
              <h2>가입 승인</h2>
              <p className="text-xs text-muted-foreground">{meetupName}</p>
            </div>
          </div>
          <button className="p-2 hover:bg-secondary rounded-xl transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-16 pb-6">
        <div className="max-w-md mx-auto px-4">
          {/* Stats */}
          <div className="bg-secondary border border-border rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <UserPlus className="w-5 h-5 text-foreground" />
              <h3>대기 중인 가입 신청</h3>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-foreground">{requests.length}</span>
              <span className="text-sm text-muted-foreground">명</span>
            </div>
          </div>

          {/* Requests List */}
          {requests.length > 0 ? (
            <div className="space-y-3">
              {requests.map((request) => (
                <JoinRequestCard
                  key={request.id}
                  {...request}
                  onApprove={handleApprove}
                  onReject={handleReject}
                />
              ))}
            </div>
          ) : (
            <div className="bg-card border-2 border-border rounded-2xl p-8 text-center">
              <UserPlus className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <h4 className="mb-2">대기 중인 신청이 없습니다</h4>
              <p className="text-sm text-muted-foreground">
                새로운 가입 신청이 들어오면 여기에 표시됩니다
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
