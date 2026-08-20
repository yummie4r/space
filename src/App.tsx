import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BlueprintSelector } from './components/BlueprintSelector';
import { PrdSection } from './components/PrdSection';
import { TechArchitectureSection } from './components/TechArchitectureSection';
import { UiUxEngineeringSection } from './components/UiUxEngineeringSection';
import { InteractiveDashboardPreview } from './components/InteractiveDashboardPreview';
import { BlueprintGeneratorModal } from './components/BlueprintGeneratorModal';
import { ExportModal } from './components/ExportModal';
import { AiArchitectCopilot } from './components/AiArchitectCopilot';
import { PRESET_BLUEPRINTS } from './data/presetBlueprints';
import { ActiveSection, Blueprint } from './types';
import { 
  FileText, 
  Cpu, 
  Palette, 
  Eye, 
  Sparkles, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [blueprints, setBlueprints] = useState<Blueprint[]>(() => {
    try {
      const saved = localStorage.getItem('master_app_blueprints');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge preset with custom
          const custom = parsed.filter(p => !PRESET_BLUEPRINTS.some(preset => preset.id === p.id));
          return [...PRESET_BLUEPRINTS, ...custom];
        }
      }
    } catch (e) {
      console.warn("Failed to read blueprints from localStorage", e);
    }
    return PRESET_BLUEPRINTS;
  });

  const [selectedBlueprintId, setSelectedBlueprintId] = useState<string>(PRESET_BLUEPRINTS[0].id);
  const [activeSection, setActiveSection] = useState<ActiveSection>('prd');
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  // Current active blueprint
  const currentBlueprint = blueprints.find(b => b.id === selectedBlueprintId) || blueprints[0];

  // Persist custom blueprints
  useEffect(() => {
    try {
      localStorage.setItem('master_app_blueprints', JSON.stringify(blueprints));
    } catch (e) {
      console.warn("Failed to persist blueprints to localStorage", e);
    }
  }, [blueprints]);

  const handleSelectBlueprint = (bp: Blueprint) => {
    setSelectedBlueprintId(bp.id);
  };

  const handleBlueprintGenerated = (newBlueprint: Blueprint) => {
    setBlueprints(prev => [newBlueprint, ...prev]);
    setSelectedBlueprintId(newBlueprint.id);
    setActiveSection('prd');
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-gray-100 flex flex-col selection:bg-blue-600 selection:text-white font-sans">
      {/* Top Application Header */}
      <Header
        currentBlueprint={currentBlueprint}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        onOpenGenerator={() => setIsGeneratorOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(prev => !prev)}
        isCopilotOpen={isCopilotOpen}
      />

      {/* Blueprint Selector Bar */}
      <BlueprintSelector
        blueprints={blueprints}
        selectedId={currentBlueprint.id}
        onSelect={handleSelectBlueprint}
        onOpenGenerator={() => setIsGeneratorOpen(true)}
      />

      {/* Hero Overview Strip */}
      <div className="bg-[#0b101a] border-b border-gray-800/60 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {currentBlueprint.domain}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs text-gray-400">{currentBlueprint.architectureStyle}</span>
              <span className="text-gray-500">•</span>
              <span className="text-xs text-gray-400">{currentBlueprint.platform}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 max-w-4xl leading-relaxed">
              {currentBlueprint.coreConcept}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveSection('live-mockup')}
              className="px-3.5 py-1.5 bg-emerald-600/15 hover:bg-emerald-600/25 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-semibold flex items-center gap-2 transition cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Launch Live Preview</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeSection === 'prd' && (
          <PrdSection blueprint={currentBlueprint} />
        )}

        {activeSection === 'architecture' && (
          <TechArchitectureSection blueprint={currentBlueprint} />
        )}

        {activeSection === 'uiux' && (
          <UiUxEngineeringSection blueprint={currentBlueprint} />
        )}

        {activeSection === 'live-mockup' && (
          <InteractiveDashboardPreview blueprint={currentBlueprint} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-800 bg-[#080d16] py-4 px-4 sm:px-6 lg:px-8 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Master App Blueprint Studio • Enterprise Architecture System</span>
          </div>
          <p className="text-[11px] text-gray-500">
            Powered by Google AI Studio & Gemini 3.7 Flash
          </p>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <BlueprintGeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        onBlueprintGenerated={handleBlueprintGenerated}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        blueprint={currentBlueprint}
      />

      <AiArchitectCopilot
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        currentBlueprint={currentBlueprint}
      />
    </div>
  );
}
