"use client";
import React, {useContext } from "react";

import { Box } from "@mui/material";
import { Context } from "@/context";

import SkillsDataEn from "./data/Skills-dataEn";
import SkillsDataFa from "./data/Skills-dataFa";

const Skills = () => {
  const { en, darkMode } = useContext(Context);

  return (
    <Box color={darkMode ? "white" : "black"}>
      {en ? <SkillsDataEn /> : <SkillsDataFa />}
    </Box>
  );
};

export default Skills;
