import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Return ARANDTECH's public business contact information: company name, phone, email, website and service coverage area.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "ARANDTECH",
      phone: "+30 210 3000721",
      email: "arandtech25@gmail.com",
      website: "https://www.arandtech.com",
      areaServed: "Greece (Πανελλαδική κάλυψη)",
      services: [
        "Εγκαταστάσεις Οπτικών Ινών",
        "FTTH Β' & Γ' Φάση",
        "Κατασκευή & Συντήρηση Δικτύων",
        "Τεχνική Υποστήριξη",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
