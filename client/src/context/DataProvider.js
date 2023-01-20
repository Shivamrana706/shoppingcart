import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);


const DataProvider = ({children}) => {
    const [account,setAccount] = useState();
    const [myCartLenght, setMyCartLength] = useState();

    return(
        <DataContext.Provider value={{
            account,
            setAccount,
            myCartLenght,
            setMyCartLength
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataProvider;