import React from "react";
import { View } from "./Common/View";
import OverviewSection from "./Overview/OverviewSection";
import EmployeeList from "./Employee/EmployeeList";
import TaskSection from "./Task/TaskSection";
import ScheduleSection from "./Schedule/ScheduleSection";
import PayrollSection from "./Overview/PayrollSection";

const DashboardPage = () => {
  return (
    <View style={{ width: "100%" }}>
      <OverviewSection />
      <View style={styles.taskScheduleContainer}>
        <TaskSection />
        <ScheduleSection />
      </View>
      <EmployeeList />
      <PayrollSection />
    </View>
  );
};

export default DashboardPage;

const styles = {
  taskScheduleContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  } as React.CSSProperties,
};
