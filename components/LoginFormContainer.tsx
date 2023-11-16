import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import UserDataField from "./UserDataField";
import PasswordField from "./PasswordField";
import Property1ButtonsProperty2 from "./Property1ButtonsProperty2";
import LevelPrimary from "./LevelPrimary";

const LoginFormContainer = () => {
  return (
    <View style={styles.form}>
      <UserDataField
        placeholder="Email"
        userDataFieldPosition="unset"
        userDataFieldHeight={53}
        userDataFieldMarginTop="unset"
      />
      <PasswordField
        passwordIcons={require("../assets/password-icons.png")}
        passwordFieldPosition="unset"
        passwordFieldAlignSelf="stretch"
        passwordFieldHeight={53}
        passwordFieldMarginTop={16}
      />
      <Property1ButtonsProperty2
        button="Forgot Password?"
        property1ButtonsProperty2Position="unset"
        property1ButtonsProperty2AlignSelf="stretch"
        property1ButtonsProperty2MarginTop={16}
      />
      <LevelPrimary
        text="Log in"
        levelPrimaryPosition="unset"
        levelPrimaryAlignSelf="stretch"
        levelPrimaryMarginTop={16}
        levelPrimaryWidth="unset"
        levelPrimaryTop="unset"
        levelPrimaryRight="unset"
        levelPrimaryLeft="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
});

export default LoginFormContainer;
