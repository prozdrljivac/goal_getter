import { type FC, type ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export const InfoBox: FC<InfoBoxProps> = (props) => {
  return (
    <aside className="p-8 border rounded text-center">
      {props.mode === "warning" && <h1>Warning, {props.severity} severity!</h1>}
      <p>{props.children}</p>
    </aside>
  );
};
