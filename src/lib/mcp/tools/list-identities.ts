import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { RESULTS } from "@/lib/quiz-data";

export function registerListIdentifiesTool(server: McpServer, _userId: string) {
  server.tool(
    "list_all_reincarnation_identities",
    "List all 1001 Lives reincarnation identities available in the system, with their names, descriptions and tags.",
    {
      language: z.enum(["zh", "en"]).optional().describe("Language for output (default: zh)"),
    },
    async () => {
      const identities = RESULTS.map((r) => ({
        id: r.id,
        name: r.nameZh,
        emoji: r.emoji,
        description: r.descriptionZh.slice(0, 80) + "…",
        tags: r.tagsZh,
        confidence: r.confidence,
      }));
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ total: identities.length, identities }),
          },
        ],
      };
    }
  );
}
