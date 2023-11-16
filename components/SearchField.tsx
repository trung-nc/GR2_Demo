import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

type SearchFieldType = {
  placeholder?: string;

  /** Style props */
  searchFieldPosition?: string;
  searchFieldMarginTop?: number | string;
  searchFieldMarginLeft?: number | string;
  searchFieldTop?: number | string;
  searchFieldLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SearchField = ({
  placeholder,
  searchFieldPosition,
  searchFieldMarginTop,
  searchFieldMarginLeft,
  searchFieldTop,
  searchFieldLeft,
}: SearchFieldType) => {
  const searchFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", searchFieldPosition),
      ...getStyleValue("marginTop", searchFieldMarginTop),
      ...getStyleValue("marginLeft", searchFieldMarginLeft),
      ...getStyleValue("top", searchFieldTop),
      ...getStyleValue("left", searchFieldLeft),
    };
  }, [
    searchFieldPosition,
    searchFieldMarginTop,
    searchFieldMarginLeft,
    searchFieldTop,
    searchFieldLeft,
  ]);

  return (
    <View style={[styles.searchField, searchFieldStyle]}>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <View style={styles.searchIcon}>
        <View style={styles.boundingBox} />
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.inkDarkGray,
    textAlign: "left",
    display: "flex",
    height: 21,
    alignItems: "center",
  },
  boundingBox: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  icon: {
    height: "83.33%",
    width: "83.33%",
    top: "8.33%",
    right: "8.33%",
    bottom: "8.33%",
    left: "8.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  searchField: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.inkWhite,
    borderStyle: "solid",
    borderColor: Color.inkGray,
    borderWidth: 1,
    width: 343,
    flexDirection: "row",
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
  },
});

export default SearchField;
