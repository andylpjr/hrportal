import React from "react";
import { Route, Routes } from "react-router-dom";
import { LazyComponent } from "../Helpers/LazyComponent";
import { useWindowSize } from "../Helpers/Hooks/useWindowSize";
import { View } from "../Components/Common/View";
import { COLOR, CARD } from "../Config";
import SideMenu from "../Components/Menu/SideMenu";
import TopBar from "../Components/Bar/TopBar";

const DashboardPage = LazyComponent(import("../Components/DashboardPage"));

export const AppRouter = () => {
  const { width } = useWindowSize();

  return (
    <View style={styles.container}>
      <SideMenu />
      <View style={styles.rightContainer}>
        <TopBar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="//" element={<DashboardPage />} />
        </Routes>
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: COLOR.GREY,
    flexDirection: "row",
  } as React.CSSProperties,
  rightContainer: {
    ...CARD.STANDARD(1),
    margin: 8,
    width: "80%",
  } as React.CSSProperties,
  phoneContainer: {
    // paddingBottom: getMobileOperatingSystem() === 'iOS' ? 75 : 55,
  } as React.CSSProperties,
};
