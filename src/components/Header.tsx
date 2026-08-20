import React from 'react';
import { 
  Layers, 
  Sparkles, 
  Download, 
  Bot, 
  Eye, 
  Code2, 
  Database, 
  FileText, 
  Cpu, 
  Palette,
  ChevronDown
} from 'lucide-react';
import { ActiveSection, Blueprint } from '../types';

interface HeaderProps {
  currentBlueprint: Blueprint;
  activeSection: ActiveSection;
  onSelectSection: (section: ActiveSection) => void;
  onOpenGenerator: () => void;
  onOpenExport: () => void;
  onOpenCopilot: () => void;
  isCopilotOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentBlueprint,
  activeSection,
  onSelectSection,
  onOpenGenerator,
  onOpenExport,
  onOpenCopilot,
  isCopilotOpen,
}) => {
  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#0d131f]/95 backdrop-blur border-b border-gray-800">
      {/* Top Banner Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Blueprint Info */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 border border-blue-400/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Master App Blueprint</span>
                <span className="text-gray-600">•</span>
                <span className="text-xs text-gray-400 font-mono">v{currentBlueprint.version || "1.0"}</span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Production Ready
                </span>
              </div>
              <h1 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                {currentBlueprint.name}
                <span className="text-xs font-normal text-gray-400 hidden md:inline">({currentBlueprint.domain})</span>
              </h1>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              id="btn-open-generator"
              onClick={onOpenGenerator}
              className="px-3.5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Generate New Blueprint</span>
              <span className="sm:hidden">New</span>
            </button>

            <button
              id="btn-open-export"
              onClick={onOpenExport}
              className="px-3 py-2 bg-gray-800/80 hover:bg-gray-700 text-gray-200 rounded-lg text-xs font-medium flex items-center gap-1.5 border border-gray-700 transition cursor-pointer"
              title="Export Markdown PRD & System Spec"
            >
              <Download className="w-4 h-4 text-gray-400" />
              <span className="hidden md:inline">Export Spec</span>
            </button>

            <button
              id="btn-toggle-copilot"
              onClick={onOpenCopilot}
              className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-1.5 border transition cursor-pointer ${
                isCopilotOpen
                  ? 'bg-blue-600/20 text-blue-300 border-blue-500/40 shadow-sm shadow-blue-500/20'
                  : 'bg-gray-800/80 hover:bg-gray-700 text-gray-200 border-gray-700'
              }`}
              title="AI Architect Copilot"
            >
              <Bot className="w-4 h-4 text-blue-400" />
              <span className="hidden md:inline">AI Architect</span>
            </button>
          </div>
        </div>

        {/* 3-Section Master Blueprint Navigation Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto py-2 border-t border-gray-800/80 text-sm no-scrollbar">
          <button
            id="tab-nav-prd"
            onClick={() => onSelectSection('prd')}
            className={`px-4 py-2 rounded-lg font-medium text-xs flex items-center gap-2 transition whitespace-nowrap cursor-pointer ${
              activeSection === 'prd'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Section 1: PRD & User Flows</span>
          </button>

          <button
            id="tab-nav-architecture"
            onClick={() => onSelectSection('architecture')}
            className={`px-4 py-2 rounded-lg font-medium text-xs flex items-center gap-2 transition whitespace-nowrap cursor-pointer ${
              activeSection === 'architecture'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Section 2: Technical Architecture & Schemas</span>
          </button>

          <button
            id="tab-nav-uiux"
            onClick={() => onSelectSection('uiux')}
            className={`px-4 py-2 rounded-lg font-medium text-xs flex items-center gap-2 transition whitespace-nowrap cursor-pointer ${
              activeSection === 'uiux'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Section 3: UI/UX & Components</span>
          </button>

          <button
            id="tab-nav-live-mockup"
            onClick={() => onSelectSection('live-mockup')}
            className={`px-4 py-2 rounded-lg font-medium text-xs flex items-center gap-2 transition whitespace-nowrap cursor-pointer ${
              activeSection === 'live-mockup'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'text-emerald-400/90 hover:text-emerald-300 hover:bg-emerald-950/40 border border-emerald-800/40'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Live Dashboard</span>
          </button>
        </div>
      </div>
    </header>
  );
};
