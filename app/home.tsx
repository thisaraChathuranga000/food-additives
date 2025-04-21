import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Animated,
  Dimensions,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Drawer from "@/components/Home/Drawer/Drawer";
import Header from "@/components/common/Header/Header";
import ListContainer from "@/components/Home/ListContainer/ListContainer";


const { width } = Dimensions.get("window");

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerAnimation] = useState(new Animated.Value(-width));
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: isDrawerOpen ? -width : 0,    
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: -width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  };

  return (
    <View style={styles.container}>
      <Header>
        <AntDesign
          name="menu-fold"
          size={32}
          color="white"
          style={styles.menuIcon}
          onPress={toggleDrawer}
        />

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor="#86869E"
            value={searchQuery} // Bind value to state
            onChangeText={setSearchQuery}
          />
        </View>
      </Header>

      <Drawer
        animationValue={drawerAnimation}
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        closeDrawer={closeDrawer}
        direction="left"
      />
      <ListContainer searchQuery={searchQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuIcon: {
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
  },
  searchBar: {
    flex: 8,
    height: 60,
    backgroundColor: "#F3F4F9",
    borderRadius: 20,
    paddingLeft: 15,
    color: "#2B2B2D",
    fontSize: 16,
  },
});
