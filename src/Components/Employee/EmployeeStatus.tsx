import React from "react";
import { View } from "../Common/View";
import { COLOR } from "../../Config";
import { Icon } from "../Common/Icon";
import { Text } from "../Common/Text";

const getColor = (status: string) => {
  return { color: status !== "active" ? COLOR.ORANGE : COLOR.TEAL };
};

const EmployeeStatus = ({ status }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={status === "active" ? "check_circle" : "cancel"}
        style={getColor(status)}
      />
      <Text style={{ marginLeft: 5 }}>{status}</Text>
    </View>
  );
};

export default EmployeeStatus;

const styles = {
  container: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
};
