import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  

  const [scrolled, setScrolled] = useState(false);

  let headerClasses = classes.header;

  if(scrolled){
    headerClasses = `${classes.header} ${classes.headeronscroll}`
  }
//remove shadow from header on scroll
  useEffect(() => {
    const handleScroll = (event) => {
      console.log(window.scrollY);
      if(window.scrollY > 0){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={headerClasses}>
      <Navbar />
    </div>
  );
};

export default Header;
