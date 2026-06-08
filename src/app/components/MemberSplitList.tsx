import { useState } from 'react';
import { Users } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  avatar: string;
}

interface MemberSplitListProps {
  members: Member[];
  totalAmount: number;
}

export function MemberSplitList({ members, totalAmount }: MemberSplitListProps) {
  const [selectedMembers, setSelectedMembers] = useState<number[]>(
    members.map(m => m.id)
  );

  const toggleMember = (id: number) => {
    if (selectedMembers.includes(id)) {
      setSelectedMembers(selectedMembers.filter(mid => mid !== id));
    } else {
      setSelectedMembers([...selectedMembers, id]);
    }
  };

  const amountPerPerson = selectedMembers.length > 0
    ? Math.floor(totalAmount / selectedMembers.length)
    : 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4>정산 대상 선택</h4>
        <div className="text-sm text-muted-foreground">
          {selectedMembers.length}명 선택
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <span className="text-sm">1인당 금액</span>
        </div>
        <div className="text-primary">
          {amountPerPerson.toLocaleString()}원
        </div>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto">
        {members.map((member) => {
          const isSelected = selectedMembers.includes(member.id);
          return (
            <label
              key={member.id}
              className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-primary/5 border-primary/30'
                  : 'bg-card border-border hover:border-primary/20'
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleMember(member.id)}
                className="w-5 h-5 rounded border-2 border-border checked:bg-primary checked:border-primary cursor-pointer accent-primary"
              />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center flex-shrink-0">
                {member.avatar}
              </div>
              <div className="flex-1">
                <div className="text-sm">{member.name}</div>
                {isSelected && (
                  <div className="text-xs text-muted-foreground">
                    {amountPerPerson.toLocaleString()}원
                  </div>
                )}
              </div>
              {isSelected && (
                <div className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  포함
                </div>
              )}
            </label>
          );
        })}
      </div>
    </div>
  );
}
