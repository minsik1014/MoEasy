import { motion } from 'motion/react';
import { Camera, Scan } from 'lucide-react';

export function ReceiptScanner() {
  return (
    <div className="relative h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white/60 space-y-2">
          <Camera className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">영수증을 화면에 맞춰주세요</p>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-dashed border-white/30 m-4 rounded-xl"></div>

      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{ boxShadow: '0 0 20px rgba(37, 99, 235, 0.8)' }}
        animate={{
          top: ['20%', '80%', '20%'],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 shadow-lg">
        <Scan className="w-3 h-3" />
        <span>스캔 중...</span>
      </div>

      <div className="absolute top-4 left-4 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}
