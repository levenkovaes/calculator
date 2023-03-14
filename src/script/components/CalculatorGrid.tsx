import React from "react";
import { Button } from "./Button";

export const CalculatorGrid = () => {
  return (
    <div className="calculator-grid">
      <textarea className="textarea"></textarea>

      <Button
        content={"AC"}
        className={"button button--clear button--wide button--clear-wide"}
      />
      <Button content={"DEL"} className={"button button--clear"} />
      <Button content={"÷"} className={"button button--sign"} />
      <Button content={7} className={"button"} />
      <Button content={8} className={"button"} />
      <Button content={9} className={"button"} />
      <Button content={"×"} className={"button button--sign"} />
      <Button content={4} className={"button"} />
      <Button content={5} className={"button"} />
      <Button content={6} className={"button"} />
      <Button content={"−"} className={"button button--sign"} />
      <Button content={1} className={"button"} />
      <Button content={2} className={"button"} />
      <Button content={3} className={"button"} />
      <Button content={"+"} className={"button button--sign"} />
      <Button content={0} className={"button"} />
      <Button content={","} className={"button"} />
      <Button
        content={"="}
        className={"button button--sign button--wide button--equal-wide"}
      />
    </div>
  );
};
