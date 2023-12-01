import axios from "axios";
import { reducer } from "../reducers/reducer";
import React, { createContext, useContext, useReducer, useEffect } from "react";


const GlobalContext = createContext();

const initialState = {
  list: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
  theme: 'light'
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favs'));
    if (storedFavs) {
      dispatch({ type: 'GET_FAVS_FROM_LOCAL_STORAGE', payload: storedFavs });
    }

    const url = 'https://jsonplaceholder.typicode.com/users';
    axios(url)
      .then(res => dispatch({ type: 'GET_CHARACTERS', payload: res.data }))
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  

      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        dispatch({ type: 'CHANGE_THEME', payload: storedTheme });
      }
    }, []);

  const addToFavorites = (item) => {
    dispatch({ type: 'ADD_FAV', payload: item });
    localStorage.setItem('favs', JSON.stringify([...state.favs, item]));
  };

  const changeTheme = (newTheme) => {
    dispatch({ type: 'CHANGE_THEME', payload: newTheme });
    localStorage.setItem('theme', newTheme);
  };

  const deleteFromFavorites = (item) => {
    dispatch({ type: 'DELETE_FAV', payload: item }); 
    const updatedFavs = state.favs.filter((favItem) => favItem.id !== item.id);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
  };

  const contextValue = {
    state,
    addToFavorites,
    changeTheme,
    deleteFromFavorites,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

//export const useGlobalContext = () => useContext(GlobalContext);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a ContextProvider');
  }
  return context;
};

export const useDispatch = () => {
  const { dispatch } = useGlobalContext();
  return dispatch;
};