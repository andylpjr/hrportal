import React from "react";
import { View } from "../Common/View";
import { useStore } from "../../Store/UseStore";
import { AppTable, AppTableStructure } from "../AppTable/AppTable";

const scheduleStruct: AppTableStructure[] = [
  {
    key: "time",
    label: "TIME",
    type: "text",
    width: 50,
  },
  {
    key: "mon20",
    label: "MON 20",
    type: "schedule",
  },
  {
    key: "tue21",
    label: "TUE 21",
    type: "schedule",
  },
  {
    key: "wed22",
    label: "WED 22",
    type: "schedule",
  },
  {
    key: "thu23",
    label: "THU 23",
    type: "schedule",
  },
  {
    key: "fri24",
    label: "FRI 24",
    type: "schedule",
  },
];

const ScheduleSection = () => {
  const store = useStore();

  return (
    <View style={styles.container}>
      <AppTable
        layout={scheduleStruct}
        data={store.schedules}
        recordCount={store.schedules.length}
        keyColumn="time"
        style={{ width: "100%" }}
        options={{ hasCaption: true, caption: "Schedule", canAdd: true }}
      />
    </View>
  );
};

export default ScheduleSection;

const styles = {
  container: {
    width: "50%",
    height: 500,
    paddingLeft: 10,
    paddingRight: 5,
    alignItems: "center",
  } as React.CSSProperties,
};
