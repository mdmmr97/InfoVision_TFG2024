import React, { useContext, useState } from "react";

const SearchNameSongContext = React.createContext();

export const SearchNameSongProvider = ({ children }) => {

    const [searchnamesongcontetx, setSearchNameSongContext] = useState("");

    return (
        <SearchNameSongContext.Provider value={{ searchnamesongcontetx, setSearchNameSongContext }}>
            {children}
        </SearchNameSongContext.Provider>
    );
};
export const useSearchNameSongContext = () => useContext(SearchNameSongContext);
export default SearchNameSongContext;