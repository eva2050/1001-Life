import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerGetResultsTool } from "./tools/get-results";
import { registerTakeQuizTool } from "./tools/take-quiz";
import { registerListIdentifiesTool } from "./tools/list-identities";

export function buildMcpServer(_userId: string): McpServer {
  const server = new McpServer({
    name: "1001-lives-mcp",
    version: "1.0.0",
  });

  registerGetResultsTool(server, _userId);
  registerTakeQuizTool(server, _userId);
  registerListIdentifiesTool(server, _userId);

  return server;
}
