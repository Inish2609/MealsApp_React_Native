import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetailsItem from "../components/MealDetailsItem";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavContext } from "../store/context/fav-contex";

export default function MealDetails(props) {
  const selectMeals = MEALS.find((meal) => meal.id === props.route.params.id);

  const favMealsCtx = useContext(FavContext)

  const mealIsFav = favMealsCtx.ids.includes(props.route.params.id)

  function headerButtonHandler(){
    if(mealIsFav){
      favMealsCtx.removeFav(props.route.params.id)
    }
    else{
      favMealsCtx.addFav(props.route.params.id)
    }
  }

  useLayoutEffect(()=>{
    props.navigation.setOptions({
        headerRight:()=>{
            return <IconButton name={mealIsFav ? 'star' : 'star-outline'} color='black' onPress={headerButtonHandler} />
        }
    })
  },[props.navigation,headerButtonHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectMeals.imageUrl }} />
      <Text style={styles.title}>{selectMeals.title}</Text>
      <MealDetailsItem
        duration={selectMeals.duration}
        complexity={selectMeals.complexity}
        affordability={selectMeals.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectMeals.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  detailText: {
    color: "black",
    fontWeight:'bold',
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 32,
  },
});
