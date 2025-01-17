import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import FormSectionHead from "@/components/admin/FormSectionHead";
import FormSection from "@/components/admin/FormSection";
import InputField from "@/components/admin/InputField";
import { InsData } from "@/interfaces/InsData";
import { insertData, getByInsNumber, updateData, updateDataByInsNumber } from "@/firebase/firebaseUtils";

export default function Admin() {
  const [showAddFields, setShowAddFields] = useState(false);
  const [addArrowIconDirection, setAddArrowIconDirection] = useState<"right" | "down">("right");
  const [showUpdateFields, setShowUpdateFields] = useState(false);
  const [showExistingField, setShowExistingField] = useState<InsData | null>(null);
  const [updateArrowIconDirection, setUpdateArrowIconDirection] = useState<"right" | "down">("right");
  const [showDelete, setShowDelete] = useState(false);
  const [deleteArrowIconDirection, setDeleteArrowIconDirection] = useState<"right" | "down">("right");
  const [formData, setFormData] = useState<InsData>({
    ins_number: "",
    name: "",
    function: "",
    naturel_Synthetic: "",
    health_Effects_Approval_Status_EU_US: "",
    food_Types: "",
    additional_Notes: "",
    description: "",
    standard_level: "",
    more_Info: "",
  });
  const [formDataToUpdate, setFormDataToUpdate] = useState<Partial<InsData>>({
    ins_number: "",
    name: "",
    function: "",
    naturel_Synthetic: "",
    health_Effects_Approval_Status_EU_US: "",
    food_Types: "",
    additional_Notes: "",
    description: "",
    standard_level: "",
    more_Info: "",
  });
  const [formDataSendToUpdate, setFormDataSendToUpdate] = useState<Partial<InsData>| null>(null);
  const [insNumber, setInsNumber] = useState<string>("")
  const [key, setKey] = useState<string>("")

  const handleAddNew = () => {
    setShowAddFields(true);
    setAddArrowIconDirection("down");
  };

  const closeAddNew = () => {
    setShowAddFields(false);
    setAddArrowIconDirection("right");
  };

  const expandUpdate = () => {
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const result = await insertData(formData);
    if (result) {
      Alert.alert("Success", "Record added successfully!");
      closeAddNew();
    } else {
      Alert.alert("Error", "Failed to add record. Please try again.");
    }
  }; 

  const handleGetDataByInsNumber = async () => {
    const result = await getByInsNumber(insNumber)
    if (result) {
      setShowExistingField(result);
      setKey(result.key)
    } else{
      Alert.alert("Error", `Failed to get the record by Ins Number ${insNumber}. Please use correct ins Number.`)
    }
  }

  const handleInputChangeForUpdate = (field: string, value: string) => {
    setFormDataToUpdate((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async () => {
    const updatedFields = Object.keys(formDataToUpdate).reduce((acc, key) => {
      const typedKey = key as keyof InsData;
      const initialValue = "";
      if (formDataToUpdate[typedKey] !== initialValue) {
        acc[typedKey] = formDataToUpdate[typedKey];
      }
      return acc;
    }, {} as Partial<InsData>);
  
    console.log("Updated Fields:", updatedFields);
     
    const result = await updateData(key,updatedFields)
    if(result){
      Alert.alert("Success", "Record updated successfully!");
      closeUpdate();
    }else{
      Alert.alert("Error", "Failed to update record. Please try again.");
    }
  }

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
            handleAction={handleSubmit}
          >
            <InputField
              title="Ins Number"
              placeholder=""
              value={formData.ins_number}
              onChangeText={(value: string) =>
                handleInputChange("ins_number", value)
              }
            />

            <InputField
              title="Name"
              placeholder=""
              value={formData.name}
              onChangeText={(value: string) => handleInputChange("name", value)}
            />

            <InputField
              title="Function"
              placeholder=""
              value={formData.function}
              onChangeText={(value: string) =>
                handleInputChange("function", value)
              }
            />

            <InputField
              title="Naturel or synthetic"
              placeholder=""
              value={formData.naturel_Synthetic}
              onChangeText={(value: string) =>
                handleInputChange("naturel_Synthetic", value)
              }
            />

            <InputField
              title="Health Effects/Approval Status (EU/US)"
              placeholder=""
              value={formData.health_Effects_Approval_Status_EU_US}
              onChangeText={(value: string) =>
                handleInputChange("health_Effects_Approval_Status_EU_US", value)
              }
            />

            <InputField
              title="Food Types"
              placeholder=""
              value={formData.food_Types}
              onChangeText={(value: string) =>
                handleInputChange("food_Types", value)
              }
            />

            <InputField
              title="Additional Notes"
              placeholder=""
              value={formData.additional_Notes}
              onChangeText={(value: string) =>
                handleInputChange("additional_Notes", value)
              }
            />

            <InputField
              title="Description"
              placeholder=""
              value={formData.description}
              onChangeText={(value: string) =>
                handleInputChange("description", value)
              }
            />

            <InputField
              title="Standard  level"
              placeholder=""
              value={formData.standard_level}
              onChangeText={(value: string) =>
                handleInputChange("standard_level", value)
              }
            />

            <InputField
              title="More Info"
              placeholder=""
              value={formData.more_Info}
              onChangeText={(value: string) =>
                handleInputChange("more_Info", value)
              }
            />
          </FormSection>
        )}

        {/* Update section */}
        <FormSectionHead
          onpress={expandUpdate}
          iconDirection={updateArrowIconDirection}
          title="Update Record"
        />

        {showUpdateFields && (
          <FormSection
            actionButtonColor="#FFA451"
            actionTitle="Update"
            handleClose={closeUpdate}
            handleAction={handleUpdate}
          >
            <InputField 
              title="Ins Number" 
              placeholder="" 
              onChangeText={(value: string) =>
                setInsNumber(value)
              }
            />

            <TouchableOpacity style={styles.discardButton} onPress={handleGetDataByInsNumber}>
              <Text style={styles.actionButtonText}>Get the Record</Text>
            </TouchableOpacity>

            <InputField
              title="Name"
              placeholder={showExistingField?.name || ""}
              value={formDataToUpdate.name}
              onChangeText={(value: string) =>
                handleInputChangeForUpdate("name", value)
              }
            />

            <InputField
              title="Function"
              placeholder={showExistingField?.function || ""}
              value={formDataToUpdate.function}
              onChangeText={(value: string) =>
                handleInputChangeForUpdate("function", value)
              }
            />

            <InputField
              title="Naturel or synthetic"
              placeholder={
                showExistingField?.naturel_Synthetic || ""
              }
              value={formDataToUpdate.naturel_Synthetic}
              onChangeText={(value: string) =>
                handleInputChangeForUpdate("naturel_Synthetic", value)
              }
            />
            <InputField
              title="Health Effects/Approval Status (EU/US)"
              placeholder={
                 showExistingField?.health_Effects_Approval_Status_EU_US
                  || ""
              }
              value={formDataToUpdate.health_Effects_Approval_Status_EU_US}
              onChangeText={(value: string) =>
                handleInputChangeForUpdate("health_Effects_Approval_Status_EU_US", value)
              }
            />
            <InputField
              title="Food Types"
              placeholder={
                 showExistingField?.food_Types || ""
              }
              value={formDataToUpdate.food_Types}
              onChangeText={(value: string) =>
                handleInputChangeForUpdate("food_Types", value)
              }
            />

            <InputField
              title="Additional Notes"
              placeholder={
               showExistingField?.additional_Notes || ""
              }
              value={formDataToUpdate.additional_Notes}
              onChangeText={(value: string) =>
                handleInputChangeForUpdate("additional_Notes", value)
              }
            />

            <InputField
              title="Description"
              placeholder={
                showExistingField?.description || ""
              }
              value={formDataToUpdate.description}
              onChangeText={(value: string) =>
                handleInputChangeForUpdate("description", value)
              }
            />

            <InputField
              title="Standard  level"
              placeholder={
              showExistingField?.standard_level || ""
              }
              value={formDataToUpdate.standard_level}
              onChangeText={(value: string) =>
                handleInputChangeForUpdate("standard_level", value)
              }
            />

            <InputField
              title="More Info"
              placeholder={showExistingField?.more_Info || ""}
              value={formDataToUpdate.more_Info}
              onChangeText={(value: string) =>
                handleInputChangeForUpdate("more_Info", value)
              }
            />
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
