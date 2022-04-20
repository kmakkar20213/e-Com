import React, { createContext, useContext, useReducer } from "react";

// making data layer(in which the items go)
export const StateContext = createContext();

// providing the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// extracting items from the data layer
export const useStateVariable = () => useContext(StateContext);
