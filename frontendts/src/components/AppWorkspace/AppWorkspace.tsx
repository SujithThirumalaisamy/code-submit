import { useState } from "react";
import "./AppWorkspace.css";
import LayoutComponentWrapper from "../LayoutComponentWrapper/LayoutComponentWrapper";
import Split from "react-split";

type AppWorkspaceProps = {
  children: ReactElement[];
};

export default function AppWorkspace(props: AppWorkspaceProps) {
  const [components] = useState(["Editor", ["Input", "Output"]]);

  function renderComponents(components: (string | string[])[]) {
    return (
      <div className="app-workspace">
        {/* {components.map((component: string | string[], index: number) => (
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
        ))} */}
        <Split
          sizes={[75, 25]}
          minSize={100}
          expandToMin={false}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="vertical"
          cursor="row-resize"
        >
          {typeof components[0] === "string" ? (
            <LayoutComponentWrapper
              key={0}
              heading={components[0]}
              children={props.children.find(
                (child) => child.props.heading === components[0]
              )}
            />
          ) : (
            <Split
              sizes={[50, 50]}
              minSize={100}
              expandToMin={false}
              gutterSize={10}
              gutterAlign="center"
              snapOffset={30}
              dragInterval={1}
              direction="horizontal"
              cursor="col-resize"
            >
              <LayoutComponentWrapper
                key={10}
                heading={components[1][0]}
                children={props.children.find(
                  (child) => child.props.heading === components[0][0]
                )}
              />
              <LayoutComponentWrapper
                key={10}
                heading={components[1][1]}
                children={props.children.find(
                  (child) => child.props.heading === components[0][1]
                )}
              />
            </Split>
          )}
        </Split>
      </div>
    );
  }

  return renderComponents(components);
}
