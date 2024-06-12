"use client";
import React, { useContext } from "react";
import { Context } from "@/context";

import TypeEN from "../Types/TypeEN";
import Type from "../Types/Type";

import { CustomBox } from "@/constant/Mui-styles";
import {  Box } from "@mui/material";

const HeaderBox = () => {
  const { en, darkMode } = useContext(Context);
  return (
    <CustomBox color={darkMode ? "white" : "black"}>
      <Box
        width={550}
        height={45}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={20}
        bgcolor={darkMode ? "#313134" : "#ccc"}
        borderRadius={3}
      >
        <Box  bgcolor={darkMode ? "#313134" : "#ccc"}>
          {en ? <TypeEN /> : <Type />}
        </Box>
      </Box>
    </CustomBox>
  );
};
export default HeaderBox;
