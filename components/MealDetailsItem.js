import { View, StyleSheet, Text } from "react-native";

export default function MealDetailsItem(props) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem,props.textStyle]}>{props.duration}m</Text>
      <Text style={[styles.detailItem,props.textStyle]}>{props.complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem,props.textStyle]}>{props.affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  
});
