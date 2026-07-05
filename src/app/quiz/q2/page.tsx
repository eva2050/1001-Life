import QuizScreen from "@/components/screens/QuizScreen";

export default function Q2Page() {
  return (
    <QuizScreen
      questionNumber={2}
      questionKey="q2"
      tag="午夜梦回"
      title="凌晨三点半在黑暗中醒来，周围静悄悄，你通常在想些什么？"
      options={[
        { key: "d", stamp: "甲", label: "在脑海里疯狂复盘三年前向同事打招呼，结果对方没理你的尴尬一幕。" },
        { key: "b", stamp: "乙", label: "琢磨着人类要是能进行光合作用，那现在世界上还会有工作和KPI吗？" },
        { key: "a", stamp: "丙", label: "单纯觉得肚子饿了，开始纠结冰箱里那盒过期一天的牛奶究竟能不能喝。" },
        { key: "c", stamp: "丁", label: "翻来覆去地想着自己的人生到底走向何方，然后决定明天再想，先睡觉。" },
      ]}
      nextPath="/quiz/q3"
      footerHint="提示：深夜不言梦，凭直觉抉择。"
    />
  );
}
