import React, { useContext, useState } from "react";

export const OrdenCountryContext = React.createContext();

const VALOR_INICIAL = "All";

export const OrdenCountryProvider = ({ children }) => {

    const [ordenCountrycontext, setOrdenCountryContext] = useState(VALOR_INICIAL);

    return (
        <OrdenCountryContext.Provider value={{ ordenCountrycontext, setOrdenCountryContext }}>
            {children}
        </OrdenCountryContext.Provider>
    );
};

export const useOrdenCountryContext = () => useContext(OrdenCountryContext);
export default OrdenCountryContext;