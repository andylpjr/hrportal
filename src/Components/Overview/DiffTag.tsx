import React from "react";
import { View } from "../Common/View";
import { COLOR } from "../../Config";
import { Icon } from "../Common/Icon";
import { Text } from "../Common/Text";

const getColor = (diff: number) => {
  return { color: diff < 0 ? COLOR.ORANGE : COLOR.TEAL };
};

const DiffTag = ({ diff }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={diff < 0 ? "arrow_circle_down" : "arrow_circle_up"}
        style={getColor(diff)}
      />
      <Text style={{ ...getColor(diff), marginRight: 5 }}>{`${
        diff < 0 ? "-" : "+"
      }${diff}%`}</Text>
    </View>
  );
};

export default DiffTag;

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
};
