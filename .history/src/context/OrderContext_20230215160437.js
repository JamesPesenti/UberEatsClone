import { createContext , useContext, useState, useEffect } from "react"
import { DataStore } from "aws-amplify" 
import { Order, OrderDish, Basket } from "../models"

const OrderContext = createContext({})

const OrderContextProvider = ({ children }) => {
    const createOrder = () => {
        return (

        )
    }
     return (
       <OrderContextProvider value={createOrder}>
        {children}
       </OrderContextProvider>
    )
}


export default OrderContextProvider

export const useOrderContext = () => useContext(OrderContext)