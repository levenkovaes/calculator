import React, { MouseEventHandler, useEffect, useState } from "react";
import { Button } from "./Button";
import { MathExpression } from "./MathExpression";

export const CalculatorGrid = () => {
  const [firstNumber, setFirstNumber] = useState<string>("0");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [sign, setSign] = useState<string>("");
  const [visibleNumber, setVisibleNumber] = useState<string>("0");

  const handleMathExpressionChange: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;

    if (!target.closest(".button") || !target.textContent) return;

    const currentButton = target.closest(".button");

    if (!currentButton) return;

    const textContent = currentButton.textContent;
    console.log(textContent);

    if (textContent === "=") {
      if (secondNumber === "") {
        setFirstNumber("0");
        setSign("");

        return;
      }

      setFirstNumber(count(firstNumber, secondNumber, sign));
      setSign("");
      setSecondNumber("");
      return;
    }

    if (
      currentButton.classList.contains("button--sign") &&
      sign !== "" &&
      secondNumber !== ""
    ) {
      document
        .querySelector(".button--accent")
        ?.classList.remove("button--accent");
      currentButton.classList.add("button--accent");
      setFirstNumber(count(firstNumber, secondNumber, sign));
      setSign("" + textContent);
      setSecondNumber("");
      return;
    }

    if (textContent === "AC") {
      setFirstNumber("0");
      setSign("");
      setSecondNumber("");
      document
        .querySelector(".button--accent")
        ?.classList.remove("button--accent");
      return;
    }

    if (currentButton.classList.contains("button--sign")) {
      document
        .querySelector(".button--accent")
        ?.classList.remove("button--accent");
      currentButton.classList.add("button--accent");
      setSign(() => "" + textContent);
      return;
    }

    if (sign !== "" && secondNumber.length > 0) {
      setSecondNumber((prev) => {
        if (textContent === "DEL") {
          if (prev.length === 1) {
            return "0";
          }
          return prev.slice(0, -1);
        }

        if (
          prev.slice(0, 1) === "0" &&
          prev.length === 1 &&
          textContent !== "."
        ) {
          return prev.slice(1) + textContent;
        }
        return prev + textContent;
      });

      document
        .querySelector(".button--accent")
        ?.classList.remove("button--accent");

      return;
    }

    setFirstNumber((prev) => {
      document
        .querySelector(".button--accent")
        ?.classList.remove("button--accent");
      setSign("");

      if (textContent === "DEL") {
        if (prev.length === 1) {
          return "0";
        }
        return prev.slice(0, -1);
      }

      if (
        prev.slice(0, 1) === "0" &&
        prev.length === 1 &&
        textContent !== "."
      ) {
        return prev.slice(1) + textContent;
      }
      return prev + textContent;
    });
  };

  console.log("firstNumber", firstNumber);
  console.log("sign", sign);
  console.log("secondNumber", secondNumber);
  console.log("visibleNumber", visibleNumber);
  console.log("");

  useEffect(() => {
    setVisibleNumber(secondNumber);
  }, [secondNumber]);

  useEffect(() => {
    setVisibleNumber(firstNumber);
  }, [firstNumber]);

  // useEffect(() => {
  //   setVisibleNumber(secondNumber);
  // }, [secondNumber]);

  const count = (a: string, b: string, sign: string) => {
    switch (sign) {
      case "÷":
        return Number(a) / Number(b) + "";

      case "×":
        return Number(a) * Number(b) + "";

      case "−":
        return Number(a) - Number(b) + "";

      case "+":
        return Number(a) + Number(b) + "";

      default:
        return "error";
    }
  };

  return (
    <div className="calculator-grid">
      <MathExpression visibleNumber={visibleNumber} />

      <Button
        content={"AC"}
        className={"button button--clear button--wide button--clear-wide"}
      />
      <Button content={"DEL"} className={"button button--clear"} />
      <Button content={"÷"} className={"button button--sign"} />
      <Button content={"7"} className={"button"} />
      <Button content={"8"} className={"button"} />
      <Button content={"9"} className={"button"} />
      <Button content={"×"} className={"button button--sign"} />
      <Button content={"4"} className={"button"} />
      <Button content={"5"} className={"button"} />
      <Button content={"6"} className={"button"} />
      <Button content={"−"} className={"button button--sign"} />
      <Button content={"1"} className={"button"} />
      <Button content={"2"} className={"button"} />
      <Button content={"3"} className={"button"} />
      <Button content={"+"} className={"button button--sign"} />
      <Button content={"0"} className={"button"} />
      <Button content={"."} className={"button"} />
      <Button
        content={"="}
        className={"button button--sign button--wide button--equal-wide"}
      />
    </div>
  );
};
