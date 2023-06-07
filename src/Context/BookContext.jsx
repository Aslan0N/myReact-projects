import React, { createContext, useState } from "react";
import Data from "../Data/Data";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Context = createContext();

export const BookProvider = ({ children }) => {
  const [state, setState] = useState({
    bookList: Data ,
    card:[]
  });
  
  

  const addToCart = book =>{
    
      toast.success('Success Notification !', {
          position: toast.POSITION.TOP_RIGHT
      });
    
    setState({
      ...state,
      card: state.card.find(cardItem => cardItem.id === book.id)?
      state.card.map(cardItem=> cardItem.id === book.id ? {...cardItem, count:cardItem.count + 1}: cardItem):
      [...state.card, {...book, count: 1}]
    })
    }
    const myCard = state.card.length


  return (
    <Context.Provider value={{ state:state, addToCart, myCard }}>{children}</Context.Provider>
  );
};
