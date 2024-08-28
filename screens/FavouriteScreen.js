import { Text, View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { useContext } from "react";
import { FavContext } from "../store/context/fav-contex";
import { MEALS } from "../data/dummy-data";

export default function FavouriteScreen() {
  const favMealdCtx = useContext(FavContext);

  const mealItem = MEALS.filter((meal) => favMealdCtx.ids.includes(meal.id));

  if (mealItem.length === 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You Have No Favourite's</Text>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={mealItem}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <MealItem
              title={itemData.item.title}
              imageUrl={itemData.item.imageUrl}
              duration={itemData.item.duration}
              complexity={itemData.item.complexity}
              affordability={itemData.item.affordability}
              id={itemData.item.id}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
