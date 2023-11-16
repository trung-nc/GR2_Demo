import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

type HomeBarType = {
  /** Style props */
  homeBarHeight?: number | string;
  homeBarPosition?: string;
  homeBarAlignSelf?: string;
  homeBarMarginLeft?: number | string;
  homeBarTop?: number | string;
  homeBarBottom?: number | string;
  homeBarLeft?: number | string;
  homeBarWidth?: number | string;
  homeIndicatorMarginLeft?: number | string;
  homeIndicatorBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HomeBar = ({
  homeBarHeight,
  homeBarPosition,
  homeBarAlignSelf,
  homeBarMarginLeft,
  homeBarTop,
  homeBarBottom,
  homeBarLeft,
  homeBarWidth,
  homeIndicatorMarginLeft,
  homeIndicatorBackgroundColor,
}: HomeBarType) => {
  const homeBarStyle = useMemo(() => {
    return {
      ...getStyleValue("height", homeBarHeight),
      ...getStyleValue("position", homeBarPosition),
      ...getStyleValue("alignSelf", homeBarAlignSelf),
      ...getStyleValue("marginLeft", homeBarMarginLeft),
      ...getStyleValue("top", homeBarTop),
      ...getStyleValue("bottom", homeBarBottom),
      ...getStyleValue("left", homeBarLeft),
      ...getStyleValue("width", homeBarWidth),
    };
  }, [
    homeBarHeight,
    homeBarPosition,
    homeBarAlignSelf,
    homeBarMarginLeft,
    homeBarTop,
    homeBarBottom,
    homeBarLeft,
    homeBarWidth,
  ]);

  const homeIndicatorStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", homeIndicatorMarginLeft),
      ...getStyleValue("backgroundColor", homeIndicatorBackgroundColor),
    };
  }, [homeIndicatorMarginLeft, homeIndicatorBackgroundColor]);

  return (
    <View style={[styles.homeBar, homeBarStyle]}>
      <View style={[styles.homeIndicator, homeIndicatorStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicator: {
    position: "absolute",
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.inkDarkGray,
    height: 5,
    opacity: 0.4,
    width: 134,
  },
  homeBar: {
    height: 34,
    alignSelf: "stretch",
  },
});

export default HomeBar;
