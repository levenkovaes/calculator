import React from "react";

interface IButtonProps {
  content: string;
  className: string;
  // handleClick: (content: string) => void;
}

export const Button = ({ content, className }: IButtonProps) => {
  return (
    <button
      className={className}
      // onClick={() => {
      //   handleClick(content);
      // }}
    >
      {content}
    </button>
  );
};
