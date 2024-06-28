import React from "react";
import { COLOR } from "../../Config";
import { Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  main?: boolean;
  secondary?: boolean;
  header1?: boolean;
  header2?: boolean;
  header3?: boolean;
  header4?: boolean;
  list?: boolean;
  span?: boolean;
};

export function Text({
  children,
  id,
  style,
  className,
  main,
  secondary,
  header1,
  header2,
  header3,
  header4,
  list,
  span,
}: Props): JSX.Element {
  if (header1) {
    return (
      <h1
        id={id}
        style={{
          color: COLOR.DARK_GREY,
          fontSize: 60,
          ...style,
        }}
      >
        {children}
      </h1>
    );
  }
  if (header2) {
    return (
      <h2
        id={id}
        style={{
          color: COLOR.DARK_GREY,
          fontSize: 60,
          ...style,
        }}
      >
        {children}
      </h2>
    );
  }
  if (header3) {
    return (
      <h3
        id={id}
        style={{
          color: COLOR.DARK_GREY,
          fontSize: 48,
          ...style,
        }}
      >
        {children}
      </h3>
    );
  }
  if (header4) {
    return (
      <h4
        id={id}
        style={{
          color: COLOR.DARK_GREY,
          fontSize: 24,
          ...style,
        }}
      >
        {children}
      </h4>
    );
  }
  if (list) {
    return (
      <li
        id={id}
        style={{
          ...style,
        }}
        className={className}
      >
        {children}
      </li>
    );
  }
  if (span) {
    return (
      <span
        id={id}
        style={{
          ...style,
        }}
        className={className}
      >
        {children}
      </span>
    );
  }
  return (
    <Typography
      noWrap
      id={id}
      style={{
        color: COLOR.DARK_GREY,
        ...style,
      }}
    >
      {children}
    </Typography>
  );
}
