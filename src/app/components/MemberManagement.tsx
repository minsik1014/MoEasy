import { useState } from 'react';
import { Download, Search, Filter, UserPlus } from 'lucide-react';
import { MemberRow } from './MemberRow';

interface Member {
  id: number;
  name: string;
  avatar: string;
  cohort: string;
  role: '일반' | '총무' | '운영진';
}

const initialMembers: Member[] = [
  { id: 1, name: '김철수', avatar: '👨', cohort: '26학번', role: '운영진' },
  { id: 2, name: '이영희', avatar: '👩', cohort: '27학번', role: '총무' },
  { id: 3, name: '박민수', avatar: '🧑', cohort: '26학번', role: '일반' },
  { id: 4, name: '정지원', avatar: '👨', cohort: '28학번', role: '일반' },
  { id: 5, name: '최수진', avatar: '👩', cohort: '27학번', role: '일반' },
  { id: 6, name: '강동욱', avatar: '🧑', cohort: '26학번', role: '총무' },
  { id: 7, name: '윤서연', avatar: '👩', cohort: '28학번', role: '일반' },
  { id: 8, name: '조현우', avatar: '👨', cohort: '27학번', role: '일반' },
  { id: 9, name: '한지민', avatar: '👩', cohort: '26학번', role: '운영진' },
  { id: 10, name: '서준호', avatar: '🧑', cohort: '28학번', role: '일반' },
];

export function MemberManagement() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<'전체' | '일반' | '총무' | '운영진'>('전체');

  const handleRoleChange = (id: number, newRole: '일반' | '총무' | '운영진') => {
    setMembers(members.map(m => m.id === id ? { ...m, role: newRole } : m));
  };

  const handleRemove = (id: number) => {
    if (confirm('정말 이 멤버를 강퇴하시겠습니까?')) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const handleEdit = (id: number) => {
    alert(`멤버 ID ${id} 정보 수정`);
  };

  const handleExport = () => {
    alert('엑셀 파일로 다운로드합니다');
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.cohort.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === '전체' || member.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const roleCount = {
    운영진: members.filter(m => m.role === '운영진').length,
    총무: members.filter(m => m.role === '총무').length,
    일반: members.filter(m => m.role === '일반').length,
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <h2>멤버 관리</h2>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">엑셀 다운로드</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="이름 또는 기수 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all text-sm"
            />
          </div>
          <button className="p-2.5 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors">
            <Filter className="w-5 h-5 text-foreground" />
          </button>
          <button className="p-2.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
            <UserPlus className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-secondary/30 px-4 py-3 border-b border-border">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {(['전체', '운영진', '총무', '일반'] as const).map((role) => (
            <button
              key={role}
              onClick={() => setFilterRole(role)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-all ${
                filterRole === role
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-card text-foreground hover:bg-card/80 border border-border'
              }`}
            >
              {role}
              {role !== '전체' && (
                <span className="ml-1.5 opacity-70">
                  ({roleCount[role]})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-2 pb-20">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>검색 결과가 없습니다</p>
            </div>
          ) : (
            filteredMembers.map((member) => (
              <MemberRow
                key={member.id}
                {...member}
                onRoleChange={handleRoleChange}
                onRemove={handleRemove}
                onEdit={handleEdit}
              />
            ))
          )}
        </div>
      </div>

      <div className="bg-card border-t border-border px-4 py-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            총 {filteredMembers.length}명의 멤버
          </span>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <span>운영진 {roleCount.운영진}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>총무 {roleCount.총무}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              <span>일반 {roleCount.일반}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
