import React from "react";
import { Button } from "@mui/material";
import { Icon } from "./Icon";
import { COLOR } from "../../Config";

type Props = {
  label: string;
  id?: string;
  startIcon?: string;
  endIcon?: string;
  style?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  onPress?: (e?: any) => void;
};

export function AppButton({
  id,
  style,
  iconStyle,
  label,
  onPress,
  startIcon,
  endIcon,
}: Props): JSX.Element {
  return (
    <Button
      id={id}
      startIcon={
        startIcon ? <Icon style={iconStyle} name={startIcon} /> : undefined
      }
      endIcon={endIcon ? <Icon style={iconStyle} name={endIcon} /> : undefined}
      onClick={onPress}
      style={style}
    >
      {label}
    </Button>
  );
}
