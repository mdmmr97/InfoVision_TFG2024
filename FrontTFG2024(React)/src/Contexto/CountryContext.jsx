import React, { useContext, useState } from "react";


export const CountryContext = React.createContext();

const VALOR_INICIAL = "All";

export const CountryProvider = ({ children }) => {

    const [countrycontext, setCountryContext] = useState(VALOR_INICIAL);

    return (
        <CountryContext.Provider value={{ countrycontext, setCountryContext }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountryContext = () => useContext(CountryContext);
export default CountryContext;