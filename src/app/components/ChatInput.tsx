import { useState } from 'react';
import { Plus, Send, Image, FileText, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ChatInput() {
  const [message, setMessage] = useState('');
  const [showAttachments, setShowAttachments] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40">
      <div className="max-w-md mx-auto px-4 py-3">
        <AnimatePresence>
          {showAttachments && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-3 flex gap-2"
            >
              <button className="flex-1 bg-secondary hover:bg-secondary/80 rounded-xl py-3 flex flex-col items-center gap-1 transition-all active:scale-95">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Image className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs">사진</span>
              </button>

              <button className="flex-1 bg-secondary hover:bg-secondary/80 rounded-xl py-3 flex flex-col items-center gap-1 transition-all active:scale-95">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-xs">파일</span>
              </button>

              <button className="flex-1 bg-secondary hover:bg-secondary/80 rounded-xl py-3 flex flex-col items-center gap-1 transition-all active:scale-95">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-xs">위치</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAttachments(!showAttachments)}
            className={`p-2.5 rounded-xl transition-all ${
              showAttachments
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary hover:bg-secondary/80'
            }`}
          >
            <motion.div
              animate={{ rotate: showAttachments ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-5 h-5" />
            </motion.div>
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="메시지를 입력하세요..."
              className="w-full px-4 py-2.5 bg-input-background rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
            />
          </div>

          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className={`p-2.5 rounded-xl transition-all ${
              message.trim()
                ? 'bg-primary text-primary-foreground active:scale-95'
                : 'bg-secondary text-muted-foreground cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
