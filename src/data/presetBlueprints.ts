import { Blueprint } from "../types";

export const PRESET_BLUEPRINTS: Blueprint[] = [
  {
    id: "nexus-flow-ai",
    name: "NexusFlow AI",
    tagline: "Autonomous Multi-Agent Enterprise Workflow Orchestration Engine",
    coreConcept: "A distributed system for deploying, monitoring, and evaluating goal-directed AI agent swarms executing multi-step business logic across enterprise data silos with human-in-the-loop oversight.",
    targetAudience: "Enterprise DevOps, VP of Engineering, Solutions Architects, Compliance Leads",
    domain: "Enterprise AI & Workflow Automation",
    platform: "Web SaaS (React + Tailwind) & GraphQL/gRPC APIs",
    architectureStyle: "Event-Driven Microservices with Kafka & Temporal.io",
    version: "1.4.0",
    createdAt: "2026-08-15",
    prd: {
      coreValueProp: {
        primaryProblem: "Enterprise business operations rely on fragmented legacy software, leading to manual context switching, high error rates, slow cross-departmental handoffs, and compliance blindspots when automating complex workflows.",
        coreSolution: "NexusFlow provides a unified deterministic orchestration plane where specialized AI agents collaborate across API connectors, verify intermediate outputs against policy constraints, and require cryptographic human sign-offs before mutating mission-critical production data.",
        personas: [
          {
            name: "Devon Vance",
            role: "Principal Enterprise Architect",
            painPoints: [
              "Shadow AI integrations causing data leakage across unauthorized LLMs",
              "Lack of observability and trace replay for non-deterministic agent workflows",
              "Brittle custom glue code between Salesforce, SAP, and internal Postgres databases"
            ],
            jobsToBeDone: [
              "Define guardrailed agent execution graphs with SLA timeouts",
              "Audit every token, tool invocation, and DB mutation in real time",
              "Roll out pre-approved skill libraries to departmental engineering squads"
            ],
            keyBenefit: "Zero-data-leakage orchestration with sub-100ms distributed tracing and strict SOC2/HIPAA audit trails."
          },
          {
            name: "Samantha Reed",
            role: "Head of RevOps & Compliance",
            painPoints: [
              "Sales contract approval cycles take 6 days due to manual redline comparisons",
              "Lack of granular approval gating for contracts over $50k"
            ],
            jobsToBeDone: [
              "Review automated clause variance suggestions in real time",
              "One-click multi-tier executive approval via mobile notifications"
            ],
            keyBenefit: "Reduces contract reconciliation from 6 days to 14 minutes while maintaining 100% legal checklist adherence."
          }
        ],
        conversionMetrics: [
          {
            metric: "Workflow Completion Velocity (WCV)",
            target: "< 45 seconds per complex 10-step swarm task",
            rationale: "Ensures real-time responsiveness for interactive enterprise end users.",
            type: "NorthStar"
          },
          {
            metric: "Agent Guardrail Pass Rate",
            target: "≥ 99.85%",
            rationale: "Prevents hallucinations from escaping to customer-facing communication channels.",
            type: "Primary"
          },
          {
            metric: "Human-in-the-Loop SLA Resolution",
            target: "< 5 minutes median review latency",
            rationale: "Maintains business continuity during exception escalations.",
            type: "Secondary"
          }
        ]
      },
      featureMatrix: [
        {
          id: "feat-1",
          name: "Visual DAG Workflow Builder & Graph Execution Engine",
          tier: "Must-Have (MVP)",
          category: "Workflow Studio",
          description: "Interactive node-based canvas for composing agent pipelines, conditional branchers, human-in-the-loop gates, and parallel swarm tasks.",
          impact: "High",
          effort: "High",
          userStory: "As an Architect, I want to drag and connect LLM reasoning nodes to REST tools so I can visually inspect workflow topology without writing boilerplate code.",
          completed: true
        },
        {
          id: "feat-2",
          name: "Real-Time Telemetry & Token Cost Attributor",
          tier: "Must-Have (MVP)",
          category: "Observability",
          description: "Live streaming timeline of tool calls, prompt token consumption, memory retrieval latencies, and dollar cost attribution per workspace.",
          impact: "High",
          effort: "Medium",
          userStory: "As a VP of Eng, I want to track token spend per department so I can manage LLM unit economics accurately.",
          completed: true
        },
        {
          id: "feat-3",
          name: "Cryptographic Human Approval Gateway (mTLS + WebAuthn)",
          tier: "Must-Have (MVP)",
          category: "Security & Governance",
          description: "Hardware token / Biometric approval modals triggered whenever an agent requests high-privilege actions like financial transfers or DB drops.",
          impact: "High",
          effort: "Medium",
          userStory: "As a Compliance Officer, I want high-risk agent actions to halt until authorized with my Passkey.",
          completed: true
        },
        {
          id: "feat-4",
          name: "Automated Synthetic Evaluation & Replay Benchmarks",
          tier: "Should-Have (v2)",
          category: "Evals & Testing",
          description: "Automated regression testing suite that runs simulated edge-case inputs against agent pipelines before deployment to production.",
          impact: "Medium",
          effort: "High",
          userStory: "As a Developer, I want to run 500 regression test cases against my agent prompt changes in CI/CD before merging to main.",
          completed: false
        },
        {
          id: "feat-5",
          name: "Self-Healing Dynamic Prompt & Model Routing",
          tier: "Future Innovations",
          category: "AI Autonomy",
          description: "Machine learning classifier that dynamically switches between Gemini 3.7 Flash and Pro based on prompt complexity, latency budget, and confidence scores.",
          impact: "High",
          effort: "High",
          userStory: "As a Platform Engineer, I want the system to fall back to smaller models for simple lookups to save 60% compute budget.",
          completed: false
        }
      ],
      userFlowSequence: [
        {
          stepNumber: 1,
          phase: "Onboarding & Auth",
          action: "Enterprise SSO login via Okta SAML 2.0 / OIDC with hardware MFA.",
          systemResponse: "Validates JWT, issues session cookie with HttpOnly & SameSite=Strict flags, loads tenant workspace schema.",
          fallbackOrEdgeCase: "If session expired, initiates silent refresh via refresh token or prompts Passkey challenge.",
          keyScreen: "Enterprise SSO Portal / Workspace Switcher"
        },
        {
          stepNumber: 2,
          phase: "Core Value Discovery",
          action: "Architect selects 'New Agent Swarm' template from enterprise catalog or imports OpenAPI spec.",
          systemResponse: "Pre-populates vector memory bindings, environment secrets isolation, and default safety policies.",
          fallbackOrEdgeCase: "If schema validation fails on OpenAPI, highlights incompatible parameter schemas.",
          keyScreen: "Template Catalog & Visual Graph Canvas"
        },
        {
          stepNumber: 3,
          phase: "Core Interaction",
          action: "Architect connects Document Parser agent -> Compliance Checker -> ERP Writer with human sign-off condition.",
          systemResponse: "Validates graph acyclicity, compiles Temporal workflow definition, and deploys worker pods in real-time.",
          fallbackOrEdgeCase: "Detects cyclic dependencies or missing auth credentials for ERP Writer and flags node in amber.",
          keyScreen: "Visual Graph Canvas & Node Inspector"
        },
        {
          stepNumber: 4,
          phase: "Value Retention & Expansion",
          action: "Live execution triggers; human reviewer receives push alert and signs off on ERP transaction via one-tap biometric prompt.",
          systemResponse: "Appends signed audit signature to append-only ledger, notifies downstream workers, and increments tenant SLA dashboard.",
          fallbackOrEdgeCase: "If timeout passes 30 minutes, routes alert to secondary on-call engineer via PagerDuty webhook.",
          keyScreen: "Live Trace Timeline & Audit Ledger"
        }
      ]
    },
    techArchitecture: {
      techStack: {
        frontend: {
          name: "Next.js / React 19 + Tailwind CSS + Motion",
          framework: "React 19 with Vite & TypeScript 5.8",
          libraries: ["lucide-react", "motion", "recharts", "@tanstack/react-query", "zustand"],
          rationale: "Sub-millisecond interactive state transitions, declarative animation choreography for node DAGs, and typed client contracts."
        },
        backend: {
          runtime: "Node.js 22 LTS / Go 1.23 Microservices",
          framework: "Fastify / Express with gRPC & GraphQL Federation",
          apiType: "REST v1 + GraphQL Gateway + Server-Sent Events (SSE) for Real-Time Traces",
          rationale: "High throughput asynchronous event handling, minimal cold-start overhead, and native schema validation."
        },
        database: {
          primary: "PostgreSQL 16 with Row-Level Security (RLS) & pgvector",
          caching: "Redis 7.2 Cluster with Redis Streams for Pub/Sub",
          searchOrVector: "pgvector + Pinecone for hybrid semantic context retrieval",
          rationale: "ACID compliance for enterprise transactions combined with vector similarity search for agent memory retrieval."
        },
        auth: {
          provider: "OIDC / Okta / Azure AD / Auth0 Enterprise SSO",
          mechanism: "JWT Bearer tokens with RS256 signing, short-lived 15-min access tokens & rotating refresh tokens",
          rbacLevels: ["SuperAdmin", "WorkspaceAdmin", "PromptEngineer", "Auditor", "Viewer"],
          rationale: "Strict multi-tenant privilege separation ensuring customer data isolation across enterprise boundaries."
        },
        infrastructure: {
          cloud: "Google Cloud Platform (GKE & Cloud Run)",
          compute: "Autoscaling Kubernetes Node Pools with KEDA event-driven scaling",
          cicd: "GitHub Actions + ArgoCD GitOps pipelines",
          cdn: "Cloudflare Enterprise with WAF & DDoS mitigation",
          rationale: "Zero-downtime rolling deployments with automatic geographic multi-region failover."
        },
        observability: {
          logging: "OpenTelemetry + Grafana Loki structured JSON logs",
          metrics: "Prometheus + Grafana Dashboards for p95/p99 latency",
          tracing: "Jaeger distributed trace context propagation across all microservices"
        }
      },
      systemArchitectureDiagram: {
        overview: "End-to-end event-driven architecture isolating public-facing ingress through Cloudflare WAF, routing through API Gateway to stateless worker pools coordinated by Redis Streams and Temporal.io orchestrators.",
        nodes: [
          { id: "client", label: "React / Mobile Web Ingress", category: "client", details: "PWA with local state cache & SSE subscriber" },
          { id: "cdn", label: "Cloudflare WAF & Edge Cache", category: "gateway", details: "SSL termination, rate limiting & bot mitigation" },
          { id: "gateway", label: "Kong API Gateway & Envoy", category: "gateway", details: "JWT validation, request routing & circuit breaking" },
          { id: "temporal", label: "Temporal.io Orchestrator", category: "service", details: "Deterministic state machine and saga execution" },
          { id: "agent_workers", label: "Agent Execution Pods (K8s)", category: "service", details: "Sandboxed Python/Node runners with tool connectors" },
          { id: "gemini_api", label: "Gemini 3.7 Flash & Pro Models", category: "thirdParty", details: "LLM reasoning with server-side API key isolation" },
          { id: "postgres", label: "Cloud SQL Postgres 16 (Primary)", category: "storage", details: "Multi-tenant partitioned tables with RLS & pgvector" },
          { id: "redis", label: "Redis Cluster 7.2 (Pub/Sub)", category: "storage", details: "Real-time state broadcast and rate-limit counters" }
        ],
        dataFlowSteps: [
          { from: "client", to: "cdn", protocol: "HTTPS / TLS 1.3", description: "User triggers workflow execution with Bearer JWT" },
          { from: "cdn", to: "gateway", protocol: "HTTP/2", description: "Edge passes sanitized request to internal API Gateway" },
          { from: "gateway", to: "temporal", protocol: "gRPC", description: "Gateway spawns new workflow instance with payload" },
          { from: "temporal", to: "agent_workers", protocol: "gRPC Task Queue", description: "Dispatches individual node task to available worker pod" },
          { from: "agent_workers", to: "gemini_api", protocol: "HTTPS / REST", description: "Worker queries model with system instructions and tools" },
          { from: "agent_workers", to: "postgres", protocol: "Postgres Wire Protocol", description: "Persists step output and updates vector embeddings" },
          { from: "agent_workers", to: "redis", protocol: "Redis RESP3", description: "Publishes live trace event for client SSE stream" }
        ]
      },
      dataSchemaModel: {
        dbType: "PostgreSQL 16 + pgvector",
        entities: [
          {
            tableName: "workspaces",
            description: "Top-level enterprise tenant boundary enforcing strict data isolation.",
            fields: [
              { name: "id", type: "UUID", constraints: "PRIMARY KEY DEFAULT gen_random_uuid()", isPrimaryKey: true, description: "Unique workspace UUID" },
              { name: "name", type: "VARCHAR(255)", constraints: "NOT NULL", description: "Organization name" },
              { name: "slug", type: "VARCHAR(100)", constraints: "UNIQUE NOT NULL", description: "URL-friendly tenant identifier" },
              { name: "plan_tier", type: "VARCHAR(50)", constraints: "NOT NULL DEFAULT 'enterprise'", description: "Billing tier: enterprise, pro, starter" },
              { name: "created_at", type: "TIMESTAMPTZ", constraints: "DEFAULT NOW()", description: "Creation timestamp" }
            ]
          },
          {
            tableName: "workflows",
            description: "Agent graph definitions with serialized DAG topology and triggers.",
            fields: [
              { name: "id", type: "UUID", constraints: "PRIMARY KEY DEFAULT gen_random_uuid()", isPrimaryKey: true, description: "Workflow UUID" },
              { name: "workspace_id", type: "UUID", constraints: "REFERENCES workspaces(id) ON DELETE CASCADE", isForeignKey: true, references: "workspaces(id)", description: "Owner tenant" },
              { name: "title", type: "VARCHAR(255)", constraints: "NOT NULL", description: "Human-readable workflow title" },
              { name: "graph_definition", type: "JSONB", constraints: "NOT NULL", description: "Serialized node vertices, edges, and parameter schemas" },
              { name: "status", type: "VARCHAR(50)", constraints: "DEFAULT 'active'", description: "State: draft, active, archived" },
              { name: "updated_at", type: "TIMESTAMPTZ", constraints: "DEFAULT NOW()", description: "Last modified timestamp" }
            ]
          },
          {
            tableName: "workflow_runs",
            description: "Execution instances with start/completion timestamps and status.",
            fields: [
              { name: "id", type: "UUID", constraints: "PRIMARY KEY DEFAULT gen_random_uuid()", isPrimaryKey: true, description: "Run instance UUID" },
              { name: "workflow_id", type: "UUID", constraints: "REFERENCES workflows(id) ON DELETE CASCADE", isForeignKey: true, references: "workflows(id)", description: "Parent workflow" },
              { name: "triggered_by_user_id", type: "UUID", constraints: "NOT NULL", description: "User ID or system webhook trigger" },
              { name: "status", type: "VARCHAR(50)", constraints: "NOT NULL DEFAULT 'running'", description: "running, completed, failed, awaiting_approval" },
              { name: "total_tokens", type: "INTEGER", constraints: "DEFAULT 0", description: "Aggregated LLM token consumption" },
              { name: "cost_usd", type: "NUMERIC(10, 4)", constraints: "DEFAULT 0.0000", description: "Dollar cost of compute & tokens" },
              { name: "duration_ms", type: "INTEGER", constraints: "DEFAULT 0", description: "Execution duration in milliseconds" },
              { name: "started_at", type: "TIMESTAMPTZ", constraints: "DEFAULT NOW()", description: "Run start timestamp" },
              { name: "completed_at", type: "TIMESTAMPTZ", constraints: "NULL", description: "Run completion timestamp" }
            ]
          },
          {
            tableName: "audit_approvals",
            description: "Cryptographic human-in-the-loop sign-off records.",
            fields: [
              { name: "id", type: "UUID", constraints: "PRIMARY KEY DEFAULT gen_random_uuid()", isPrimaryKey: true, description: "Approval record UUID" },
              { name: "run_id", type: "UUID", constraints: "REFERENCES workflow_runs(id) ON DELETE CASCADE", isForeignKey: true, references: "workflow_runs(id)", description: "Associated run" },
              { name: "node_id", type: "VARCHAR(100)", constraints: "NOT NULL", description: "Graph node that requested sign-off" },
              { name: "approver_email", type: "VARCHAR(255)", constraints: "NOT NULL", description: "Authorized user email" },
              { name: "decision", type: "VARCHAR(50)", constraints: "NOT NULL", description: "approved, rejected, escalated" },
              { name: "signature_hash", type: "VARCHAR(512)", constraints: "NOT NULL", description: "SHA-256 WebAuthn signature proof" },
              { name: "decided_at", type: "TIMESTAMPTZ", constraints: "DEFAULT NOW()", description: "Timestamp of decision" }
            ]
          }
        ],
        sqlDDL: `-- Enterprise NexusFlow Schema (PostgreSQL 16)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";

-- 1. Tenants
CREATE TABLE workspaces (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    plan_tier VARCHAR(50) NOT NULL DEFAULT 'enterprise',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Workflows DAGs
CREATE TABLE workflows (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workspace_id UUID NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    graph_definition JSONB NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'active',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Execution Runs
CREATE TABLE workflow_runs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workflow_id UUID NOT NULL REFERENCES workflows(id) ON DELETE CASCADE,
    triggered_by_user_id UUID NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'running',
    total_tokens INTEGER DEFAULT 0,
    cost_usd NUMERIC(10, 4) DEFAULT 0.0000,
    duration_ms INTEGER DEFAULT 0,
    started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

-- 4. Approvals Ledger
CREATE TABLE audit_approvals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    run_id UUID NOT NULL REFERENCES workflow_runs(id) ON DELETE CASCADE,
    node_id VARCHAR(100) NOT NULL,
    approver_email VARCHAR(255) NOT NULL,
    decision VARCHAR(50) NOT NULL,
    signature_hash VARCHAR(512) NOT NULL,
    decided_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Performance Indexes
CREATE INDEX idx_workflows_workspace ON workflows(workspace_id);
CREATE INDEX idx_runs_workflow_status ON workflow_runs(workflow_id, status);
CREATE INDEX idx_runs_started_at ON workflow_runs(started_at DESC);
CREATE INDEX idx_approvals_run_id ON audit_approvals(run_id);`,
        indexingStrategy: [
          "B-tree index on `workflows(workspace_id)` for tenant isolation queries",
          "Composite index on `workflow_runs(workflow_id, status)` for real-time status dashboards",
          "Descending index on `workflow_runs(started_at DESC)` for high-throughput pagination",
          "Hash index on `audit_approvals(run_id)` for sub-millisecond approval lookups"
        ]
      },
      apiEndpoints: [
        {
          id: "api-1",
          method: "POST",
          path: "/api/v1/workflows/{workflowId}/execute",
          summary: "Trigger an asynchronous agent swarm execution run",
          authRequired: true,
          rbacRole: "WorkspaceAdmin, PromptEngineer",
          headers: {
            "Authorization": "Bearer <JWT_TOKEN>",
            "Content-Type": "application/json",
            "X-Workspace-Id": "ws_99a8b7c6"
          },
          requestPayload: `{\n  "inputParameters": {\n    "contractDocumentUrl": "s3://nexus-docs/rev_agreements/ag_2026_90.pdf",\n    "thresholdUsd": 50000,\n    "requireHumanSignoff": true\n  },\n  "executionPriority": "high"\n}`,
          responsePayload: `{\n  "runId": "run_01j9a8bc43",\n  "workflowId": "wf_44882190",\n  "status": "running",\n  "estimatedDurationSeconds": 35,\n  "streamUrl": "/api/v1/runs/run_01j9a8bc43/live-stream"\n}`,
          curlExample: `curl -X POST https://api.nexusflow.ai/api/v1/workflows/wf_44882190/execute \\\n  -H "Authorization: Bearer $NEXUS_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d '{"inputParameters":{"thresholdUsd":50000,"requireHumanSignoff":true}}'`
        },
        {
          id: "api-2",
          method: "GET",
          path: "/api/v1/runs/{runId}/trace",
          summary: "Fetch detailed execution trace tree and token consumption breakdown",
          authRequired: true,
          rbacRole: "Viewer, Auditor, WorkspaceAdmin",
          headers: {
            "Authorization": "Bearer <JWT_TOKEN>",
            "Accept": "application/json"
          },
          responsePayload: `{\n  "runId": "run_01j9a8bc43",\n  "status": "completed",\n  "durationMs": 14280,\n  "totalTokens": 8940,\n  "costUsd": 0.0134,\n  "nodesExecuted": 7,\n  "approvals": [\n    {\n      "nodeId": "gate_finance_approval",\n      "decision": "approved",\n      "approver": "samantha.reed@enterprise.com",\n      "timestamp": "2026-08-15T14:22:10Z"\n    }\n  ]\n}`,
          curlExample: `curl -X GET https://api.nexusflow.ai/api/v1/runs/run_01j9a8bc43/trace \\\n  -H "Authorization: Bearer $NEXUS_TOKEN"`
        },
        {
          id: "api-3",
          method: "POST",
          path: "/api/v1/runs/{runId}/approvals/{nodeId}",
          summary: "Submit cryptographic human-in-the-loop sign-off or rejection",
          authRequired: true,
          rbacRole: "WorkspaceAdmin, Auditor",
          headers: {
            "Authorization": "Bearer <JWT_TOKEN>",
            "Content-Type": "application/json"
          },
          requestPayload: `{\n  "decision": "approved",\n  "comments": "Clause 4.2 variance approved per legal memo #882.",\n  "webAuthnSignature": "MEQCIFz...3d8x"\n}`,
          responsePayload: `{\n  "approvalId": "appr_776192",\n  "status": "resumed",\n  "unblockedNode": "erp_sap_writer"\n}`,
          curlExample: `curl -X POST https://api.nexusflow.ai/api/v1/runs/run_01j9a8bc43/approvals/gate_finance_approval \\\n  -H "Authorization: Bearer $NEXUS_TOKEN" \\\n  -H "Content-Type: application/json" \\\n  -d '{"decision":"approved","comments":"Verified."}'`
        }
      ]
    },
    uiUxComponentEngineering: {
      designTokens: {
        colorPalette: {
          background: "#0b0f19",
          surface: "#111827",
          surfaceMuted: "#1f2937",
          border: "#374151",
          primaryAccent: "#3b82f6",
          primaryAccentHover: "#2563eb",
          secondaryAccent: "#8b5cf6",
          textPrimary: "#f9fafb",
          textMuted: "#9ca3af",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          info: "#06b6d4"
        },
        typography: {
          fontDisplay: "Plus Jakarta Sans, system-ui, sans-serif",
          fontBody: "Inter, system-ui, sans-serif",
          fontMono: "JetBrains Mono, Menlo, monospace",
          scale: [
            { name: "Hero Heading (H1)", size: "36px", lineHeight: "44px", weight: "700 Bold", usage: "Main cockpit title & key performance metric labels" },
            { name: "Section Title (H2)", size: "24px", lineHeight: "32px", weight: "600 SemiBold", usage: "Module headings, canvas panel dividers" },
            { name: "Card Subheading (H3)", size: "18px", lineHeight: "26px", weight: "600 SemiBold", usage: "Node titles, modal dialog headers" },
            { name: "Body Regular", size: "15px", lineHeight: "24px", weight: "400 Regular", usage: "General descriptions, trace details, tables" },
            { name: "Code & Monospace", size: "13px", lineHeight: "20px", weight: "500 Medium", usage: "Payload previews, SQL DDL, cURL snippets" }
          ]
        },
        spacingAndLayout: {
          containerMaxWidth: "1440px",
          gridColumns: 12,
          spacingScale: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px"],
          borderRadiusTokens: {
            "sm": "6px",
            "md": "10px",
            "lg": "14px",
            "full": "9999px"
          }
        }
      },
      componentTree: [
        {
          id: "node-app",
          name: "AppRootLayout",
          type: "Layout",
          props: ["theme: 'dark'", "workspaceId: string"],
          stateFlow: "Provides global QueryClientProvider, AuthContext, and WebSocket connection pool.",
          children: ["NavigationSidebar", "TopGlobalCockpit", "DashboardView"]
        },
        {
          id: "node-dash",
          name: "SwarmCockpitDashboard",
          type: "Page",
          props: ["activeTab: 'cockpit' | 'builder' | 'traces' | 'audit'"],
          stateFlow: "Consumes useSwarmMetrics() hook with 2-second polling and SSE streaming updates.",
          children: ["MetricStatCards", "LiveRunStreamTable", "ActiveSwarmGraphPreview", "ApprovalGatingDrawer"],
          contextOrStore: "useSwarmStore"
        },
        {
          id: "node-metrics",
          name: "MetricStatCards",
          type: "Feature Container",
          props: ["metrics: SwarmMetricsSummary"],
          stateFlow: "Renders North Star throughput, average token efficiency, and active worker health.",
          children: ["StatCard"]
        },
        {
          id: "node-stream",
          name: "LiveRunStreamTable",
          type: "Feature Container",
          props: ["runs: WorkflowRunItem[]", "onSelectRun: (id) => void"],
          stateFlow: "Displays running agent pipelines with animated status pills, duration timers, and quick-action modals.",
          children: ["StatusBadge", "ActionDropdown"]
        },
        {
          id: "node-gate",
          name: "ApprovalGatingModal",
          type: "Primitive UI",
          props: ["approvalItem: PendingApproval", "onApprove: (signature) => Promise<void>"],
          stateFlow: "Prompts Passkey / WebAuthn biometric prompt, locks buttons during mutation, dispatches API sign-off."
        }
      ],
      coreDashboardMockup: {
        title: "Enterprise Swarm Cockpit & Orchestration Dashboard",
        description: "Primary mission-control dashboard providing real-time telemetry on running agent swarms, active approval gates, token cost velocities, and single-click workflow execution.",
        interactiveStateSummary: "Simulates live agent worker heartbeats, approval queue progression, and real-time execution trigger.",
        reactTailwindCode: `import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, AlertCircle, Play, CheckCircle2, Clock, Server } from 'lucide-react';

export default function SwarmCockpit() {
  const [activeRuns, setActiveRuns] = useState([
    { id: 'RUN-9021', name: 'Vendor Contract Risk Evaluation', agent: 'LegalAnalyst-v4', status: 'awaiting_approval', tokens: '14.2k', cost: '$0.021', duration: '18s' },
    { id: 'RUN-9022', name: 'Quarterly SAP Ledger Reconciliation', agent: 'LedgerBot-Pro', status: 'running', tokens: '42.1k', cost: '$0.063', duration: '41s' },
    { id: 'RUN-9020', name: 'SOC2 Access Anomaly Classifier', agent: 'SecOps-Sentinel', status: 'completed', tokens: '8.4k', cost: '$0.012', duration: '9s' }
  ]);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleApprove = (id: string) => {
    setActiveRuns(prev => prev.map(r => r.id === id ? { ...r, status: 'completed' } : r));
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 p-6">
      {/* Header Bar */}
      <header className="flex items-center justify-between pb-6 border-b border-gray-800">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Zap className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold tracking-tight">NexusFlow Swarm Cockpit</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 12 Workers Online
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Real-time autonomous agent execution and human-in-the-loop governance</p>
        </div>

        <button 
          onClick={() => {
            setIsExecuting(true);
            setTimeout(() => {
              setActiveRuns(prev => [{ id: \`RUN-\${Math.floor(1000 + Math.random() * 9000)}\`, name: 'Real-Time Inventory Rebalancing', agent: 'LogisticsSwarm-v2', status: 'running', tokens: '12.0k', cost: '$0.018', duration: '3s' }, ...prev]);
              setIsExecuting(false);
            }, 800);
          }}
          disabled={isExecuting}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-lg font-medium text-sm flex items-center gap-2 transition shadow-lg shadow-blue-500/20"
        >
          <Play className="w-4 h-4 fill-current" />
          {isExecuting ? 'Spawning Swarm...' : 'Trigger Swarm Run'}
        </button>
      </header>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-gray-400 text-xs font-semibold uppercase tracking-wider">
            <span>Workflow Velocity</span>
            <Activity className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-3xl font-bold mt-2 text-white">28.4s</p>
          <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">↓ 14% latency vs last week</p>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-gray-400 text-xs font-semibold uppercase tracking-wider">
            <span>Guardrail Compliance</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-3xl font-bold mt-2 text-white">99.92%</p>
          <p className="text-xs text-gray-400 mt-1">0 policy violations escaped</p>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-gray-400 text-xs font-semibold uppercase tracking-wider">
            <span>Pending Approvals</span>
            <AlertCircle className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-3xl font-bold mt-2 text-amber-300">
            {activeRuns.filter(r => r.status === 'awaiting_approval').length}
          </p>
          <p className="text-xs text-amber-400/80 mt-1">Requires biometric authorization</p>
        </div>

        <div className="bg-[#111827] border border-gray-800 rounded-xl p-5">
          <div className="flex items-center justify-between text-gray-400 text-xs font-semibold uppercase tracking-wider">
            <span>Token Efficiency</span>
            <Server className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-3xl font-bold mt-2 text-white">$0.0018</p>
          <p className="text-xs text-gray-400 mt-1">Avg cost per resolved step</p>
        </div>
      </div>

      {/* Live Runs Table */}
      <div className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Live Execution Pipeline Stream</h2>
          <span className="text-xs text-gray-400">Auto-refreshing via SSE (Sub-100ms)</span>
        </div>
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="bg-[#0f1523] text-gray-400 text-xs uppercase font-medium">
            <tr>
              <th className="px-6 py-3">Run Identifier</th>
              <th className="px-6 py-3">Workflow Name</th>
              <th className="px-6 py-3">Assigned Swarm</th>
              <th className="px-6 py-3">Tokens / Cost</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {activeRuns.map(run => (
              <tr key={run.id} className="hover:bg-[#1a2333]/50 transition">
                <td className="px-6 py-4 font-mono text-xs text-blue-400 font-semibold">{run.id}</td>
                <td className="px-6 py-4 font-medium text-white">{run.name}</td>
                <td className="px-6 py-4 text-xs text-gray-400">{run.agent}</td>
                <td className="px-6 py-4 font-mono text-xs text-gray-300">{run.tokens} <span className="text-gray-500">({run.cost})</span></td>
                <td className="px-6 py-4">
                  {run.status === 'running' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Clock className="w-3.5 h-3.5 animate-spin" /> Running ({run.duration})
                    </span>
                  )}
                  {run.status === 'awaiting_approval' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse">
                      <AlertCircle className="w-3.5 h-3.5" /> Sign-off Required
                    </span>
                  )}
                  {run.status === 'completed' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  {run.status === 'awaiting_approval' ? (
                    <button 
                      onClick={() => handleApprove(run.id)}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-medium transition shadow"
                    >
                      Authorize Passkey
                    </button>
                  ) : (
                    <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded text-xs transition">
                      View Trace
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}`,
        swiftUiCode: `import SwiftUI

struct SwarmCockpitView: View {
    @State private var activeRuns = [
        RunItem(id: "RUN-9021", title: "Vendor Contract Risk Evaluation", status: .awaitingApproval, cost: "$0.021"),
        RunItem(id: "RUN-9022", title: "Quarterly SAP Reconciliation", status: .running, cost: "$0.063"),
        RunItem(id: "RUN-9020", title: "SOC2 Access Anomaly Classifier", status: .completed, cost: "$0.012")
    ]
    
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    // Header Metrics
                    HStack(spacing: 12) {
                        MetricCard(title: "Velocity", value: "28.4s", subtitle: "↓ 14% latency", color: .blue)
                        MetricCard(title: "Compliance", value: "99.9%", subtitle: "0 violations", color: .green)
                        MetricCard(title: "Approvals", value: "\\(activeRuns.filter { $0.status == .awaitingApproval }.count)", subtitle: "Biometric req.", color: .orange)
                    }
                    .padding(.horizontal)
                    
                    // Runs List
                    VStack(alignment: .leading, spacing: 12) {
                        Text("Active Pipeline Swarms")
                            .font(.headline)
                            .foregroundColor(.primary)
                            .padding(.horizontal)
                        
                        ForEach(activeRuns) { run in
                            HStack {
                                VStack(alignment: .leading, spacing: 4) {
                                    Text(run.title).font(.subheadline).bold()
                                    Text(run.id).font(.caption).monospaced().foregroundColor(.secondary)
                                }
                                Spacer()
                                if run.status == .awaitingApproval {
                                    Button("Authorize") {
                                        if let idx = activeRuns.firstIndex(where: { $0.id == run.id }) {
                                            activeRuns[idx].status = .completed
                                        }
                                    }
                                    .buttonStyle(.borderedProminent)
                                    .tint(.green)
                                }
                            }
                            .padding()
                            .background(Color(uiColor: .secondarySystemBackground))
                            .cornerRadius(12)
                            .padding(.horizontal)
                        }
                    }
                }
            }
            .navigationTitle("NexusFlow Cockpit")
            .background(Color(uiColor: .systemGroupedBackground))
        }
    }
}`,
        jetpackComposeCode: `@Composable
fun SwarmCockpitScreen(viewModel: SwarmViewModel = viewModel()) {
    val runs by viewModel.runs.collectAsState()
    
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("NexusFlow Swarm Cockpit", fontWeight = FontWeight.Bold) },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = MaterialTheme.colorScheme.surface)
            )
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier
                .padding(padding)
                .fillMaxSize()
                .background(Color(0xFF0B0F19))
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            item {
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    MetricWidget("Velocity", "28.4s", Color(0xFF3B82F6), Modifier.weight(1f))
                    MetricWidget("Compliance", "99.92%", Color(0xFF10B981), Modifier.weight(1f))
                    MetricWidget("Sign-offs", "1 Req", Color(0xFFF59E0B), Modifier.weight(1f))
                }
            }
            items(runs) { run ->
                RunCard(run = run, onApprove = { viewModel.approveRun(run.id) })
            }
        }
    }
}`
      }
    }
  },
  {
    id: "medpulse-health",
    name: "MedPulse Health",
    tagline: "HIPAA-Compliant Remote Patient Monitoring & Telehealth Clinical Platform",
    coreConcept: "An end-to-end clinical telemedicine and continuous biometric telemetry platform connecting continuous glucose monitors, smart ECG wearables, and EHR integration with automated triage triggers.",
    targetAudience: "Chief Medical Officers, Attending Physicians, Registered Nurses, Clinical Operations",
    domain: "HealthTech & Telemedicine",
    platform: "Web Provider Portal & Patient iOS/Android Native Apps",
    architectureStyle: "HIPAA-Compliant Microservices with FHIR HL7 & Kafka",
    version: "2.1.0",
    createdAt: "2026-08-10",
    prd: {
      coreValueProp: {
        primaryProblem: "Chronic care patients experience high readmission rates due to unmonitored between-visit vital deterioration, while clinicians are overwhelmed by alert fatigue from raw, uncontextualized sensor data.",
        coreSolution: "MedPulse ingests FDA-cleared wearable telemetry in real time, normalizes signals to HL7 FHIR standards, and surfaces clinical priority triage scores to care teams with embedded 1-click WebRTC encrypted telehealth visits.",
        personas: [
          {
            name: "Dr. Elena Rostova",
            role: "Chief Cardiologist & Care Team Lead",
            painPoints: [
              "Reviewing hundreds of daily asynchronous ECG strips manually without automated baseline deviation detection",
              "Fragmented patient records isolated inside legacy Epic EHR silos"
            ],
            jobsToBeDone: [
              "Receive prioritized push alerts for sustained ventricular arrhythmia",
              "Initiate encrypted video consultation with 1-click chart review"
            ],
            keyBenefit: "Filters 85% of false-positive wearable alerts while catching 99.4% of actionable cardiovascular events."
          }
        ],
        conversionMetrics: [
          {
            metric: "30-Day Hospital Readmission Rate",
            target: "< 7.2% for enrolled heart failure cohort",
            rationale: "Primary clinical value metric for hospital insurance reimbursement.",
            type: "NorthStar"
          },
          {
            metric: "Critical Alert Mean-Time-to-Triage (MTTT)",
            target: "< 90 seconds from threshold trigger to RN review",
            rationale: "Prevents acute patient emergency room dispatch.",
            type: "Primary"
          }
        ]
      },
      featureMatrix: [
        {
          id: "feat-med-1",
          name: "Real-Time Biometric Stream & FHIR Clinical Ingestion",
          tier: "Must-Have (MVP)",
          category: "Telemetry Ingestion",
          description: "Bluetooth LE sync with Dexcom CGM, Apple HealthKit ECG, and Omron blood pressure cuffs streaming into secure FHIR Observation records.",
          impact: "High",
          effort: "High",
          userStory: "As a Clinician, I want continuous vital trends charted with standard deviations so I can identify decompensation before acute symptoms occur.",
          completed: true
        },
        {
          id: "feat-med-2",
          name: "E2E Encrypted WebRTC Telehealth Suite with Chart Overlay",
          tier: "Must-Have (MVP)",
          category: "Telemedicine",
          description: "HIPAA-compliant high-definition video consultation room with live vital telemetry HUD and real-time medical dictation notes.",
          impact: "High",
          effort: "High",
          userStory: "As a Physician, I want to consult my patient face-to-face while live vitals are pinned directly in my sidebar.",
          completed: true
        },
        {
          id: "feat-med-3",
          name: "Automated Clinical Decision Support (CDS) Rule Engine",
          tier: "Must-Have (MVP)",
          category: "Clinical Logic",
          description: "Configurable threshold alerts for systolic spikes, SpO2 dips, and sudden weight gain associated with fluid retention.",
          impact: "High",
          effort: "Medium",
          userStory: "As a Care Coordinator, I want automated task assignment when a patient gains >3 lbs in 48 hours.",
          completed: true
        }
      ],
      userFlowSequence: [
        {
          stepNumber: 1,
          phase: "Onboarding & Auth",
          action: "Patient registers via magic link invitation from clinic, completes HIPAA consent, and connects Apple Health / Dexcom sensor.",
          systemResponse: "Encrypts patient credentials, creates FHIR Patient entity, establishes secure BLE stream pipe.",
          fallbackOrEdgeCase: "If BLE pairing fails, opens step-by-step interactive troubleshooting modal.",
          keyScreen: "Patient Sensor Pairing HUD"
        },
        {
          stepNumber: 2,
          phase: "Core Value Discovery",
          action: "Sensor streams SpO2 drop to 89%; CDS engine flags high-risk cardiac decompensation rule.",
          systemResponse: "Promotes patient to top of RN triage board with audible high-priority chime and SMS notification to on-call clinician.",
          fallbackOrEdgeCase: "If device signal is noisy, prompts patient to re-fasten finger probe before dispatching alert.",
          keyScreen: "RN Real-Time Triage Grid"
        },
        {
          stepNumber: 3,
          phase: "Core Interaction",
          action: "Clinician taps 'Initiate Telehealth Emergency Room'; patient device rings with instant answer prompt.",
          systemResponse: "Connects AES-256 encrypted peer-to-peer WebRTC video stream; overlays live ECG trace and prescription pad.",
          fallbackOrEdgeCase: "If patient has poor cellular data, automatically falls back to VoIP audio-only mode.",
          keyScreen: "Encrypted WebRTC Telehealth Suite"
        }
      ]
    },
    techArchitecture: {
      techStack: {
        frontend: {
          name: "React 19 + Tailwind CSS + WebRTC / LiveKit",
          framework: "Vite + TypeScript with PWA Service Workers for offline triage",
          libraries: ["lucide-react", "recharts", "livekit-client", "motion"],
          rationale: "Ultra low-latency video streaming, WCAG AAA clinical accessibility contrast, and high-frequency time-series charting."
        },
        backend: {
          runtime: "Node.js 22 + Go Telemetry Ingest Gateway",
          framework: "NestJS Microservices with FHIR R4 Schema Validator",
          apiType: "REST v2 + FHIR JSON over HTTPS + WebSocket Vitals Stream",
          rationale: "Strict type safety for healthcare data specifications and high concurrency for continuous biometric streams."
        },
        database: {
          primary: "Cloud SQL PostgreSQL 16 with HIPAA BAA & TimescaleDB Extension",
          caching: "Encrypted Redis Cluster with TLS",
          searchOrVector: "OpenSearch with PHI de-identification filters",
          rationale: "TimescaleDB handles millions of time-series biometric datapoints per minute with continuous aggregation."
        },
        auth: {
          provider: "AWS Cognito / Okta Health with SMART-on-FHIR OAuth 2.0",
          mechanism: "FIPS 140-2 validated token encryption with short 10-minute expiry and biometric touch sign-in",
          rbacLevels: ["AttendingPhysician", "RegisteredNurse", "MedicalAssistant", "Patient", "BillingAuditor"],
          rationale: "Mandatory HIPAA role-based access control with comprehensive immutable audit logging."
        },
        infrastructure: {
          cloud: "AWS GovCloud / Google Cloud Healthcare API",
          compute: "HIPAA-hardened Kubernetes EKS clusters with KMS encryption-at-rest",
          cicd: "GitLab CI with automated static vulnerability scanning (SAST/DAST)",
          cdn: "Cloudflare Healthcare with signed URL video streams",
          rationale: "Full HIPAA BAA compliance across all network tiers with end-to-end data isolation."
        },
        observability: {
          logging: "AWS CloudWatch Audit Trails + Splunk Enterprise Security",
          metrics: "Datadog APM with HIPAA compliance dashboard",
          tracing: "AWS X-Ray for sub-segment FHIR bundle latency tracking"
        }
      },
      systemArchitectureDiagram: {
        overview: "HIPAA-certified microservices network isolating protected health information (PHI) behind zero-trust Envoy service meshes and dedicated TimescaleDB timeseries partitions.",
        nodes: [
          { id: "patient_app", label: "Patient iOS/Android App", category: "client", details: "Native BLE sensor ingestion & WebRTC client" },
          { id: "provider_web", label: "Provider Clinical Portal", category: "client", details: "React 19 WebRTC clinical dashboard" },
          { id: "fhir_gateway", label: "SMART-on-FHIR Gateway", category: "gateway", details: "OAuth 2.0 PHI token inspection and rate limiter" },
          { id: "cds_engine", label: "CDS Clinical Rule Engine", category: "service", details: "Real-time anomaly scoring & alert dispatch" },
          { id: "livekit_server", label: "LiveKit SFU (WebRTC)", category: "service", details: "E2E encrypted video and vital audio bridge" },
          { id: "timescale_db", label: "TimescaleDB (PostgreSQL 16)", category: "storage", details: "Partitioned clinical observations & vitals" }
        ],
        dataFlowSteps: [
          { from: "patient_app", to: "fhir_gateway", protocol: "mTLS / HTTPS", description: "Streams raw SpO2/ECG packets with patient token" },
          { from: "fhir_gateway", to: "timescale_db", protocol: "Postgres Wire TLS", description: "Stores FHIR Observation resource" },
          { from: "fhir_gateway", to: "cds_engine", protocol: "Kafka Event", description: "Evaluates vital reading against clinical thresholds" },
          { from: "cds_engine", to: "provider_web", protocol: "WebSocket TLS", description: "Pushes real-time triage priority update to clinician" }
        ]
      },
      dataSchemaModel: {
        dbType: "PostgreSQL 16 with TimescaleDB & FHIR R4",
        entities: [
          {
            tableName: "fhir_patients",
            description: "Core patient demographic records with encrypted MRN and emergency contacts.",
            fields: [
              { name: "id", type: "UUID", constraints: "PRIMARY KEY DEFAULT gen_random_uuid()", isPrimaryKey: true, description: "FHIR Patient Resource ID" },
              { name: "mrn_encrypted", type: "BYTEA", constraints: "NOT NULL", description: "AES-GCM-256 encrypted Medical Record Number" },
              { name: "name_family", type: "VARCHAR(100)", constraints: "NOT NULL", description: "Patient last name" },
              { name: "name_given", type: "VARCHAR(100)", constraints: "NOT NULL", description: "Patient first name" },
              { name: "birth_date", type: "DATE", constraints: "NOT NULL", description: "DOB for age risk modeling" },
              { name: "primary_condition", type: "VARCHAR(100)", constraints: "NOT NULL", description: "ICD-10 primary diagnosis code (e.g., I50.9 Heart Failure)" }
            ]
          },
          {
            tableName: "vital_observations",
            description: "Timeseries biometric data ingested from Bluetooth wearables.",
            fields: [
              { name: "time", type: "TIMESTAMPTZ", constraints: "NOT NULL", isPrimaryKey: true, description: "Timestamp of measurement" },
              { name: "patient_id", type: "UUID", constraints: "REFERENCES fhir_patients(id)", isForeignKey: true, description: "Patient UUID" },
              { name: "code_loinc", type: "VARCHAR(50)", constraints: "NOT NULL", description: "LOINC code (e.g., 8867-4 for Heart Rate, 2708-6 for SpO2)" },
              { name: "value_numeric", type: "DOUBLE PRECISION", constraints: "NOT NULL", description: "Measured vital value" },
              { name: "unit", type: "VARCHAR(30)", constraints: "NOT NULL", description: "bpm, %, mmHg, mg/dL" },
              { name: "is_anomaly", type: "BOOLEAN", constraints: "DEFAULT FALSE", description: "Flagged by CDS rule engine" }
            ]
          }
        ],
        sqlDDL: `-- MedPulse HIPAA Compliant Schema
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "timescaledb";

CREATE TABLE fhir_patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    mrn_encrypted BYTEA NOT NULL,
    name_family VARCHAR(100) NOT NULL,
    name_given VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL,
    primary_condition VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE vital_observations (
    time TIMESTAMPTZ NOT NULL,
    patient_id UUID NOT NULL REFERENCES fhir_patients(id),
    code_loinc VARCHAR(50) NOT NULL,
    value_numeric DOUBLE PRECISION NOT NULL,
    unit VARCHAR(30) NOT NULL,
    is_anomaly BOOLEAN DEFAULT FALSE
);

-- Convert to Timescale Hypertable
SELECT create_hypertable('vital_observations', 'time');

CREATE INDEX idx_vitals_patient_time ON vital_observations (patient_id, time DESC);`,
        indexingStrategy: [
          "TimescaleDB hypertable chunking on 7-day intervals",
          "Composite B-tree index on `vital_observations(patient_id, time DESC)` for sub-millisecond timeline charts",
          "Index on `fhir_patients(primary_condition)` for cohort clinical analytics"
        ]
      },
      apiEndpoints: [
        {
          id: "api-med-1",
          method: "POST",
          path: "/fhir/r4/Observation",
          summary: "Ingest standard FHIR biometric observation from patient medical device",
          authRequired: true,
          rbacRole: "Patient, MedicalDeviceService",
          headers: {
            "Authorization": "Bearer <SMART_ON_FHIR_JWT>",
            "Content-Type": "application/fhir+json"
          },
          requestPayload: `{\n  "resourceType": "Observation",\n  "status": "final",\n  "code": {\n    "coding": [{\n      "system": "http://loinc.org",\n      "code": "8867-4",\n      "display": "Heart rate"\n    }]\n  },\n  "subject": { "reference": "Patient/pat_88190" },\n  "effectiveDateTime": "2026-08-15T09:12:00Z",\n  "valueQuantity": {\n    "value": 118,\n    "unit": "beats/minute",\n    "system": "http://unitsofmeasure.org",\n    "code": "/min"\n  }\n}`,
          responsePayload: `{\n  "id": "obs_019a82bb",\n  "status": "ingested",\n  "alertTriggered": true,\n  "triageSeverity": "HIGH_TACHYCARDIA"\n}`,
          curlExample: `curl -X POST https://api.medpulse.health/fhir/r4/Observation \\\n  -H "Authorization: Bearer $FHIR_TOKEN" \\\n  -H "Content-Type: application/fhir+json" \\\n  -d '{"resourceType":"Observation","valueQuantity":{"value":118,"unit":"/min"}}'`
        }
      ]
    },
    uiUxComponentEngineering: {
      designTokens: {
        colorPalette: {
          background: "#0a101d",
          surface: "#0f172a",
          surfaceMuted: "#1e293b",
          border: "#334155",
          primaryAccent: "#0ea5e9",
          primaryAccentHover: "#0284c7",
          secondaryAccent: "#14b8a6",
          textPrimary: "#f8fafc",
          textMuted: "#94a3b8",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#f43f5e",
          info: "#38bdf8"
        },
        typography: {
          fontDisplay: "Inter, system-ui, sans-serif",
          fontBody: "Inter, system-ui, sans-serif",
          fontMono: "JetBrains Mono, monospace",
          scale: [
            { name: "Clinical Title", size: "28px", lineHeight: "36px", weight: "700 Bold", usage: "Patient name, primary diagnosis banner" },
            { name: "Vital Digits", size: "32px", lineHeight: "38px", weight: "800 ExtraBold", usage: "Real-time SpO2, HR, BP numbers" },
            { name: "Label Small", size: "12px", lineHeight: "16px", weight: "600 SemiBold", usage: "Medical unit indicators and alert pills" }
          ]
        },
        spacingAndLayout: {
          containerMaxWidth: "1600px",
          gridColumns: 12,
          spacingScale: ["4px", "8px", "12px", "16px", "24px", "32px"]
        }
      },
      componentTree: [
        {
          id: "node-provider",
          name: "ProviderTriageDashboard",
          type: "Page",
          props: ["clinicId: string", "nurseOnDuty: string"],
          stateFlow: "Maintains real-time WebSocket connection to CDS vital alert bus.",
          children: ["HighRiskTriageQueue", "LivePatientVitalsHUD", "TelehealthConsultModal"]
        }
      ],
      coreDashboardMockup: {
        title: "Clinical Triage & Telehealth Provider Cockpit",
        description: "High-contrast clinical command center displaying real-time patient ECG waveforms, SpO2 trend alerts, and 1-click encrypted video launch.",
        interactiveStateSummary: "Simulates patient alert acknowledgment, vital waveform fluctuation, and emergency call launch.",
        reactTailwindCode: `import React, { useState } from 'react';
import { Heart, Activity, Video, AlertTriangle, Shield, User, PhoneCall } from 'lucide-react';

export default function ClinicalTriageCockpit() {
  const [inCall, setInCall] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({
    name: 'Robert C. Martinez',
    mrn: 'MRN-882019',
    age: 68,
    condition: 'Congestive Heart Failure (NYHA Class III)',
    hr: 114,
    spo2: 91,
    bp: '148/94',
    status: 'CRITICAL_TACHYCARDIA'
  });

  return (
    <div className="min-h-screen bg-[#0a101d] text-slate-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Heart className="w-6 h-6 fill-current text-rose-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">MedPulse Clinical Command Center</h1>
            <p className="text-xs text-slate-400">Cardiology Telemetry Ward 4B • Active HIPAA Session</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span> 1 Critical Patient Alert
        </span>
      </div>

      {/* Patient Detail HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-[#0f172a] border border-slate-800 rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">{selectedPatient.name}</h2>
                <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{selectedPatient.mrn}</span>
              </div>
              <p className="text-sm text-sky-400 font-medium mt-1">{selectedPatient.condition}</p>
            </div>

            <button 
              onClick={() => setInCall(!inCall)}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-medium rounded-xl text-sm flex items-center gap-2 transition shadow-lg shadow-rose-600/20"
            >
              <Video className="w-4 h-4" />
              {inCall ? 'End Consultation' : 'Launch Telehealth Visit'}
            </button>
          </div>

          {/* Vitals Grid */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-[#1e293b]/60 border border-rose-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Heart Rate</span>
                <Activity className="w-4 h-4 text-rose-400 animate-bounce" />
              </div>
              <p className="text-3xl font-black text-rose-400 mt-2">{selectedPatient.hr} <span className="text-xs text-slate-400 font-normal">BPM</span></p>
              <p className="text-xs text-rose-400/80 mt-1 font-semibold">Tachycardia Alert</p>
            </div>

            <div className="bg-[#1e293b]/60 border border-amber-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Blood Oxygen (SpO2)</span>
                <span className="text-xs text-amber-400 font-bold">LOW</span>
              </div>
              <p className="text-3xl font-black text-amber-400 mt-2">{selectedPatient.spo2} <span className="text-xs text-slate-400 font-normal">%</span></p>
              <p className="text-xs text-amber-400/80 mt-1">Baseline: 96%</p>
            </div>

            <div className="bg-[#1e293b]/60 border border-slate-700 rounded-xl p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Blood Pressure</span>
                <span className="text-xs text-slate-400">Resting</span>
              </div>
              <p className="text-3xl font-black text-white mt-2">{selectedPatient.bp} <span className="text-xs text-slate-400 font-normal">mmHg</span></p>
              <p className="text-xs text-slate-400 mt-1">Stage 1 Hypertensive</p>
            </div>
          </div>

          {/* ECG Simulation Canvas HUD */}
          <div className="mt-6 p-4 bg-[#0a101d] rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-mono mb-2">
              <span>LEAD II ECG TELEMETRY (LIVE)</span>
              <span>25 mm/s • 10 mm/mV</span>
            </div>
            <div className="h-24 w-full flex items-center justify-center text-emerald-500/80 font-mono text-xs">
              <div className="w-full h-1 bg-emerald-500/20 relative overflow-hidden rounded">
                <div className="absolute top-0 left-0 w-24 h-full bg-emerald-400 animate-[pulse_1s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold text-white mb-4">Clinical Intervention Orders</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl text-sm cursor-pointer hover:bg-slate-800">
                <input type="checkbox" className="rounded text-sky-500 focus:ring-0" defaultChecked />
                <span>Titrate Furosemide to 40mg PO BID</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl text-sm cursor-pointer hover:bg-slate-800">
                <input type="checkbox" className="rounded text-sky-500 focus:ring-0" defaultChecked />
                <span>Schedule In-Person Echocardiogram</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl text-sm cursor-pointer hover:bg-slate-800">
                <input type="checkbox" className="rounded text-sky-500 focus:ring-0" />
                <span>Dispatch Mobile Phlebotomy Team</span>
              </label>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl text-sm transition">
            Sign & Submit Clinical Order to EHR
          </button>
        </div>
      </div>
    </div>
  );
}`,
        swiftUiCode: `// SwiftUI Patient Vitals Card
import SwiftUI

struct PatientVitalsView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            Text("Robert C. Martinez (68y)").font(.title2).bold()
            HStack(spacing: 12) {
                VitalBadge(name: "HR", value: "114", unit: "bpm", alert: true)
                VitalBadge(name: "SpO2", value: "91%", unit: "O2", alert: true)
                VitalBadge(name: "BP", value: "148/94", unit: "mmHg", alert: false)
            }
        }
        .padding()
        .background(Color(uiColor: .systemBackground))
        .cornerRadius(16)
    }
}`,
        jetpackComposeCode: `// Jetpack Compose Clinical Vitals
@Composable
fun ClinicalTriageScreen() {
    Card(
        modifier = Modifier.fillMaxWidth().padding(16.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFF0F172A))
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text("Robert C. Martinez", color = Color.White, fontWeight = FontWeight.Bold)
            Text("Congestive Heart Failure", color = Color(0xFF38BDF8))
        }
    }
}`
      }
    }
  },
  {
    id: "vaultx-treasury",
    name: "VaultX Treasury",
    tagline: "Enterprise Neo-Banking, Real-Time Cross-Border FX & Liquidity Platform",
    coreConcept: "A multi-currency global corporate treasury engine enabling automated liquidity sweeps, multi-institution SWIFT/SEPA rails, automated FX hedging, and role-based cryptographic payment batch approvals.",
    targetAudience: "Chief Financial Officers, Corporate Treasurers, Controllers, Fintech Developers",
    domain: "FinTech & Corporate Banking",
    platform: "Web SaaS & Real-Time Treasury API",
    architectureStyle: "CQRS & Event Sourcing with Ledger Immutability",
    version: "3.0.0",
    createdAt: "2026-08-01",
    prd: {
      coreValueProp: {
        primaryProblem: "Multinational corporations lose millions to hidden FX spreads and trapped idle capital spread across dozens of regional banking portals without unified real-time visibility.",
        coreSolution: "VaultX aggregates global accounts via open banking APIs, executes zero-spread wholesale FX swaps, and automatically sweeps idle overnight balances into yield-bearing liquidity pools.",
        personas: [
          {
            name: "Marcus Sterling",
            role: "VP of Global Treasury",
            painPoints: ["Manually logging into 8 different banking portals every morning to calculate cash position", "Exposures to EUR/USD volatility without automated hedge triggers"],
            jobsToBeDone: ["Single pane-of-glass multi-currency balance consolidation", "Set automated rule: Sweep balances over $100k to 5.2% yield fund"],
            keyBenefit: "Consolidates global treasury in <10 seconds with automated yield generation adding 45 bps to enterprise cash."
          }
        ],
        conversionMetrics: [
          {
            metric: "Net Yield Alpha on Idle Balances",
            target: "+45 to +85 bps annualized",
            rationale: "Quantifiable direct ROI on software subscription.",
            type: "NorthStar"
          }
        ]
      },
      featureMatrix: [
        {
          id: "feat-fin-1",
          name: "Real-Time Multi-Currency Virtual IBAN & Settlement Engine",
          tier: "Must-Have (MVP)",
          category: "Core Banking",
          description: "Instant issuance of EUR, USD, GBP, JPY, and SGD virtual IBANs with direct FedNow, SEPA Instant, and Faster Payments connectivity.",
          impact: "High",
          effort: "High",
          userStory: "As a Controller, I want to collect customer payments locally in Europe and settle instantly without wire fees.",
          completed: true
        }
      ],
      userFlowSequence: [
        {
          stepNumber: 1,
          phase: "Onboarding & Auth",
          action: "Treasury admin connects corporate entity via Plaid / Open Banking OAuth with dual-custody authorization.",
          systemResponse: "Validates corporate KYB, creates multi-currency ledger accounts, enables ISO 20022 message parser.",
          fallbackOrEdgeCase: "If KYB document verification is pending, activates simulated sandbox mode.",
          keyScreen: "KYB & Multi-Currency Account Setup"
        }
      ]
    },
    techArchitecture: {
      techStack: {
        frontend: {
          name: "React 19 + Tailwind CSS + TradingView Charts",
          framework: "Vite + TypeScript",
          libraries: ["lucide-react", "recharts", "motion", "zustand"],
          rationale: "High frequency balance updates and sub-pixel financial charts."
        },
        backend: {
          runtime: "Go 1.23 + Java 21 Spring Boot Ledger Service",
          framework: "Event-Sourced TigerBeetle / PostgreSQL Double-Entry Ledger",
          apiType: "REST v1 + ISO 20022 XML/JSON + gRPC Stream",
          rationale: "Zero floating-point rounding errors with fixed-point int64 precision."
        },
        database: {
          primary: "TigerBeetle Financial Accounting Engine + PostgreSQL 16",
          caching: "Redis Enterprise Active-Active",
          searchOrVector: "Elasticsearch for transaction audit search",
          rationale: "TigerBeetle guarantees millions of double-entry ledger transfers per second with strict immutability."
        },
        auth: {
          provider: "FIDO2 / WebAuthn Hardware Keys & YubiKey Mandatory",
          mechanism: "Dual-custody multi-signature approval rules for wires > $50,000",
          rbacLevels: ["CFO", "Treasurer", "Accountant", "ExternalAuditor"],
          rationale: "Prevents unauthorized wire fraud through cryptographic quorum."
        },
        infrastructure: {
          cloud: "AWS PCI-DSS Level 1 Enclave",
          compute: "EKS with AWS Nitro Enclaves for private key isolation",
          cicd: "GitHub Actions with signed provenance artifacts",
          cdn: "Cloudflare Banking Shield",
          rationale: "Financial-grade zero trust security posture."
        },
        observability: {
          logging: "WORM (Write Once Read Many) compliant AWS S3 Glacier audit logs",
          metrics: "Prometheus + Grafana with balance discrepancy alarms",
          tracing: "OpenTelemetry cross-rail payment trace IDs"
        }
      },
      systemArchitectureDiagram: {
        overview: "Ultra high-integrity double-entry ledger architecture with hardware security module (HSM) signing and real-time bank gateway reconciliation.",
        nodes: [
          { id: "treasurer_ui", label: "Treasury Cockpit Web", category: "client", details: "Real-time FX & liquidity dashboard" },
          { id: "api_gateway", label: "PCI-DSS Enclave Gateway", category: "gateway", details: "mTLS and WebAuthn hardware token verification" },
          { id: "tigerbeetle", label: "TigerBeetle Ledger Engine", category: "service", details: "Deterministic state machine for double-entry book" },
          { id: "swift_rail", label: "Bank Rail Adaptor (FedNow/SEPA)", category: "thirdParty", details: "ISO 20022 message processor" }
        ],
        dataFlowSteps: [
          { from: "treasurer_ui", to: "api_gateway", protocol: "HTTPS / TLS 1.3", description: "Treasurer authorizes $500k liquidity transfer" },
          { from: "api_gateway", to: "tigerbeetle", protocol: "gRPC", description: "Records pending debit and credit entries in ledger" },
          { from: "tigerbeetle", to: "swift_rail", protocol: "ISO 20022 MT103", description: "Dispatches wire instruction to correspondent bank" }
        ]
      },
      dataSchemaModel: {
        dbType: "TigerBeetle + PostgreSQL 16 (Double-Entry Ledger)",
        entities: [
          {
            tableName: "ledger_accounts",
            description: "Asset, Liability, Equity, Revenue, and Expense balance accounts.",
            fields: [
              { name: "id", type: "UUID", constraints: "PRIMARY KEY", isPrimaryKey: true, description: "Account UUID" },
              { name: "currency", type: "VARCHAR(3)", constraints: "NOT NULL", description: "ISO 4217 Currency Code (USD, EUR, GBP)" },
              { name: "dr_balance", type: "BIGINT", constraints: "DEFAULT 0", description: "Cumulative debits in base currency cents" },
              { name: "cr_balance", type: "BIGINT", constraints: "DEFAULT 0", description: "Cumulative credits in base currency cents" }
            ]
          }
        ],
        sqlDDL: `-- VaultX Double-Entry Financial Schema
CREATE TABLE ledger_accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    currency VARCHAR(3) NOT NULL,
    dr_balance BIGINT NOT NULL DEFAULT 0,
    cr_balance BIGINT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE ledger_transfers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    debit_account_id UUID NOT NULL REFERENCES ledger_accounts(id),
    credit_account_id UUID NOT NULL REFERENCES ledger_accounts(id),
    amount_cents BIGINT NOT NULL CHECK (amount_cents > 0),
    posted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`,
        indexingStrategy: [
          "Immutable append-only transfer logging",
          "Account balance lookup indexes with lockless reads"
        ]
      },
      apiEndpoints: [
        {
          id: "api-vault-1",
          method: "POST",
          path: "/api/v1/transfers/sweep",
          summary: "Execute automated multi-currency liquidity sweep",
          authRequired: true,
          rbacRole: "CFO, Treasurer",
          headers: { "Authorization": "Bearer <TOKEN>" },
          responsePayload: `{\n  "transferId": "tr_990182",\n  "status": "settled",\n  "amountUsd": 250000.00,\n  "targetYieldFund": "US_TREASURY_4WK_5_2PCT"\n}`,
          curlExample: `curl -X POST https://api.vaultx.bank/api/v1/transfers/sweep`
        }
      ]
    },
    uiUxComponentEngineering: {
      designTokens: {
        colorPalette: {
          background: "#080c14",
          surface: "#0f1726",
          surfaceMuted: "#1c2638",
          border: "#2d3748",
          primaryAccent: "#10b981",
          primaryAccentHover: "#059669",
          secondaryAccent: "#6366f1",
          textPrimary: "#f8fafc",
          textMuted: "#94a3b8",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          info: "#38bdf8"
        },
        typography: {
          fontDisplay: "Plus Jakarta Sans, sans-serif",
          fontBody: "Inter, sans-serif",
          fontMono: "JetBrains Mono, monospace",
          scale: [
            { name: "Treasury Heading", size: "32px", lineHeight: "40px", weight: "700 Bold", usage: "Consolidated balance header" }
          ]
        },
        spacingAndLayout: {
          containerMaxWidth: "1500px",
          gridColumns: 12,
          spacingScale: ["4px", "8px", "16px", "24px", "32px"]
        }
      },
      componentTree: [
        {
          id: "node-treasury",
          name: "GlobalTreasuryCockpit",
          type: "Page",
          props: ["tenantId: string"],
          stateFlow: "Consumes real-time multi-currency FX quotes and auto-sweep balances.",
          children: ["BalanceSummaryHUD", "YieldSweepQueue", "FxExchangeWidget"]
        }
      ],
      coreDashboardMockup: {
        title: "Global Multi-Currency Treasury Cockpit",
        description: "High-density enterprise financial dashboard tracking multi-currency liquidity, active sweep yield returns, and cross-border settlement rails.",
        interactiveStateSummary: "Simulates one-click automated liquidity sweep and real-time FX conversion.",
        reactTailwindCode: `import React, { useState } from 'react';
import { DollarSign, ArrowUpRight, Shield, RefreshCw, Layers } from 'lucide-react';

export default function TreasuryCockpit() {
  const [balance, setBalance] = useState(14820940.50);
  const [sweeping, setSweeping] = useState(false);

  const triggerSweep = () => {
    setSweeping(true);
    setTimeout(() => {
      setBalance(prev => prev + 12500.00);
      setSweeping(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 p-6">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <DollarSign className="w-5 h-5" />
            </span>
            VaultX Global Treasury
          </h1>
          <p className="text-xs text-slate-400 mt-1">Multi-Currency Liquidity & Automated Yield Sweeper</p>
        </div>
        <button 
          onClick={triggerSweep}
          disabled={sweeping}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition"
        >
          <RefreshCw className={\`w-4 h-4 \${sweeping ? 'animate-spin' : ''}\`} />
          {sweeping ? 'Sweeping Idle Funds...' : 'Execute Automated Sweep'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <div className="bg-[#0f1726] border border-slate-800 rounded-xl p-5">
          <p className="text-xs text-slate-400 font-semibold uppercase">Total Consolidated Liquidity</p>
          <p className="text-3xl font-black text-white mt-2">\${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
          <p className="text-xs text-emerald-400 mt-1">+5.24% Annualized Yield</p>
        </div>
        <div className="bg-[#0f1726] border border-slate-800 rounded-xl p-5">
          <p className="text-xs text-slate-400 font-semibold uppercase">Active Virtual Accounts</p>
          <p className="text-3xl font-black text-white mt-2">18 IBANs</p>
          <p className="text-xs text-slate-400 mt-1">USD, EUR, GBP, SGD, JPY</p>
        </div>
        <div className="bg-[#0f1726] border border-slate-800 rounded-xl p-5">
          <p className="text-xs text-slate-400 font-semibold uppercase">Overnight Yield Generated</p>
          <p className="text-3xl font-black text-emerald-400 mt-2">+$2,118.40</p>
          <p className="text-xs text-slate-400 mt-1">Auto-credited at 00:00 UTC</p>
        </div>
      </div>
    </div>
  );
}`,
        swiftUiCode: `// SwiftUI Treasury View
import SwiftUI

struct TreasuryView: View {
    var body: some View {
        Text("VaultX Treasury")
    }
}`,
        jetpackComposeCode: `// Compose Treasury View
@Composable
fun TreasuryScreen() {
    Text("VaultX Treasury")
}`
      }
    }
  }
];
