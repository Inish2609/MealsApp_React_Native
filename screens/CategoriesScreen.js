import { Button, FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

export default function CategoriesScreen(props) {
  function pressHandler(id) {
    props.navigation.navigate("MealsOverview", { categoryId: id });
  }

  return (
    <View>
      <Button title="Fav" onPress={()=>props.navigation.navigate('Favourite')} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <CategoryGridTitle
              title={itemData.item.title}
              color={itemData.item.color}
              onPress={pressHandler.bind(this, itemData.item.id)}
            />
          );
        }}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create();
