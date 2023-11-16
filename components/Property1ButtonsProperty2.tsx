import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

type Property1ButtonsProperty2Type = {
  button?: string;

  /** Style props */
  property1ButtonsProperty2Position?: string;
  property1ButtonsProperty2AlignSelf?: string;
  property1ButtonsProperty2MarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1ButtonsProperty2 = ({
  button,
  property1ButtonsProperty2Position,
  property1ButtonsProperty2AlignSelf,
  property1ButtonsProperty2MarginTop,
}: Property1ButtonsProperty2Type) => {
  const property1ButtonsProperty2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1ButtonsProperty2Position),
      ...getStyleValue("alignSelf", property1ButtonsProperty2AlignSelf),
      ...getStyleValue("marginTop", property1ButtonsProperty2MarginTop),
    };
  }, [
    property1ButtonsProperty2Position,
    property1ButtonsProperty2AlignSelf,
    property1ButtonsProperty2MarginTop,
  ]);

  return (
    <View
      style={[styles.property1buttonsProperty2, property1ButtonsProperty2Style]}
    >
      <Text style={styles.button}>{button}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.headingH5,
    color: Color.inkDarkGray,
    textAlign: "center",
  },
  property1buttonsProperty2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
});

export default Property1ButtonsProperty2;
