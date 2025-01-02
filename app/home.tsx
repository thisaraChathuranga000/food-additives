import { Text, View, StyleSheet, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      {/* Header Bar */}
      <View style={styles.header}>
        <AntDesign name="menu-fold" size={24} color="white"/>

        <View style={{ flexDirection: "row", width: "100%" }}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor="white"
          />

{/* <SearchBar
            placeholder="Type Here..." onBlur={() => {}} onChangeText={() => {}} onFocus={() => {}} value={""} platform={"default"} clearIcon={() => {}} searchIcon={() => {}}   showLoading={false} onClear={() => {}} onCancel={() => {}} lightTheme={false} round={false} cancelButtonTitle={""}   showCancel={false}         
      /> */}
        
          {/* <Ionicons name="filter-sharp" size={24} color="white" style={styles.icon}/> */}
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text>Home 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FD7F20",
    width: "100%",
    height: "25%",
    position: "absolute",
    padding:"4%"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  searchBar: {
    flex: 8,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Slightly transparent white
    borderRadius: 20,
    paddingLeft: 15,
    color: "white",
    fontSize: 16,
  },
  icon: {
    flex: 2,
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
