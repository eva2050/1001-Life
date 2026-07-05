import QuizScreen from "@/components/screens/QuizScreen";

export default function Q5Page() {
  return (
    <QuizScreen
      questionNumber={5}
      questionKey="q5"
      tag="终极一问"
      title="周六完全空着，你的第一反应是："
      options={[
        { key: "a", stamp: "甲", label: "睡到中午，然后花两小时后悔自己又浪费了一个上午。" },
        { key: "b", stamp: "乙", label: "制定一份超级充实的计划，最终完成其中的10%。" },
        { key: "c", stamp: "丙", label: "穿上鞋出门，走到哪里是哪里，毫无目的。" },
        { key: "d", stamp: "丁", label: "躺在床上刷手机四小时，称之为「深度充电」。" },
      ]}
      nextPath="/quiz/q6"
      backLabel="从头开始"
    />
  );
}
