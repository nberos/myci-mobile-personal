import {createContext, useState} from 'react';

export const MainContext = createContext();

const MainContextProvider = ({children}) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const values = {showDrawer, setShowDrawer};

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
