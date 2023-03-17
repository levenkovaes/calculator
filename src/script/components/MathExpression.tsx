import React, { useEffect, useState } from "react";
import { useRef } from "react";

interface IMathExpressionProps {
  visibleNumber: string;
}

export const MathExpression = ({ visibleNumber }: IMathExpressionProps) => {
  // //   const [mathExpression, setMathExpression] = useState<string>("0");
  // const [inputValue, setInputValue] = useState("");
  // console.log(inputValue);
  // //   setMathExpression((prev) => {
  // //     return prev + 9;
  // //   });

  // //   console.log(visibleNumber);

  // const mathExpressionRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (mathExpressionRef.current) {
  //     //   mathExpressionRef.current.value = mathExpression;
  //     setInputValue(visibleNumber);
  //     // mathExpressionRef.current.value = visibleNumber;
  //   }
  // }, [visibleNumber]);

  return (
    <input
      // ref={mathExpressionRef}
      // onChange={(e) => {
      //   setInputValue(e.target.value);
      // }}
      value={visibleNumber}
      type="text"
      className="math-expression"
    />
  );
};
