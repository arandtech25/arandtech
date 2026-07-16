import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import listProjectsTool from "./tools/list-projects";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "arandtech-mcp",
  title: "ARANDTECH MCP",
  version: "0.1.0",
  instructions:
    "Public tools for the ARANDTECH website. Use `list_services` to enumerate offered technical services, `list_projects` to browse showcased FTTH and fiber infrastructure projects, and `get_contact_info` for business contact details.",
  tools: [listServicesTool, listProjectsTool, getContactInfoTool],
});
