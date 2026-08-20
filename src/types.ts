export interface Persona {
  name: string;
  role: string;
  avatarUrl?: string;
  painPoints: string[];
  jobsToBeDone: string[];
  keyBenefit: string;
}

export interface ConversionMetric {
  metric: string;
  target: string;
  rationale: string;
  type: 'NorthStar' | 'Primary' | 'Secondary';
}

export interface FeatureItem {
  id: string;
  name: string;
  tier: 'Must-Have (MVP)' | 'Should-Have (v2)' | 'Future Innovations';
  category: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  effort: 'High' | 'Medium' | 'Low';
  userStory: string;
  completed?: boolean;
}

export interface UserFlowStep {
  stepNumber: number;
  phase: 'Onboarding & Auth' | 'Core Value Discovery' | 'Core Interaction' | 'Value Retention & Expansion';
  action: string;
  systemResponse: string;
  fallbackOrEdgeCase: string;
  keyScreen: string;
}

export interface TechStackItem {
  name: string;
  framework: string;
  libraries: string[];
  rationale: string;
}

export interface SystemArchitectureNode {
  id: string;
  label: string;
  category: 'client' | 'gateway' | 'service' | 'storage' | 'thirdParty';
  details: string;
  icon?: string;
}

export interface SystemDataFlowStep {
  from: string;
  to: string;
  protocol: string;
  description: string;
}

export interface SchemaField {
  name: string;
  type: string;
  constraints: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
  references?: string;
  description: string;
}

export interface SchemaEntity {
  tableName: string;
  description: string;
  fields: SchemaField[];
}

export interface ApiEndpoint {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  summary: string;
  authRequired: boolean;
  rbacRole: string;
  headers?: Record<string, string> | string;
  requestPayload?: string;
  responsePayload: string;
  statusCodes?: Array<{ code: number; description: string }>;
  curlExample: string;
}

export interface TypographyToken {
  name: string;
  size: string;
  lineHeight: string;
  weight: string;
  usage: string;
}

export interface ComponentTreeNode {
  id: string;
  name: string;
  type: 'Layout' | 'Page' | 'Feature Container' | 'Primitive UI' | 'State Controller';
  props: string[];
  stateFlow: string;
  children?: string[];
  contextOrStore?: string;
}

export interface Blueprint {
  id: string;
  name: string;
  tagline: string;
  coreConcept: string;
  targetAudience: string;
  domain: string;
  platform: string;
  architectureStyle: string;
  version?: string;
  createdAt?: string;
  
  // Section 1: PRD
  prd: {
    coreValueProp: {
      primaryProblem: string;
      coreSolution: string;
      personas: Persona[];
      conversionMetrics: ConversionMetric[];
    };
    featureMatrix: FeatureItem[];
    userFlowSequence: UserFlowStep[];
  };

  // Section 2: Technical Architecture & System Design
  techArchitecture: {
    techStack: {
      frontend: TechStackItem;
      backend: {
        runtime: string;
        framework: string;
        apiType: string;
        rationale: string;
      };
      database: {
        primary: string;
        caching: string;
        searchOrVector: string;
        rationale: string;
      };
      auth: {
        provider: string;
        mechanism: string;
        rbacLevels: string[];
        rationale: string;
      };
      infrastructure: {
        cloud: string;
        compute: string;
        cicd: string;
        cdn: string;
        rationale: string;
      };
      observability: {
        logging: string;
        metrics: string;
        tracing: string;
      };
    };
    systemArchitectureDiagram: {
      overview: string;
      nodes: SystemArchitectureNode[];
      dataFlowSteps: SystemDataFlowStep[];
    };
    dataSchemaModel: {
      dbType: string;
      entities: SchemaEntity[];
      sqlDDL: string;
      nosqlStructure?: string;
      indexingStrategy: string[];
    };
    apiEndpoints: ApiEndpoint[];
  };

  // Section 3: UI/UX & Component Engineering
  uiUxComponentEngineering: {
    designTokens: {
      colorPalette: {
        background: string;
        surface: string;
        surfaceMuted: string;
        border: string;
        primaryAccent: string;
        primaryAccentHover: string;
        secondaryAccent: string;
        textPrimary: string;
        textMuted: string;
        success: string;
        warning: string;
        error: string;
        info: string;
      };
      typography: {
        fontDisplay: string;
        fontBody: string;
        fontMono: string;
        scale: TypographyToken[];
      };
      spacingAndLayout: {
        containerMaxWidth: string;
        gridColumns: number;
        spacingScale: string[];
        borderRadiusTokens?: Record<string, string>;
      };
    };
    componentTree: ComponentTreeNode[];
    coreDashboardMockup: {
      title: string;
      description: string;
      interactiveStateSummary: string;
      reactTailwindCode: string;
      swiftUiCode: string;
      jetpackComposeCode: string;
    };
  };
}

export type ActiveSection = 'prd' | 'architecture' | 'uiux' | 'live-mockup' | 'copilot';
export type PrdSubTab = 'value-prop' | 'feature-matrix' | 'user-flows';
export type TechSubTab = 'tech-stack' | 'system-topology' | 'data-schema' | 'api-catalog';
export type UiUxSubTab = 'design-tokens' | 'component-tree' | 'mockup-code';
