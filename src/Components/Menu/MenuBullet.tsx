import React from "react";
import { View } from "../Common/View";
import { CARD } from "../../Config";
import { Touchable } from "../Common/Touchable";
import { useLocation } from "react-router-dom";
import { Text } from "../Common/Text";
import { Icon } from "../Common/Icon";

type Props = {
  icon: string;
  path: string;
  label: string;
};

const MenuBullet = ({ icon, path, label }: Props) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Touchable
      style={location.pathname === path ? styles.active : styles.inactive}
    >
      <Icon name={icon} />
      <View style={styles.iconLabel}>
        <Text>{label}</Text>
      </View>
    </Touchable>
  );
};

export default MenuBullet;

const styles = {
  active: {
    ...CARD.STANDARD(1),
    display: "flex",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flexDirection: "row",
  } as React.CSSProperties,
  inactive: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    alignItems: "center",
  } as React.CSSProperties,
  iconLabel: {
    paddingLeft: 10,
  } as React.CSSProperties,
};
