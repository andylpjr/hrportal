import React from "react";
import { View } from "../Common/View";
import { COLOR } from "../../Config";
import { ITask } from "../../Interfaces/ITask";
import { Icon } from "../Common/Icon";
import { Text } from "../Common/Text";

const TaskCell = (data: ITask) => {
  return (
    <View style={styles.container}>
      <Icon
        name={data.progress === 100 ? "check_box" : "check_box_outline_blank"}
        style={{
          color: data.progress === 100 ? COLOR.ORANGE : COLOR.DARK_GREY,
        }}
      />
      <Text style={styles.label}>{data.description}</Text>
    </View>
  );
};

export default TaskCell;

const styles = {
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  } as React.CSSProperties,
  label: {
    paddingLeft: 5,
  } as React.CSSProperties,
};
