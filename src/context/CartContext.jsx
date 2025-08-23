import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const removeByID = (id) => {
        let filter = cart.filter(x => x.id !== id);
        setCart(filter);
    }

    const resetCart = () => {
        setCart([]);
    }

    const getTotalQuanty = () => {
        let total = cart.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
        return total;
    };

    const getTotalAmount = () => {
        const total = cart.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);

        return total;
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return <CartContext.Provider 
        value={{
            cart: cart,
            addToCart: addToCart,
            removeByID: removeByID,
            resetCart: resetCart,
            getTotalAmount: getTotalAmount,
            getTotalQuanty: getTotalQuanty
    }}>{children}</CartContext.Provider>

}

export default CartContextProvider;