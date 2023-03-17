import React, { MouseEventHandler, useEffect, useState } from "react";
import { Button } from "./Button";
import { MathExpression } from "./MathExpression";

export const CalculatorGrid = () => {
  const [firstOperand, setFirstOperand] = useState<string>("0");
  const [secondOperand, setSecondOperand] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [visibleNumber, setVisibleNumber] = useState<string>("0");

  const operatorsArr: string[] = ["÷", "×", "−", "+"];

  const clear = (): void => {
    setFirstOperand("0");
    setOperator("");
    setSecondOperand("");
  };

  const count = (a: string, b: string, operator: string) => {
    switch (operator) {
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

  const handleCount = (): void => {
    setFirstOperand(count(firstOperand, secondOperand, operator));
    setSecondOperand("");
  };

  const handleMathExpressionChange = (buttonContent: string) => {
    if (buttonContent === "AC") {
      clear();
      return;
    }

    if (buttonContent === "DEL") {
      if (secondOperand.length > 0) {
        setSecondOperand((prev: string) => {
          if (prev.length === 1) {
            return "0";
          }
          return prev.slice(0, -1);
        });
      }

      if (secondOperand.length === 0) {
        setFirstOperand((prev: string) => {
          if (prev.length === 1) {
            setOperator("");
            return "0";
          }
          setOperator("");
          return prev.slice(0, -1);
        });
      }
    }

    if (buttonContent === "=") {
      if (secondOperand === "") {
        setOperator("");
        return;
      }

      handleCount();
      setOperator(buttonContent);
      return;
    }

    if (operatorsArr.includes(buttonContent)) {
      if (secondOperand.length > 0) {
        handleCount();
        setOperator(buttonContent);
        return;
      }

      setOperator(buttonContent);
      return;
    }

    if (/[\d | .]/.test(buttonContent)) {
      console.log(buttonContent);
      console.log(operator.length);
      if (operator.length > 0 && operator !== "=") {
        setSecondOperand((prev: string) => {
          if (buttonContent === "." && prev.includes(".")) {
            return prev;
          }
          return prev + buttonContent;
        });
      }

      if (operator.length === 0) {
        setFirstOperand((prev: string) => {
          if (buttonContent === "." && prev.includes(".")) {
            return prev;
          }
          if (prev[0] === "0" && buttonContent !== "." && prev.length === 1) {
            return prev.slice(1) + buttonContent;
          }

          return prev + buttonContent;
        });
      }

      if (operator === "=") {
        setFirstOperand(buttonContent);
        setOperator("");
      }
    }
  };

  console.log("firstOperand", firstOperand);
  console.log("operator", operator);
  console.log("secondOperand", secondOperand);
  console.log("visibleNumber", visibleNumber);
  console.log("");

  useEffect(() => {
    if (secondOperand.length > 0) {
      setVisibleNumber(secondOperand);
      return;
    }

    setVisibleNumber(firstOperand);
  }, [firstOperand, secondOperand]);

  // useEffect(() => {
  //   setVisibleNumber(secondOperand);
  // }, [secondOperand]);

  // useEffect(() => {
  //   setVisibleNumber(firstOperand);
  // }, [firstOperand]);

  return (
    <div className="calculator-grid">
      <MathExpression visibleNumber={visibleNumber} />

      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"AC"}
        customClass={"button button--clear button--wide button--clear-wide"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"DEL"}
        customClass={"button button--clear"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"÷"}
        customClass={"button button--operator"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"7"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"8"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"9"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"×"}
        customClass={"button button--operator"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"4"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"5"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"6"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"−"}
        customClass={"button button--operator"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"1"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"2"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"3"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"+"}
        customClass={"button button--operator"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"0"}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"."}
        customClass={"button"}
      />
      <Button
        handleMathExpressionChange={handleMathExpressionChange}
        content={"="}
        customClass={"button button--operator button--wide button--equal-wide"}
      />
    </div>
  );
};
