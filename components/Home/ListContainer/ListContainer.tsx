import { Text, View, StyleSheet, FlatList } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { getAll } from "@/firebase/firebaseUtils";
import { useEffect, useState } from "react";
import { InsData } from "@/interfaces/InsData";

interface ListContainerProps {
  searchQuery?: string; 
}

export default function ListContainer({ searchQuery }: ListContainerProps) {
  const router = useRouter();
  const [insData, setInsData] = useState<InsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: InsData[] = await getAll();
        setInsData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = insData.filter(
    (item) => item.name && item.name.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  const navigateToDetails = (insNumber: String) => {
    router.push(`/details/${insNumber}` as const);
  };

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}

      {error && <Text>Error Fetching Data : {error}</Text>}

      <FlatList
        data={filteredData}
        keyExtractor={(item) =>
          item?.ins_number?.toString() || Math.random().toString()
        }
        renderItem={({ item }) => {
          if (!item) return null;
          return (
            <View style={styles.itemRow}>
              <View style={styles.numberContainer}>
                <Text style={styles.number}>{item.ins_number || "N/A"}</Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.name || "Unknown"}</Text>
                <Text style={styles.item}>{item.function || "Unknown"}</Text>
                <Text style={styles.item}>
                  {item.naturel_Synthetic || "Unknown"}
                </Text>
              </View>
              <View>
                <AntDesign
                  name="right"
                  size={24}
                  color="#FFA451"
                  onPress={() => navigateToDetails(item.ins_number || "N/A")}
                  style={styles.icon}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: "8%",
  },
  itemRow: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  itemContainer: {
    marginLeft: 20,
    width: 210,
  },
  item: {
    fontSize: 11,
  },
  itemTitle: {
    fontSize: 14,
  },
  number: {
    backgroundColor: "#FFA451",
    color: "white",
    borderRadius: 6,
    padding: 20,
  },
  numberContainer: {
    width: 90,
    alignContent: "center",
    textAlign: "center",
  },
  icon: {
    marginTop: 5,
  },
});
