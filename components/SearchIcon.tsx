import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

type SearchIconType = {
  /** Style props */
  searchIconMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SearchIcon = ({ searchIconMarginLeft }: SearchIconType) => {
  const searchIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", searchIconMarginLeft),
    };
  }, [searchIconMarginLeft]);

  return (
    <View style={[styles.searchIcon, searchIconStyle]}>
      <View style={styles.boundingBox} />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default SearchIcon;
