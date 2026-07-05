import QuizScreen from "@/components/screens/QuizScreen";

export default function Q6Page() {
  return (
    <QuizScreen
      questionNumber={6}
      questionKey="q6"
      tag="人际玄学"
      title="朋友发来消息「在吗」，你盯着屏幕三秒，然后："
      options={[
        { key: "a", stamp: "甲", label: "立刻回复「在」，然后等待接下来那个让你后悔的请求。" },
        { key: "b", stamp: "乙", label: "分析了一下发消息的时间节点，决定假装没看到。" },
        { key: "c", stamp: "丙", label: "回复一个表情包，既不承认也不否认，保持战略模糊。" },
        { key: "d", stamp: "丁", label: "手机静音放回口袋，心想：宇宙会安排的。" },
      ]}
      nextPath="/quiz/q7"
      footerHint="提示：请诚实，阎王爷看得见你的聊天记录"
    />
  );
}
