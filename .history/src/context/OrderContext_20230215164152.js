import { createContext , useContext, useState, useEffect } from "react"
import { DataStore } from "aws-amplify" 
import { Order, OrderDish, Basket } from "../models"
import { useAuthContext } from "./AuthContext"
import { useBasketContext } from "./BasketContext"


const OrderContext = createContext({})

const OrderContextProvider = ({ children }) => {
    const {dbUser} = useAuthContext()
    const {restaurant, totalPrice, basketDishes, basket } = useBasketContext()


    const createOrder = () => {
        // Create an order
        const newOrder = await DataStore.save(
            new Order({
            userID: dbUser.id,
            Restaurant: restaurant,
            status: "New",
            total: totalPrice
        })
        )

        // add basketDishes to order
        await Promise.all(
            basketDishes.map(basketDish => 
                DataStore.save(
                    new OrderDish({
                        quantity: basketDish.quantity, 
                        orderID: newOrder.id, 
                        Dish: basketDish.Dish
                    })
                )
            ))

        // delete basket
        await DataStore.delete(basket)
    }
     return (
       <OrderContext.Provider value={{ createOrder }}>
        {children}
       </OrderContext.Provider>
    )
}


export default OrderContextProvider

export const useOrderContext = () => useContext(OrderContext)