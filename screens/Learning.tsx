import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import HomeBar from "../components/HomeBar";
import TypeHeaderWithBack from "../components/TypeHeaderWithBack";
import BookFormContainer from "../components/BookFormContainer";
import LevelPrimary from "../components/LevelPrimary";
import { Color } from "../GlobalStyles";

const Learning = () => {
  return (
    <View style={styles.learning}>
      <View style={styles.test} />
      <HomeBar
        homeBarHeight="3.94%"
        homeBarPosition="absolute"
        homeBarAlignSelf="unset"
        homeBarMarginLeft={-187.5}
        homeBarTop="96.06%"
        homeBarBottom="0%"
        homeBarLeft="50%"
        homeBarWidth={375}
        homeIndicatorMarginLeft={-66.5}
        homeIndicatorBackgroundColor="#78746d"
      />
      <TypeHeaderWithBack
        text="HTML"
        showTextContent={false}
        typeHeaderWithBackPosition="absolute"
        typeHeaderWithBackTop={44}
        typeHeaderWithBackLeft={0}
        typeHeaderWithBackWidth={375}
      />
      <BookFormContainer />
      <LevelPrimary
        text="Continue"
        levelPrimaryPosition="absolute"
        levelPrimaryAlignSelf="unset"
        levelPrimaryMarginTop={310}
        levelPrimaryWidth="82.4%"
        levelPrimaryTop="50%"
        levelPrimaryRight="8.8%"
        levelPrimaryLeft="8.8%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    position: "absolute",
    marginTop: -358,
    marginLeft: -187.5,
    top: "50%",
    left: "50%",
    width: 375,
    height: 665,
    alignItems: "center",
  },
  learning: {
    backgroundColor: Color.inkWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Learning;
