import React, { useState } from 'react';
import { 
  FileText, 
  Target, 
  Users, 
  TrendingUp, 
  ListChecks, 
  Workflow, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  Circle, 
  ArrowRight,
  Filter,
  Layers
} from 'lucide-react';
import { Blueprint, PrdSubTab, FeatureItem } from '../types';

interface PrdSectionProps {
  blueprint: Blueprint;
}

export const PrdSection: React.FC<PrdSectionProps> = ({ blueprint }) => {
  const [activeTab, setActiveTab] = useState<PrdSubTab>('value-prop');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [searchFeature, setSearchFeature] = useState<string>('');
  const [features, setFeatures] = useState<FeatureItem[]>(blueprint.prd.featureMatrix);

  // Sync features if blueprint changes
  React.useEffect(() => {
    setFeatures(blueprint.prd.featureMatrix);
  }, [blueprint]);

  const toggleFeatureComplete = (id: string) => {
    setFeatures(prev => prev.map(f => f.id === id ? { ...f, completed: !f.completed } : f));
  };

  const filteredFeatures = features.filter(f => {
    const matchesTier = selectedTier === 'All' || f.tier.includes(selectedTier);
    const matchesSearch = f.name.toLowerCase().includes(searchFeature.toLowerCase()) || 
                          f.description.toLowerCase().includes(searchFeature.toLowerCase()) ||
                          f.category.toLowerCase().includes(searchFeature.toLowerCase());
    return matchesTier && matchesSearch;
  });

  return (
    <div id="section-prd" className="space-y-6">
      {/* Section Sub-Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-800">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Section 1 • Product Strategy</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-0.5">Product Requirement Document (PRD)</h2>
        </div>

        {/* Sub tabs */}
        <div className="flex items-center space-x-1.5 bg-[#0f172a] p-1 rounded-xl border border-gray-800">
          <button
            onClick={() => setActiveTab('value-prop')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'value-prop'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Value Prop & Personas</span>
          </button>

          <button
            onClick={() => setActiveTab('feature-matrix')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'feature-matrix'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <ListChecks className="w-3.5 h-3.5" />
            <span>Feature Matrix ({features.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('user-flows')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'user-flows'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>User Flow Journey</span>
          </button>
        </div>
      </div>

      {/* SUB-VIEW 1: CORE VALUE PROPOSITION & PERSONAS */}
      {activeTab === 'value-prop' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Problem & Solution Split Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Problem */}
            <div className="bg-[#0f172a] border border-rose-500/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span>The Core Enterprise Pain Point</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Market Friction & Bottlenecks</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {blueprint.prd.coreValueProp.primaryProblem}
              </p>
            </div>

            {/* Core Solution */}
            <div className="bg-[#0f172a] border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>The Engineered Solution</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Architected Value Proposition</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {blueprint.prd.coreValueProp.coreSolution}
              </p>
            </div>
          </div>

          {/* North Star & Primary Conversion Metrics */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>North Star & Conversion Metrics</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {blueprint.prd.coreValueProp.conversionMetrics.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border ${
                    m.type === 'NorthStar' 
                      ? 'bg-blue-950/30 border-blue-500/40' 
                      : 'bg-[#1e293b]/50 border-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      m.type === 'NorthStar'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-300'
                    }`}>
                      {m.type === 'NorthStar' ? '★ North Star' : m.type}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mt-2.5">{m.metric}</h4>
                  <p className="text-lg font-bold text-blue-300 mt-1">{m.target}</p>
                  <p className="text-xs text-gray-400 mt-2 border-t border-gray-800/80 pt-2">{m.rationale}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Target User Personas */}
          <div>
            <div className="flex items-center gap-2 text-gray-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-4 h-4 text-indigo-400" />
              <span>Target User Personas & Jobs-To-Be-Done</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {blueprint.prd.coreValueProp.personas.map((persona, idx) => (
                <div key={idx} className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow">
                        {persona.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{persona.name}</h4>
                        <p className="text-xs text-indigo-300 font-medium">{persona.role}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div>
                        <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider block mb-1.5">
                          Critical Pain Points:
                        </span>
                        <ul className="space-y-1.5">
                          {persona.painPoints.map((point, pIdx) => (
                            <li key={pIdx} className="text-xs text-gray-300 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block mb-1.5">
                          Jobs To Be Done (JTBD):
                        </span>
                        <ul className="space-y-1.5">
                          {persona.jobsToBeDone.map((job, jIdx) => (
                            <li key={jIdx} className="text-xs text-gray-300 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                              <span>{job}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200">
                    <span className="font-semibold text-indigo-300">Core Value Unlock: </span>
                    {persona.keyBenefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 2: FEATURE MATRIX (MoSCoW) */}
      {activeTab === 'feature-matrix' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Controls Bar */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs text-gray-400 mr-2 font-medium">Tier:</span>
              {['All', 'MVP', 'v2', 'Innovations'].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    selectedTier === tier
                      ? 'bg-blue-600 text-white shadow'
                      : 'bg-[#1e293b] text-gray-400 hover:text-white'
                  }`}
                >
                  {tier === 'All' ? 'All Tiers' : tier === 'MVP' ? 'Must-Have (MVP)' : tier === 'v2' ? 'Should-Have (v2)' : 'Future Innovations'}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-72">
              <input
                type="text"
                value={searchFeature}
                onChange={(e) => setSearchFeature(e.target.value)}
                placeholder="Search features, stories..."
                className="w-full px-3.5 py-1.5 bg-[#0b0f19] border border-gray-800 focus:border-blue-500 rounded-xl text-xs text-white placeholder-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Feature List Table / Cards */}
          <div className="grid grid-cols-1 gap-4">
            {filteredFeatures.map((feat) => {
              const isMvp = feat.tier.includes('MVP');
              const isV2 = feat.tier.includes('v2');

              return (
                <div
                  key={feat.id}
                  className={`bg-[#0f172a] border rounded-2xl p-5 transition hover:border-gray-700 ${
                    feat.completed ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-gray-800'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleFeatureComplete(feat.id)}
                        className="mt-0.5 text-gray-400 hover:text-emerald-400 transition cursor-pointer"
                        title="Toggle completed state"
                      >
                        {feat.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-600" />
                        )}
                      </button>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h4 className={`text-base font-bold ${feat.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                            {feat.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-800 text-gray-300 border border-gray-700">
                            {feat.category}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            isMvp 
                              ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30' 
                              : isV2 
                              ? 'bg-purple-500/15 text-purple-400 border border-purple-500/30' 
                              : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                          }`}>
                            {feat.tier}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed mb-3">
                          {feat.description}
                        </p>

                        <div className="p-3 bg-[#0b0f19] rounded-xl border border-gray-800/80 text-xs text-gray-400">
                          <span className="font-semibold text-blue-400 font-mono">User Story: </span>
                          <span>"{feat.userStory}"</span>
                        </div>
                      </div>
                    </div>

                    {/* Impact vs Effort Badges */}
                    <div className="flex items-center gap-2 shrink-0 self-end lg:self-start">
                      <div className="px-2.5 py-1 rounded-lg bg-gray-800 text-xs flex items-center gap-1.5">
                        <span className="text-gray-400 text-[10px] uppercase">Impact:</span>
                        <span className={`font-semibold ${
                          feat.impact === 'High' ? 'text-emerald-400' : feat.impact === 'Medium' ? 'text-blue-400' : 'text-gray-300'
                        }`}>{feat.impact}</span>
                      </div>

                      <div className="px-2.5 py-1 rounded-lg bg-gray-800 text-xs flex items-center gap-1.5">
                        <span className="text-gray-400 text-[10px] uppercase">Effort:</span>
                        <span className={`font-semibold ${
                          feat.effort === 'High' ? 'text-rose-400' : feat.effort === 'Medium' ? 'text-amber-400' : 'text-emerald-400'
                        }`}>{feat.effort}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUB-VIEW 3: USER FLOW SEQUENCE */}
      {activeTab === 'user-flows' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-2">Step-by-Step Production User Journey</h3>
            <p className="text-xs text-gray-400 mb-6">
              Mapping deterministic state changes, API verification, fallback recovery paths, and target screen HUDs.
            </p>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-emerald-500">
              {blueprint.prd.userFlowSequence.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Step Bubble */}
                  <div className="absolute -left-6 sm:-left-8 top-0 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 border-2 border-[#0f172a] text-white font-bold text-xs flex items-center justify-center shadow-lg shadow-blue-500/20">
                    {step.stepNumber}
                  </div>

                  <div className="bg-[#1e293b]/50 border border-gray-800 rounded-2xl p-5 hover:border-blue-500/30 transition">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/15 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                        {step.phase}
                      </span>
                      <span className="text-xs font-mono text-gray-400 bg-gray-900 px-2 py-0.5 rounded border border-gray-800">
                        Target Screen: <strong className="text-white">{step.keyScreen}</strong>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* User Action */}
                      <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-gray-800">
                        <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                          1. User Trigger & Action:
                        </span>
                        <p className="text-xs text-gray-200 leading-relaxed">{step.action}</p>
                      </div>

                      {/* System Response */}
                      <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-gray-800">
                        <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                          2. System Verification & State Transition:
                        </span>
                        <p className="text-xs text-gray-200 leading-relaxed">{step.systemResponse}</p>
                      </div>
                    </div>

                    {/* Fallback / Edge Case */}
                    <div className="mt-3 p-3 bg-rose-950/20 rounded-xl border border-rose-500/20 text-xs text-rose-300 flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-rose-400">Fallback & Exception Handling: </span>
                        <span>{step.fallbackOrEdgeCase}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
