import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Price from "./Price";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

type CourseCardType = {
  coolKidsDiscussion?: ImageSourcePropType;
  button?: string;
  title?: string;
  bodyText?: string;

  /** Style props */
  courseCardPosition?: string;
  courseCardMarginTop?: number | string;
  courseImageAlignSelf?: string;
  courseImageWidth?: number | string;
  courseImageBackgroundColor?: string;
  textContentAlignSelf?: string;
  textContentWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CourseCard = ({
  coolKidsDiscussion,
  button,
  title,
  bodyText,
  courseCardPosition,
  courseCardMarginTop,
  courseImageAlignSelf,
  courseImageWidth,
  courseImageBackgroundColor,
  textContentAlignSelf,
  textContentWidth,
}: CourseCardType) => {
  const courseCardStyle = useMemo(() => {
    return {
      ...getStyleValue("position", courseCardPosition),
      ...getStyleValue("marginTop", courseCardMarginTop),
    };
  }, [courseCardPosition, courseCardMarginTop]);

  const courseImageStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", courseImageAlignSelf),
      ...getStyleValue("width", courseImageWidth),
      ...getStyleValue("backgroundColor", courseImageBackgroundColor),
    };
  }, [courseImageAlignSelf, courseImageWidth, courseImageBackgroundColor]);

  const textContentStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", textContentAlignSelf),
      ...getStyleValue("width", textContentWidth),
    };
  }, [textContentAlignSelf, textContentWidth]);

  return (
    <View style={[styles.courseCard, courseCardStyle]}>
      <View style={[styles.courseImage, courseImageStyle]}>
        <Image
          style={styles.coolKidsDiscussion}
          contentFit="cover"
          source={coolKidsDiscussion}
        />
        <View style={[styles.price, styles.priceSpaceBlock]}>
          <Price
            button="$ 50"
            pricePosition="unset"
            buttonFontSize={14}
            buttonLineHeight={16}
          />
        </View>
      </View>
      <View
        style={[styles.textContent, styles.priceSpaceBlock, textContentStyle]}
      >
        <Text style={styles.subtitle}>{`3 h 30 min `}</Text>
        <Text style={[styles.title, styles.titleFlexBox]}>{title}</Text>
        <Text style={[styles.bodyText, styles.titleFlexBox]}>{bodyText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    alignSelf: "stretch",
  },
  titleFlexBox: {
    marginTop: 4,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  coolKidsDiscussion: {
    flex: 1,
    borderRadius: Border.br_11xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  price: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
  },
  courseImage: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    backgroundColor: Color.inkLightGray,
    height: 194,
    paddingTop: Padding.p_base,
    alignSelf: "stretch",
  },
  subtitle: {
    fontSize: FontSize.paragraphSmall_size,
    lineHeight: 18,
    color: Color.colorsSuccess,
    textAlign: "left",
    fontFamily: FontFamily.headingH5,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.headingH4_size,
    letterSpacing: 0,
    lineHeight: 32,
    fontFamily: FontFamily.headingH5,
    fontWeight: "500",
    marginTop: 4,
    color: Color.colorDarkslategray_100,
  },
  bodyText: {
    fontSize: FontSize.paragraphMedium_size,
    lineHeight: 21,
    fontFamily: FontFamily.paragraphMedium,
  },
  textContent: {
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_base,
  },
  courseCard: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.inkGray,
    borderWidth: 1,
  },
});

export default CourseCard;
