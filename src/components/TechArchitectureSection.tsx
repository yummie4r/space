import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Database, 
  Terminal, 
  Globe, 
  ShieldCheck, 
  Activity, 
  Server, 
  Copy, 
  Check, 
  ArrowRight, 
  Key, 
  Radio, 
  Workflow, 
  Network
} from 'lucide-react';
import { Blueprint, TechSubTab, ApiEndpoint } from '../types';

interface TechArchitectureSectionProps {
  blueprint: Blueprint;
}

export const TechArchitectureSection: React.FC<TechArchitectureSectionProps> = ({ blueprint }) => {
  const [activeTab, setActiveTab] = useState<TechSubTab>('tech-stack');
  const [copiedSql, setCopiedSql] = useState(false);
  const [copiedCurlId, setCopiedCurlId] = useState<string | null>(null);
  const [selectedEntityIndex, setSelectedEntityIndex] = useState(0);

  const { techStack, systemArchitectureDiagram, dataSchemaModel, apiEndpoints } = blueprint.techArchitecture;

  const handleCopySql = () => {
    navigator.clipboard.writeText(dataSchemaModel.sqlDDL);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  const handleCopyCurl = (endpoint: ApiEndpoint) => {
    navigator.clipboard.writeText(endpoint.curlExample);
    setCopiedCurlId(endpoint.id);
    setTimeout(() => setCopiedCurlId(null), 2000);
  };

  const getMethodBadge = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
      case 'POST': return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'PUT': return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
      case 'PATCH': return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
      case 'DELETE': return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  return (
    <div id="section-architecture" className="space-y-6">
      {/* Section Header & Sub Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-800">
        <div>
          <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Section 2 • System Engineering</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-0.5">Technical Architecture & System Design</h2>
        </div>

        {/* Sub tabs */}
        <div className="flex items-center space-x-1.5 bg-[#0f172a] p-1 rounded-xl border border-gray-800 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('tech-stack')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'tech-stack'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Tech Stack Specs</span>
          </button>

          <button
            onClick={() => setActiveTab('system-topology')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'system-topology'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>System Topology</span>
          </button>

          <button
            onClick={() => setActiveTab('data-schema')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'data-schema'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Data Schema (SQL DDL)</span>
          </button>

          <button
            onClick={() => setActiveTab('api-catalog')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'api-catalog'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>API Catalog ({apiEndpoints.length})</span>
          </button>
        </div>
      </div>

      {/* SUB-VIEW 1: TECH STACK SPECIFICATIONS */}
      {activeTab === 'tech-stack' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <span>Client & Presentation Tier</span>
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">{techStack.frontend.name}</h3>
                <p className="text-xs text-blue-300 font-mono mt-1">{techStack.frontend.framework}</p>

                <div className="mt-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">Core Libraries:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.frontend.libraries.map((lib, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-gray-800 text-[11px] text-gray-300 font-mono">
                        {lib}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-400">
                <span className="font-semibold text-gray-300">Architectural Rationale: </span>
                {techStack.frontend.rationale}
              </div>
            </div>

            {/* Backend Services */}
            <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <span>Backend & API Gateway</span>
                  <Server className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">{techStack.backend.runtime}</h3>
                <p className="text-xs text-emerald-300 font-mono mt-1">{techStack.backend.framework}</p>

                <div className="mt-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">Protocol / Interfaces:</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20 text-[11px] text-emerald-300 font-mono block">
                    {techStack.backend.apiType}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-400">
                <span className="font-semibold text-gray-300">Architectural Rationale: </span>
                {techStack.backend.rationale}
              </div>
            </div>

            {/* Database & Storage */}
            <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <span>Database & Vector State</span>
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">{techStack.database.primary}</h3>
                
                <div className="mt-3 space-y-1 text-xs font-mono">
                  <div className="text-gray-300"><span className="text-gray-500">Cache:</span> {techStack.database.caching}</div>
                  <div className="text-gray-300"><span className="text-gray-500">Vector/Search:</span> {techStack.database.searchOrVector}</div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-400">
                <span className="font-semibold text-gray-300">Architectural Rationale: </span>
                {techStack.database.rationale}
              </div>
            </div>

            {/* Authentication & Security */}
            <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <span>Auth & RBAC Matrix</span>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">{techStack.auth.provider}</h3>
                <p className="text-xs text-gray-300 mt-1">{techStack.auth.mechanism}</p>

                <div className="mt-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">Defined RBAC Roles:</span>
                  <div className="flex flex-wrap gap-1">
                    {techStack.auth.rbacLevels.map((role, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 text-[10px] font-semibold border border-amber-500/20">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-400">
                <span className="font-semibold text-gray-300">Rationale: </span>
                {techStack.auth.rationale}
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <span>Cloud & Edge Ingress</span>
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">{techStack.infrastructure.cloud}</h3>
                <div className="mt-2 space-y-1 text-xs text-gray-300">
                  <p><span className="text-gray-500 font-mono">Compute:</span> {techStack.infrastructure.compute}</p>
                  <p><span className="text-gray-500 font-mono">CDN / WAF:</span> {techStack.infrastructure.cdn}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800 text-xs text-gray-400">
                <span className="font-semibold text-gray-300">Rationale: </span>
                {techStack.infrastructure.rationale}
              </div>
            </div>

            {/* Observability */}
            <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <span>Telemetry & Observability</span>
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">Full-Stack OpenTelemetry</h3>
                <div className="mt-3 space-y-1.5 text-xs text-gray-300">
                  <div className="p-1.5 rounded bg-gray-900 border border-gray-800 font-mono text-[11px]">
                    <span className="text-indigo-400 font-bold">Logs:</span> {techStack.observability.logging}
                  </div>
                  <div className="p-1.5 rounded bg-gray-900 border border-gray-800 font-mono text-[11px]">
                    <span className="text-indigo-400 font-bold">Metrics:</span> {techStack.observability.metrics}
                  </div>
                  <div className="p-1.5 rounded bg-gray-900 border border-gray-800 font-mono text-[11px]">
                    <span className="text-indigo-400 font-bold">Traces:</span> {techStack.observability.tracing}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 2: SYSTEM TOPOLOGY */}
      {activeTab === 'system-topology' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-1">Architecture Topology & Component Mesh</h3>
            <p className="text-xs text-gray-400 mb-6">{systemArchitectureDiagram.overview}</p>

            {/* Interactive Node Mesh */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {systemArchitectureDiagram.nodes.map((node) => {
                const isGateway = node.category === 'gateway';
                const isStorage = node.category === 'storage';
                const isThirdParty = node.category === 'thirdParty';

                return (
                  <div 
                    key={node.id}
                    className={`p-4 rounded-xl border transition ${
                      isGateway 
                        ? 'bg-blue-950/20 border-blue-500/30 hover:border-blue-500'
                        : isStorage
                        ? 'bg-purple-950/20 border-purple-500/30 hover:border-purple-500'
                        : isThirdParty
                        ? 'bg-amber-950/20 border-amber-500/30 hover:border-amber-500'
                        : 'bg-[#1e293b]/60 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-gray-900 text-gray-400 border border-gray-800">
                        {node.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{node.label}</h4>
                    <p className="text-xs text-gray-300 mt-1">{node.details}</p>
                  </div>
                );
              })}
            </div>

            {/* Data Flow Trace */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-blue-400" />
                <span>Deterministic Data Flow Sequence</span>
              </h4>

              <div className="space-y-2">
                {systemArchitectureDiagram.dataFlowSteps.map((step, idx) => (
                  <div key={idx} className="p-3 bg-[#0b0f19] rounded-xl border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2 text-gray-300 font-mono">
                      <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-[10px]">
                        {idx + 1}
                      </span>
                      <strong className="text-white">{step.from}</strong>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
                      <strong className="text-white">{step.to}</strong>
                      <span className="px-2 py-0.5 rounded bg-gray-800 text-[10px] text-blue-300">{step.protocol}</span>
                    </div>
                    <span className="text-gray-400 text-xs">{step.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 3: DATA SCHEMA (SQL DDL & ERD) */}
      {activeTab === 'data-schema' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-[#0f172a] border border-gray-800 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-500/30">
                  {dataSchemaModel.dbType}
                </span>
                <h3 className="text-base font-bold text-white mt-1">Normalized Relational Schema & DDL</h3>
              </div>

              <button
                onClick={handleCopySql}
                className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-gray-700 transition cursor-pointer self-start sm:self-auto"
              >
                {copiedSql ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}
                <span>{copiedSql ? 'Copied DDL!' : 'Copy SQL DDL'}</span>
              </button>
            </div>

            {/* Entity Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 border-b border-gray-800">
              {dataSchemaModel.entities.map((entity, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedEntityIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer whitespace-nowrap ${
                    selectedEntityIndex === idx
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-[#1e293b] text-gray-400 hover:text-white'
                  }`}
                >
                  {entity.tableName}
                </button>
              ))}
            </div>

            {/* Entity Field Inspector */}
            {dataSchemaModel.entities[selectedEntityIndex] && (
              <div className="mb-6 bg-[#0b0f19] border border-gray-800 rounded-xl overflow-hidden">
                <div className="px-4 py-3 bg-[#111827] border-b border-gray-800 flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-white">
                    Table: {dataSchemaModel.entities[selectedEntityIndex].tableName}
                  </span>
                  <span className="text-xs text-gray-400">
                    {dataSchemaModel.entities[selectedEntityIndex].description}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-gray-300">
                    <thead className="bg-[#0e1422] text-gray-400 uppercase font-semibold">
                      <tr>
                        <th className="px-4 py-2.5">Field Name</th>
                        <th className="px-4 py-2.5">Data Type</th>
                        <th className="px-4 py-2.5">Constraints / Keys</th>
                        <th className="px-4 py-2.5">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800 font-mono">
                      {dataSchemaModel.entities[selectedEntityIndex].fields.map((field, fIdx) => (
                        <tr key={fIdx} className="hover:bg-[#161f30]">
                          <td className="px-4 py-2.5 font-bold text-blue-300 flex items-center gap-1.5">
                            {field.isPrimaryKey && <span className="text-amber-400 font-sans text-[10px] bg-amber-950/60 px-1 py-0.5 rounded border border-amber-500/30">PK</span>}
                            {field.isForeignKey && <span className="text-indigo-400 font-sans text-[10px] bg-indigo-950/60 px-1 py-0.5 rounded border border-indigo-500/30">FK</span>}
                            {field.name}
                          </td>
                          <td className="px-4 py-2.5 text-emerald-400">{field.type}</td>
                          <td className="px-4 py-2.5 text-gray-400">{field.constraints}</td>
                          <td className="px-4 py-2.5 font-sans text-gray-300">{field.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SQL DDL Code View */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Full PostgreSQL DDL Script:</span>
              </div>
              <pre className="p-4 bg-[#080c14] border border-gray-800 rounded-xl text-xs font-mono text-gray-200 overflow-x-auto leading-relaxed max-h-80">
                <code>{dataSchemaModel.sqlDDL}</code>
              </pre>
            </div>

            {/* Indexing Strategy */}
            <div className="mt-6 p-4 bg-[#1e293b]/40 border border-gray-800 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Production Indexing Strategy:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-300">
                {dataSchemaModel.indexingStrategy.map((strat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                    <span>{strat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 4: API ENDPOINT CATALOG */}
      {activeTab === 'api-catalog' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {apiEndpoints.map((ep) => (
            <div key={ep.id} className="bg-[#0f172a] border border-gray-800 rounded-2xl p-5">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono border ${getMethodBadge(ep.method)}`}>
                    {ep.method}
                  </span>
                  <span className="font-mono text-sm font-bold text-white">{ep.path}</span>
                  {ep.authRequired && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                      <Key className="w-3 h-3" /> Auth: {ep.rbacRole}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleCopyCurl(ep)}
                  className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-mono flex items-center gap-1.5 border border-gray-700 transition cursor-pointer self-start lg:self-auto"
                >
                  {copiedCurlId === ep.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}
                  <span>{copiedCurlId === ep.id ? 'Copied cURL!' : 'Copy cURL'}</span>
                </button>
              </div>

              <p className="text-xs text-gray-300 mb-4">{ep.summary}</p>

              {/* Payloads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                {ep.requestPayload && (
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-gray-400 block mb-1">Request Body (JSON):</span>
                    <pre className="p-3 bg-[#080c14] rounded-xl border border-gray-800 text-blue-300 overflow-x-auto max-h-48">
                      <code>{ep.requestPayload}</code>
                    </pre>
                  </div>
                )}

                <div>
                  <span className="text-[10px] uppercase font-semibold text-emerald-400 block mb-1">Response (200 OK):</span>
                  <pre className="p-3 bg-[#080c14] rounded-xl border border-gray-800 text-emerald-300 overflow-x-auto max-h-48">
                    <code>{ep.responsePayload}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
