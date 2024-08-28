import { FlatList, StyleSheet, Text, View } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

export default function MealsOverView(props) {
  const categoryId = props.route.params.categoryId;

  const mealItem = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  
  useLayoutEffect(()=>{
    const catTile = CATEGORIES.find(cat => cat.id === categoryId).title
    props.navigation.setOptions({title:catTile})
  },[categoryId,props.navigation])
  

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
});
