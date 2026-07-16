import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List ARANDTECH's showcased projects (FTTH, fiber infrastructure, network installations, technical projects) with title, category, location and status.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const { projects } = await import("@/lib/site-data");
    const items = projects.map((p) => ({
      title: p.title,
      category: p.category,
      description: p.desc,
      location: p.location,
      status: p.status,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
