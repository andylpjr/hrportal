import React from "react";
import { COLOR, SHADOW, CARD } from "../Config";

export type ResponsiveName = "web" | "tablet" | "phone" | "screen";
export const getResponsiveName = (width?: number): ResponsiveName => {
  if (!width && !window) {
    return "web";
  }
  if (!width) {
    width = window.innerWidth;
  }
  if (width <= 758) {
    return "phone";
  }
  if (width <= 992) {
    return "tablet";
  }
  if (width <= 1440) {
    return "web";
  }
  if (width <= 1920) {
    return "screen";
  }
  return "web";
};

export const getCardStyle = (
  padding = 0,
  shadowWeight = 1
): React.CSSProperties => {
  return {
    ...CARD.STANDARD(shadowWeight),
    padding: padding,
    ...getBorderStyle(),
  } as React.CSSProperties;
};

export const getFontStyle = (
  options: { fontSize?: number; color?: string; weight?: string } = {}
): React.CSSProperties => {
  const { fontSize, color, weight } = options;
  return {
    fontSize: fontSize || 14,
    color: color || COLOR.DARK_GREY,
    fontWeight: weight || "normal",
  } as React.CSSProperties;
};

export const getBorderStyle = (width = 1): React.CSSProperties => {
  return {
    borderWidth: width,
    borderColor: COLOR.GREY,
    borderStyle: "solid",
  } as React.CSSProperties;
};

export const getTopBorderStyle = (width = 1): React.CSSProperties => {
  return {
    borderTopWidth: width,
    borderTopColor: COLOR.GREY,
    borderTopStyle: "solid",
  } as React.CSSProperties;
};

export const getBottomBorderStyle = (width = 1): React.CSSProperties => {
  return {
    borderBottomWidth: width,
    borderBottomColor: COLOR.GREY,
    borderBottomStyle: "solid",
  } as React.CSSProperties;
};

export const getLeftBorderStyle = (width = 1): React.CSSProperties => {
  return {
    borderLeftWidth: width,
    borderLeftColor: COLOR.GREY,
    borderLeftStyle: "solid",
  } as React.CSSProperties;
};

export const getRightBorderStyle = (width = 1): React.CSSProperties => {
  return {
    borderRightWidth: width,
    borderRightColor: COLOR.GREY,
    borderRightStyle: "solid",
  } as React.CSSProperties;
};

export const getShadowStyle = (height = 1): React.CSSProperties => {
  return {
    ...SHADOW.STANDARD(height),
  };
};
