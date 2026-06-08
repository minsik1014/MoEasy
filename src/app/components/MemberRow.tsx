import { useState } from 'react';
import { MoreVertical, UserX, Edit } from 'lucide-react';

interface MemberRowProps {
  id: number;
  name: string;
  avatar: string;
  cohort: string;
  role: '일반' | '총무' | '운영진';
  onRoleChange: (id: number, role: '일반' | '총무' | '운영진') => void;
  onRemove: (id: number) => void;
  onEdit: (id: number) => void;
}

export function MemberRow({ id, name, avatar, cohort, role, onRoleChange, onRemove, onEdit }: MemberRowProps) {
  const [showMenu, setShowMenu] = useState(false);

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case '운영진':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case '총무':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-3 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center flex-shrink-0 text-xl">
          {avatar}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="truncate">{name}</h4>
          <p className="text-sm text-muted-foreground">{cohort}</p>
        </div>

        <select
          value={role}
          onChange={(e) => onRoleChange(id, e.target.value as '일반' | '총무' | '운영진')}
          className={`px-3 py-1.5 rounded-lg text-xs border cursor-pointer transition-colors ${getRoleBadgeColor(role)}`}
        >
          <option value="일반">일반</option>
          <option value="총무">총무</option>
          <option value="운영진">운영진</option>
        </select>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <MoreVertical className="w-4 h-4 text-muted-foreground" />
          </button>

          {showMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowMenu(false)}
              ></div>
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 min-w-[140px]">
                <button
                  onClick={() => {
                    onEdit(id);
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-2.5 text-left hover:bg-secondary transition-colors flex items-center gap-2 text-sm"
                >
                  <Edit className="w-4 h-4" />
                  정보 수정
                </button>
                <button
                  onClick={() => {
                    onRemove(id);
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-2.5 text-left hover:bg-destructive/10 transition-colors flex items-center gap-2 text-sm text-destructive border-t border-border"
                >
                  <UserX className="w-4 h-4" />
                  강퇴
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
