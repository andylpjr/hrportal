import React from "react";
import { View } from "../Common/View";
import { COLOR, CARD } from "../../Config";
import { Icon } from "../Common/Icon";
import { Text } from "../Common/Text";
import { IOverview } from "../../Interfaces/IOverview";
import DiffTag from "./DiffTag";

const OverviewCard = ({ tag, label, amount, difference, from }: IOverview) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Icon name={tag === "person" ? "group" : "work"} />
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={styles.amountRow}>
        <Text style={styles.amountText}>{amount}</Text>
        <View style={styles.tag}>
          <DiffTag diff={difference} />
          <Text>{from}</Text>
        </View>
      </View>
    </View>
  );
};

export default OverviewCard;

const styles = {
  container: {
    width: "25%",
    height: 100,
    ...CARD.STANDARD(1),
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "space-between",
  } as React.CSSProperties,
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  } as React.CSSProperties,
  labelText: {
    paddingLeft: 10,
  } as React.CSSProperties,
  amountText: {
    fontSize: 20,
    fontWeight: "bold",
  } as React.CSSProperties,
  tag: {
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
};
