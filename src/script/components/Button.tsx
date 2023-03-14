import React from "react";

interface IButtonProps {
  content: number | string;
  className: string;
}

export const Button = ({ content, className }: IButtonProps) => {
  return <button className={className}>{content}</button>;
};
