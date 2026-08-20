import React, { useState } from 'react';
import { 
  Play, 
  Activity, 
  ShieldCheck, 
  Zap, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Server, 
  RotateCw, 
  Sliders, 
  Sparkles,
  Heart,
  DollarSign,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Blueprint } from '../types';

interface InteractiveDashboardPreviewProps {
  blueprint: Blueprint;
}

export const InteractiveDashboardPreview: React.FC<InteractiveDashboardPreviewProps> = ({ blueprint }) => {
  // Generic interactive state for the live preview
  const [metricCounter, setMetricCounter] = useState(1);
  const [isRunningAction, setIsRunningAction] = useState(false);
  const [actionLog, setActionLog] = useState<Array<{ id: string; message: string; timestamp: string; status: 'ok' | 'alert' | 'pending' }>>([
    { id: '1', message: `System initialized for ${blueprint.name}`, timestamp: 'Just now', status: 'ok' },
    { id: '2', message: 'Connected to primary database & telemetry cluster', timestamp: '1m ago', status: 'ok' }
  ]);

  const [liveRuns, setLiveRuns] = useState([
    { id: 'TASK-881', title: `${blueprint.name} Primary Ingestion Loop`, state: 'active', latency: '24ms', cost: '$0.002' },
    { id: 'TASK-882', title: 'Real-Time Policy Verification & Auth Gate', state: 'awaiting_approval', latency: '42ms', cost: '$0.005' },
    { id: 'TASK-880', title: 'Batch Data Normalization & Indexing', state: 'completed', latency: '18ms', cost: '$0.001' }
  ]);

  const handleSimulateExecution = () => {
    setIsRunningAction(true);
    setTimeout(() => {
      const newId = `TASK-${Math.floor(100 + Math.random() * 900)}`;
      setLiveRuns(prev => [
        { id: newId, title: `Autonomous ${blueprint.domain} Pipeline Task`, state: 'active', latency: '19ms', cost: '$0.003' },
        ...prev
      ]);
      setActionLog(prev => [
        { id: Date.now().toString(), message: `Dispatched new task ${newId} across worker mesh`, timestamp: 'Just now', status: 'ok' },
        ...prev.slice(0, 5)
      ]);
      setMetricCounter(prev => prev + 1);
      setIsRunningAction(false);
    }, 700);
  };

  const handleApproveTask = (id: string) => {
    setLiveRuns(prev => prev.map(t => t.id === id ? { ...t, state: 'completed' } : t));
    setActionLog(prev => [
      { id: Date.now().toString(), message: `Authorized task ${id} with biometric credentials`, timestamp: 'Just now', status: 'ok' },
      ...prev.slice(0, 5)
    ]);
  };

  return (
    <div id="section-live-mockup" className="space-y-6">
      {/* Live Preview Header Card */}
      <div className="bg-[#0f172a] border border-emerald-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Live Interactive Mockup</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <h2 className="text-xl font-bold text-white mt-0.5">{blueprint.name} Cockpit HUD</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulateExecution}
              disabled={isRunningAction}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {isRunningAction ? 'Executing Task...' : 'Simulate Live Trigger'}
            </button>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <div className="p-4 bg-[#0b0f19] border border-gray-800 rounded-xl">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">Real-time Throughput</span>
            <p className="text-2xl font-black text-white mt-1.5">
              {(142 * metricCounter).toLocaleString()} <span className="text-xs text-emerald-400 font-normal">req/s</span>
            </p>
            <p className="text-[11px] text-gray-500 mt-1">p99 Latency: 18ms</p>
          </div>

          <div className="p-4 bg-[#0b0f19] border border-gray-800 rounded-xl">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">Compliance Guardrail</span>
            <p className="text-2xl font-black text-emerald-400 mt-1.5">99.98%</p>
            <p className="text-[11px] text-gray-500 mt-1">0 policy violations</p>
          </div>

          <div className="p-4 bg-[#0b0f19] border border-gray-800 rounded-xl">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">Awaiting Sign-off</span>
            <p className="text-2xl font-black text-amber-400 mt-1.5">
              {liveRuns.filter(r => r.state === 'awaiting_approval').length}
            </p>
            <p className="text-[11px] text-amber-400/80 mt-1">Biometric gated</p>
          </div>

          <div className="p-4 bg-[#0b0f19] border border-gray-800 rounded-xl">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">Efficiency Score</span>
            <p className="text-2xl font-black text-blue-400 mt-1.5">98.4</p>
            <p className="text-[11px] text-gray-500 mt-1">Optimal compute balance</p>
          </div>
        </div>

        {/* Live Task Stream */}
        <div className="bg-[#0b0f19] border border-gray-800 rounded-xl overflow-hidden mb-6">
          <div className="px-4 py-3 bg-[#111827] border-b border-gray-800 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-200">Active Pipeline Executions</h3>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Streaming Telemetry
            </span>
          </div>

          <div className="divide-y divide-gray-800">
            {liveRuns.map((run) => (
              <div key={run.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#161f30] transition">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-blue-400">{run.id}</span>
                    <h4 className="text-sm font-semibold text-white">{run.title}</h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mt-1 font-mono">
                    <span>Latency: {run.latency}</span>
                    <span>Cost: {run.cost}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {run.state === 'active' && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 animate-spin" /> Processing
                    </span>
                  )}
                  {run.state === 'awaiting_approval' && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5 animate-pulse">
                      <AlertCircle className="w-3.5 h-3.5" /> Sign-off Required
                    </span>
                  )}
                  {run.state === 'completed' && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                    </span>
                  )}

                  {run.state === 'awaiting_approval' && (
                    <button
                      onClick={() => handleApproveTask(run.id)}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition cursor-pointer shadow"
                    >
                      Authorize
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live System Activity Log */}
        <div className="p-4 bg-[#080c14] border border-gray-800 rounded-xl">
          <span className="text-[10px] font-mono uppercase font-bold text-gray-500 block mb-2">Live System Activity Logs:</span>
          <div className="space-y-1 font-mono text-xs text-gray-400">
            {actionLog.map((log) => (
              <div key={log.id} className="flex items-center justify-between text-[11px] py-0.5">
                <span className="text-gray-300">› {log.message}</span>
                <span className="text-gray-600">{log.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
