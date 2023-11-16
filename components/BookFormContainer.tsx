import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const BookFormContainer = () => {
  return (
    <View style={styles.test}>
      <View style={styles.textContent}>
        <Text style={[styles.number, styles.numberFlexBox]}>1 of 20</Text>
        <Text style={[styles.question, styles.questionSpaceBlock]}>
          book/bʊk/
        </Text>
        <Text
          style={[styles.subtitle, styles.questionSpaceBlock]}
        >{`3 h 30 min `}</Text>
      </View>
      <View style={styles.answers}>
        <Image
          style={styles.image2Icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  numberFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  questionSpaceBlock: {
    marginTop: 8,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  number: {
    fontSize: FontSize.paragraphLarge_size,
    lineHeight: 26,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.inkDarkGray,
    opacity: 0.6,
  },
  question: {
    fontSize: FontSize.headingH4_size,
    lineHeight: 32,
    fontFamily: FontFamily.headingH5,
    color: Color.colorDarkslategray_100,
    height: 76,
    textAlign: "center",
    letterSpacing: 0,
  },
  subtitle: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 18,
    fontFamily: FontFamily.paragraphSmall1,
    color: Color.colorsSuccess,
    textAlign: "left",
    display: "none",
  },
  textContent: {
    height: 118,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  image2Icon: {
    width: 58,
    height: 49,
  },
  answers: {
    height: 319,
    marginTop: 16,
  },
  image1Icon: {
    width: 117,
    height: 117,
    marginTop: 16,
  },
  test: {
    position: "absolute",
    top: 100,
    left: 16,
    borderRadius: Border.br_5xs,
    height: 605,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
  },
});

export default BookFormContainer;
