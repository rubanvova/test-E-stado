import React from "react";
import Input from "./components/Input";
import Step from "./components/Step";

export default () => (
  <Step
    title="ВОПРОС 1"
    question="Сколько у вас"
    questionGreen={" дойных\n коров?"}
  >
    <Input>Например: 45</Input>
  </Step>
);
