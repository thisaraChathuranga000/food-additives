import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Header from "@/components/common/Header/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

export default function Admin() {
  const [showAddFields, setShowAddFields] = useState<boolean>(true);
  const [showUpdateFields, setShowUpdateFields] = useState<boolean>(true);

  return (
    <View>
      <Header>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Admin</Text>
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutText} onPress={() => {router.push("/home")}}>Logout</Text>
            <AntDesign name="right" size={24} color="#0C6BE7" />
          </View>
        </View>
      </Header>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add new Record</Text>
        </TouchableOpacity>

        {/* {showAddFields && (
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Admin User Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="user"
                placeholderTextColor="#86869E"
                style={styles.textInput}
              />
            </View>

            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="12345"
                placeholderTextColor="#86869E"
                secureTextEntry={true}
                style={styles.textInput}
              />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
              <Text style={styles.loginButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )} */}

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Update Record</Text>
        </TouchableOpacity>

        {/* {showUpdateFields && (
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Admin User Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="user"
                placeholderTextColor="#86869E"
                style={styles.textInput}
              />
            </View>

            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="12345"
                placeholderTextColor="#86869E"
                secureTextEntry={true}
                style={styles.textInput}
              />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
              <Text style={styles.loginButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )} */}

        <TouchableOpacity style={styles.deleteButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Delete Record</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: "10%",
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
  button: {
    backgroundColor: "#3284F0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: "#FF3A3A",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  formContainer: {
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
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
  loginButton: {
    backgroundColor: "#FFA451",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
