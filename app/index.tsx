import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  const handleButtonPress = () => {
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.reactLogo}
      />
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Image source={require("@/assets/images/dotted.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  reactLogo: {
    height: 278,
    width: 290,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FD7F20",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: 200,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
