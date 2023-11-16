import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type LevelPrimaryType = {
  text?: string;

  /** Style props */
  levelPrimaryPosition?: string;
  levelPrimaryAlignSelf?: string;
  levelPrimaryMarginTop?: number | string;
  levelPrimaryWidth?: number | string;
  levelPrimaryTop?: number | string;
  levelPrimaryRight?: number | string;
  levelPrimaryLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LevelPrimary = ({
  text,
  levelPrimaryPosition,
  levelPrimaryAlignSelf,
  levelPrimaryMarginTop,
  levelPrimaryWidth,
  levelPrimaryTop,
  levelPrimaryRight,
  levelPrimaryLeft,
}: LevelPrimaryType) => {
  const levelPrimaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", levelPrimaryPosition),
      ...getStyleValue("alignSelf", levelPrimaryAlignSelf),
      ...getStyleValue("marginTop", levelPrimaryMarginTop),
      ...getStyleValue("width", levelPrimaryWidth),
      ...getStyleValue("top", levelPrimaryTop),
      ...getStyleValue("right", levelPrimaryRight),
      ...getStyleValue("left", levelPrimaryLeft),
    };
  }, [
    levelPrimaryPosition,
    levelPrimaryAlignSelf,
    levelPrimaryMarginTop,
    levelPrimaryWidth,
    levelPrimaryTop,
    levelPrimaryRight,
    levelPrimaryLeft,
  ]);

  return (
    <View style={[styles.levelprimary, styles.textFlexBox, levelPrimaryStyle]}>
      <Text style={[styles.text, styles.textFlexBox]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    flex: 1,
    fontSize: FontSize.paragraphLarge_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.headingH5,
    color: Color.inkWhite,
    textAlign: "center",
    display: "flex",
    height: 24,
  },
  levelprimary: {
    borderRadius: Border.br_base,
    backgroundColor: Color.colorsPrimaryColor,
    flexDirection: "row",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    alignSelf: "stretch",
  },
});

export default LevelPrimary;
