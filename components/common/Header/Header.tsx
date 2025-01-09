import { View, StyleSheet } from "react-native";

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <View style={styles.header}>{children}</View>;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FD7F20",
    width: "100%",
    height: "25%",
    position: "fixed",
    padding: "4%",
  },
});
