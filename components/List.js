import { View, Text, StyleSheet } from "react-native";

export default function List(props) {
  return props.data.map((dataPoint) => {
    return (
      <View style={styles.listItem} key={dataPoint}>
        <Text style={styles.listText}>{dataPoint}</Text>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  listText: {
    color: "#351401",
    textAlign: "center",
  },
});
