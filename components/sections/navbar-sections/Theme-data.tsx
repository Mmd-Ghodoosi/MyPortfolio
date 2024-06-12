import React, { useContext } from "react";
import { Context } from "@/context";

import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

import { Button } from "@mui/material";

const ThemeData = () => {
  const { darkMode, setDarkMode } = useContext(Context);

  return (
    <Button
      sx={{ borderRadius: 10, fontSize: 17 }}
      onClick={() => {
        setDarkMode();
      }}
    >
      {darkMode ? (
        <GoSun style={darkMode ? { color: "white" } : { color: "black" }} />
      ) : (
        <FaMoon style={darkMode ? { color: "white" } : { color: "black" }} />
      )}
    </Button>
  );
};

export default ThemeData;
