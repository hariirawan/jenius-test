import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import ContactList from "@/components/ContactList";
import CustomText from "@/components/CustomText";

const hScreen = Dimensions.get("screen").height;

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/3779427/pexels-photo-3779427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.userImg}
        />
        <CustomText type="title" color="light">
          Hari Irawan
        </CustomText>
        <CustomText type="subtitle" color="light">
          Software Engineer
        </CustomText>
      </View>
      <View style={styles.content}>
        <ContactList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },

  header: {
    height: hScreen * 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  userImg: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginBottom: 10,
  },

  content: {
    flex: 1,
    backgroundColor: Colors.light,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    overflow: "hidden",
  },
});
