import { createContext, useContext, useState } from 'react';

const GlobalData = createContext({});

export const GlobalDataProvider = ({ children }) => {
    const data = useContext(GlobalData);

    const [globalData, setGlobalData] = useState(data);

    return (
        <GlobalData.Provider value={[globalData, setGlobalData]}>
            {children}
        </GlobalData.Provider>
    );
};

export const useGlobalData = () => {
    const [globalData, setGlobalData] = useContext(GlobalData);

    const changeGlobalData = (newGlobalData) => {
        setGlobalData(newGlobalData);
    };

    return {
        globalData: globalData,
        changeGlobalData: changeGlobalData,
    };
};
