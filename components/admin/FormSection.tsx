import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface FormSectionProps {
  children: React.ReactNode;
  actionTitle: String;
  handleClose: () => void;
  handleAction?: () => void;
  actionButtonColor: "#FF5151" | "#FFA451";
}

export default function FormSection({
  children,
  actionTitle,
  handleClose,
  actionButtonColor,
  handleAction
}: FormSectionProps) {
  return (
    <View style={styles.formContainer}>
      {children}
      <TouchableOpacity
        style={[styles.actionButton, { backgroundColor: actionButtonColor }]}
        onPress={handleAction}
      >
        <Text style={styles.actionButtonText}>{actionTitle}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.discardButton} onPress={handleClose}>
        <Text style={styles.actionButtonText}>Discard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  actionButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  discardButton: {
    backgroundColor: "#FABA14",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  actionButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
