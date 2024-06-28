import { View, Text, StyleSheet, TextProps } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface IText {
  color?: "primary" | "secondary" | "light" | "tertiary";
  type: "title" | "subtitle" | "caption" | "text";
  children?: React.ReactNode;
  style?: TextProps;
}

export default function CustomText(props: IText) {
  return (
    <Text
      style={[
        props.type === "title" ? styles.title : null,
        props.type === "subtitle" ? styles.subtitle : null,
        props.type === "caption" ? styles.caption : null,
        props.type === "text" ? styles.text : null,
        { color: Colors[props.color ?? "primary"] },
      ]}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "#000",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#000",
  },
  caption: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#000",
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: 12,
    color: "#000",
  },
});
