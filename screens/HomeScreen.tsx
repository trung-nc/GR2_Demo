import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import CourseCard from "../components/CourseCard";
import TypeHomePageHeader from "../components/TypeHomePageHeader";
import TabBar1Item from "../components/TabBar1Item";
import { Border, Color, Padding } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.cards}>
        <CourseCard
          coolKidsDiscussion={require("../assets/cool-kids-discussion.png")}
          button="$ 5"
          title="/a/ phoneme"
          courseCardPosition="unset"
          courseCardMarginTop="unset"
          courseImageAlignSelf="unset"
          courseImageWidth={343}
          courseImageBackgroundColor="#f8f2ee"
          textContentAlignSelf="unset"
          textContentWidth={343}
        />
        <CourseCard
          coolKidsDiscussion={require("../assets/cool-kids-alone-time.png")}
          button="$ 50"
          title="/b/ phoneme"
          bodyText="Advanced web applications"
          courseCardPosition="unset"
          courseCardMarginTop={16}
          courseImageAlignSelf="unset"
          courseImageWidth={343}
          courseImageBackgroundColor="#e6edf4"
          textContentAlignSelf="unset"
          textContentWidth={343}
        />
      </View>
      <View style={styles.homeBar}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.headersWrapper}>
        <TypeHomePageHeader
          title="Juana Antonieta"
          notificationButton48px={require("../assets/notification-button48px1.png")}
          showNotificationButton48pxIco={false}
          typeHomePageHeaderAlignSelf="unset"
          typeHomePageHeaderPosition="unset"
          typeHomePageHeaderWidth={343}
        />
      </View>
      <TabBar1Item
        tabBar1ItemPosition="absolute"
        tabBar1ItemTop={714}
        tabBar1ItemLeft={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    top: 133,
    left: 16,
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
  headersWrapper: {
    top: 44,
    left: 0,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    position: "absolute",
  },
  homeScreen: {
    backgroundColor: Color.inkWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HomeScreen;
