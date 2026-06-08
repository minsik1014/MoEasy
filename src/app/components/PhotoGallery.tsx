import { Plus } from 'lucide-react';

interface Photo {
  id: number;
  thumbnail: string;
  date: string;
}

const mockPhotos: Photo[] = [
  { id: 1, thumbnail: '📷', date: '2026.04.19' },
  { id: 2, thumbnail: '🏃', date: '2026.04.19' },
  { id: 3, thumbnail: '🌅', date: '2026.04.18' },
  { id: 4, thumbnail: '🏞️', date: '2026.04.18' },
  { id: 5, thumbnail: '👥', date: '2026.04.17' },
  { id: 6, thumbnail: '🎉', date: '2026.04.17' },
  { id: 7, thumbnail: '🏃‍♀️', date: '2026.04.16' },
  { id: 8, thumbnail: '🌄', date: '2026.04.16' },
  { id: 9, thumbnail: '📸', date: '2026.04.15' },
  { id: 10, thumbnail: '🏅', date: '2026.04.15' },
  { id: 11, thumbnail: '🌇', date: '2026.04.14' },
  { id: 12, thumbnail: '👟', date: '2026.04.14' },
  { id: 13, thumbnail: '🌳', date: '2026.04.13' },
  { id: 14, thumbnail: '🏃‍♂️', date: '2026.04.13' },
  { id: 15, thumbnail: '🎯', date: '2026.04.12' },
  { id: 16, thumbnail: '🌆', date: '2026.04.12' },
  { id: 17, thumbnail: '🏞️', date: '2026.04.11' },
  { id: 18, thumbnail: '📷', date: '2026.04.11' },
  { id: 19, thumbnail: '🌅', date: '2026.04.10' },
  { id: 20, thumbnail: '👥', date: '2026.04.10' },
  { id: 21, thumbnail: '🏃', date: '2026.04.09' },
  { id: 22, thumbnail: '🎉', date: '2026.04.09' },
  { id: 23, thumbnail: '🌄', date: '2026.04.08' },
  { id: 24, thumbnail: '📸', date: '2026.04.08' },
];

export function PhotoGallery() {
  return (
    <div className="grid grid-cols-3 gap-0.5 bg-border">
      {mockPhotos.map((photo) => (
        <button
          key={photo.id}
          onClick={() => alert(`사진 ${photo.id} 보기`)}
          className="aspect-square bg-secondary hover:opacity-80 transition-opacity flex items-center justify-center text-4xl"
        >
          {photo.thumbnail}
        </button>
      ))}

      {/* Floating Action Button */}
      <button
        onClick={() => alert('사진 추가하기')}
        className="fixed bottom-24 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-transform active:scale-95 hover:shadow-xl z-50"
        style={{ right: 'max(1.5rem, calc((100vw - 28rem) / 2 + 1.5rem))' }}
      >
        <Plus className="w-7 h-7" />
      </button>
    </div>
  );
}
