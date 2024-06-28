import React, { useState } from "react";
import { Text } from "../Common/Text";
import { Icon } from "../Common/Icon";
import { Touchable } from "../Common/Touchable";
import { getFontStyle } from "../../Helpers/LayoutHelper";
import EmployeeStatus from "../Employee/EmployeeStatus";
import TaskCell from "../Task/TaskCell";
import ProgressCell from "../Task/ProgressCell";
import ScheduleCell from "../Schedule/ScheduleCell";

export type CellType =
  | "text"
  | "number"
  | "more"
  | "status"
  | "member_image"
  | "member"
  | "progress"
  | "schedule"
  | "task";

type Props = {
  data: any;
  field: string;
  type: CellType;
  keyColumn: string;
  canEdit?: boolean;
  castCurrency?: boolean;
  align?: "center" | "right";
  rowIndex?: number;
};

interface State {
  showMore: boolean;
}

export function AppTableCell({
  data,
  field,
  type,
  keyColumn,
  canEdit,
  castCurrency,
  align,
  rowIndex,
}: Props): JSX.Element {
  const [state, setState] = useState<State>({ showMore: false });

  if (type === "task") {
    return <TaskCell {...data} />;
  }

  if (type === "member") {
    return <></>;
  }

  if (type === "progress") {
    return <ProgressCell {...data} />;
  }

  if (type === "schedule") {
    return <ScheduleCell data={data[field]} />;
  }

  if (type === "more") {
    return <Icon name="keyboard_arrow_down" />;
  }

  if (type === "status") {
    return <EmployeeStatus status={data[field]} />;
  }

  return <Text style={styles.tableCellText}>{data[field]}</Text>;
}

const styles = {
  tableCell: {
    padding: 5,
    paddingLeft: 15,
    minWidth: 150,
  } as React.CSSProperties,
  tableCellText: {
    ...getFontStyle({ weight: "100", fontSize: 12 }),
  } as React.CSSProperties,
};
