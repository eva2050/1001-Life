import QuizScreen from "@/components/screens/QuizScreen";

export default function Q7Page() {
  return (
    <QuizScreen
      questionNumber={7}
      questionKey="q7"
      tag="末日假设"
      title="如果明天地球要爆炸，你今晚会做什么？"
      options={[
        { key: "a", stamp: "甲", label: "召开紧急会议，讨论爆炸的可行性方案和备用预案。" },
        { key: "b", stamp: "乙", label: "写一封遗书，感谢所有曾经对我好的人，尤其是那只流浪猫。" },
        { key: "c", stamp: "丙", label: "认真思考「地球爆炸」这个命题的哲学意义，直到爆炸发生。" },
        { key: "d", stamp: "丁", label: "该睡睡，该吃吃，明天的事明天再说，反正也没法阻止。" },
      ]}
      nextPath="/quiz/q8"
      footerHint="提示：无标准答案，但结果会出卖你"
      backLabel="退回人间"
    />
  );
}
