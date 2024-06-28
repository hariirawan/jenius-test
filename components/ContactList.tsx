import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

export default function ContactList() {
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      data={Array.from(Array(9))}
      renderItem={({ item }) => {
        return <Contact />;
      }}
    />
  );
}

const ListHeaderComponent = () => {
  return (
    <View style={styles.containerTitle}>
      <Text style={styles.title}>Recently Added</Text>
    </View>
  );
};

const Contact = () => {
  return (
    <View style={styles.contact}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.phone}>0877654533222</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    paddingHorizontal: 22,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  containerTitle: {
    paddingHorizontal: 22,
    paddingVertical: 20,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#000",
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#000",
  },
  phone: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "gray",
  },
});
