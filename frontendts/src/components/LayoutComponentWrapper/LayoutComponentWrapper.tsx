import "./LayoutComponentWrapper.css";
export default function ResizableComponentWrapper({
  children,
  heading,
  onDrag,
}) {
  return (
    <div className="resizable-wrapper">
      <div className="wrapper-header cursor-grab"  onDragStart={onDrag}>
        <div className="heading">{heading}</div>
      </div>
      <div className={"wrapper-body flex flex-row"}>{children}</div>
    </div>
  );
}
