import { ReactElement } from "react";
import "./LayoutComponentWrapper.css";
type ResizableComponentWrapperType = {
  children: ReactElement | undefined;
  heading: string;
};
export default function ResizableComponentWrapper({
  children,
  heading,
}: ResizableComponentWrapperType) {
  return (
    <div className="resizable-wrapper">
      <div className="wrapper-header cursor-grab">
        <div className="heading">{heading}</div>
      </div>
      <div className={"wrapper-body flex flex-row"}>{children}</div>
    </div>
  );
}
