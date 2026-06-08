import { CreateMeetupForm } from './CreateMeetupForm';
import { ArrowLeft } from 'lucide-react';

interface CreateMeetupPageProps {
  onBack: () => void;
}

export function CreateMeetupPage({ onBack }: CreateMeetupPageProps) {
  return (
    <div className="size-full bg-background flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-card border-b border-border z-40">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-secondary rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2>모임 만들기</h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-16 pb-24">
        <div className="max-w-md mx-auto">
          <CreateMeetupForm onBack={onBack} />
        </div>
      </main>
    </div>
  );
}
