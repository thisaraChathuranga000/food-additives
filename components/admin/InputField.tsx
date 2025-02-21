import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

interface InputFieldProps {
  title: string;
  placeholder: string;
  value?: string;
  onChangeText?: (value: string) => void;

}

export default function InputField({ title, placeholder, value, onChangeText }: InputFieldProps) {
  return (
    <>
      <Text style={styles.inputLabel}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#86869E"
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
    color: "#464647",
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 16,
    color: "#333",
  },
});
