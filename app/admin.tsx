import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import FormSectionHead from "@/components/admin/FormSectionHead";
import FormSection from "@/components/admin/formSection";
import InputField from "@/components/admin/InputField";

export default function Admin() {
  const [showAddFields, setShowAddFields] = useState(false);
  const [addArrowIconDirection, setAddArrowIconDirection] = useState<"right" | "down">("right");
  const [showUpdateFields, setShowUpdateFields] = useState(false);
  const [updateArrowIconDirection, setUpdateArrowIconDirection] = useState<"right" | "down">("right");
  const [showDelete, setShowDelete] = useState(false);
  const [deleteArrowIconDirection, setDeleteArrowIconDirection] = useState<"right" | "down">("right");

  const handleAddNew = () => {
    setShowAddFields(true);
    setAddArrowIconDirection("down");
  };

  const closeAddNew = () => {
    setShowAddFields(false);
    setAddArrowIconDirection("right");
  };

  const handleUpdate = () => {
    setShowUpdateFields(true);
    setUpdateArrowIconDirection("down");
  };

  const closeUpdate = () => {
    setShowUpdateFields(false);
    setUpdateArrowIconDirection("right");
  };

  const handleDelete = () => {
    setShowDelete(true);
    setDeleteArrowIconDirection("down");
  };

  const closeDelete = () => {
    setShowDelete(false);
    setDeleteArrowIconDirection("right");
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Admin</Text>
        <View style={styles.logoutContainer}>
          <Text style={styles.logoutText} onPress={() => router.push("/home")}>
            Logout
          </Text>
          <AntDesign name="right" size={24} color="#0C6BE7" />
        </View>
      </View>

      <View>
        {/* Add section */}
        <FormSectionHead
          onpress={handleAddNew}
          iconDirection={addArrowIconDirection}
          title="Add new Record"
        />

        {showAddFields && (
          <FormSection
            actionButtonColor="#FFA451"
            actionTitle="Add"
            handleClose={closeAddNew}
          >
            <InputField title="Ins Number" placeholder="" />
            <InputField title="Name" placeholder="" />
            <InputField title="Function" placeholder="" />
            <InputField title="Naturel or synthetic" placeholder="" />
            <InputField title="Health Effects/Approval Status (EU/US)" placeholder="" />
            <InputField title="Food Types" placeholder="" />
            <InputField title="Additional Notes" placeholder="" />
            <InputField title="Description" placeholder="" />
            <InputField title="Standard  level" placeholder="" />
            <InputField title="More Info" placeholder="" />
          </FormSection>
        )}

        {/* Update section */}
        <FormSectionHead
          onpress={handleUpdate}
          iconDirection={updateArrowIconDirection}
          title="Update Record"
        />

        {showUpdateFields && (
          <FormSection
            actionButtonColor="#FFA451"
            actionTitle="Update"
            handleClose={closeUpdate}
          >
            <InputField title="Ins Number" placeholder="" />
            <InputField title="Name" placeholder="" />
            <InputField title="Function" placeholder="" />
            <InputField title="Naturel or synthetic" placeholder="" />
            <InputField title="Health Effects/Approval Status (EU/US)" placeholder="" />
            <InputField title="Food Types" placeholder="" />
            <InputField title="Additional Notes" placeholder="" />
            <InputField title="Description" placeholder="" />
            <InputField title="Standard  level" placeholder="" />
            <InputField title="More Info" placeholder="" />
          </FormSection>
        )}

        {/* Delete section */}
        <FormSectionHead
          onpress={handleDelete}
          iconDirection={deleteArrowIconDirection}
          title="Delete Record"
        />

        {showDelete && (
          <FormSection
            actionButtonColor="#FF5151"
            actionTitle="Delete"
            handleClose={closeDelete}
          >
            <InputField title="E number" placeholder="Type E number here" />
          </FormSection>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    color: "#0C6BE7",
    marginRight: 8,
  },
});
