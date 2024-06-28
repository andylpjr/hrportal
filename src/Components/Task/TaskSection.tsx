import React from "react";
import { View } from "../Common/View";
import { COLOR } from "../../Config";
import { useStore } from "../../Store/UseStore";
import { AppTable, AppTableStructure } from "../AppTable/AppTable";

const taskStruct: AppTableStructure[] = [
  {
    key: "description",
    label: "TASK",
    type: "task",
  },
  {
    key: "due",
    label: "DUE",
    type: "text",
  },
  {
    key: "member",
    label: "MEMBER",
    type: "member",
  },
  {
    key: "progress",
    label: "PROGRESS",
    type: "progress",
  },
];

const TaskSection = () => {
  const store = useStore();

  return (
    <View style={styles.container}>
      <AppTable
        layout={taskStruct}
        data={store.tasks}
        recordCount={store.tasks.length}
        keyColumn="id"
        style={{ width: "100%" }}
        options={{ hasCaption: true, caption: "Today's Task", canAdd: true }}
      />
    </View>
  );
};

export default TaskSection;

const styles = {
  container: {
    width: "50%",
    height: 500,
    paddingRight: 10,
    paddingLeft: 5,
    alignItems: "center",
  } as React.CSSProperties,
};
