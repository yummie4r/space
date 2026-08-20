import React, { useState } from 'react';
import { X, Sparkles, Loader2, Cpu, Globe, Check, AlertCircle, ArrowRight, Wand2 } from 'lucide-react';
import { Blueprint } from '../types';

interface BlueprintGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBlueprintGenerated: (blueprint: Blueprint) => void;
}

const TEMPLATE_IDEAS = [
  {
    name: "AetherLegal",
    concept: "AI-Powered Contract Redlining & Multi-Party Regulatory Discovery Engine",
    domain: "LegalTech & Compliance",
    platform: "Web SaaS (React + Tailwind)",
    style: "Event-Driven Modular Microservices"
  },
  {
    name: "FleetPulse IoT",
    concept: "Autonomous Drone Delivery Fleet Telemetry & Predictive Collision Geofencing",
    domain: "IoT & Logistics",
    platform: "Cross-Platform Web & Mobile",
    style: "CQRS & Timeseries Microservices"
  },
  {
    name: "HyperScale DevOps",
    concept: "Multi-Cloud Kubernetes Cost Optimization & Autonomous Resource Rebalancer",
    domain: "Developer Tools & CloudOps",
    platform: "Web SaaS & CLI",
    style: "Kubernetes Operator & Go Microservices"
  },
  {
    name: "EduSphere AI",
    concept: "Adaptive Real-Time Socratic Tutoring & Cognitive Knowledge Graph Engine",
    domain: "EdTech & Learning Sciences",
    platform: "Web & iPad App",
    style: "Serverless Edge & Vector Store"
  }
];

export const BlueprintGeneratorModal: React.FC<BlueprintGeneratorModalProps> = ({
  isOpen,
  onClose,
  onBlueprintGenerated,
}) => {
  const [appName, setAppName] = useState('');
  const [coreConcept, setCoreConcept] = useState('');
  const [domain, setDomain] = useState('Enterprise SaaS');
  const [platform, setPlatform] = useState('Web SaaS (Desktop & Mobile Responsive)');
  const [architectureStyle, setArchitectureStyle] = useState('Event-Driven Modular Microservices');
  const [targetAudience, setTargetAudience] = useState('Enterprise Operators, Developers & Admins');
  const [specialRequirements, setSpecialRequirements] = useState('SOC2/HIPAA compliance, real-time telemetry, normalized SQL schema with pgvector');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState<string>('Initializing Architecture Engine...');

  if (!isOpen) return null;

  const handleApplyTemplate = (tpl: typeof TEMPLATE_IDEAS[0]) => {
    setAppName(tpl.name);
    setCoreConcept(tpl.concept);
    setDomain(tpl.domain);
    setPlatform(tpl.platform);
    setArchitectureStyle(tpl.style);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appName.trim() || !coreConcept.trim()) {
      setError("Please provide an App Name and Core Concept.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setLoadingStep("Formulating PRD & User Flow sequence with Gemini 3.7 Flash...");

    try {
      // Periodic loading feedback
      const timer1 = setTimeout(() => {
        setLoadingStep("Designing normalized database schema & REST/GraphQL API specs...");
      }, 2500);
      const timer2 = setTimeout(() => {
        setLoadingStep("Synthesizing Design System tokens & Component tree hierarchy...");
      }, 5500);

      const response = await fetch('/api/generate-blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appName,
          coreConcept,
          domain,
          platform,
          architectureStyle,
          targetAudience,
          specialRequirements,
        }),
      });

      clearTimeout(timer1);
      clearTimeout(timer2);

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Server responded with status ${response.status}`);
      }

      const data = await response.json();
      if (!data.blueprint || !data.blueprint.prd) {
        throw new Error("Invalid blueprint format returned from engine.");
      }

      // Add ID if missing
      const generatedBp: Blueprint = {
        ...data.blueprint,
        id: data.blueprint.id || `custom-${Date.now()}`,
        version: "1.0.0",
        createdAt: new Date().toISOString().split('T')[0],
      };

      onBlueprintGenerated(generatedBp);
      onClose();
    } catch (err: any) {
      console.error("Generation failed:", err);
      setError(err.message || "Failed to generate blueprint. Please check server logs and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0f172a] border border-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl text-gray-100 flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between sticky top-0 bg-[#0f172a]/95 backdrop-blur z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Wand2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Generate Master App Blueprint</h2>
              <p className="text-xs text-gray-400">Architect enterprise PRDs, technical schemas, and component trees with Gemini AI</p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Generation Failed</p>
                <p className="text-xs text-rose-400/90 mt-0.5">{error}</p>
              </div>
            </div>
          )}

          {/* Quick Idea Starters */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5 block">
              Quick Concept Starters:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TEMPLATE_IDEAS.map((tpl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyTemplate(tpl)}
                  className="text-left p-3 rounded-xl bg-[#1e293b]/60 hover:bg-[#1e293b] border border-gray-800 hover:border-blue-500/40 transition cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-white group-hover:text-blue-400">
                    <span>{tpl.name}</span>
                    <span className="text-[10px] text-gray-500 font-normal">{tpl.domain}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">{tpl.concept}</p>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Application Name *
              </label>
              <input
                type="text"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="e.g. NexusFlow, MedPulse, VaultX..."
                required
                disabled={isLoading}
                className="w-full px-3.5 py-2.5 bg-[#0b0f19] border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Core Concept & Primary Problem Solved *
              </label>
              <textarea
                value={coreConcept}
                onChange={(e) => setCoreConcept(e.target.value)}
                rows={3}
                placeholder="Describe what the application does, who it is for, and key workflows (e.g. Multi-agent workflow builder for autonomous revenue operations with human-in-the-loop approvals)..."
                required
                disabled={isLoading}
                className="w-full px-3.5 py-2.5 bg-[#0b0f19] border border-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Industry / Domain
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-3.5 py-2.5 bg-[#0b0f19] border border-gray-800 focus:border-blue-500 rounded-xl text-sm text-white outline-none"
                >
                  <option value="Enterprise AI & Workflow">Enterprise AI & Workflow</option>
                  <option value="HealthTech & Telehealth">HealthTech & Telehealth</option>
                  <option value="FinTech & Corporate Banking">FinTech & Corporate Banking</option>
                  <option value="Developer Tools & CloudOps">Developer Tools & CloudOps</option>
                  <option value="IoT & Smart Supply Chain">IoT & Smart Supply Chain</option>
                  <option value="E-Commerce & Marketplaces">E-Commerce & Marketplaces</option>
                  <option value="Cybersecurity & SecOps">Cybersecurity & SecOps</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Architecture Style
                </label>
                <select
                  value={architectureStyle}
                  onChange={(e) => setArchitectureStyle(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-3.5 py-2.5 bg-[#0b0f19] border border-gray-800 focus:border-blue-500 rounded-xl text-sm text-white outline-none"
                >
                  <option value="Event-Driven Modular Microservices">Event-Driven Modular Microservices</option>
                  <option value="Modular Monolith (High Scalability)">Modular Monolith (High Scalability)</option>
                  <option value="CQRS & Event Sourcing (High Integrity)">CQRS & Event Sourcing (High Integrity)</option>
                  <option value="Serverless Edge & Vector Pipelines">Serverless Edge & Vector Pipelines</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-60 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{loadingStep}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Synthesize Production Blueprint</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
