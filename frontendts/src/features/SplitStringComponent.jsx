import { Fragment } from "react";

export default function SplitStringComponent(text) {
  const lines = text.split("\n");
  return (
    <div>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </div>
  );
}
