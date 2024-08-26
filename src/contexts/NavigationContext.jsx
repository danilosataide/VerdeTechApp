import { createContext, useContext } from 'react';

const NavigationContext = createContext();

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider = ({ children, navigation }) => (
  <NavigationContext.Provider value={navigation}>
    {children}
  </NavigationContext.Provider>
);