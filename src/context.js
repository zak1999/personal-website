import { createContext } from "react";
import { useReducer } from "react";

export const ThemeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state,action) => {
  switch(action.type){
    case "TOGGLE":
      return {darkMode:!state.darkMode}
    default:
      return state;
  }
}

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  return(
    <ThemeContext.Provider value={{state,dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  )
}