import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type UserDataFieldType = {
  placeholder?: string;

  /** Style props */
  userDataFieldPosition?: string;
  userDataFieldHeight?: number | string;
  userDataFieldMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UserDataField = ({
  placeholder,
  userDataFieldPosition,
  userDataFieldHeight,
  userDataFieldMarginTop,
}: UserDataFieldType) => {
  const userDataFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", userDataFieldPosition),
      ...getStyleValue("height", userDataFieldHeight),
      ...getStyleValue("marginTop", userDataFieldMarginTop),
    };
  }, [userDataFieldPosition, userDataFieldHeight, userDataFieldMarginTop]);

  return (
    <View style={[styles.userDataField, userDataFieldStyle]}>
      <Text style={styles.placeholder}>{placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    alignSelf: "stretch",
    flex: 1,
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.inkDarkGray,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  userDataField: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.inkWhite,
    borderStyle: "solid",
    borderColor: Color.inkGray,
    borderWidth: 1,
    height: 53,
    flexDirection: "row",
    padding: Padding.p_base,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default UserDataField;
