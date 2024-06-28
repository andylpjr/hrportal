import React from "react";
import { View } from "../Common/View";
import { COLOR, CARD } from "../../Config";
import { Text } from "../Common/Text";
import { IconButton } from "../Common/IconButton";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Good Morning, Dean!</Text>
      </View>
      <View style={styles.row}>
        <IconButton name="calendar_month" />
        <IconButton style={{ marginLeft: 10 }} name="notifications" />
      </View>
    </View>
  );
};

export default TopBar;

const styles = {
  container: {
    ...CARD.STANDARD(1),
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  } as React.CSSProperties,
  row: {
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
  menuContainer: {
    padding: 10,
  } as React.CSSProperties,
  menuLabel: {
    paddingBottom: 10,
  } as React.CSSProperties,
};
