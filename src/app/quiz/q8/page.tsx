import QuizScreen from "@/components/screens/QuizScreen";

export default function Q8Page() {
  return (
    <QuizScreen
      questionNumber={8}
      questionKey="q8"
      tag="社会观察"
      title="你排队排了二十分钟，终于快到了，前面突然插进来一个人，你会："
      options={[
        { key: "a", stamp: "甲", label: "礼貌但坚定地提醒对方，并准备好了三套应对方案。" },
        { key: "b", stamp: "乙", label: "在心里骂了八百遍，嘴上什么都没说，默默吞下去。" },
        { key: "c", stamp: "丙", label: "掏出手机拍照，计划在网上发帖讨论「排队插队的社会学意义」。" },
        { key: "d", stamp: "丁", label: "觉得反正时间也不值钱，而且对方也许有苦衷，于是算了。" },
      ]}
      nextPath="/quiz/q9"
      footerHint="提示：你的愤怒指数将直接影响来世物种"
      backLabel="重新排队"
    />
  );
}
