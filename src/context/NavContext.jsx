import React, { createContext, useState } from "react";

export const NavBarContext = createContext();
const NavContext = ({ children }) => {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div>
      <NavBarContext.Provider value={[navOpen, setnavOpen]}>
        {children}
      </NavBarContext.Provider>
    </div>
  );
};

export default NavContext;
