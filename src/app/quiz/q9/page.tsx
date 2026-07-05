import QuizScreen from "@/components/screens/QuizScreen";

export default function Q9Page() {
  return (
    <QuizScreen
      questionNumber={9}
      questionKey="q9"
      tag="终极天问"
      title="有人问你：「你觉得人生的意义是什么？」你会："
      options={[
        { key: "a", stamp: "甲", label: "反问对方这个问题本身是否有意义，然后展开二十分钟辩论。" },
        { key: "b", stamp: "乙", label: "说「我也不知道，但我觉得对身边人好就够了」，然后岔开话题。" },
        { key: "c", stamp: "丙", label: "非常认真地回答「就是活得开心吧」，然后立刻去点一杯奶茶。" },
        { key: "d", stamp: "丁", label: "沉默三秒，微笑，然后说「这个问题太重要了，改天聊」，从此没有改天。" },
      ]}
      nextPath="/result"
      footerHint="点选后，判官将综合你的一切罪证宣判"
      backLabel="重新思考"
    />
  );
}
