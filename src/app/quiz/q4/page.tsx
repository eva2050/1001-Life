import QuizScreen from "@/components/screens/QuizScreen";

export default function Q4Page() {
  return (
    <QuizScreen
      questionNumber={4}
      questionKey="q4"
      tag="处世智慧"
      title="电梯来了，但已经满了，你会："
      options={[
        { key: "a", stamp: "甲", label: "硬挤进去，因为等下一班是对时间的严重浪费。" },
        { key: "b", stamp: "乙", label: "礼貌地退后一步，默默等下一班，内心毫无怨言。" },
        { key: "c", stamp: "丙", label: "决定爬楼梯，一边爬一边告诉自己这是难得的锻炼机会。" },
        { key: "d", stamp: "丁", label: "转身回去，坐回工位，算了，又不是什么急事。" },
      ]}
      nextPath="/quiz/q5"
      backLabel="放弃超度"
    />
  );
}
