import { createContext, useContext, useEffect, useState } from "react"
import { Auth, DataStore } from "aws-amplify"
import { Basket, BasketDish } from "../models/index"
import { useAuthContext } from "./AuthContext"

const BasketContext = createContext({})

const BasketContextProvider = ({children}) => {
    const {dbUser} = useAuthContext()

    const [restaurant, setRestaurant] = useState(null)
    const [basket, setBasket] = useState(null)
    const [basketDishes, setBasketDishes] = useState([])


    const totalPrice = basketDishes.reduce(
        (sum, basketDish) => sum + basketDish.quantity * basketDish.price,
        restaurant?.deliveryFee
    )

    useEffect(() => {
        DataStore.query(Basket, (b) => b.restaurantID("eq", restaurant.id).userID("eq", dbUser.id))
        .then((baskets) => setBasket(baskets[0]))
    }, [dbUser, restaurant])

    useEffect(() => {
        if (basket) {
         DataStore.query(BasketDish, (bd) => bd.basketID("eq", basket.id)).then(setBasketDishes)
        }
    }, [basket])

    const addDishToBasket = async (dish, quantity) => {
        // Get basket or create new basket
        let theBasket = basket || await createNewBasket();
        if (!basket) {
            theBasket = await createNewBasket()
        } else {
            theBasket = basket
        }
        //  create BasketDish item and save to DataStore
        const newDish = await DataStore.save(new BasketDish({ quantity, Dish: dish, basketID: theBasket.id})
      );

      setBasketDishes([...basketDishes, newDish])
    }   

    const createNewBasket = async () => {
        const newBasket = await DataStore.save(new Basket({userID: dbUser.id, restaurantID: restaurant.id})
        );
        setBasket(newBasket)
        return newBasket
    }

    return (
        <BasketContext.Provider value={{addDishToBasket, setRestaurant, restaurant, basket, basketDishes}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider

export const useBasketContext = () => useContext(BasketContext)
