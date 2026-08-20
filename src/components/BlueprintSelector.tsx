import React from 'react';
import { Layers, Sparkles, Cpu, ShieldCheck, Heart, DollarSign, Globe, Plus, Check } from 'lucide-react';
import { Blueprint } from '../types';

interface BlueprintSelectorProps {
  blueprints: Blueprint[];
  selectedId: string;
  onSelect: (blueprint: Blueprint) => void;
  onOpenGenerator: () => void;
}

export const BlueprintSelector: React.FC<BlueprintSelectorProps> = ({
  blueprints,
  selectedId,
  onSelect,
  onOpenGenerator,
}) => {
  const getIcon = (domain: string) => {
    if (domain.includes('AI') || domain.includes('Workflow')) return <Cpu className="w-4 h-4 text-blue-400" />;
    if (domain.includes('Health') || domain.includes('Telehealth')) return <Heart className="w-4 h-4 text-rose-400" />;
    if (domain.includes('FinTech') || domain.includes('Banking')) return <DollarSign className="w-4 h-4 text-emerald-400" />;
    return <Globe className="w-4 h-4 text-purple-400" />;
  };

  return (
    <div className="bg-[#0b0f17] border-b border-gray-800/80 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap mr-1">
            Enterprise Blueprints:
          </span>
          {blueprints.map((bp) => {
            const isSelected = bp.id === selectedId;
            return (
              <button
                key={bp.id}
                id={`blueprint-pill-${bp.id}`}
                onClick={() => onSelect(bp)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition cursor-pointer border whitespace-nowrap ${
                  isSelected
                    ? 'bg-blue-600/15 text-blue-300 border-blue-500/50 shadow-sm shadow-blue-500/10 font-semibold'
                    : 'bg-[#121826] text-gray-400 border-gray-800 hover:border-gray-700 hover:text-gray-200'
                }`}
              >
                {getIcon(bp.domain)}
                <span>{bp.name}</span>
                {isSelected && <Check className="w-3 h-3 text-blue-400" />}
              </button>
            );
          })}

          <button
            id="btn-quick-new-blueprint"
            onClick={onOpenGenerator}
            className="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 bg-[#121826] hover:bg-gray-800 text-gray-400 hover:text-blue-400 border border-dashed border-gray-700 hover:border-blue-500 transition cursor-pointer whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Custom Concept</span>
          </button>
        </div>

        {/* Selected Blueprint Tagline */}
        <div className="text-xs text-gray-400 hidden xl:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <span className="truncate max-w-md">
            {blueprints.find((b) => b.id === selectedId)?.tagline}
          </span>
        </div>
      </div>
    </div>
  );
};
