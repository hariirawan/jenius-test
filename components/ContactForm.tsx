import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Formik } from "formik";
import { ContactType } from "@/types/contacts";
import { useSelector } from "@/store";

type ContactFormType = {
  isProcessing?: boolean;
  onSave: (values: ContactType) => void;
};

export default function ContactForm({ isProcessing, onSave }: ContactFormType) {
  const contacts = useSelector((state) => state.contact);

  const validation = (values: ContactType) => {
    const errors: any = {};

    if (!values.firstName) {
      errors.firstName = "Firsname is required";
    } else if (!values.lastName) {
      errors.lastName = "Lastname is required";
    } else if (!values.age) {
      errors.age = "Age is required";
    } else if (isNaN(values.age)) {
      errors.age = "Age must be a number";
    }

    return errors;
  };

  const Loading = () => {
    return (
      <View style={styles.loading} testID="loading-indicator">
        <ActivityIndicator size="large" color={Colors.light} />
      </View>
    );
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={contacts.initialForm}
      validate={(values) => validation(values)}
      onSubmit={(value) => onSave(value)}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        setFieldTouched,
      }) => (
        <View style={styles.form}>
          <TextInput
            placeholder="Enter First Name..."
            style={[
              styles.input,
              {
                marginBottom: errors.firstName && touched.firstName ? 0 : 15,
              },
            ]}
            placeholderTextColor={"gray"}
            onBlur={() => setFieldTouched("firstName")}
            onChangeText={handleChange("firstName")}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && (
            <Text style={styles.textError}>{errors.firstName}</Text>
          )}
          <TextInput
            placeholder="Enter Last Name..."
            style={[
              styles.input,
              {
                marginBottom: errors.lastName && touched.lastName ? 0 : 15,
              },
            ]}
            placeholderTextColor={"gray"}
            onBlur={() => setFieldTouched("lastName")}
            onChangeText={handleChange("lastName")}
            value={values.lastName}
          />

          {errors.lastName && touched.lastName && (
            <Text style={styles.textError}>{errors.lastName}</Text>
          )}
          <TextInput
            keyboardType="numeric"
            placeholder="Enter Age..."
            maxLength={3}
            style={[
              styles.input,
              {
                marginBottom: errors.age && touched.age ? 0 : 15,
              },
            ]}
            placeholderTextColor={"gray"}
            onBlur={() => setFieldTouched("age")}
            onChangeText={handleChange("age")}
            value={`${values.age || ""}`}
          />
          {errors.age && touched.age && (
            <Text style={styles.textError}>{errors.age}</Text>
          )}
          <Pressable
            style={[styles.button, !isValid && { opacity: 0.5 }]}
            onPress={() => handleSubmit()}
            disabled={isProcessing}
          >
            <Text>Save</Text>
          </Pressable>

          {isProcessing && <Loading />}
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    position: "relative",
    padding: 20,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "#464C55",
    padding: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: Colors.tertiary,
    padding: 15,
    marginBottom: 30,
    marginTop: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textError: {
    color: "red",
    fontSize: 14,
    marginBottom: 15,
  },
});
