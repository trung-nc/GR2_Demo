import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Property1Tab1 from "./Property1Tab1";
import Property1Tab3 from "./Property1Tab3";
import HomeBar from "./HomeBar";
import { Padding, Border, Color } from "../GlobalStyles";

const SettingsFormContainer = () => {
  return (
    <View style={styles.tabBar3Item}>
      <View style={styles.tabs}>
        <Property1Tab1
          courses={require("../assets/courses2.png")}
          tabColor="#bebab3"
        />
        <Property1Tab3
          wheel1={require("../assets/profile1.png")}
          tab="Profile"
          property1Tab3Position="unset"
          property1Tab3MarginLeft={66}
          property1Tab3Width={64}
          frameViewPaddingHorizontal="unset"
          frameViewPaddingVertical="unset"
          wheel1IconWidth={20}
          wheel1IconHeight={20}
          wheel1IconOverflow="unset"
          tabColor="#bebab3"
        />
        <Property1Tab3
          wheel1={require("../assets/wheel-12.png")}
          tab="Settings"
          property1Tab3Position="unset"
          property1Tab3MarginLeft={66}
          property1Tab3Width={64}
          frameViewPaddingHorizontal="unset"
          frameViewPaddingVertical="unset"
          wheel1IconWidth={24}
          wheel1IconHeight={24}
          wheel1IconOverflow="hidden"
          tabColor="#e3562a"
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
        homeIndicatorBackgroundColor="#78746d"
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
  tabBar3Item: {
    position: "absolute",
    top: 714,
    left: 0,
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

export default SettingsFormContainer;
