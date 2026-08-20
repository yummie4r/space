import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Server-side Gemini AI Client
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY || "";
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Master Blueprint Generator API
app.post("/api/generate-blueprint", async (req, res) => {
  try {
    const { appName, coreConcept, domain, platform, architectureStyle, targetAudience, specialRequirements } = req.body;

    if (!appName || !coreConcept) {
      return res.status(400).json({ error: "Application name and core concept are required." });
    }

    const ai = getAIClient();
    
    const prompt = `You are a Principal Software Architect, Senior Product Manager (PM), and Principal UI/UX Designer.
Generate a comprehensive, enterprise-grade, production-ready Master App Blueprint for the following application:

App Name: ${appName}
Core Concept: ${coreConcept}
Domain / Industry: ${domain || "Enterprise Software"}
Target Platform: ${platform || "Web SaaS (Desktop & Mobile Responsive)"}
Architecture Style: ${architectureStyle || "Event-Driven Modular Microservices"}
Target Audience / Personas: ${targetAudience || "Enterprise Teams, Operators, and Admins"}
Special Requirements: ${specialRequirements || "High availability, SOC2/GDPR compliance, intuitive real-time UI, robust REST/GraphQL APIs, normalized relational schema with indexing"}

Ensure the response strictly follows this JSON schema representing:
1. Section 1: PRD (Problem, Solution, Personas, Conversion Metrics, Feature Matrix with MVP/v2/Innovations, User Flow Sequence)
2. Section 2: Technical Architecture (Tech Stack for Frontend/Backend/DB/Auth/Infra, System Architecture Nodes & Data Flow, Data Schema with Entities & SQL DDL & Indexing, API Endpoint Specs with cURL & response payloads)
3. Section 3: UI/UX & Component Engineering (Design System tokens with Hex colors, Typography scale, Component Hierarchy tree with state/props, and Code Mockup for the primary Dashboard in React+Tailwind, SwiftUI, and Jetpack Compose).

Be specific, realistic, and deeply technical with actual SQL DDL, concrete API endpoints, exact color hexes, and real code snippets.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            name: { type: Type.STRING },
            tagline: { type: Type.STRING },
            coreConcept: { type: Type.STRING },
            targetAudience: { type: Type.STRING },
            domain: { type: Type.STRING },
            platform: { type: Type.STRING },
            architectureStyle: { type: Type.STRING },
            prd: {
              type: Type.OBJECT,
              properties: {
                coreValueProp: {
                  type: Type.OBJECT,
                  properties: {
                    primaryProblem: { type: Type.STRING },
                    coreSolution: { type: Type.STRING },
                    personas: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          name: { type: Type.STRING },
                          role: { type: Type.STRING },
                          painPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
                          jobsToBeDone: { type: Type.ARRAY, items: { type: Type.STRING } },
                          keyBenefit: { type: Type.STRING }
                        },
                        required: ["name", "role", "painPoints", "jobsToBeDone", "keyBenefit"]
                      }
                    },
                    conversionMetrics: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          metric: { type: Type.STRING },
                          target: { type: Type.STRING },
                          rationale: { type: Type.STRING },
                          type: { type: Type.STRING }
                        },
                        required: ["metric", "target", "rationale", "type"]
                      }
                    }
                  },
                  required: ["primaryProblem", "coreSolution", "personas", "conversionMetrics"]
                },
                featureMatrix: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      name: { type: Type.STRING },
                      tier: { type: Type.STRING },
                      category: { type: Type.STRING },
                      description: { type: Type.STRING },
                      impact: { type: Type.STRING },
                      effort: { type: Type.STRING },
                      userStory: { type: Type.STRING }
                    },
                    required: ["id", "name", "tier", "category", "description", "impact", "effort", "userStory"]
                  }
                },
                userFlowSequence: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      stepNumber: { type: Type.INTEGER },
                      phase: { type: Type.STRING },
                      action: { type: Type.STRING },
                      systemResponse: { type: Type.STRING },
                      fallbackOrEdgeCase: { type: Type.STRING },
                      keyScreen: { type: Type.STRING }
                    },
                    required: ["stepNumber", "phase", "action", "systemResponse", "fallbackOrEdgeCase", "keyScreen"]
                  }
                }
              },
              required: ["coreValueProp", "featureMatrix", "userFlowSequence"]
            },
            techArchitecture: {
              type: Type.OBJECT,
              properties: {
                techStack: {
                  type: Type.OBJECT,
                  properties: {
                    frontend: {
                      type: Type.OBJECT,
                      properties: {
                        name: { type: Type.STRING },
                        framework: { type: Type.STRING },
                        libraries: { type: Type.ARRAY, items: { type: Type.STRING } },
                        rationale: { type: Type.STRING }
                      },
                      required: ["name", "framework", "libraries", "rationale"]
                    },
                    backend: {
                      type: Type.OBJECT,
                      properties: {
                        runtime: { type: Type.STRING },
                        framework: { type: Type.STRING },
                        apiType: { type: Type.STRING },
                        rationale: { type: Type.STRING }
                      },
                      required: ["runtime", "framework", "apiType", "rationale"]
                    },
                    database: {
                      type: Type.OBJECT,
                      properties: {
                        primary: { type: Type.STRING },
                        caching: { type: Type.STRING },
                        searchOrVector: { type: Type.STRING },
                        rationale: { type: Type.STRING }
                      },
                      required: ["primary", "caching", "searchOrVector", "rationale"]
                    },
                    auth: {
                      type: Type.OBJECT,
                      properties: {
                        provider: { type: Type.STRING },
                        mechanism: { type: Type.STRING },
                        rbacLevels: { type: Type.ARRAY, items: { type: Type.STRING } },
                        rationale: { type: Type.STRING }
                      },
                      required: ["provider", "mechanism", "rbacLevels", "rationale"]
                    },
                    infrastructure: {
                      type: Type.OBJECT,
                      properties: {
                        cloud: { type: Type.STRING },
                        compute: { type: Type.STRING },
                        cicd: { type: Type.STRING },
                        cdn: { type: Type.STRING },
                        rationale: { type: Type.STRING }
                      },
                      required: ["cloud", "compute", "cicd", "cdn", "rationale"]
                    },
                    observability: {
                      type: Type.OBJECT,
                      properties: {
                        logging: { type: Type.STRING },
                        metrics: { type: Type.STRING },
                        tracing: { type: Type.STRING }
                      },
                      required: ["logging", "metrics", "tracing"]
                    }
                  },
                  required: ["frontend", "backend", "database", "auth", "infrastructure", "observability"]
                },
                systemArchitectureDiagram: {
                  type: Type.OBJECT,
                  properties: {
                    overview: { type: Type.STRING },
                    nodes: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          label: { type: Type.STRING },
                          category: { type: Type.STRING },
                          details: { type: Type.STRING }
                        },
                        required: ["id", "label", "category", "details"]
                      }
                    },
                    dataFlowSteps: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          from: { type: Type.STRING },
                          to: { type: Type.STRING },
                          protocol: { type: Type.STRING },
                          description: { type: Type.STRING }
                        },
                        required: ["from", "to", "protocol", "description"]
                      }
                    }
                  },
                  required: ["overview", "nodes", "dataFlowSteps"]
                },
                dataSchemaModel: {
                  type: Type.OBJECT,
                  properties: {
                    dbType: { type: Type.STRING },
                    entities: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          tableName: { type: Type.STRING },
                          description: { type: Type.STRING },
                          fields: {
                            type: Type.ARRAY,
                            items: {
                              type: Type.OBJECT,
                              properties: {
                                name: { type: Type.STRING },
                                type: { type: Type.STRING },
                                constraints: { type: Type.STRING },
                                isPrimaryKey: { type: Type.BOOLEAN },
                                isForeignKey: { type: Type.BOOLEAN },
                                references: { type: Type.STRING },
                                description: { type: Type.STRING }
                              },
                              required: ["name", "type", "constraints", "description"]
                            }
                          }
                        },
                        required: ["tableName", "description", "fields"]
                      }
                    },
                    sqlDDL: { type: Type.STRING },
                    indexingStrategy: { type: Type.ARRAY, items: { type: Type.STRING } }
                  },
                  required: ["dbType", "entities", "sqlDDL", "indexingStrategy"]
                },
                apiEndpoints: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      method: { type: Type.STRING },
                      path: { type: Type.STRING },
                      summary: { type: Type.STRING },
                      authRequired: { type: Type.BOOLEAN },
                      rbacRole: { type: Type.STRING },
                      headers: { type: Type.STRING },
                      requestPayload: { type: Type.STRING },
                      responsePayload: { type: Type.STRING },
                      curlExample: { type: Type.STRING }
                    },
                    required: ["id", "method", "path", "summary", "authRequired", "rbacRole", "responsePayload", "curlExample"]
                  }
                }
              },
              required: ["techStack", "systemArchitectureDiagram", "dataSchemaModel", "apiEndpoints"]
            },
            uiUxComponentEngineering: {
              type: Type.OBJECT,
              properties: {
                designTokens: {
                  type: Type.OBJECT,
                  properties: {
                    colorPalette: {
                      type: Type.OBJECT,
                      properties: {
                        background: { type: Type.STRING },
                        surface: { type: Type.STRING },
                        surfaceMuted: { type: Type.STRING },
                        border: { type: Type.STRING },
                        primaryAccent: { type: Type.STRING },
                        primaryAccentHover: { type: Type.STRING },
                        secondaryAccent: { type: Type.STRING },
                        textPrimary: { type: Type.STRING },
                        textMuted: { type: Type.STRING },
                        success: { type: Type.STRING },
                        warning: { type: Type.STRING },
                        error: { type: Type.STRING },
                        info: { type: Type.STRING }
                      },
                      required: ["background", "surface", "border", "primaryAccent", "textPrimary", "textMuted", "success", "error"]
                    },
                    typography: {
                      type: Type.OBJECT,
                      properties: {
                        fontDisplay: { type: Type.STRING },
                        fontBody: { type: Type.STRING },
                        fontMono: { type: Type.STRING },
                        scale: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              name: { type: Type.STRING },
                              size: { type: Type.STRING },
                              lineHeight: { type: Type.STRING },
                              weight: { type: Type.STRING },
                              usage: { type: Type.STRING }
                            },
                            required: ["name", "size", "lineHeight", "weight", "usage"]
                          }
                        }
                      },
                      required: ["fontDisplay", "fontBody", "fontMono", "scale"]
                    },
                    spacingAndLayout: {
                      type: Type.OBJECT,
                      properties: {
                        containerMaxWidth: { type: Type.STRING },
                        gridColumns: { type: Type.INTEGER },
                        spacingScale: { type: Type.ARRAY, items: { type: Type.STRING } }
                      },
                      required: ["containerMaxWidth", "gridColumns", "spacingScale"]
                    }
                  },
                  required: ["colorPalette", "typography", "spacingAndLayout"]
                },
                componentTree: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      name: { type: Type.STRING },
                      type: { type: Type.STRING },
                      props: { type: Type.ARRAY, items: { type: Type.STRING } },
                      stateFlow: { type: Type.STRING },
                      contextOrStore: { type: Type.STRING }
                    },
                    required: ["id", "name", "type", "props", "stateFlow"]
                  }
                },
                coreDashboardMockup: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    description: { type: Type.STRING },
                    interactiveStateSummary: { type: Type.STRING },
                    reactTailwindCode: { type: Type.STRING },
                    swiftUiCode: { type: Type.STRING },
                    jetpackComposeCode: { type: Type.STRING }
                  },
                  required: ["title", "description", "interactiveStateSummary", "reactTailwindCode", "swiftUiCode", "jetpackComposeCode"]
                }
              },
              required: ["designTokens", "componentTree", "coreDashboardMockup"]
            }
          },
          required: ["id", "name", "tagline", "coreConcept", "targetAudience", "domain", "platform", "architectureStyle", "prd", "techArchitecture", "uiUxComponentEngineering"]
        }
      }
    });

    const parsedBlueprint = JSON.parse(response.text || "{}");
    return res.json({ blueprint: parsedBlueprint });
  } catch (error: any) {
    console.error("Blueprint generation error:", error);
    return res.status(500).json({ error: error.message || "Failed to generate blueprint." });
  }
});

// AI Architect Copilot / Question refinement API
app.post("/api/copilot-chat", async (req, res) => {
  try {
    const { question, currentBlueprint, conversationHistory } = req.body;
    const ai = getAIClient();

    const systemPrompt = `You are a Principal Software Architect and Senior PM assisting a tech team with their master application blueprint for "${currentBlueprint?.name || "the app"}".
Current Blueprint Context:
Concept: ${currentBlueprint?.coreConcept || "N/A"}
Tech Stack: Frontend (${currentBlueprint?.techArchitecture?.techStack?.frontend?.name}), Backend (${currentBlueprint?.techArchitecture?.techStack?.backend?.framework}), DB (${currentBlueprint?.techArchitecture?.techStack?.database?.primary}).

Provide sharp, authoritative, highly structured advice, code examples, DDL adjustments, security audits, or architectural trade-off evaluations as requested.`;

    const chat = ai.chats.create({
      model: "gemini-3.7-flash",
      config: {
        systemInstruction: systemPrompt,
      },
    });

    // replay history if any
    if (conversationHistory && Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory.slice(-4)) {
        if (msg.role === "user") {
          await chat.sendMessage({ message: msg.content });
        }
      }
    }

    const response = await chat.sendMessage({ message: question });
    return res.json({ answer: response.text });
  } catch (error: any) {
    console.error("Copilot error:", error);
    return res.status(500).json({ error: error.message || "Copilot query failed." });
  }
});

// Vite middleware & Static Serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Master Blueprint Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
