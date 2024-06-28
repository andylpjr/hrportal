import React from "react";
import { View } from "../Common/View";
import { COLOR } from "../../Config";
import { Text } from "../Common/Text";
import MenuBullet from "./MenuBullet";

const menus = [
  {
    label: "",
    submenu: [
      {
        path: "/",
        icon: "dashboard",
        label: "Dashboard",
      },
    ],
  },
  {
    label: "Team Management",
    submenu: [
      {
        path: "/employee",
        icon: "group",
        label: "Employee",
      },
      {
        path: "/onboarding",
        icon: "person_add",
        label: "Onboarding",
      },
      {
        path: "/leave",
        icon: "calendar_month",
        label: "Leave",
      },
      {
        path: "/time-tracking",
        icon: "alarm_add",
        label: "Time Tracking",
      },
      {
        path: "/rewards",
        icon: "new_releases",
        label: "Rewards",
      },
      {
        path: "/costs",
        icon: "request_quote",
        label: "Costs",
      },
      {
        path: "/compensation",
        icon: "offline_bolt",
        label: "Compensation",
      },
      {
        path: "/requests",
        icon: "event_note",
        label: "Requests",
      },
      {
        path: "/feedback",
        icon: "campaign",
        label: "Feedback",
      },
    ],
  },
  {
    label: "Finances",
    submenu: [
      {
        path: "/payroll",
        icon: "paid",
        label: "Payroll",
      },
      {
        path: "/invoices",
        icon: "credit_card",
        label: "Invoices",
      },
      {
        path: "/billing",
        icon: "description",
        label: "Billing",
      },
    ],
  },
];

const SideMenu = () => {
  return (
    <View style={styles.container}>
      {menus.map((menu) => (
        <View key={menu.label} style={styles.menuContainer}>
          <Text style={styles.menuLabel}>{menu.label}</Text>
          {menu.submenu.map((sub) => (
            <MenuBullet
              key={sub.path}
              icon={sub.icon}
              label={sub.label}
              path={sub.path}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default SideMenu;

const styles = {
  container: {
    padding: 10,
    width: "20%",
  } as React.CSSProperties,
  menuContainer: {
    padding: 10,
  } as React.CSSProperties,
  menuLabel: {
    paddingBottom: 10,
  } as React.CSSProperties,
};
