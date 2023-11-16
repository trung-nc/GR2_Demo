import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image3 = () => {
  return (
    <ImageBackground
      style={styles.image3Icon}
      resizeMode="cover"
      source={require("../assets/image3.png")}
    />
  );
};

const styles = StyleSheet.create({
  image3Icon: {
    width: 54,
    height: 46,
  },
});

export default Image3;
