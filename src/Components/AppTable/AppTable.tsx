import React, { Fragment, useState } from "react";
import { Text } from "../Common/Text";
import { View } from "../Common/View";
import {
  getBottomBorderStyle,
  getCardStyle,
  getFontStyle,
} from "../../Helpers/LayoutHelper";
import { AppTableCell, CellType } from "./AppTableCell";
import { createStyles, withStyles, useTheme, DefaultTheme } from "@mui/styles";
import {
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Icon } from "../Common/Icon";
import { COLOR, CARD } from "../../Config";
import { IconButton } from "../Common/IconButton";

export interface AppTableStructure {
  key: string;
  label: string;
  type: CellType;
  canEdit?: boolean;
  castCurrency?: boolean;
  align?: "left" | "center" | "right";
  width?: number;
}

interface AppTableOptions {
  hasCaption?: boolean;
  caption?: string;
  canAdd?: boolean;
  addClicked?: () => void;
  hasEmptyDataComponent?: boolean;
  emptyDataClicked?: () => void;
  customHeaderAction?: React.ReactNode;
}

interface RowState {
  showMoreValues: string[];
}

type Props = {
  id?: string;
  style?: React.CSSProperties;
  captionTextStyle?: React.CSSProperties;
  layout: AppTableStructure[];
  data: any[];
  keyColumn: string;
  recordCount: number;
  options?: AppTableOptions;
};

const StyledTableRow = withStyles((theme: DefaultTheme) =>
  createStyles({
    root: {
      borderBottomWidth: 0,
    },
  })
)(TableRow);

export function AppTable({
  id,
  style,
  captionTextStyle,
  layout,
  data,
  keyColumn,
  recordCount,
  options = {},
}: Props): JSX.Element {
  const [rowState, setRowState] = useState<RowState>({ showMoreValues: [] });
  const {
    hasCaption,
    caption,
    canAdd,
    addClicked,
    hasEmptyDataComponent,
    emptyDataClicked,
    customHeaderAction,
  } = options;
  const appCaption = (
    caption: string,
    recordCount: number,
    colNumber: number
  ) => {
    return (
      <View style={styles.headerRow}>
        <View style={styles.headerCaption}>
          <Text style={{ ...styles.headerCaptionText, ...captionTextStyle }}>
            {caption}
          </Text>
        </View>
        <View style={styles.headerCaption}>
          {customHeaderAction && customHeaderAction}
          {canAdd && (
            <IconButton
              border
              name="add"
              style={{ color: COLOR.DARK_GREY }}
              //   onClick={() => {
              //     if (addClicked) {
              //       addClicked();
              //     }
              //   }}
            />
          )}
        </View>
      </View>
    );
  };

  const appHeader = (head: AppTableStructure[]) => {
    return (
      <TableHead>
        <TableRow>
          {head.map((h, idx) => (
            <TableCell
              id={`hr-tb-h-${h.key}`}
              key={`hr-tb-h-${h.key}`}
              style={{
                minWidth: h.width ? h.width : 120,
                backgroundColor: COLOR.WHITE,
                textAlign: h.align ? h.align : "left",
              }}
            >
              <Text style={styles.tableHeaderText}>{h.label}</Text>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleEmptyDataComponent = () => {
    return <View></View>;
  };

  const handleShowMoreValues = (id: string) => {
    const found = rowState.showMoreValues.findIndex((r) => r === id);
    if (found > -1) {
      setRowState({
        showMoreValues: rowState.showMoreValues.filter((r) => r !== id),
      });
    } else {
      setRowState({ showMoreValues: [...rowState.showMoreValues, id] });
    }
  };

  const appRow = (data: any, row: AppTableStructure[], rowIndex: number) => {
    return (
      <Fragment>
        <StyledTableRow onScroll={(evt) => console.log(evt)}>
          {row.map((r) => (
            <TableCell
              id={`hr-tb-r-${r.key}`}
              key={`hr-tb-r-${r.key}`}
              style={{
                minWidth: r.width ? r.width : 120,
                paddingTop: 5,
                paddingBottom: 5,
                textAlign: r.align ? r.align : "left",
              }}
            >
              <AppTableCell
                data={data}
                field={r.key}
                type={r.type}
                keyColumn={keyColumn}
                canEdit={r.canEdit}
                castCurrency={r.castCurrency}
                rowIndex={rowIndex}
              />
            </TableCell>
          ))}
        </StyledTableRow>
        {/* section for more row component
        )} */}
      </Fragment>
    );
  };

  return (
    <View
      style={{
        ...getCardStyle(0),
        ...style,
      }}
    >
      {hasCaption && appCaption(caption || "", recordCount, layout.length)}
      <TableContainer style={styles.container}>
        <Table stickyHeader>
          {appHeader(layout)}
          <TableBody>
            {data.map((row, index) => appRow(row, layout, index))}
          </TableBody>
        </Table>
      </TableContainer>
      {hasEmptyDataComponent && data.length === 0 && handleEmptyDataComponent()}
    </View>
  );
}

const styles = {
  container: {
    alignItems: "center",
    ...CARD.STANDARD,
    overflowX: "auto",
    overflowY: "hidden",
  } as React.CSSProperties,
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    ...getBottomBorderStyle(),
  } as React.CSSProperties,
  headerCaption: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  } as React.CSSProperties,
  headerCaptionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLOR.DARK_GREY,
    paddingRight: 10,
  } as React.CSSProperties,
  headerCaptionRecordText: {
    fontSize: 12,
    fontWeight: "lighter",
    color: COLOR.DARK_GREY,
  } as React.CSSProperties,
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 100,
    color: COLOR.DARK_GREY,
  } as React.CSSProperties,
  tableCell: {
    padding: 5,
    minWidth: 150,
  } as React.CSSProperties,
  tableCellText: {
    ...getFontStyle({ weight: "100", fontSize: 12 }),
  } as React.CSSProperties,
  tableCellInput: {
    height: 30,
    width: 100,
    fontSize: 12,
  } as React.CSSProperties,
  sortIcon: {
    fontSize: 20,
    marginLeft: 4,
  } as React.CSSProperties,
};
