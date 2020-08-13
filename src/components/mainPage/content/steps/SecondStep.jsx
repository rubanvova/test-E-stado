import React from "react";
import Input from "./components/Input";
import Step from "./components/Step";

export default () => (
  <Step
    title="ВОПРОС 2"
    question="Сколько"
    questionGreen={" молока в сутки\n вы доите?"}
  >
    <Input>Например: 12</Input>
  </Step>
);
