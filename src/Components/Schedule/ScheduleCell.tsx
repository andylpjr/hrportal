import React from "react";
import { View } from "../Common/View";
import { COLOR, CARD } from "../../Config";
import { Icon } from "../Common/Icon";
import { Text } from "../Common/Text";
import { IScheduleActivity } from "../../Interfaces/ISchedule";

const LEVEL_COLOR = {
  1: {
    color: COLOR.VIOLET,
    backgroundColor: COLOR.LIGHT_VIOLET,
  },
  2: {
    color: COLOR.BROWN,
    backgroundColor: COLOR.LIGHT_BROWN,
  },
  3: {
    color: COLOR.GREY,
    backgroundColor: COLOR.LIGHT_GREY,
  },
  4: {
    color: COLOR.GREEN,
    backgroundColor: COLOR.LIGHT_GREEN,
  },
  5: {
    color: COLOR.PURPLE,
    backgroundColor: COLOR.LIGHT_PURPLE,
  },
};

const getColor = (level: number) => {
  return LEVEL_COLOR[level];
};

const ScheduleCell = ({ data }) => {
  console.log(data);
  if (!data) return <></>;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: getColor(data.level).backgroundColor,
      }}
    >
      <View
        style={{
          width: 3,
          backgroundColor: getColor(data.level).color,
        }}
      />
      <Text
        style={{
          ...styles.label,
          color: getColor(data.level).color,
          fontSize: 8,
        }}
      >
        {data.label}
      </Text>
    </View>
  );
};

export default ScheduleCell;

const styles = {
  container: {
    ...CARD.STANDARD(1),
    height: 20,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
  label: {} as React.CSSProperties,
};
