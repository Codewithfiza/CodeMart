"use client"
import React, { useEffect } from 'react'
import {store} from './store'
import {setCart} from "./features/cartslice"
import { Provider } from 'react-redux'

const ReduxProvider = ({children}) => {
    useEffect(()=>{
        const saved = localStorage.getItem("cart");
        if(saved){
            store.dispatch(setCart(JSON.parse(saved)));
        }

        const unsubscribe = store.subscribe(()=>{
            const cartItems = store.getState().cart.items;
            localStorage.setItem("cart", JSON.stringify(cartItems));
        });

        return ()=> unsubscribe();
    }, []);




  return (
   <Provider store={store}>{children}</Provider>
  )
}

export default ReduxProvider;