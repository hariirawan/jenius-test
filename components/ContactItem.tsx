import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { ContactType } from "@/types/contacts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ContactPropType = ContactType & {
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

function ContactItem(props: ContactPropType) {
  return (
    <View style={styles.contact}>
      <Image source={{ uri: props.photo }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text
          style={styles.name}
        >{`${props.firstName} ${props.lastName}`}</Text>
        <Text style={styles.phone}>Age - {props.age}</Text>
      </View>
      <View>
        <Pressable onPress={() => props.onEdit(props.id)}>
          <MaterialCommunityIcons
            name="pencil-box"
            size={24}
            color={"orange"}
          />
        </Pressable>
        <Pressable onPress={() => props.onDelete(props.id)}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={24}
            color={"red"}
            style={{ marginTop: 10 }}
          />
        </Pressable>
      </View>
    </View>
  );
}
export default React.memo(ContactItem, (prevProps, nextProps) => {
  // return true if the component should re-render, false otherwise

  return (
    prevProps.id === nextProps.id &&
    prevProps.firstName === nextProps.lastName &&
    prevProps.age === nextProps.age
  );
});

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    marginHorizontal: 22,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
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
