import { MapPin, Navigation } from 'lucide-react';

interface LocationShareCardProps {
  sender: string;
  placeName: string;
  address: string;
  time: string;
}

export function LocationShareCard({ sender, placeName, address, time }: LocationShareCardProps) {
  return (
    <div className="flex gap-2 mb-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center flex-shrink-0 text-lg">
        👤
      </div>

      <div className="flex flex-col items-start max-w-[85%]">
        <span className="text-xs text-muted-foreground mb-1 px-1">{sender}</span>

        <div className="bg-card border border-border rounded-2xl rounded-tl-sm overflow-hidden w-full">
          <div className="h-32 bg-gradient-to-br from-green-100 via-blue-100 to-green-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border-2 border-white shadow-lg">
                <MapPin className="w-8 h-8 text-red-500 fill-red-500" />
              </div>
            </div>

            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs flex items-center gap-1">
              <MapPin className="w-3 h-3 text-primary" />
              <span>위치</span>
            </div>
          </div>

          <div className="p-4">
            <h4 className="mb-1">{placeName}</h4>
            <p className="text-sm text-muted-foreground mb-3">{address}</p>

            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-transform active:scale-95">
              <Navigation className="w-4 h-4" />
              <span>길찾기</span>
            </button>
          </div>
        </div>

        <span className="text-xs text-muted-foreground mt-1 px-1">{time}</span>
      </div>
    </div>
  );
}
