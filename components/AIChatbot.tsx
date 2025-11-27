"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '@/lib/types';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Pratik's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      
      if (data.error) throw new Error(data.error);
      
      setMessages(prev => [...prev, { role: 'model', text: data.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-secondary border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col animate-slide-up h-[500px]">
          {/* Header */}
          <div className="bg-slate-100 dark:bg-slate-800 p-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">Pratik's AI Assistant</h3>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-primary/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-accent text-white rounded-br-none font-medium' 
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-600 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2 border border-slate-200 dark:border-slate-600 shadow-sm">
                  <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Pratik..."
                className="flex-1 bg-slate-100 dark:bg-primary text-slate-900 dark:text-white text-sm rounded-full px-4 py-2 border border-slate-200 dark:border-slate-600 focus:outline-none focus:border-accent"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 bg-accent text-white rounded-full hover:bg-accentHover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-center">Powered by Gemini 2.5 Flash</p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${isOpen ? 'bg-slate-700 rotate-90' : 'bg-accent animate-bounce'}`}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white font-bold" />}
      </button>
    </div>
  );
};

export default AIChatbot;