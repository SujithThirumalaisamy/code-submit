import { ReactElement } from "react";

type RowWrapperType = {
  children: ReactElement[] | ReactElement;
};
export default function RowWrapper({ children }: RowWrapperType) {
  return (
    <div
      className="flex flex-row gap-2"
      style={{ height: "100%", width: "100%" }}
    >
      {children}
    </div>
  );
}
