import { ArrowLeft, Image } from 'lucide-react';
import { PhotoGallery } from './PhotoGallery';

interface PhotoGalleryPageProps {
  onBack: () => void;
  meetupName: string;
}

export function PhotoGalleryPage({ onBack, meetupName }: PhotoGalleryPageProps) {
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
              <h2>사진첩</h2>
              <p className="text-xs text-muted-foreground">{meetupName}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Image className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">24</span>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="flex-1 overflow-y-auto pt-16 pb-6">
        <div className="max-w-md mx-auto">
          <PhotoGallery />
        </div>
      </main>
    </div>
  );
}
