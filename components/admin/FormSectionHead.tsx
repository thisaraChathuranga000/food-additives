import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface FormSectionHeadProps {
  onpress: () => void;
  iconDirection: "right" | "down";
  title: String;
}

export default function FormSectionHead({
  onpress,
  iconDirection,
  title,
}: FormSectionHeadProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text style={styles.buttonText}>{title}</Text>
      <AntDesign name={iconDirection} size={24} color="#686868" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#686868",
    fontWeight: "600",
    fontSize: 16,
    marginRight: 8,
  },
});
