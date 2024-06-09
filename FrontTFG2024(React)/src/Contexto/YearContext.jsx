import React, { useContext, useState } from "react";


export const YearContext = React.createContext();

const VALOR_INICIAL = "All";

export const YearProvider = ({ children }) => {

    const [yearcontext, setYearContext] = useState(VALOR_INICIAL);

    return (
        <YearContext.Provider value={{ yearcontext, setYearContext }}>
            {children}
        </YearContext.Provider>
    );
};

export const useYearContext = () => useContext(YearContext);
export default YearContext;