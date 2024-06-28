import React from "react";
import { View } from "../Common/View";
import { CARD, COLOR } from "../../Config";
import { Icon } from "../Common/Icon";
import { Text } from "../Common/Text";
import { IOverviewPayroll } from "../../Interfaces/IOverview";

interface Props extends IOverviewPayroll {
  index: number;
}

const icons = [
  "payments",
  "edit_calendar",
  "today",
  "event_repeat",
  "event_available",
  "paid",
];

const PayrollCard = ({ index, amount, label }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={styles.amountRow}>
        <Icon name={icons[index]} />
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </View>
  );
};

export default PayrollCard;

const styles = {
  container: {
    width: "25%",
    height: 70,
    ...CARD.STANDARD(1),
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  } as React.CSSProperties,
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
  labelText: {} as React.CSSProperties,
  amountText: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "bold",
  } as React.CSSProperties,
  tag: {
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
};
