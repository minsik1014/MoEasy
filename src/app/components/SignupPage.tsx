import { useState } from 'react';
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

interface SignupPageProps {
  onSignup: () => void;
  onBack: () => void;
}

export function SignupPage({ onSignup, onBack }: SignupPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (password.length < 6) {
      alert('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }

    alert(`회원가입 성공!\n이름: ${name}\n이메일: ${email}`);
    onSignup();
  };

  const handleKakaoSignup = () => {
    alert('카카오 계정으로 회원가입을 시작합니다.');
    onSignup();
  };

  const handleGoogleSignup = () => {
    alert('구글 계정으로 회원가입을 시작합니다.');
    onSignup();
  };

  return (
    <div className="size-full bg-background flex flex-col overflow-y-auto">
      {/* Header */}
      <header className="sticky top-0 bg-background border-b border-border z-40">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-secondary rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2>회원가입</h2>
        </div>
      </header>

      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">환영합니다!</h1>
          <p className="text-muted-foreground">
            MoEasy에 가입하고 다양한 모임을 즐겨보세요
          </p>
        </div>

        {/* Social Signup Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={handleKakaoSignup}
            className="w-full py-3.5 bg-[#FEE500] text-[#000000] rounded-2xl transition-transform active:scale-95 flex items-center justify-center gap-3 font-medium shadow-sm"
          >
            <div className="w-5 h-5 bg-[#000000] rounded-full flex items-center justify-center text-[#FEE500] text-xs font-bold">
              K
            </div>
            <span>카카오로 가입하기</span>
          </button>

          <button
            onClick={handleGoogleSignup}
            className="w-full py-3.5 bg-white text-foreground border-2 border-border rounded-2xl transition-transform active:scale-95 flex items-center justify-center gap-3 font-medium shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Google로 가입하기</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">또는</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-2">이름</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="홍길동"
                required
                className="w-full pl-12 pr-4 py-3 bg-input-background border-2 border-border rounded-2xl focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">이메일</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                required
                className="w-full pl-12 pr-4 py-3 bg-input-background border-2 border-border rounded-2xl focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">비밀번호</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="최소 6자 이상"
                required
                className="w-full pl-12 pr-12 py-3 bg-input-background border-2 border-border rounded-2xl focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">비밀번호 확인</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="비밀번호를 다시 입력하세요"
                required
                className="w-full pl-12 pr-12 py-3 bg-input-background border-2 border-border rounded-2xl focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="text-xs text-blue-800 leading-relaxed">
              가입 시 MoEasy의 이용약관 및 개인정보 처리방침에 동의하는 것으로 간주됩니다.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl transition-transform active:scale-95 shadow-lg font-medium mt-6"
          >
            가입하기
          </button>
        </form>
      </main>
    </div>
  );
}
