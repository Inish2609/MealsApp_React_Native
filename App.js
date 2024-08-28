import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";
import MealDetails from "./screens/MealDetails";
import FavContextProvider from "./store/context/fav-contex";
import FavouriteScreen from "./screens/FavouriteScreen";


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator()

// function DrawerNavigator(){
//   return(
//     <>
//     <Drawer.Navigator>
//       <Drawer.Screen name="MealsOverview" component={MealsOverView} />
//       <Drawer.Screen name='Favourite' component={FavouriteScreen} />
//     </Drawer.Navigator>
//     </>
//   )
// }

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverView}
              // options={({ route, navigation }) => {
              //   const catTile = route.params.categoryId;
              //   return {
              //     title: catTile,
              //   };
              // }}
            />
            <Stack.Screen name="MealDetails" component={MealDetails} />
            <Stack.Screen name='Favourite' component={FavouriteScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavContextProvider>
    </>
  );
}

const styles = StyleSheet.create();
