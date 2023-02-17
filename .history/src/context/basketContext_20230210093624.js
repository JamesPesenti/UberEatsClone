import { createContext, useContext, useEffect, useState } from "react"
import { Auth, DataStore } from "aws-amplify"
import { Basket, BasketDish } from "../models/index"

const BasketContext = createContext({})

const BasketContextProvider = ({children}) => {
    const addDishToBasket = (dish, quantity) => {
        console.log("add dish to basket", dish, quantity)
    }

    return (
        <BasketContext.Provider value={{addDishToBasket}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider

export const useBasketContext = () => useContext(BasketContext)
