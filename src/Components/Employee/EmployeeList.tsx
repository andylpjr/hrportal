import React from "react";
import { View } from "../Common/View";
import { COLOR } from "../../Config";
import { useStore } from "../../Store/UseStore";
import { AppTable, AppTableStructure } from "../AppTable/AppTable";

const employeeStruct: AppTableStructure[] = [
  {
    key: "name",
    label: "EMPLOYEE NAME",
    type: "text",
  },
  {
    key: "employeeId",
    label: "EMPLOYEMENT ID",
    type: "text",
  },
  {
    key: "email",
    label: "EMAIL",
    type: "text",
  },
  {
    key: "role",
    label: "ROLE",
    type: "text",
  },
  {
    key: "status",
    label: "Status",
    type: "status",
  },
  {
    key: "more",
    label: "More",
    type: "more",
  },
];

const EmployeeList = () => {
  const store = useStore();

  return (
    <View style={styles.container}>
      <AppTable
        layout={employeeStruct}
        data={store.members}
        recordCount={store.members.length}
        keyColumn="id"
        style={{ width: "100%" }}
        options={{ hasCaption: true, caption: "Employees" }}
      />
    </View>
  );
};

export default EmployeeList;

const styles = {
  container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLOR.GREY,
  } as React.CSSProperties,
};
