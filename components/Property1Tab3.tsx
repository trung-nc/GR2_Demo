import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

type Property1Tab3Type = {
  wheel1?: ImageSourcePropType;
  tab?: string;

  /** Style props */
  property1Tab3Position?: string;
  property1Tab3MarginLeft?: number | string;
  property1Tab3Width?: number | string;
  frameViewPaddingHorizontal?: number | string;
  frameViewPaddingVertical?: number | string;
  wheel1IconWidth?: number | string;
  wheel1IconHeight?: number | string;
  wheel1IconOverflow?: string;
  tabColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Tab3 = ({
  wheel1,
  tab,
  property1Tab3Position,
  property1Tab3MarginLeft,
  property1Tab3Width,
  frameViewPaddingHorizontal,
  frameViewPaddingVertical,
  wheel1IconWidth,
  wheel1IconHeight,
  wheel1IconOverflow,
  tabColor,
}: Property1Tab3Type) => {
  const property1Tab3Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Tab3Position),
      ...getStyleValue("marginLeft", property1Tab3MarginLeft),
      ...getStyleValue("width", property1Tab3Width),
    };
  }, [property1Tab3Position, property1Tab3MarginLeft, property1Tab3Width]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingHorizontal", frameViewPaddingHorizontal),
      ...getStyleValue("paddingVertical", frameViewPaddingVertical),
    };
  }, [frameViewPaddingHorizontal, frameViewPaddingVertical]);

  const wheel1IconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", wheel1IconWidth),
      ...getStyleValue("height", wheel1IconHeight),
      ...getStyleValue("overflow", wheel1IconOverflow),
    };
  }, [wheel1IconWidth, wheel1IconHeight, wheel1IconOverflow]);

  const tabStyle = useMemo(() => {
    return {
      ...getStyleValue("color", tabColor),
    };
  }, [tabColor]);

  return (
    <View>
      <View
        style={[
          styles.wheel1Wrapper,
          styles.property1tab3FlexBox,
          frameViewStyle,
        ]}
      >
        <Image
          style={[styles.wheel1Icon, wheel1IconStyle]}
          contentFit="cover"
          source={wheel1}
        />
      </View>
      <Text style={[styles.tab, tabStyle]}>{tab}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  property1tab3FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  wheel1Icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  wheel1Wrapper: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: Padding.p_6xs,
  },
  tab: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.inkGray,
    textAlign: "center",
    width: 60,
    height: 18,
  },
});

export default Property1Tab3;
