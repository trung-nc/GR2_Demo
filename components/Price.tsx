import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type PriceType = {
  button?: string;

  /** Style props */
  pricePosition?: string;
  buttonFontSize?: number;
  buttonLineHeight?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Price = ({
  button,
  pricePosition,
  buttonFontSize,
  buttonLineHeight,
}: PriceType) => {
  const priceStyle = useMemo(() => {
    return {
      ...getStyleValue("position", pricePosition),
    };
  }, [pricePosition]);

  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", buttonFontSize),
      ...getStyleValue("lineHeight", buttonLineHeight),
    };
  }, [buttonFontSize, buttonLineHeight]);

  return (
    <View style={[styles.price, priceStyle]}>
      <Text style={[styles.button, buttonStyle]}>{button}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.headingH5,
    color: Color.typographyLightTextColor,
    textAlign: "right",
  },
  price: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorsSecondaryColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xs,
  },
});

export default Price;
