import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

type Property1Tab1Type = {
  courses?: ImageSourcePropType;

  /** Style props */
  tabColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Tab1 = ({ courses, tabColor }: Property1Tab1Type) => {
  const tab1Style = useMemo(() => {
    return {
      ...getStyleValue("color", tabColor),
    };
  }, [tabColor]);

  return (
    <View style={styles.property1tab1}>
      <View style={[styles.tab1, styles.tab1FlexBox]}>
        <View style={[styles.icon, styles.tab1FlexBox]}>
          <Image
            style={styles.coursesIcon}
            contentFit="cover"
            source={courses}
          />
        </View>
        <Text style={[styles.tab, tab1Style]}>Courses</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tab1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  coursesIcon: {
    width: 20,
    height: 20,
  },
  icon: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_5xs,
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
  tab1: {
    position: "absolute",
    marginTop: -27,
    marginLeft: -30,
    top: "50%",
    left: "50%",
  },
  property1tab1: {
    width: 64,
    height: 54,
  },
});

export default Property1Tab1;
