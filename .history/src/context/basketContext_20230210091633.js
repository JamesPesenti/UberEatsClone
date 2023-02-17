import { createContext, useContext, useEffect, useState } from "react"
import { Auth, DataStore } from "aws-amplify"
import { Basket, BasketDish } from "../models/index"

const BasketContext = createContext({})

const BasketContextProvider = ({children}) => {
    return (
        <BasketContext.Provider>
            {children}
        </BasketContext.Provider>
    )
}
