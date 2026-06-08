import { useState } from 'react';
import { Upload, ChevronDown } from 'lucide-react';

interface CreateMeetupFormProps {
  onBack: () => void;
}

export function CreateMeetupForm({ onBack }: CreateMeetupFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    region: '',
    description: '',
  });

  const [coverImage, setCoverImage] = useState<string | null>(null);

  const categories = [
    '운동',
    '스터디',
    '취미',
    '문화',
    '음식',
    '여행',
    '게임',
    '기타',
  ];

  const regions = [
    '서울 강남구',
    '서울 강북구',
    '서울 마포구',
    '서울 성동구',
    '서울 용산구',
    '서울 영등포구',
    '경기 성남시',
    '경기 고양시',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('모임 개설:', formData);
    alert('모임이 개설되었습니다!');
    onBack();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Cover Image Upload - Full Width */}
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="cover-upload"
        />
        <label
          htmlFor="cover-upload"
          className={`block w-full h-48 border-b-2 cursor-pointer transition-colors ${
            coverImage
              ? 'border-border'
              : 'border-border bg-secondary hover:bg-secondary/80'
          }`}
        >
          {coverImage ? (
            <div className="relative w-full h-full">
              <img
                src={coverImage}
                alt="Cover preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-sm">탭하여 변경</div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
              <Upload className="w-10 h-10 mb-2" />
              <p className="text-sm">커버 이미지 추가</p>
              <p className="text-xs mt-1">탭하여 업로드</p>
            </div>
          )}
        </label>
      </div>

      {/* Form Fields */}
      <div className="px-4 space-y-5 mt-5">
        {/* Meetup Name */}
        <div>
          <label className="block text-sm mb-2 text-foreground">
            모임 이름 <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="예: 강남 러닝 크루"
            required
            className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm mb-2 text-foreground">
            카테고리 <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
              className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:outline-none focus:border-primary transition-colors appearance-none pr-10"
            >
              <option value="">카테고리 선택</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm mb-2 text-foreground">
            지역 <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              required
              className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:outline-none focus:border-primary transition-colors appearance-none pr-10"
            >
              <option value="">지역 선택</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm mb-2 text-foreground">
            소개글 <span className="text-destructive">*</span>
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="모임에 대해 자세히 소개해주세요&#10;&#10;어떤 활동을 하나요?&#10;어떤 사람들이 모이나요?"
            required
            rows={6}
            className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <p className="text-xs text-muted-foreground mt-2">
            최소 50자 이상 작성해주세요
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-secondary border border-border rounded-xl p-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            💡 커버 이미지와 자세한 소개를 작성하면 더 많은 멤버들이 관심을 갖게 됩니다
          </p>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <div className="max-w-md mx-auto">
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl transition-transform active:scale-95"
          >
            개설하기
          </button>
        </div>
      </div>
    </form>
  );
}
