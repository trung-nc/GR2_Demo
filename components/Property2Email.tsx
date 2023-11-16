import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

type Property2EmailType = {
  /** Style props */
  property2EmailPosition?: string;
  property2EmailBorderRadius?: number;
  property2EmailBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property2Email = ({
  property2EmailPosition,
  property2EmailBorderRadius,
  property2EmailBackgroundColor,
}: Property2EmailType) => {
  const property2EmailStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property2EmailPosition),
      ...getStyleValue("borderRadius", property2EmailBorderRadius),
      ...getStyleValue("backgroundColor", property2EmailBackgroundColor),
    };
  }, [
    property2EmailPosition,
    property2EmailBorderRadius,
    property2EmailBackgroundColor,
  ]);

  return (
    <View style={[styles.property2email, property2EmailStyle]}>
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shapeIcon: {
    width: 14,
    height: 11,
  },
  property2email: {
    width: 32,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Property2Email;
