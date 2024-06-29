import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import CustomText from "@/components/CustomText";
import useCRUD from "@/hooks/useCRUD";
import Ionicons from "@expo/vector-icons/Ionicons";
import ContactForm from "@/components/ContactForm";
import { useDispatch, useSelector } from "@/store";
import { setStatus } from "@/store/reducers/contact";
import CustomeModal from "@/components/CustomModal";
import ContactItem from "@/components/ContactItem";

const hScreen = Dimensions.get("screen").height;

export default function index() {
  const contacts = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const { handleDeleteData, handleAddData, handleUpdate, handleGetDatail } =
    useCRUD();

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
        {contacts.isGetting ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            ListHeaderComponent={() => {
              return (
                <View style={styles.containerTitle}>
                  <CustomText style={styles.title}>Recently Added</CustomText>
                </View>
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
            ListEmptyComponent={() => (
              <CustomText style={{ textAlign: "center" }}>
                No contacts found
              </CustomText>
            )}
            data={contacts.data}
            renderItem={({ item }) => {
              return (
                <ContactItem
                  {...item}
                  onEdit={handleGetDatail}
                  onDelete={handleDeleteData}
                />
              );
            }}
          />
        )}
        <Pressable
          onPress={() => dispatch(setStatus({ isVisibleForm: true }))}
          style={styles.button}
        >
          <Ionicons name="add" size={30} />
        </Pressable>
      </View>
      <CustomeModal
        isVisible={contacts.isVisibleForm}
        setIsVisible={() => dispatch(setStatus({ isVisibleForm: false }))}
      >
        <ContactForm
          onSave={(values) =>
            contacts.initialForm.id
              ? handleUpdate(values.id, values)
              : handleAddData(values)
          }
          isProcessing={contacts.isAdding || contacts.isGettingDetail}
        />
      </CustomeModal>
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

  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.tertiary,
    position: "absolute",
    bottom: 25,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
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
});
