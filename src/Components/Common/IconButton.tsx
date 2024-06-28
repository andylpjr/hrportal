import React from "react";
import { COLOR, CARD } from "../../Config";
import { Touchable } from "./Touchable";

type Props = {
  name: string;
  id?: string;
  border?: boolean;
  style?: React.CSSProperties;
  onPress?: (e?: any) => void;
  selected?: boolean;
};

export function IconButton({
  id,
  style,
  border,
  name,
  selected,
  onPress,
}: Props): JSX.Element {
  return (
    <Touchable
      style={
        border ? { ...CARD.STANDARD(1), margin: 0, padding: 5 } : undefined
      }
      onClick={onPress}
    >
      <span
        id={id}
        className="material-icons"
        style={{ color: selected ? COLOR.TEAL : COLOR.DARK_GREY, ...style }}
      >
        {name}
      </span>
    </Touchable>
  );
}
