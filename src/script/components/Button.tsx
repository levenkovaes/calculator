import React, { MouseEventHandler } from "react";

interface IButtonProps {
  content: string;
  customClass: string;
  handleMathExpressionChange: (content: string) => void;
  // handleClick: (content: string) => void;
}

export const Button = ({
  content,
  customClass,
  handleMathExpressionChange,
}: IButtonProps) => {
  return (
    <button
      className={customClass}
      onClick={() => {
        handleMathExpressionChange(content);
      }}
    >
      {content}
    </button>
  );
};
