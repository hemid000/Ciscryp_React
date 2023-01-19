import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { createContext, useState } from "react";
import "../Layout/Layout.scss";
// export const ThemeContext = createContext(null);
const Layout = ({ children }) => {
  //   const [theme, setTheme] = useState("light");

  //   const toggleTheme = () => {

  //     setTheme((curr) => (curr === "light" ? "dark" : "light"));
  //   };
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    //   <div id={theme}>
    <>
      <Navbar />
      {children}
      <Footer />
    </>
    //   </div>
    // </ThemeContext.Provider>
  );
};

export default Layout;
