import { useState, useCallback, useEffect } from 'react';

interface TimeSlot {
  day: number;
  hour: number;
  minute: number;
  availability: number;
}

const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
const HOURS = Array.from({ length: 24 }, (_, i) => i);
const TIME_SLOTS = ['00', '30'];

const generateMockData = (): TimeSlot[] => {
  const data: TimeSlot[] = [];

  for (let day = 0; day < 7; day++) {
    for (let hour = 9; hour < 23; hour++) {
      for (let minute of [0, 30]) {
        let availability = 0;

        if (day === 4 && hour >= 19 && hour <= 20) {
          availability = Math.floor(Math.random() * 2) + 8;
        } else if ((day === 4 || day === 5) && hour >= 18 && hour <= 21) {
          availability = Math.floor(Math.random() * 3) + 5;
        } else if (hour >= 18 && hour <= 22 && day < 5) {
          availability = Math.floor(Math.random() * 3) + 2;
        } else if ((day === 5 || day === 6) && hour >= 14 && hour <= 20) {
          availability = Math.floor(Math.random() * 3) + 3;
        } else {
          availability = Math.floor(Math.random() * 2);
        }

        data.push({ day, hour, minute, availability });
      }
    }
  }

  return data;
};

const getHeatmapColor = (availability: number, maxAvailability: number) => {
  const ratio = maxAvailability === 0 ? 0 : availability / maxAvailability;

  if (ratio === 0) return 'bg-gray-100 border-gray-200';
  if (ratio < 0.2) return 'bg-blue-100 border-blue-200';
  if (ratio < 0.4) return 'bg-blue-200 border-blue-300';
  if (ratio < 0.6) return 'bg-blue-300 border-blue-400';
  if (ratio < 0.8) return 'bg-blue-500 border-blue-600';
  return 'bg-blue-600 border-blue-700';
};

export function TimeGrid() {
  const [timeData] = useState<TimeSlot[]>(generateMockData());
  const maxAvailability = Math.max(...timeData.map(t => t.availability));
  
  // Drag to select state
  const [selectedSlots, setSelectedSlots] = useState<Set<string>>(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState<'select' | 'deselect'>('select');
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [initialSelected, setInitialSelected] = useState<Set<string>>(new Set());

  const getSlotKey = (x: number, y: number) => `${x}-${y}`;

  const getCoordinates = (day: number, hour: number, minute: number) => {
    const x = day;
    const y = (hour - 9) * 2 + (minute === 30 ? 1 : 0);
    return { x, y };
  };

  const handleMouseDown = (day: number, hour: number, minute: number) => {
    const { x, y } = getCoordinates(day, hour, minute);
    const key = getSlotKey(x, y);
    const isCurrentlySelected = selectedSlots.has(key);
    const newMode = isCurrentlySelected ? 'deselect' : 'select';
    
    setIsDragging(true);
    setDragMode(newMode);
    setDragStart({ x, y });
    setInitialSelected(new Set(selectedSlots));
    
    setSelectedSlots(prev => {
      const next = new Set(prev);
      if (newMode === 'select') {
        next.add(key);
      } else {
        next.delete(key);
      }
      return next;
    });
  };

  const handleMouseEnter = (day: number, hour: number, minute: number) => {
    if (!isDragging || !dragStart) return;
    
    const current = getCoordinates(day, hour, minute);
    const minX = Math.min(dragStart.x, current.x);
    const maxX = Math.max(dragStart.x, current.x);
    const minY = Math.min(dragStart.y, current.y);
    const maxY = Math.max(dragStart.y, current.y);

    const nextSelected = new Set(initialSelected);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        const key = getSlotKey(x, y);
        if (dragMode === 'select') {
          nextSelected.add(key);
        } else {
          nextSelected.delete(key);
        }
      }
    }

    setSelectedSlots(nextSelected);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
      setDragStart(null);
    };
    
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.addEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const getSlotAvailability = (day: number, hour: number, minute: number) => {
    const slot = timeData.find(
      t => t.day === day && t.hour === hour && t.minute === minute
    );
    return slot?.availability || 0;
  };

  return (
    <div className="bg-card rounded-2xl p-4 border border-border overflow-x-auto select-none">
      <div className="min-w-[600px]" onMouseLeave={() => setIsDragging(false)}>
        <div className="grid grid-cols-8 gap-px mb-1">
          <div className="text-xs text-muted-foreground p-2"></div>
          {DAYS.map((day) => (
            <div key={day} className="text-xs text-center p-2">
              {day}
            </div>
          ))}
        </div>

        <div className="space-y-px">
          {HOURS.filter(h => h >= 9 && h < 23).map((hour) => (
            <div key={hour}>
              {TIME_SLOTS.map((minute) => (
                <div key={`${hour}-${minute}`} className="grid grid-cols-8 gap-px mb-px">
                  {minute === '00' && (
                    <div className="text-xs text-muted-foreground p-1 flex items-center justify-end pr-2">
                      {hour.toString().padStart(2, '0')}:00
                    </div>
                  )}
                  {minute === '30' && (
                    <div className="text-xs text-muted-foreground p-1"></div>
                  )}

                  {DAYS.map((_, dayIndex) => {
                    const availability = getSlotAvailability(dayIndex, hour, parseInt(minute));
                    const baseColorClass = getHeatmapColor(availability, maxAvailability);
                    const { x, y } = getCoordinates(dayIndex, hour, parseInt(minute));
                    const isSelected = selectedSlots.has(getSlotKey(x, y));

                    return (
                      <button
                        key={`${dayIndex}-${hour}-${minute}`}
                        onMouseDown={() => handleMouseDown(dayIndex, hour, parseInt(minute))}
                        onMouseEnter={() => handleMouseEnter(dayIndex, hour, parseInt(minute))}
                        className={`h-6 border transition-all hover:ring-2 hover:ring-primary/50 touch-none ${
                          isSelected 
                            ? 'bg-primary border-primary ring-2 ring-primary ring-inset shadow-inner' 
                            : baseColorClass
                        }`}
                        title={`${availability}명 참여 가능`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>참여 인원:</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded"></div>
            <span>0</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-200 border border-blue-300 rounded"></div>
            <span>적음</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-400 border border-blue-500 rounded"></div>
            <span>보통</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-blue-600 border border-blue-700 rounded"></div>
            <span>많음</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-primary">
          <div className="w-4 h-4 bg-primary rounded border border-primary"></div>
          <span>내 선택</span>
        </div>
      </div>
    </div>
  );
}

