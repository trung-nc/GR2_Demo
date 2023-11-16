import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import UserDataField from "./UserDataField";
import PasswordField from "./PasswordField";
import LevelPrimary from "./LevelPrimary";
import Property1ButtonsProperty2 from "./Property1ButtonsProperty2";

const SignUpForm = () => {
  return (
    <View style={styles.form}>
      <UserDataField
        placeholder="Name"
        userDataFieldPosition="unset"
        userDataFieldHeight="unset"
        userDataFieldMarginTop="unset"
      />
      <UserDataField
        placeholder="E-mail"
        userDataFieldPosition="unset"
        userDataFieldHeight="unset"
        userDataFieldMarginTop={16}
      />
      <PasswordField
        passwordIcons={require("../assets/password-icons1.png")}
        passwordFieldPosition="unset"
        passwordFieldAlignSelf="stretch"
        passwordFieldHeight={53}
        passwordFieldMarginTop={16}
      />
      <LevelPrimary
        text="Sign up"
        levelPrimaryPosition="unset"
        levelPrimaryAlignSelf="stretch"
        levelPrimaryMarginTop={16}
        levelPrimaryWidth="unset"
        levelPrimaryTop="unset"
        levelPrimaryRight="unset"
        levelPrimaryLeft="unset"
      />
      <Property1ButtonsProperty2
        button="Log in"
        property1ButtonsProperty2Position="unset"
        property1ButtonsProperty2AlignSelf="unset"
        property1ButtonsProperty2MarginTop={16}
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

export default SignUpForm;
