//dummy version of react-router-dom Link and useNavigate

import { createContext, useState, useEffect } from "react";

const NavigtionContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler); //popstate is going back/forth history of paths(represent components)
    //stop hard refresh

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to); //add path to window history for rerender and avoid full refresh
    setCurrentPath(to);
  };

  return (
    <NavigtionContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigtionContext.Provider>
  );
}

export { NavigationProvider };
export default NavigtionContext;
