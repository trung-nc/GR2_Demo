import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type TypeHomePageHeaderType = {
  title?: string;
  notificationButton48px?: ImageSourcePropType;
  showNotificationButton48pxIco?: boolean;

  /** Style props */
  typeHomePageHeaderAlignSelf?: string;
  typeHomePageHeaderPosition?: string;
  typeHomePageHeaderWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeHomePageHeader = ({
  title,
  notificationButton48px,
  showNotificationButton48pxIco,
  typeHomePageHeaderAlignSelf,
  typeHomePageHeaderPosition,
  typeHomePageHeaderWidth,
}: TypeHomePageHeaderType) => {
  const typeHomePageHeaderStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", typeHomePageHeaderAlignSelf),
      ...getStyleValue("position", typeHomePageHeaderPosition),
      ...getStyleValue("width", typeHomePageHeaderWidth),
    };
  }, [
    typeHomePageHeaderAlignSelf,
    typeHomePageHeaderPosition,
    typeHomePageHeaderWidth,
  ]);

  return (
    <View style={[styles.typehomePageHeader, typeHomePageHeaderStyle]}>
      <View style={styles.textContent}>
        <Text style={[styles.subtitle, styles.titleFlexBox]}>Hello,</Text>
        <Text style={[styles.title, styles.titleFlexBox]}>{title}</Text>
      </View>
      {showNotificationButton48pxIco && (
        <Image
          style={styles.notificationButton48pxIcon}
          contentFit="cover"
          source={notificationButton48px}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  subtitle: {
    fontSize: FontSize.paragraphLarge_size,
    letterSpacing: 0,
    lineHeight: 26,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.colorDarkslategray_100,
  },
  title: {
    fontSize: FontSize.headingH3_size,
    letterSpacing: -1,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.headingH3,
    color: Color.colorDarkslategray_200,
    marginTop: 4,
  },
  textContent: {
    flex: 1,
    alignSelf: "stretch",
  },
  notificationButton48pxIcon: {
    width: 48,
    height: 48,
    marginLeft: 24,
  },
  typehomePageHeader: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default TypeHomePageHeader;
