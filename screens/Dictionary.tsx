import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TypeHeaderWithBack from "../components/TypeHeaderWithBack";
import SearchField from "../components/SearchField";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Dictionary = () => {
  return (
    <View style={styles.dictionary}>
      <TypeHeaderWithBack
        text="Dictionary"
        showTextContent
        typeHeaderWithBackPosition="absolute"
        typeHeaderWithBackTop={64}
        typeHeaderWithBackLeft={0}
        typeHeaderWithBackWidth={375}
      />
      <SearchField
        placeholder="Input a word"
        searchFieldPosition="absolute"
        searchFieldMarginTop={-282}
        searchFieldMarginLeft={-171.5}
        searchFieldTop="50%"
        searchFieldLeft="50%"
      />
      <View style={[styles.content, styles.contentFlexBox]}>
        <View style={styles.textContent}>
          <View style={[styles.textContent1, styles.contentFlexBox]}>
            <View style={styles.title}>
              <Text style={styles.text}>Popular word</Text>
            </View>
            <Text style={styles.bodyText}>{`Book the seats
Pan something`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.homeBar}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    top: 0,
    left: "0%",
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.headingH5,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    position: "absolute",
    width: "100%",
  },
  title: {
    height: 32,
    width: 341,
  },
  bodyText: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.inkDarkGray,
    marginTop: 8,
    textAlign: "center",
    width: 341,
  },
  textContent1: {
    width: 373,
  },
  textContent: {
    flexDirection: "row",
  },
  content: {
    top: 324,
    left: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.inkDarkGray,
    width: 134,
    height: 5,
    opacity: 0.4,
    position: "absolute",
  },
  homeBar: {
    height: "4.19%",
    width: "35.73%",
    top: "95.81%",
    right: "32%",
    bottom: "0%",
    left: "32.27%",
    position: "absolute",
  },
  dictionary: {
    backgroundColor: Color.inkWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dictionary;
