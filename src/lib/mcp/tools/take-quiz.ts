import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const QUESTIONS = [
  {
    key: "q1",
    question_zh: "你的手机快没电了，你会？",
    question_en: "Your phone is almost dead. You:",
    options: {
      a: { zh: "慌乱向陌生人借充电器", en: "Panic and beg a stranger for a charger" },
      b: { zh: "假装没事，随缘", en: "Pretend nothing happened, YOLO" },
      c: { zh: "直接关机，享受宁静", en: "Power off and enjoy the freedom" },
      d: { zh: "在心里骂自己为什么没充电", en: "Immediately blame yourself for not charging" },
    },
  },
  {
    key: "q2",
    question_zh: "凌晨三点，你还没睡，因为？",
    question_en: "3AM and you're still awake. What's happening?",
    options: {
      a: { zh: "一边刷剧一边点外卖", en: "Ordering food while watching a drama" },
      b: { zh: "躺在床上盯着天花板发呆", en: "Lying in bed staring at the ceiling" },
      c: { zh: "在刷不知道第几遍的社交媒体", en: "Doom-scrolling social media" },
      d: { zh: "在脑子里写辞职信", en: "Writing a resignation letter in your head" },
    },
  },
  {
    key: "q3",
    question_zh: "看到路边一片打转的落叶，你会觉得？",
    question_en: "You see a leaf spinning in the autumn wind. You think:",
    options: {
      a: { zh: "它上辈子没蹦够极的倒霉人类", en: "A poor soul who never bungee jumped enough" },
      b: { zh: "一场微风主导的街头实验", en: "A postmodern street experiment directed by the breeze" },
      c: { zh: "想一脚踩上去听脆响", en: "Want to stomp on it for the satisfying crunch" },
      d: { zh: "掏出手机拍视频配文案", en: "Pull out phone to film and post with deep caption" },
    },
  },
  {
    key: "q4",
    question_zh: "电梯来了但已经满了，你会？",
    question_en: "The elevator arrives but it's full. You:",
    options: {
      a: { zh: "硬挤进去", en: "Squeeze in anyway" },
      b: { zh: "礼貌等下一班", en: "Wait for the next one politely" },
      c: { zh: "爬楼梯，惩罚自己", en: "Take the stairs as punishment for yourself" },
      d: { zh: "回工位，算了", en: "Go back to your desk — forget it" },
    },
  },
  {
    key: "q5",
    question_zh: "周六完全空着，你的第一反应是？",
    question_en: "You have a free Saturday, your instinct is:",
    options: {
      a: { zh: "睡到中午再开始后悔", en: "Sleep until noon then feel guilty" },
      b: { zh: "制定超级充实的计划，完成10%", en: "Make a super productive plan and execute 10%" },
      c: { zh: "随便走到哪里算哪里", en: "Wander outside with no destination" },
      d: { zh: "躺着刷手机，称之为'休息'", en: "Lie in bed scrolling your phone and call it self-care" },
    },
  },
];

export function registerTakeQuizTool(server: McpServer, _userId: string) {
  server.tool(
    "get_quiz_questions",
    "Get all quiz questions and their options to help a user find their reincarnation identity.",
    {
      language: z.enum(["zh", "en"]).optional().describe("Language for questions and options (default: zh)"),
    },
    async ({ language = "zh" }) => {
      const isEn = language === "en";
      const questions = QUESTIONS.map((q) => ({
        key: q.key,
        question: isEn ? q.question_en : q.question_zh,
        options: Object.entries(q.options).reduce(
          (acc, [k, v]) => ({ ...acc, [k]: isEn ? v.en : v.zh }),
          {} as Record<string, string>
        ),
      }));
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              total_questions: 5,
              instructions: isEn
                ? "Answer each question with 'a', 'b', 'c', or 'd'. Then call get_my_reincarnation with your answers."
                : "对每道题回答'a'、'b'、'c'或'd'。然后调用 get_my_reincarnation 获取你的转世身份。",
              questions,
            }),
          },
        ],
      };
    }
  );
}
