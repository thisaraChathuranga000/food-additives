import React, { useState } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import InfoContainer from "../InfoContainer/InfoContainer";
import ContactBox from "../ContactBox/ContactBox";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const adminUserName = "admin"
const adminPassword = "1234"

interface DrawerProps {
  animationValue: Animated.Value;
  isOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  direction: "left" | "right";
}

const Drawer: React.FC<DrawerProps> = ({
  animationValue,
  closeDrawer,
  direction,
}) => {
  const [isBottomDrawerVisible, setBottomDrawerVisible] = useState(false);
  const [bottomAnimationValue] = useState(new Animated.Value(+height));
  const [userName, setUserName] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const handleLogin = () => {

    if(userName === adminUserName && password === adminPassword){
      router.push("/admin")
    }
    else{
      alert("incorrect password");
    }
    
  }

  const openBottomDrawer = () => {
    Animated.timing(bottomAnimationValue, {
      toValue: isBottomDrawerVisible ? height : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setBottomDrawerVisible(true);
  };

  const closeBottomDrawer = () => {
    Animated.timing(bottomAnimationValue, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setBottomDrawerVisible(false));
  };

  const transformDirection =
    direction === "left"
      ? { translateX: animationValue }
      : { translateX: animationValue };

  return (
    <>
      <Animated.View
        style={[
          styles.drawerContainer,
          { transform: [transformDirection] },
          direction === "right" && styles.rightDrawer,
        ]}
      >
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity onPress={closeDrawer}>
            <AntDesign name="closecircleo" size={24} color="#C2C2C2" />
          </TouchableOpacity>
        </View>
         
          <View style={styles.drawerContent}>
            <View style={styles.logoContainer}>
              <Image
                source={require("@/assets/images/logo.png")}
                style={styles.logo}
              />
            </View>

            <ScrollView>

            <InfoContainer title={"About Us"}>
              <Text style={styles.infoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>

              <Text style={styles.infoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </InfoContainer>

            <InfoContainer title={"Contact Us"}>
              <ContactBox />
            </InfoContainer>
            </ScrollView>
          </View>
             

        <View style={styles.adminSection}>
          <TouchableOpacity onPress={openBottomDrawer}>
            <Text style={styles.adminText}>Admin</Text>
          </TouchableOpacity>
          <AntDesign name="right" size={24} color="#0C6BE7" />
        </View>
      </Animated.View>

      {isBottomDrawerVisible && (
        <Animated.View
          style={[
            styles.bottomDrawer,
            { transform: [{ translateY: bottomAnimationValue }] },
          ]}
        >
          <View style={styles.bottomDrawerContent}>
            <TouchableOpacity
              style={styles.closeBottomDrawer}
              onPress={closeBottomDrawer}
            >
              <AntDesign name="closecircleo" size={24} color="#C2C2C2" />
            </TouchableOpacity>
            <View style={styles.formContainer}>
              <Text style={styles.inputLabel}>Admin User Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="user"
                  placeholderTextColor="#86869E"
                  style={styles.textInput}
                  onChangeText={(value) => setUserName(value)}
                />
              </View>

              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  placeholder="12345"
                  placeholderTextColor="#86869E"
                  secureTextEntry={true}
                  style={styles.textInput}
                  onChangeText={(value) => setPassword(value)}
                />
              </View>

              <TouchableOpacity
                style={styles.loginButton}
                // onPress={() => {
                //   router.push("/admin");
                // }}
                onPress={handleLogin}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,  
  },
  drawerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.8,
    height: "100%",
    backgroundColor: "white",
    zIndex: 1,
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  rightDrawer: {
    left: "auto",
    right: 0,
  },
  closeButtonContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  drawerContent: {
    flex: 1,
    padding: 20,
   
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: "contain",
  },
  infoText: {
    marginBottom: 10,
  },
  adminSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 20,
  },
  adminText: {
    color: "#0C6BE7",
    fontSize: 18,
    marginRight: 10,
  },
  bottomDrawer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.5,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "#827575",
    borderWidth: 1,
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  bottomDrawerContent: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  closeBottomDrawer: {
    position: "absolute",
    top: 10,
    right: 10,
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

export default Drawer;
