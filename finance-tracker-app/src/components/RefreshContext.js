import React, { createContext, useState, useContext } from 'react';

const RefreshContext = createContext();

export const useRefreshContext = () => {
    return useContext(RefreshContext);
};

export const RefreshContextProvider = ({ children }) => {
    const [refresh, setRefresh] = useState(0);

    const triggerRefresh = () => {
        setRefresh((prevRefresh) => prevRefresh + 1);
    };

    const value = {
        refresh,
        triggerRefresh,
    };

    return <RefreshContext.Provider value={value}>{children}</RefreshContext.Provider>;
};
