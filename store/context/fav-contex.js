import { createContext, useState } from "react";

export const FavContext = createContext({
    ids:[],
    addFav: (id) => {},
    removeFav: (id) =>{},
})

export default function FavContextProvider(props){

    const [favMealIds,setFavMealIds] = useState([])

    function addFav(id){
        setFavMealIds(currentFavMel => [...currentFavMel,id])
    }

    function removeFav(id){
        setFavMealIds(currentFavMel => currentFavMel.filter(mealId => mealId !== id))
    }

    const value = {
        ids : favMealIds,
        addFav : addFav,
        removeFav: removeFav
    }

    return (
        <FavContext.Provider value = {value}>{props.children}</FavContext.Provider>
    )
}