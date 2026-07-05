import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { RESULTS, computeResult } from "@/lib/quiz-data";

export function registerGetResultsTool(server: McpServer, _userId: string) {
  server.tool(
    "get_my_reincarnation",
    "Compute a reincarnation identity based on quiz answers. Pass answers for q1-q9, each being 'a', 'b', 'c', or 'd'.",
    {
      q1: z.enum(["a", "b", "c", "d"]).describe("Answer for question 1"),
      q2: z.enum(["a", "b", "c", "d"]).describe("Answer for question 2"),
      q3: z.enum(["a", "b", "c", "d"]).describe("Answer for question 3"),
      q4: z.enum(["a", "b", "c", "d"]).describe("Answer for question 4"),
      q5: z.enum(["a", "b", "c", "d"]).describe("Answer for question 5"),
      q6: z.enum(["a", "b", "c", "d"]).optional().describe("Answer for question 6"),
      q7: z.enum(["a", "b", "c", "d"]).optional().describe("Answer for question 7"),
      q8: z.enum(["a", "b", "c", "d"]).optional().describe("Answer for question 8"),
      q9: z.enum(["a", "b", "c", "d"]).optional().describe("Answer for question 9"),
    },
    async (args) => {
      const result = computeResult(args as Record<string, "a" | "b" | "c" | "d" | undefined>);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              id: result.id,
              name_zh: result.nameZh,
              emoji: result.emoji,
              description_zh: result.descriptionZh,
              tags_zh: result.tagsZh,
              confidence: result.confidence,
            }),
          },
        ],
      };
    }
  );
}
