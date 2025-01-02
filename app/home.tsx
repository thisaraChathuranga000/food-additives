import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      {/* Header Bar */}
      <View style={styles.header}>
        <AntDesign name="menu-fold" size={32} color="white" style={{marginTop:20}}/>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 30,
            alignContent: "flex-start",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor="#86869E"
          />

          <Ionicons
            name="filter-sharp"
            size={34}
            color="white"
            style={styles.icon}
          />
        </View>
      </View>

      <View style={styles.container}>
        <FlatList
          data={[
            {
              key: "Curcumins",
              type: "Colour",
              effect: "Natural",
              number: "100",
            },
            {
              key: "Curcumins",
              type: "Colour",
              effect: "Natural",
              number: "100",
            },
            {
              key: "Curcumins",
              type: "Colour",
              effect: "Natural",
              number: "100",
            },
            {
              key: "new",
              type: "Color",
              effect: "Natural",
              number: "100",
            },
            {
              key: "Curcumins",
              type: "Colour",
              effect: "Natural",
              number: "100",
            },
            {
              key: "Curcumins",
              type: "Colour",
              effect: "Natural",
              number: "100",
            },
            {
              key: "Curcumins",
              type: "Colour",
              effect: "Natural",
              number: "100",
            },
            {
              key: "new",
              type: "Color",
              effect: "Natural",
              number: "100",
            },
            {
              key: "Curcumins",
              type: "Colour",
              effect: "Natural",
              number: "100",
            },
            {
              key: "Curcumins",
              type: "Colour",
              effect: "Natural",
              number: "100",
            },
            {
              key: "Curcumins",
              type: "Colour",
              effect: "Natural",
              number: "100",
            },
            {
              key: "new",
              type: "Color",
              effect: "Natural",
              number: "100",
            },
          ]}
          renderItem={({ item }) => (
            <View style={{flexDirection: "row", width:"100%"}}>
              <View>
                <Text style={styles.number}>{item.number}</Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.ItemTitle}>{item.key}</Text>
                <Text style={styles.item}>{item.type}</Text>
                <Text style={styles.item}>{item.effect}</Text>
              </View>
              <View>
              <AntDesign name="right" size={24} color="#FFA451" />
              </View>
            </View>
          )}
        />
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
    padding: "4%",
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
    marginTop: "-70%", // Push content below the header
    paddingHorizontal: 16,
  },
  searchBar: {
    flex: 8,
    height: 60,
    backgroundColor: "#F3F4F9", // Slightly transparent white
    borderRadius: 20,
    paddingLeft: 15,
    color: "#2B2B2D",
    fontSize: 16,
  },
  icon: {
    flex: 2,
    color: "white",
    fontSize: 32,
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingTop: 240,
    marginLeft:40
  },
  itemContainer:{
    marginLeft:20,
    marginBottom:20,
    width:220
  },
  item: {
    fontSize: 11,
  },
  ItemTitle:{
    fontSize:14
  },
  number:{
    backgroundColor:"#FFA451",
    color:"white",
    borderRadius:6,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:20,
    paddingRight:20
    
  },
  line: {
    flex:10,
    height: 2,
    backgroundColor: "black",
    width:"100%",
    
    
  },
});
