import QuizScreen from "@/components/screens/QuizScreen";

export default function Q3Page() {
  return (
    <QuizScreen
      questionNumber={3}
      questionKey="q3"
      tag="自然羁绊"
      title="如果在路边看到一片在秋风中疯狂打转的落叶，你会觉得："
      options={[
        { key: "a", stamp: "甲", label: "它一定是上辈子没能蹦够极的倒霉人类，这辈子在弥补遗憾。" },
        { key: "b", stamp: "乙", label: "这是一场由微风主导的宏大后现代街头实验，可惜观众只有我。" },
        { key: "c", stamp: "丙", label: "没啥感觉，甚至想一脚踩上去，听听看它能不能发出令人解压的脆响。" },
        { key: "d", stamp: "丁", label: "掏出手机拍个视频，然后给它配上一段深沉的文字，发给朋友圈品鉴。" },
      ]}
      nextPath="/quiz/q4"
      footerHint="点选后，地府判官将即刻为您生成转世身份卡..."
    />
  );
}
