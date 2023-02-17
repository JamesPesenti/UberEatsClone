import { createContext, useContext, useEffect, useState } from "react"
import { Auth, DataStore } from "aws-amplify"
import { Basket, BasketDish } from "../models/index"
import { useAuthContext } from "./AuthContext"

const BasketContext = createContext({})

const BasketContextProvider = ({children}) => {
    const {dbUser} = useAuthContext()

    const [restaurant, setRestaurant] = useState(null)
    const [basket, setBasket] = useState(null)

    useEffect(() => {
        DataStore.query(Basket, b => b.restaurantID("eq", restaurant.id).userID("eq", dbUser.id))
        .then(baskets => setBasket(baskets[0]))
    }, [dbUser, restaurant])

    const addDishToBasket = (dish, quantity) => {
        // Get basket or create new basket
        if (!basket) {
            await createNewBasket()
        }
        //  create BasketDish item and save to DataStore
    }   

    const createNewBasket = async () => {
        const newBasket = await DataStore.save(new Basket({userID: dbUser.id, restaurantID: restaurant.id})
        );
        setBasket(newBasket)
    }

    return (
        <BasketContext.Provider value={{addDishToBasket, setRestaurant}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider

export const useBasketContext = () => useContext(BasketContext)
