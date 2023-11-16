import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

type Property1SettingsInformatioType = {
  path?: ImageSourcePropType;
  header?: string;
  text?: string;

  /** Style props */
  property1SettingsInformatPosition?: string;
  property1SettingsInformatAlignSelf?: string;
  property1SettingsInformatMarginTop?: number | string;
  pathIconWidth?: number | string;
  pathIconHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1SettingsInformatio = ({
  path,
  header,
  text,
  property1SettingsInformatPosition,
  property1SettingsInformatAlignSelf,
  property1SettingsInformatMarginTop,
  pathIconWidth,
  pathIconHeight,
}: Property1SettingsInformatioType) => {
  const property1SettingsInformatioStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1SettingsInformatPosition),
      ...getStyleValue("alignSelf", property1SettingsInformatAlignSelf),
      ...getStyleValue("marginTop", property1SettingsInformatMarginTop),
    };
  }, [
    property1SettingsInformatPosition,
    property1SettingsInformatAlignSelf,
    property1SettingsInformatMarginTop,
  ]);

  const pathIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", pathIconWidth),
      ...getStyleValue("height", pathIconHeight),
    };
  }, [pathIconWidth, pathIconHeight]);

  return (
    <View
      style={[
        styles.property1settingsInformatio,
        styles.settingsInformationIconsFlexBox,
        property1SettingsInformatioStyle,
      ]}
    >
      <View style={[styles.name, styles.nameFlexBox]}>
        <View
          style={[
            styles.settingsInformationIcons,
            styles.settingsInformationIconsFlexBox,
          ]}
        >
          <Image
            style={[styles.pathIcon, pathIconStyle]}
            contentFit="cover"
            source={path}
          />
        </View>
        <View style={[styles.content, styles.nameFlexBox]}>
          <Text style={[styles.header, styles.textFlexBox]}>{header}</Text>
          <Text style={[styles.text, styles.textFlexBox]}>{text}</Text>
        </View>
      </View>
      <Image
        style={styles.nextIcon}
        contentFit="cover"
        source={require("../assets/next-icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsInformationIconsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  nameFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  textFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  pathIcon: {
    width: 15,
    height: 14,
  },
  settingsInformationIcons: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.colorsSecondaryColor,
    width: 32,
    height: 32,
    justifyContent: "center",
  },
  header: {
    fontSize: FontSize.headingH5_size,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.headingH5,
    color: Color.colorDarkslategray_100,
  },
  text: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.inkDarkGray,
    height: 22,
  },
  content: {
    height: 66,
    marginLeft: 12,
    justifyContent: "center",
  },
  name: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
  },
  nextIcon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  property1settingsInformatio: {
    borderRadius: Border.br_base,
    backgroundColor: Color.inkWhite,
    borderStyle: "solid",
    borderColor: Color.inkGray,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default Property1SettingsInformatio;
