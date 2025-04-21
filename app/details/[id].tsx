import { useLocalSearchParams } from "expo-router";
import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";
import Header from "@/components/common/Header/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import Drawer from "@/components/Home/Drawer/Drawer";
import { InsData } from "@/interfaces/InsData";
import { getByInsNumber } from "@/firebase/firebaseUtils";

const { width } = Dimensions.get("window");

export default function Page() {
  const { id } = useLocalSearchParams();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerAnimation] = useState(new Animated.Value(-width));
  const [insData, setInsData] = useState<InsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: InsData | null = await getByInsNumber(id.toString());
        setInsData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
          <Header>
            <AntDesign
              name="menu-fold"
              size={32}
              color="white"
              style={styles.menuIcon}
              onPress={toggleDrawer}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{insData?.name}</Text>
            </View>

            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>
                {insData?.health_Effects_Approval_Status_EU_US}
              </Text>
            </View>
          </Header>

          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>E - {insData?.ins_number}</Text>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.detail}>
              <Text style={styles.detailsTitle}>Function</Text>
              <Text style={styles.detailText}>{insData?.function}</Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.detailsTitle}>Naturel or Synthetic</Text>
              <Text style={styles.detailText}>
                {insData?.naturel_Synthetic}
              </Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.detailsTitle}>Food Types</Text>
              <Text style={styles.detailText}>{insData?.food_Types}</Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.detailsTitle}>Banned Countries</Text>
              <Text style={styles.detailText}>{insData?.banned_countries}</Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.detailsTitle}>Additional Notes</Text>
              <Text style={styles.detailText}>{insData?.additional_Notes}</Text>
            </View>
          </View>

          <Drawer
            animationValue={drawerAnimation}
            isOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
            closeDrawer={closeDrawer}
            direction="left"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuIcon: {
    marginTop: 20,
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "#F3F4F9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 12,
    minWidth: 300,
    alignSelf: "center",
    marginBottom: 20,
  },
  statusContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
  },
  statusText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  titleText: {
    color: "#686868",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  numberContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#E7E7E7",
  },
  numberText: {
    color: "#686868",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  detailContainer: {
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "10%",
  },
  detail: {
    marginBottom: 20,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6D6D6D",
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6D6D6D",
  },
});
