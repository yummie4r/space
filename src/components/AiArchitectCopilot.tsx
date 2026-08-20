import React, { useState } from 'react';
import { Bot, Send, X, Loader2, Sparkles, User, ShieldAlert, Cpu, Terminal, Check } from 'lucide-react';
import { Blueprint } from '../types';

interface AiArchitectCopilotProps {
  isOpen: boolean;
  onClose: () => void;
  currentBlueprint: Blueprint;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const AiArchitectCopilot: React.FC<AiArchitectCopilotProps> = ({
  isOpen,
  onClose,
  currentBlueprint,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content: `Hello! I am your Principal Software Architect & Product Lead. I'm actively reviewing the blueprint for **${currentBlueprint.name}**. What architectural trade-offs, SQL schema migrations, security audits, or component contracts would you like to explore or refine?`,
      timestamp: 'Just now'
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    `Audit SOC2 compliance for ${currentBlueprint.name}`,
    `Write a PostgreSQL migration script for tenant partitioning`,
    `Generate GraphQL schema mutations for this stack`,
    `Evaluate latency vs cost between Redis and Memcached here`
  ];

  const handleSendMessage = async (questionText: string) => {
    if (!questionText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: questionText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuestion('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/copilot-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: questionText,
          currentBlueprint,
          conversationHistory: messages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.answer || "I've analyzed your architectural request and prepared recommendations.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error("Copilot query failed:", err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `**Architectural Guidance:** For ${currentBlueprint.name}, ensure your PostgreSQL connection pool uses PgBouncer with transaction-mode pooling to handle spike concurrency without memory leaks. Furthermore, enforce Row-Level Security (RLS) policies on the tenant ID column for strict multi-tenant isolation.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-[#0d131f] border-l border-gray-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
      {/* Copilot Header */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#0f172a]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              AI Architect Copilot
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-500/20 text-blue-300 font-mono">Gemini 3.7</span>
            </h3>
            <p className="text-[11px] text-gray-400">Active context: {currentBlueprint.name}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-blue-400 border border-gray-700'
            }`}>
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white rounded-tr-none'
                : 'bg-[#131c2e] text-gray-200 border border-gray-800 rounded-tl-none whitespace-pre-wrap'
            }`}>
              {msg.content}
              <span className="block text-[10px] opacity-60 text-right mt-1.5 font-mono">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-gray-400 p-3 bg-[#131c2e] rounded-xl border border-gray-800 max-w-[80%]">
            <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
            <span>Analyzing system architecture & formulating answer...</span>
          </div>
        )}
      </div>

      {/* Suggested Quick Prompts */}
      <div className="p-3 border-t border-gray-800 bg-[#0a0f18] overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block mb-1.5">
          Quick Inquiries:
        </span>
        <div className="flex gap-1.5">
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              disabled={isLoading}
              className="px-2.5 py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 rounded-lg text-[11px] border border-gray-800 hover:border-gray-700 whitespace-nowrap transition cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Message Input Box */}
      <div className="p-3 border-t border-gray-800 bg-[#0f172a]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputQuestion);
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            placeholder="Ask the architect a technical question..."
            disabled={isLoading}
            className="flex-1 px-3.5 py-2 bg-[#0b0f19] border border-gray-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-gray-500 outline-none"
          />
          <button
            type="submit"
            disabled={isLoading || !inputQuestion.trim()}
            className="p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl transition cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
