import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type PasswordFieldType = {
  passwordIcons?: ImageSourcePropType;

  /** Style props */
  passwordFieldPosition?: string;
  passwordFieldAlignSelf?: string;
  passwordFieldHeight?: number | string;
  passwordFieldMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordField = ({
  passwordIcons,
  passwordFieldPosition,
  passwordFieldAlignSelf,
  passwordFieldHeight,
  passwordFieldMarginTop,
}: PasswordFieldType) => {
  const passwordFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", passwordFieldPosition),
      ...getStyleValue("alignSelf", passwordFieldAlignSelf),
      ...getStyleValue("height", passwordFieldHeight),
      ...getStyleValue("marginTop", passwordFieldMarginTop),
    };
  }, [
    passwordFieldPosition,
    passwordFieldAlignSelf,
    passwordFieldHeight,
    passwordFieldMarginTop,
  ]);

  return (
    <View style={[styles.passwordField, passwordFieldStyle]}>
      <Text style={styles.placeholder}>Password</Text>
      <Image
        style={styles.passwordIcons}
        contentFit="cover"
        source={passwordIcons}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    alignSelf: "stretch",
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.inkDarkGray,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  passwordIcons: {
    width: 24,
    height: 24,
  },
  passwordField: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.inkWhite,
    borderStyle: "solid",
    borderColor: Color.inkGray,
    borderWidth: 1,
    height: 53,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Padding.p_base,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default PasswordField;
