import { ReactElement, useState } from "react";
import "./AppWorkspace.css";
import LayoutComponentWrapper from "../LayoutComponentWrapper/LayoutComponentWrapper";
import RowWrapper from "../Wrappers/RowWrapper";

type AppWorkspaceProps = {
  children: ReactElement[];
};

export default function AppWorkspace(props: AppWorkspaceProps) {
  const [components] = useState(["Editor", ["Input", "Output"]]);

  function renderComponents(components: (string | string[])[]) {
    return (
      <div className="app-workspace">
        {components.map((component: string | string[], index: number) => (
          <RowWrapper key={index}>
            {Array.isArray(component) ? (
              component.map((childComponent, childIndex) => (
                <LayoutComponentWrapper
                  key={childIndex}
                  heading={childComponent}
                  children={props.children.find(
                    (child) => child.props.heading === childComponent
                  )}
                />
              ))
            ) : (
              <LayoutComponentWrapper
                heading={component}
                children={props.children.find(
                  (child) => child.props.heading === component
                )}
              />
            )}
          </RowWrapper>
        ))}
      </div>
    );
  }

  return renderComponents(components);
}
