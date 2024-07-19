import React from "react";

interface IMathExpressionProps {
  visibleNumber: string;
}

export const MathExpression = ({ visibleNumber }: IMathExpressionProps) => {
  return (
    <input
      readOnly
      value={visibleNumber}
      type="text"
      className="math-expression"
    />
  );
};
