import React, { useState } from 'react';
import { X, Users, MapPin } from 'lucide-react';

interface JoinMeetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  meetupName: string;
  meetupRegion: string;
  members: number;
  onSubmit: (greeting: string) => void;
}

export function JoinMeetupModal({
  isOpen,
  onClose,
  meetupName,
  meetupRegion,
  members,
  onSubmit,
}: JoinMeetupModalProps) {
  const [greeting, setGreeting] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!greeting.trim()) {
      alert('가입 인사를 입력해주세요');
      return;
    }
    onSubmit(greeting);
    setGreeting('');
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="max-w-sm w-full bg-card rounded-3xl shadow-2xl p-6 animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg">모임 가입 신청</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Meetup Info */}
            <div className="bg-secondary border border-border rounded-2xl p-4">
              <h4 className="font-semibold mb-3">{meetupName}</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{meetupRegion}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>멤버 {members}명</span>
                </div>
              </div>
            </div>

            {/* Greeting Input */}
            <div>
              <label className="block text-sm mb-2">
                가입 인사 <span className="text-destructive">*</span>
              </label>
              <textarea
                value={greeting}
                onChange={(e) => setGreeting(e.target.value)}
                placeholder="모임에 가입하고 싶은 이유와 간단한 인사를 남겨주세요"
                rows={4}
                className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-2xl focus:outline-none focus:border-primary transition-colors resize-none text-sm"
              />
              <p className="text-xs text-muted-foreground mt-2">
                {greeting.length}/200자
              </p>
            </div>

            {/* Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
              <p className="text-xs text-blue-800 leading-relaxed">
                가입 신청 후 운영진의 승인을 기다려주세요
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-secondary text-foreground border-2 border-border rounded-2xl transition-transform active:scale-95"
              >
                취소
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 py-3 bg-primary text-primary-foreground rounded-2xl transition-transform active:scale-95 shadow-lg"
              >
                신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
