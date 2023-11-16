import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TypeHeaderWithBack from "../components/TypeHeaderWithBack";
import Property1SettingsInformatio from "../components/Property1SettingsInformatio";
import SettingsFormContainer from "../components/SettingsFormContainer";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Settings = () => {
  return (
    <View style={[styles.settings, styles.settingsLayout]}>
      <TypeHeaderWithBack
        text="Settings"
        showTextContent
        typeHeaderWithBackPosition="absolute"
        typeHeaderWithBackTop={44}
        typeHeaderWithBackLeft={0}
        typeHeaderWithBackWidth={375}
      />
      <View style={styles.settings1}>
        <Image
          style={[styles.coolKidsOnWheels, styles.settingsLayout]}
          contentFit="cover"
          source={require("../assets/cool-kids-on-wheels.png")}
        />
        <Text style={styles.placeholder}>Account information</Text>
        <Property1SettingsInformatio
          path={require("../assets/path.png")}
          header="Name"
          text="Juana Antonieta"
          property1SettingsInformatPosition="unset"
          property1SettingsInformatAlignSelf="stretch"
          property1SettingsInformatMarginTop={16}
          pathIconWidth={15}
          pathIconHeight={14}
        />
        <Property1SettingsInformatio
          path={require("../assets/shape.png")}
          header="Email"
          text="juanita123@gmail.com"
          property1SettingsInformatPosition="unset"
          property1SettingsInformatAlignSelf="stretch"
          property1SettingsInformatMarginTop={16}
          pathIconWidth={14}
          pathIconHeight={11}
        />
        <Property1SettingsInformatio
          path={require("../assets/vector.png")}
          header="Password"
          text="changed 2 weeks ago"
          property1SettingsInformatPosition="unset"
          property1SettingsInformatAlignSelf="stretch"
          property1SettingsInformatMarginTop={16}
          pathIconWidth={10}
          pathIconHeight={14}
        />
      </View>
      <SettingsFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsLayout: {
    overflow: "hidden",
    width: "100%",
  },
  coolKidsOnWheels: {
    maxWidth: "100%",
    height: 190,
    alignSelf: "stretch",
  },
  placeholder: {
    fontSize: FontSize.headingH5_size,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "500",
    fontFamily: FontFamily.headingH5,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    display: "flex",
    height: 21,
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  settings1: {
    position: "absolute",
    top: 108,
    left: 0,
    width: 375,
    height: 587,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignItems: "center",
  },
  settings: {
    backgroundColor: Color.inkWhite,
    flex: 1,
    height: 812,
  },
});

export default Settings;
