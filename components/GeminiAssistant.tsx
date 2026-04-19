
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiAssistantResponse } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    const response = await getGeminiAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', content: response || 'Sorry, I encountered an error.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gold text-background-dark p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-background-dark"
        >
          <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 md:w-96 h-[500px] bg-background-dark border border-gold/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gold p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-background-dark">smart_toy</span>
              <span className="font-bold text-background-dark uppercase tracking-wider text-sm">B2B Trade Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-background-dark"><span className="material-symbols-outlined">close</span></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 islamic-pattern bg-opacity-5">
            {messages.length === 0 && (
              <div className="text-center text-white/50 text-sm py-10">
                <p>Hello! How can I assist you with your Raschel Luxury wholesale inquiry today?</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white/10 text-white border border-white/10'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-xl flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about products, MOQ, ports..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 text-sm text-white focus:ring-gold focus:border-gold"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gold text-background-dark p-2 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
