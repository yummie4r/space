import React, { useState } from 'react';
import { 
  Palette, 
  Layers, 
  Code2, 
  Copy, 
  Check, 
  Type, 
  Grid, 
  Box, 
  FileCode, 
  Smartphone, 
  Monitor, 
  FolderTree,
  Sparkles
} from 'lucide-react';
import { Blueprint, UiUxSubTab } from '../types';

interface UiUxEngineeringSectionProps {
  blueprint: Blueprint;
}

export const UiUxEngineeringSection: React.FC<UiUxEngineeringSectionProps> = ({ blueprint }) => {
  const [activeTab, setActiveTab] = useState<UiUxSubTab>('design-tokens');
  const [activeCodeFramework, setActiveCodeFramework] = useState<'react' | 'swiftui' | 'compose'>('react');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const { designTokens, componentTree, coreDashboardMockup } = blueprint.uiUxComponentEngineering;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyToken = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedToken(hex);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  const activeCodeContent = 
    activeCodeFramework === 'react' 
      ? coreDashboardMockup.reactTailwindCode 
      : activeCodeFramework === 'swiftui' 
      ? coreDashboardMockup.swiftUiCode 
      : coreDashboardMockup.jetpackComposeCode;

  return (
    <div id="section-uiux" className="space-y-6">
      {/* Section Header & Sub Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-800">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Palette className="w-4 h-4" />
            <span>Section 3 • UI/UX & Component Architecture</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-0.5">Design System Tokens & Code Generation</h2>
        </div>

        {/* Sub tabs */}
        <div className="flex items-center space-x-1.5 bg-[#0f172a] p-1 rounded-xl border border-gray-800 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('design-tokens')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'design-tokens'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Design System Tokens</span>
          </button>

          <button
            onClick={() => setActiveTab('component-tree')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'component-tree'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <FolderTree className="w-3.5 h-3.5" />
            <span>Component Tree Hierarchy</span>
          </button>

          <button
            onClick={() => setActiveTab('mockup-code')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'mockup-code'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Production Dashboard Code</span>
          </button>
        </div>
      </div>

      {/* SUB-VIEW 1: DESIGN SYSTEM TOKENS */}
      {activeTab === 'design-tokens' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Color Tokens Swatches */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-1">Color Palette & Contrast Tokens</h3>
            <p className="text-xs text-gray-400 mb-6">WCAG AA/AAA compliant semantic tokens for high-contrast dark enterprise themes.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {Object.entries(designTokens.colorPalette).map(([key, hexValue]) => {
                const hex = String(hexValue);
                return (
                  <button
                    key={key}
                    onClick={() => handleCopyToken(hex)}
                    className="p-3 bg-[#0b0f19] rounded-xl border border-gray-800 hover:border-gray-700 text-left transition cursor-pointer group"
                  >
                    <div 
                      className="w-full h-10 rounded-lg mb-2 shadow-inner border border-white/10"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="text-[11px] font-semibold text-gray-300 capitalize truncate block">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 group-hover:text-blue-400 flex items-center justify-between mt-0.5">
                      <span>{hex}</span>
                      {copiedToken === hex && <Check className="w-3 h-3 text-emerald-400" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Typography Scale */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Type className="w-4 h-4" />
              <span>Typography Hierarchy & Scale</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-xs">
              <div className="p-3 bg-[#0b0f19] rounded-xl border border-gray-800">
                <span className="text-gray-400">Display Font:</span>
                <p className="font-bold text-white mt-0.5">{designTokens.typography.fontDisplay}</p>
              </div>
              <div className="p-3 bg-[#0b0f19] rounded-xl border border-gray-800">
                <span className="text-gray-400">Body Font:</span>
                <p className="font-bold text-white mt-0.5">{designTokens.typography.fontBody}</p>
              </div>
              <div className="p-3 bg-[#0b0f19] rounded-xl border border-gray-800">
                <span className="text-gray-400">Monospace / Code:</span>
                <p className="font-bold text-white mt-0.5">{designTokens.typography.fontMono}</p>
              </div>
            </div>

            <div className="space-y-3">
              {designTokens.typography.scale.map((token, idx) => (
                <div key={idx} className="p-3.5 bg-[#0b0f19] rounded-xl border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-bold text-white">{token.name}</span>
                    <span className="text-gray-400 ml-2">({token.usage})</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[11px] text-blue-300">
                    <span>Size: {token.size}</span>
                    <span>LineHeight: {token.lineHeight}</span>
                    <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-300">{token.weight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid & Layout Spacing */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Grid className="w-4 h-4" />
              <span>Layout Grid & Spacing Scale</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#0b0f19] rounded-xl border border-gray-800">
                <span className="text-gray-400">Container Max Width:</span>
                <p className="font-mono text-sm font-bold text-white mt-1">{designTokens.spacingAndLayout.containerMaxWidth}</p>
              </div>
              <div className="p-4 bg-[#0b0f19] rounded-xl border border-gray-800">
                <span className="text-gray-400">Responsive Grid Columns:</span>
                <p className="font-mono text-sm font-bold text-white mt-1">{designTokens.spacingAndLayout.gridColumns} Columns</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 2: COMPONENT TREE HIERARCHY */}
      {activeTab === 'component-tree' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-2">Frontend Component Tree & State Propagation</h3>
            <p className="text-xs text-gray-400 mb-6">
              Declarative architecture hierarchy showing props contracts, state flow triggers, and store subscriptions.
            </p>

            <div className="space-y-3">
              {componentTree.map((node) => {
                const isLayout = node.type === 'Layout';
                const isPage = node.type === 'Page';
                const isContainer = node.type === 'Feature Container';

                return (
                  <div 
                    key={node.id}
                    className="p-4 bg-[#0b0f19] rounded-xl border border-gray-800 hover:border-gray-700 transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Box className="w-4 h-4 text-blue-400" />
                        <h4 className="text-sm font-bold text-white font-mono">{`<${node.name} />`}</h4>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          isLayout 
                            ? 'bg-purple-500/15 text-purple-400 border border-purple-500/20' 
                            : isPage 
                            ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                            : isContainer
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                            : 'bg-gray-800 text-gray-400'
                        }`}>
                          {node.type}
                        </span>
                      </div>

                      {node.contextOrStore && (
                        <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-500/20">
                          Store: {node.contextOrStore}
                        </span>
                      )}
                    </div>

                    {/* Props */}
                    <div className="my-2">
                      <span className="text-[10px] uppercase font-semibold text-gray-500 mr-2">Props:</span>
                      <div className="inline-flex flex-wrap gap-1.5">
                        {node.props.map((p, pIdx) => (
                          <span key={pIdx} className="px-2 py-0.5 rounded bg-gray-900 text-[10px] text-gray-300 font-mono border border-gray-800">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-2">
                      <span className="font-semibold text-gray-300">State Flow: </span>
                      {node.stateFlow}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 3: PRODUCTION DASHBOARD CODE */}
      {activeTab === 'mockup-code' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-base font-bold text-white">{coreDashboardMockup.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{coreDashboardMockup.description}</p>
              </div>

              <div className="flex items-center gap-2">
                {/* Framework Selector */}
                <div className="flex items-center bg-[#0b0f19] p-1 rounded-xl border border-gray-800">
                  <button
                    onClick={() => setActiveCodeFramework('react')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      activeCodeFramework === 'react'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    React + Tailwind
                  </button>
                  <button
                    onClick={() => setActiveCodeFramework('swiftui')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      activeCodeFramework === 'swiftui'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    SwiftUI
                  </button>
                  <button
                    onClick={() => setActiveCodeFramework('compose')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                      activeCodeFramework === 'compose'
                        ? 'bg-blue-600 text-white shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Jetpack Compose
                  </button>
                </div>

                <button
                  onClick={() => handleCopyCode(activeCodeContent)}
                  className="px-3.5 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-gray-700 transition cursor-pointer"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
                  <span>{copiedCode ? 'Copied Code!' : 'Copy Code'}</span>
                </button>
              </div>
            </div>

            {/* Code Box */}
            <pre className="p-4 bg-[#080c14] border border-gray-800 rounded-xl text-xs font-mono text-gray-200 overflow-x-auto leading-relaxed max-h-[500px]">
              <code>{activeCodeContent}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
