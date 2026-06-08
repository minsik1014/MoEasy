import { useState } from 'react';
import { Plus, DollarSign, Receipt, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingActionButtonProps {
  onFundingRequest: () => void;
  onSettlement: () => void;
}

export function FloatingActionButton({ onFundingRequest, onSettlement }: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 z-50" style={{ right: 'max(1rem, calc((100vw - 28rem) / 2 + 1rem))' }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-3 space-y-2"
          >
            <button
              onClick={() => {
                onFundingRequest();
                setIsOpen(false);
              }}
              className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all w-full"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">1차 펀딩 요청하기</span>
            </button>

            <button
              onClick={() => {
                onSettlement();
                setIsOpen(false);
              }}
              className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all w-full"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Receipt className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm font-medium">초과금 사후 정산하기</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all ml-auto ${
          isOpen
            ? 'bg-gray-600 hover:bg-gray-700'
            : 'bg-primary hover:bg-primary/90'
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Plus className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
