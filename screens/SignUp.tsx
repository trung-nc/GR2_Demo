import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import SignUpForm from "../components/SignUpForm";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <View style={styles.homeBar}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.content, styles.contentFlexBox]}>
        <View style={styles.illustration}>
          <Image
            style={[styles.coolKidsStanding, styles.textPosition]}
            contentFit="cover"
            source={require("../assets/cool-kids-standing.png")}
          />
        </View>
        <View style={styles.textContent}>
          <View style={[styles.textContent1, styles.contentFlexBox]}>
            <View style={styles.title}>
              <Text style={[styles.text, styles.textPosition]}>Sign up</Text>
            </View>
            <Text style={styles.bodyText}>Create your account</Text>
          </View>
        </View>
        <SignUpForm />
      </View>
      <Image
        style={styles.previosButton48pxIcon}
        contentFit="cover"
        source={require("../assets/previos-button48px1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.inkDarkGray,
    width: 134,
    height: 5,
    opacity: 0.4,
    position: "absolute",
  },
  homeBar: {
    height: "4.19%",
    width: "35.73%",
    top: "95.81%",
    right: "32%",
    bottom: "0%",
    left: "32.27%",
    position: "absolute",
  },
  coolKidsStanding: {
    width: 343,
    height: 253,
    left: 0,
  },
  illustration: {
    height: 253,
    alignSelf: "stretch",
  },
  text: {
    left: "0%",
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.headingH5,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    width: "100%",
  },
  title: {
    height: 32,
    width: 341,
  },
  bodyText: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium,
    color: Color.inkDarkGray,
    marginTop: 8,
    textAlign: "center",
    width: 341,
  },
  textContent1: {
    width: 373,
  },
  textContent: {
    flexDirection: "row",
    marginTop: 16,
    alignSelf: "stretch",
  },
  content: {
    top: 102,
    width: 375,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    left: 0,
    position: "absolute",
  },
  previosButton48pxIcon: {
    height: "5.91%",
    width: "12.8%",
    top: "7.39%",
    right: "83.2%",
    bottom: "86.7%",
    left: "4%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    backgroundColor: Color.inkWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp;
