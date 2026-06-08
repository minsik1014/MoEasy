import { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface PollOption {
  id: number;
  text: string;
  votes: number;
}

interface PollCardProps {
  sender: string;
  title: string;
  options: PollOption[];
  time: string;
  totalVoters: number;
}

export function PollCard({ sender, title, options, time, totalVoters }: PollCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleVote = (optionId: number) => {
    setSelectedOption(optionId);
  };

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  return (
    <div className="flex gap-2 mb-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center flex-shrink-0 text-lg">
        👤
      </div>

      <div className="flex flex-col items-start max-w-[85%]">
        <span className="text-xs text-muted-foreground mb-1 px-1">{sender}</span>

        <div className="bg-card border border-border rounded-2xl rounded-tl-sm overflow-hidden w-full">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-b border-amber-200 px-4 py-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">📊</span>
              <h4 className="text-amber-900">{title}</h4>
            </div>
            <p className="text-xs text-amber-700">{totalVoters}명 참여 중</p>
          </div>

          <div className="p-4 space-y-3">
            {options.map((option) => {
              const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;
              const isSelected = selectedOption === option.id;

              return (
                <button
                  key={option.id}
                  onClick={() => handleVote(option.id)}
                  className={`w-full text-left transition-all ${
                    isSelected ? 'scale-[0.98]' : 'hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <CheckCircle2 className="w-5 h-5 text-primary fill-primary" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground" />
                      )}
                      <span className={`text-sm ${isSelected ? 'font-medium text-primary' : ''}`}>
                        {option.text}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {option.votes}표 ({percentage}%)
                    </span>
                  </div>

                  <div className="flex-1 bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        isSelected ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="px-4 pb-4">
            <button
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm transition-transform active:scale-95"
              disabled={selectedOption === null}
            >
              {selectedOption !== null ? '투표 완료' : '선택 후 투표하기'}
            </button>
          </div>
        </div>

        <span className="text-xs text-muted-foreground mt-1 px-1">{time}</span>
      </div>
    </div>
  );
}
