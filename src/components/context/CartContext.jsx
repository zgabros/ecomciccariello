import { createContext, useState, useEffect } from "react";
export const MiContexto = createContext({});

function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let storagedCartItem = Object.values(localStorage);
    if (storagedCartItem.length > 0) {
      let arrayOfItems = [];
      storagedCartItem.map((x) => arrayOfItems.push(JSON.parse(x)));
      setCart(arrayOfItems);
    } else {
      let arrayOfItems = [];
      setCart(arrayOfItems);
    }
  }, []);

  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  const addItem = (item, qty) => {
    const newItem = {
      ...item,
      qty,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].qty += qty;
      setCart(auxArray);
      localStorage.setItem(newItem.id, JSON.stringify(auxArray[productIndex]));
    } else {
      setCart([...cart, newItem]);
      localStorage.setItem(newItem.id, JSON.stringify(newItem));
    }
  };

  const emptyCart = () => {
    setCart([]);
    localStorage.clear();
  };

  const deleteItem = (id) => {
    localStorage.removeItem(id);
    return setCart(cart.filter((x) => x.id !== id));
  };

  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.qty), 0);
  };

  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.qty * x.price), 0);
  };

  return (
    <MiContexto.Provider
      value={{
        cart,
        addItem,
        isInCart,
        emptyCart,
        deleteItem,
        getItemQty,
        getItemPrice,
      }}
    >
      {children}
    </MiContexto.Provider>
  );
}

export default CartContext;
