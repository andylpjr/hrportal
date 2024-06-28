import React from "react";
import loadableVisibility from "react-loadable-visibility/loadable-components";
import { DefaultComponent } from "@loadable/component";

export const LazyComponent = (
  lazyComponent: Promise<DefaultComponent<unknown>>
): any => {
  return loadableVisibility(() => lazyComponent, {
    fallback: <></>,
  });
};
