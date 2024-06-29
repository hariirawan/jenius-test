import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "@/store";
import { ContactType } from "@/types/contacts";

export default function ContactList() {
  const contacts = useSelector((state) => state.contact);

  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      data={contacts.data}
      renderItem={({ item }) => {
        return <Contact {...item} />;
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

type ContactPropType = ContactType & {};

const Contact = (props: ContactPropType) => {
  return (
    <View style={styles.contact}>
      <Image source={{ uri: props.photo }} style={styles.image} />
      <View>
        <Text
          style={styles.name}
        >{`${props.firstName} ${props.lastName}`}</Text>
        <Text style={styles.phone}>Age - {props.age}</Text>
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
