import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onSignupClick: () => void;
}

export function LoginPage({ onLogin, onSignupClick }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLocalLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      alert(`로그인 성공!\n이메일: ${email}`);
      onLogin();
    }
  };

  const handleKakaoLogin = () => {
    alert('카카오 로그인을 시작합니다.');
    onLogin();
  };

  const handleGoogleLogin = () => {
    alert('구글 로그인을 시작합니다.');
    onLogin();
  };

  return (
    <div className="size-full bg-background flex flex-col">
      <main className="flex-1 flex flex-col justify-center px-6 max-w-md mx-auto w-full">
        {/* Logo & Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
            MoEasy
          </h1>
          <p className="text-muted-foreground">
            모임을 쉽게, 함께 만드는 즐거움
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={handleKakaoLogin}
            className="w-full py-4 bg-[#FEE500] text-[#000000] rounded-2xl transition-transform active:scale-95 flex items-center justify-center gap-3 font-medium shadow-sm"
          >
            <div className="w-5 h-5 bg-[#000000] rounded-full flex items-center justify-center text-[#FEE500] text-xs font-bold">
              K
            </div>
            <span>카카오로 시작하기</span>
          </button>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-4 bg-white text-foreground border-2 border-border rounded-2xl transition-transform active:scale-95 flex items-center justify-center gap-3 font-medium shadow-sm"
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
            <span>Google로 시작하기</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">또는</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Local Login Form */}
        <form onSubmit={handleLocalLogin} className="space-y-4 mb-6">
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
                placeholder="비밀번호를 입력하세요"
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

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl transition-transform active:scale-95 shadow-lg font-medium"
          >
            로그인
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center space-y-2">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            비밀번호를 잊으셨나요?
          </button>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-muted-foreground">계정이 없으신가요?</span>
            <button
              onClick={onSignupClick}
              className="text-primary hover:underline font-medium"
            >
              회원가입
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
