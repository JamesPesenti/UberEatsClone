import { createContext , useContext, useState, useEffect } from "react"
import { DataStore } from "aws-amplify" 
import { Order, OrderDish, Basket } from "../models"
import { useAuthContext } from "./AuthContext"
import { useBasketContext } from "./BasketContext"


const OrderContext = createContext({})

const OrderContextProvider = ({ children }) => {
    const {dbUser} = useAuthContext()
    const {restaurant, totalPrice, basketDishes, basket } = useBasketContext()
    const [orders, setOrders] = useState([])

    // query all orders for specific user
    useEffect(() => {
        DataStore.query(Order, o => o.userID("eq", dbUser.id)).then(setOrders)
    })


    const createOrder = async () => {
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

        setOrders([...orders, newOrder])
    }
     return (
       <OrderContext.Provider value={{ createOrder, orders }}>
        {children}
       </OrderContext.Provider>
    )
}


export default OrderContextProvider

export const useOrderContext = () => useContext(OrderContext)