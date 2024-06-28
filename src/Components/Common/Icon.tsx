import React from "react";
import { COLOR } from "../../Config";

type Props = {
  name: string;
  id?: string;
  style?: React.CSSProperties;
  selected?: boolean;
};

export function Icon({ id, style, name, selected }: Props): JSX.Element {
  return (
    <span
      id={id}
      className="material-icons"
      style={{ color: selected ? COLOR.TEAL : COLOR.DARK_GREY, ...style }}
    >
      {name}
    </span>
  );
}
