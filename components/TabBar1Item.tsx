import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Property1Tab1 from "./Property1Tab1";
import Property1Tab3 from "./Property1Tab3";
import HomeBar from "./HomeBar";
import { Padding, Border, Color } from "../GlobalStyles";

type TabBar1ItemType = {
  /** Style props */
  tabBar1ItemPosition?: string;
  tabBar1ItemTop?: number | string;
  tabBar1ItemLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TabBar1Item = ({
  tabBar1ItemPosition,
  tabBar1ItemTop,
  tabBar1ItemLeft,
}: TabBar1ItemType) => {
  const tabBar1ItemStyle = useMemo(() => {
    return {
      ...getStyleValue("position", tabBar1ItemPosition),
      ...getStyleValue("top", tabBar1ItemTop),
      ...getStyleValue("left", tabBar1ItemLeft),
    };
  }, [tabBar1ItemPosition, tabBar1ItemTop, tabBar1ItemLeft]);

  return (
    <View style={[styles.tabBar1Item, tabBar1ItemStyle]}>
      <View style={styles.tabs}>
        <Property1Tab1
          courses={require("../assets/courses1.png")}
          tabColor="#e3562a"
        />
        <Property1Tab3
          wheel1={require("../assets/profile1.png")}
          tab="Profile"
          property1Tab3Position="unset"
          property1Tab3MarginLeft={66}
          property1Tab3Width="unset"
          frameViewPaddingHorizontal="unset"
          frameViewPaddingVertical="unset"
          wheel1IconWidth={20}
          wheel1IconHeight={20}
          wheel1IconOverflow="unset"
          tabColor="#bebab3"
        />
        <Property1Tab3
          wheel1={require("../assets/wheel-11.png")}
          tab="Settings"
          property1Tab3Position="unset"
          property1Tab3MarginLeft={66}
          property1Tab3Width={64}
          frameViewPaddingHorizontal="unset"
          frameViewPaddingVertical="unset"
          wheel1IconWidth={24}
          wheel1IconHeight={24}
          wheel1IconOverflow="hidden"
          tabColor="#bebab3"
        />
      </View>
      <HomeBar
        homeBarHeight={32}
        homeBarPosition="relative"
        homeBarAlignSelf="stretch"
        homeBarMarginLeft="unset"
        homeBarTop="unset"
        homeBarBottom="unset"
        homeBarLeft="unset"
        homeBarWidth="unset"
        homeIndicatorMarginLeft={-66.5}
        homeIndicatorBackgroundColor="#bebab3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_11xs,
    width: 375,
  },
  tabBar1Item: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    backgroundColor: Color.inkWhite,
    borderStyle: "solid",
    borderColor: Color.inkGray,
    borderWidth: 1,
    height: 98,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: Padding.p_5xs,
    width: 375,
  },
});

export default TabBar1Item;
