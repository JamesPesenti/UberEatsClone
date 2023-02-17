import { createContext, useContext, useEffect, useState } from "react"
import { Auth, DataStore } from "aws-amplify"
import { Basket, BasketDish } from "../models/index"
import { useAuthContext } from "./AuthContext"

const BasketContext = createContext({})

const BasketContextProvider = ({children}) => {
    const {sub} = useAuthContext()

    const [restaurant, setRestaurant] = useState(null)
    const [basket, setBasket] = useState(null)
    const addDishToBasket = (dish, quantity) => {

    }

    return (
        <BasketContext.Provider value={{addDishToBasket}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider

export const useBasketContext = () => useContext(BasketContext)
