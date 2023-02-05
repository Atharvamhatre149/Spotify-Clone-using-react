import { createContext,useContext,useReducer } from "react";
import { initialState } from "./reducer";
import reducer from "./reducer";



export const StateContext=createContext();

export const StateProvider=({children,initialState,reducer})=>{
    // console.log(children);  
    return(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
        
    </StateContext.Provider>
)};

export const useStateProvider=()=> useContext(StateContext);