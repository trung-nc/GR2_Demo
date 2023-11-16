import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import LoginFormContainer from "../components/LoginFormContainer";
import Property1ButtonsProperty2 from "../components/Property1ButtonsProperty2";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={styles.homeBar}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.content, styles.contentFlexBox]}>
        <View style={styles.illustration}>
          <Image
            style={[styles.coolKidsSitting, styles.textPosition]}
            contentFit="cover"
            source={require("../assets/cool-kids-sitting.png")}
          />
        </View>
        <View style={styles.textContent}>
          <View style={styles.contentFlexBox}>
            <View style={styles.title}>
              <Text style={[styles.text, styles.textPosition]}>Log in</Text>
            </View>
          </View>
        </View>
        <LoginFormContainer />
        <Property1ButtonsProperty2
          button="Sign up"
          property1ButtonsProperty2Position="unset"
          property1ButtonsProperty2AlignSelf="stretch"
          property1ButtonsProperty2MarginTop={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 375,
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
  coolKidsSitting: {
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
    width: 341,
    height: 32,
  },
  textContent: {
    flexDirection: "row",
    marginTop: 16,
    alignSelf: "stretch",
  },
  content: {
    top: 96,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    left: 0,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.inkWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
