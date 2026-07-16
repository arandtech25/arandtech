import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the technical services ARANDTECH offers (fiber optic installations, FTTH phases, network construction, technical support, subcontracting, inspections and OTDR measurements).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const { services } = await import("@/lib/site-data");
    const items = services.map((s) => ({ title: s.title, description: s.desc }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});
