import React from "react";
import { View } from "../Common/View";
import { COLOR, CARD } from "../../Config";
import OverviewCard from "./OverviewCard";
import { useStore } from "../../Store/UseStore";
import { AppButton } from "../Common/AppButton";

const OverviewSection = () => {
  const store = useStore();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppButton
          startIcon="calendar_month"
          endIcon="keyboard_arrow_down"
          label="Monthly"
          style={styles.exportButton}
        />
        <View style={styles.iconArea}>
          <AppButton
            startIcon="download"
            label="Export"
            style={styles.exportButton}
          />
          <AppButton
            iconStyle={{ color: COLOR.WHITE }}
            startIcon="add"
            label="New Entry"
            style={styles.addButton}
          />
        </View>
      </View>
      <View style={styles.cardContainer}>
        {store.overviews.map((recap) => (
          <OverviewCard {...recap} />
        ))}
      </View>
    </View>
  );
};

export default OverviewSection;

const styles = {
  container: {
    ...CARD.STANDARD(1),
    padding: 20,
    width: "100%",
    backgroundColor: COLOR.GREY,
  } as React.CSSProperties,
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  } as React.CSSProperties,
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  } as React.CSSProperties,
  iconArea: {
    flexDirection: "row",
    alignItems: "center",
  } as React.CSSProperties,
  addButton: {
    marginLeft: 10,
    color: COLOR.WHITE,
    backgroundColor: COLOR.ORANGE,
  } as React.CSSProperties,
  exportButton: {
    color: COLOR.DARK_GREY,
    backgroundColor: COLOR.WHITE,
  } as React.CSSProperties,
};
