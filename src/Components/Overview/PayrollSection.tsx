import React from "react";
import { View } from "../Common/View";
import { COLOR, CARD } from "../../Config";
import { useStore } from "../../Store/UseStore";
import PayrollCard from "./PayrollCard";
import { Text } from "../Common/Text";

const PayrollSection = () => {
  const store = useStore();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Employee Payrolls</Text>
      </View>
      <View style={styles.row}>
        {store.overviewPayrolls.map((pay, index) => (
          <PayrollCard
            key={index}
            label={pay.label}
            amount={pay.amount}
            index={index}
          />
        ))}
      </View>
    </View>
  );
};

export default PayrollSection;

const styles = {
  container: {
    ...CARD.STANDARD(1),
    width: "100%",
    marginTop: 20,
    padding: 0,
    backgroundColor: COLOR.GREY,
  } as React.CSSProperties,
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  } as React.CSSProperties,
  header: {
    padding: 10,
    width: "100%",
    backgroundColor: COLOR.WHITE,
  } as React.CSSProperties,
};
