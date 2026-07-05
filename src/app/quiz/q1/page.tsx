import QuizScreen from "@/components/screens/QuizScreen";

export default function Q1Page() {
  return (
    <QuizScreen
      questionNumber={1}
      questionKey="q1"
      tag="日常执念"
      title="当你的手机电量仅剩最后 2%，你第一反应会做什么？"
      options={[
        { key: "c", stamp: "甲", label: "内心毫无波澜，直接关机装进口袋，坚信没有手机的自我才是真实的。" },
        { key: "a", stamp: "乙", label: "疯狂调暗屏幕，点开微信，给所有联系人群发一条：我快失联了，速救！" },
        { key: "b", stamp: "丙", label: "淡定地用仅存的电量拍一张暮色天空，发朋友圈配文：最后的静谧。" },
        { key: "d", stamp: "丁", label: "拼命寻找信号，焦虑地发现世界上原来没有充电宝这种东西。" },
      ]}
      nextPath="/quiz/q2"
    />
  );
}
