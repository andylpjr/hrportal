import React from "react";
import { View } from "../Common/View";
import { COLOR } from "../../Config";
import { ITask } from "../../Interfaces/ITask";
import { Text } from "../Common/Text";

const ProgressCell = (data: ITask) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View
          style={{
            width: `${data.progress}%`,
            backgroundColor: COLOR.ORANGE,
            height: 3,
          }}
        />
      </View>
      <Text style={styles.text}>{`${data.progress}%`}</Text>
    </View>
  );
};

export default ProgressCell;

const styles = {
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  } as React.CSSProperties,
  progressContainer: {
    width: 50,
    height: 3,
    backgroundColor: COLOR.LIGHT_GREY,
  } as React.CSSProperties,
  text: {
    paddingLeft: 5,
  } as React.CSSProperties,
};
