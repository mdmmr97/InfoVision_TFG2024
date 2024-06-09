import React, { useContext, useState } from "react";


export const OrdenYearContext = React.createContext();

const VALOR_INICIAL = "All";

export const OrdenYearProvider = ({ children }) => {

    const [ordenYearcontext, setOrdenYearContext] = useState(VALOR_INICIAL);

    return (
        <OrdenYearContext.Provider value={{ ordenYearcontext, setOrdenYearContext }}>
            {children}
        </OrdenYearContext.Provider>
    );
};

export const useOrdenYearContext = () => useContext(OrdenYearContext);
export default OrdenYearContext;