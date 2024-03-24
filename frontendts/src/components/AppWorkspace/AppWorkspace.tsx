import { useState } from "react";
import "./AppWorkspace.css";
import LayoutComponentWrapper from "../LayoutComponentWrapper/LayoutComponentWrapper";
import RowWrapper from "../Wrappers/RowWrapper";

export default function AppWorkspace(props) {
  const [components, setComponents] = useState(["Editor", ["Input", "Output"]]);
  const Drag = (e) => {
    console.log(e.target);
  };
  function renderComponents(components) {
    return (
      <div className="app-workspace">
        {components.map((component, index) => (
          <RowWrapper key={index}>
            {Array.isArray(component) ? (
              component.map((childComponent, childIndex) => (
                <LayoutComponentWrapper
                  onDrag={Drag}
                  key={childIndex}
                  heading={childComponent}
                >
                  {props.children.find(
                    (child) => child.props.heading === childComponent
                  )}
                </LayoutComponentWrapper>
              ))
            ) : (
              <LayoutComponentWrapper heading={component}>
                {props.children.find(
                  (child) => child.props.heading === component
                )}
              </LayoutComponentWrapper>
            )}
          </RowWrapper>
        ))}
      </div>
    );
  }

  return renderComponents(components);
}
