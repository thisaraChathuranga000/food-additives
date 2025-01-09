import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function ContactBox() {
  return (
    <View style={styles.contactBox}>
      {/* WhatsApp Section */}
      <View style={styles.contactItem}>
        <View style={styles.iconContainer}>
          <Image
            source={require("@/assets/images/whatsappLogo.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.contactText}>0770171321</Text>
      </View>

      {/* Email Section */}
      <View style={styles.contactItem}>
        <View style={styles.iconContainer}>
          <Image
            source={require("@/assets/images/emailLogo.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.contactText}>developers@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactBox: {
    margin: 20,
    borderWidth: 1,
    borderColor: "#EDECEC",
    marginTop: 20,
    borderRadius: 16,
    width: "100%",
    padding: 20,
    marginLeft: 0,
  },
  contactItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  contactText: {
    fontSize: 14,
    color: "#333",
    width:"70%"
  },
});
