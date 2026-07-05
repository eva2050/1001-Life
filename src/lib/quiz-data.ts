// Quiz data and result generation logic

export const TOTAL_QUESTIONS = 9;

export type OptionKey = "a" | "b" | "c" | "d";

export interface QuizAnswers {
  q1: OptionKey;
  q2: OptionKey;
  q3: OptionKey;
  q4: OptionKey;
  q5: OptionKey;
  q6: OptionKey;
  q7: OptionKey;
  q8: OptionKey;
  q9: OptionKey;
}

export interface ReincarnationResult {
  id: string;
  nameZh: string;
  emoji: string;
  descriptionZh: string;
  tagsZh: string[];
  confidence: number;
  bgColor: string;
  accentColor: string;
}

// 荒诞转世身份库（全部为有物质存在感的实体，承载无尽轮回中的佛教真谛）
const RESULTS: ReincarnationResult[] = [
  {
    id: "stone_path",
    nameZh: "一块铺了三百年的青石板",
    emoji: "🪨",
    descriptionZh: "三百年了。你记住了每一双踩过你的脚。穿布鞋的、赤脚的、技巧地踩过你中心的、不知道你在底下的。雨水把你磨得发亮，同时把你踩得更深。你不去任何地方，但所有地方的人都经过你。",
    tagsZh: ["历史的肯綮", "被磨平的平静", "走过的人轻于鸿毛"],
    confidence: 92,
    bgColor: "#EEF0F8",
    accentColor: "#3B5F65",
  },
  {
    id: "river_stone",
    nameZh: "河底一块圆润的石头",
    emoji: "⚪",
    descriptionZh: "你不记得是从哪里来的了。每一层圆润都是一次碰撞，每一次碰撞都是一次放手。水永远在流，你永远在这里。有时孩子把你捞出水面，看了一眼，再扔回去。你就这样回到水底。",
    tagsZh: ["被磨圆的总和", "水流不止你在此", "返回安静的跳跃"],
    confidence: 88,
    bgColor: "#E8F4FD",
    accentColor: "#3B5F65",
  },
  {
    id: "old_well",
    nameZh: "村口废弃的老井",
    emoji: "⭕",
    descriptionZh: "水早就打完了。人们接了自来水，不再来这里。但你还在。青苔从井壁慢慢长进来，青蛙在冬天沉到你的底部睡觉。有时一个孩子跑过来，朝你喊一声，你把他的声音原样还给他。他笑着跑开，你又安静下来。",
    tagsZh: ["废弃的等候", "回声是唯一的充实", "已经没有用还在这里"],
    confidence: 90,
    bgColor: "#F0EBE0",
    accentColor: "#8A7E72",
  },
  {
    id: "wind_chime",
    nameZh: "庙廊下的一串风铃",
    emoji: "🎐",
    descriptionZh: "不是你想响，是风来了。风走了你就停。人们给你起了许多名字——妙音、禅意、放下。你不在乎这些。你在乎的只有：风什么时候再来。等待和响动，这就是你全部的时间。",
    tagsZh: ["被风唤醒", "无意之间传递清醒", "响过就忘了"],
    confidence: 85,
    bgColor: "#FFFBEC",
    accentColor: "#D69E2E",
  },
  {
    id: "infj_fortune",
    nameZh: "寺庙香炉里的一缕烟",
    emoji: "🌫️",
    descriptionZh: "香点燃的时候，你还不存在。火舌舔上去，你就从那里升起来了。你是热的，然后慢慢变凉，变淡，变成空气里再也看不见的东西。没有人知道你最后去了哪里。也许这没有关系。",
    tagsZh: ["被遗忘的智慧", "无形的传递", "歪着也能到天上"],
    confidence: 87,
    bgColor: "#FFF3E0",
    accentColor: "#D69E2E",
  },
  {
    id: "infp_leaf",
    nameZh: "秋天在空中打转的那片落叶",
    emoji: "🍂",
    descriptionZh: "树放开你的时候没有声音。风接住了你，你就在风里转。高处的风和低处的风方向不一样，你也不知道自己要去哪里。后来你落在一块潮湿的石头上，慢慢变成泥土的颜色。",
    tagsZh: ["随风而动", "被有心人收藏", "你不知道你在哪但感觉还好"],
    confidence: 83,
    bgColor: "#FFF8F0",
    accentColor: "#D69E2E",
  },
  {
    id: "enfj_groupchat",
    nameZh: "寺庙门口的一口铜钟",
    emoji: "🔔",
    descriptionZh: "你不是每天都响。只有被人敲，你才发出声音。那声音比你预想的要传得远，有时远到你自己都不知道它去了哪里。钟声散尽之后，你又回到沉默。沉默也不是空的，沉默是你本来的样子。",
    tagsZh: ["被敲响的回应", "声音比身体走得远", "沉默是本来面目"],
    confidence: 89,
    bgColor: "#FFF0EC",
    accentColor: "#C96A4B",
  },
  {
    id: "enfp_tangent2",
    nameZh: "便利店门口的橘子树",
    emoji: "🍊",
    descriptionZh: "你扎根在最热闹却最被忽视的角落。春天开花没人注意，秋天结果偶尔被孩子摘走一两颗。雨把你浇透，风把你晃动，阳光把你晒得叶片发烫。这棵树就这样站着，季节一圈一圈地转。",
    tagsZh: ["充满可能性", "永远在原地", "想法比行动多九十九倍"],
    confidence: 86,
    bgColor: "#FFF3E0",
    accentColor: "#D69E2E",
  },
  {
    id: "istj_handrail",
    nameZh: "地铁车厢里的扶手杆",
    emoji: "🚇",
    descriptionZh: "你每天被几千只手握过，感受着这座城市所有人的疲惫与体温。无法说话，无法离开，却以自己的方式支撑着每一个摇摇欲坠的人。默默无闻，但若某天你不在了，所有人都会摔倒。",
    tagsZh: ["沉默支撑者", "不可或缺的存在", "走了才知道少了什么"],
    confidence: 91,
    bgColor: "#F0F4F8",
    accentColor: "#3B5F65",
  },
  {
    id: "isfj_officeplant",
    nameZh: "某甲方公司的角落绿植",
    emoji: "🪴",
    descriptionZh: "你静静坐在甲方老板桌旁的角落，见证无数次PPT推翻重来。没人给你浇水，但你靠接水杯里的白开水和偶尔的窗边阳光，顽强活了三年。你的存在让空间不那么冷，没有你谁也不会注意。",
    tagsZh: ["被忽视的温柔", "顽强生命力", "三年没人浇水但还在"],
    confidence: 84,
    bgColor: "#EDFAF1",
    accentColor: "#3B5F65",
  },
  {
    id: "mud_wall",
    nameZh: "黄土高原上一堵土墙",
    emoji: "🟫",
    descriptionZh: "你已经不记得是谁用手把你垒起来的了。也许是为了挡风，也许是为了圈一块麦地。每年雨天你就粗糙地邪断了几块，没有人修。但你还在。太阳每天照在你身上，没有那么多要求，只是就这样。",
    tagsZh: ["无名的坚持", "风化也在、雨削也在", "没有人修但还在"],
    confidence: 79,
    bgColor: "#F5EFE0",
    accentColor: "#8A7E72",
  },
  {
    id: "ferry_boat",
    nameZh: "渡口拴着的一条木船",
    emoji: "⛵",
    descriptionZh: "你一生都在此岸和彼岸之间。不是你选了这条路，是这条路选了你。渡的人里有上坟的，有赶集的，有逃跑的，没人明白自己其实都是同一种人。你载过所有人，记得的却是末班工人爬上来时还吃着一只炒米饼。",
    tagsZh: ["居中的见证者", "渡口就是全部世界", "记得的不是大事"],
    confidence: 82,
    bgColor: "#E8F4F8",
    accentColor: "#3B5F65",
  },
  {
    id: "istp_cloud",
    nameZh: "北京三环上空的一朵云",
    emoji: "☁️",
    descriptionZh: "你飘在拥堵的三环上方，每天俯视着几百万辆车在你的阴影下龟速爬行。你想下雨，但又觉得太麻烦了，于是就这样飘着。没人指挥你，也没人拦得住你。自由，但也没什么目标。",
    tagsZh: ["存在主义者", "冷静旁观者", "想下雨但懒得下"],
    confidence: 80,
    bgColor: "#E3F2FD",
    accentColor: "#3B5F65",
  },
  {
    id: "isfp_turtle",
    nameZh: "寺庙荷花池里的老乌龟",
    emoji: "🐢",
    descriptionZh: "你活得很慢，但你活得很久。游客来了又走，香火旺了又淡，朝代更迭，而你只是在荷叶下打了个盹。有人说你能带来好运，有人说你是神龟下凡，而你只是想安静吃两口水草。",
    tagsZh: ["长寿哲学家", "被神话化的平凡", "其实只想吃水草"],
    confidence: 85,
    bgColor: "#E0F7FA",
    accentColor: "#3B5F65",
  },
  {
    id: "estp_delivery",
    nameZh: "渡口边一块磨损的指路石碑",
    emoji: "🪧",
    descriptionZh: "你站在这里，指向远处。你自己去不了你指着的地方。无数人看了你一眼，然后走向你手指的方向，再也没有回头。风雨把字迹磨得越来越淡，但人们还是停下来，对着你模糊的字辨认半天，然后离开。",
    tagsZh: ["指向却无法前往", "被阅读却不被记住", "字迹越淡越被凝视"],
    confidence: 88,
    bgColor: "#FFF8E1",
    accentColor: "#8A7E72",
  },
  {
    id: "esfp_cybercat",
    nameZh: "深山里一块无名的苔藓",
    emoji: "🌿",
    descriptionZh: "没有人专门来看你。偶尔有人低头，也是为了找路，不是为了看你。你贴着石头生长，把石头的冷和湿都吸进自己身体里。下雨的时候你最饱满，阳光强烈的时候你蜷缩。这就是你全部的一生，循环往复。",
    tagsZh: ["无人知晓的茂盛", "与石头共呼吸", "雨是你的全部盛事"],
    confidence: 84,
    bgColor: "#E8F0E8",
    accentColor: "#3B5F65",
  },
];

// 答题权重（9道题 × 4个选项 → 对应结果 id）
const ANSWER_WEIGHTS: Record<string, Record<OptionKey, string[]>> = {
  q1: {
    a: ["enfp_tangent2", "esfp_cybercat"],
    b: ["isfp_turtle", "istp_cloud"],
    c: ["stone_path", "istj_handrail"],
    d: ["infp_leaf", "isfj_officeplant"],
  },
  q2: {
    a: ["estp_delivery", "esfp_cybercat"],
    b: ["istp_cloud", "istj_handrail"],
    c: ["enfp_tangent2", "ferry_boat"],
    d: ["stone_path", "infj_fortune"],
  },
  q3: {
    a: ["infp_leaf", "infj_fortune"],
    b: ["river_stone", "stone_path"],
    c: ["estp_delivery", "esfp_cybercat"],
    d: ["enfp_tangent2", "enfj_groupchat"],
  },
  q4: {
    a: ["old_well", "estp_delivery"],
    b: ["isfj_officeplant", "ferry_boat"],
    c: ["istj_handrail", "mud_wall"],
    d: ["istp_cloud", "infp_leaf"],
  },
  q5: {
    a: ["istp_cloud", "isfp_turtle"],
    b: ["stone_path", "mud_wall"],
    c: ["enfp_tangent2", "estp_delivery"],
    d: ["esfp_cybercat", "isfj_officeplant"],
  },
  q6: {
    a: ["old_well", "enfj_groupchat"],
    b: ["river_stone", "wind_chime"],
    c: ["esfp_cybercat", "enfp_tangent2"],
    d: ["isfp_turtle", "infp_leaf"],
  },
  q7: {
    a: ["estp_delivery", "istj_handrail"],
    b: ["infj_fortune", "wind_chime"],
    c: ["istp_cloud", "river_stone"],
    d: ["istj_handrail", "mud_wall"],
  },
  q8: {
    a: ["ferry_boat", "enfj_groupchat"],
    b: ["stone_path", "river_stone"],
    c: ["estp_delivery", "old_well"],
    d: ["infp_leaf", "isfp_turtle"],
  },
  q9: {
    a: ["wind_chime", "river_stone"],
    b: ["isfj_officeplant", "infj_fortune"],
    c: ["esfp_cybercat", "enfp_tangent2"],
    d: ["istj_handrail", "mud_wall"],
  },
};

export function computeResult(answers: Record<string, OptionKey | undefined>): ReincarnationResult {
  const scores: Record<string, number> = {};

  for (const [qKey, answer] of Object.entries(answers)) {
    if (!answer) continue;
    const weights = ANSWER_WEIGHTS[qKey]?.[answer as OptionKey] ?? [];
    for (const id of weights) {
      scores[id] = (scores[id] ?? 0) + 1;
    }
  }

  let topId = "enfp_tangent2";
  let topScore = -1;
  for (const [id, score] of Object.entries(scores)) {
    if (score > topScore) {
      topScore = score;
      topId = id;
    }
  }

  const found = RESULTS.find((r) => r.id === topId);
  return found ?? RESULTS[0];
}

export { RESULTS };
