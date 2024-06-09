import React, { useContext, useState } from "react";

export const OrdenNameSongContext = React.createContext();

const VALOR_INICIAL = "All";

export const OrdenNameSongProvider = ({ children }) => {

    const [ordenNameSongcontext, setOrdenNameSongContext] = useState(VALOR_INICIAL);

    return (
        <OrdenNameSongContext.Provider value={{ ordenNameSongcontext, setOrdenNameSongContext }}>
            {children}
        </OrdenNameSongContext.Provider>
    );
};

export const useOrdenNameSongContext = () => useContext(OrdenNameSongContext);
export default OrdenNameSongContext;