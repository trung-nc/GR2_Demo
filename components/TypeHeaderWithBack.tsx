import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type TypeHeaderWithBackType = {
  text?: string;
  showTextContent?: boolean;

  /** Style props */
  typeHeaderWithBackPosition?: string;
  typeHeaderWithBackTop?: number | string;
  typeHeaderWithBackLeft?: number | string;
  typeHeaderWithBackWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeHeaderWithBack = ({
  text,
  showTextContent,
  typeHeaderWithBackPosition,
  typeHeaderWithBackTop,
  typeHeaderWithBackLeft,
  typeHeaderWithBackWidth,
}: TypeHeaderWithBackType) => {
  const typeHeaderWithBackStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeHeaderWithBackPosition),
      ...getStyleValue("top", typeHeaderWithBackTop),
      ...getStyleValue("left", typeHeaderWithBackLeft),
      ...getStyleValue("width", typeHeaderWithBackWidth),
    };
  }, [
    typeHeaderWithBackPosition,
    typeHeaderWithBackTop,
    typeHeaderWithBackLeft,
    typeHeaderWithBackWidth,
  ]);

  return (
    <View style={[styles.typeheaderWithBack, typeHeaderWithBackStyle]}>
      <Image
        style={styles.previosButton48pxIcon}
        contentFit="cover"
        source={require("../assets/previos-button48px.png")}
      />
      {showTextContent && (
        <View style={[styles.textContent, styles.textContentFlexBox]}>
          <View style={[styles.textContent1, styles.textContentFlexBox]}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textContentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  previosButton48pxIcon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.headingH5,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    width: 341,
  },
  textContent1: {
    width: 119,
  },
  textContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  typeheaderWithBack: {
    width: 375,
    paddingLeft: Padding.p_base,
    paddingRight: Padding.p_37xl,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default TypeHeaderWithBack;
