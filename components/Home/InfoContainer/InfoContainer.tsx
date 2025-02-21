import { Text, View, StyleSheet } from "react-native";

interface InfoContainerProps {
  children: React.ReactNode;
  title: string;
}

export default function InfoContainer({ children, title }: InfoContainerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "#E7E7E7",
    padding: 10,
    width: "100%",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "500",
  },
  childrenContainer: {
    padding: 20,
  },
});
