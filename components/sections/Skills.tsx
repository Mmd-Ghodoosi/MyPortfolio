"use client";
import React, { useEffect, useContext } from "react";

import { Box } from "@mui/material";
import { Context } from "@/context";

// @ts-ignore
import AOS from "aos";
import SkillsDataEn from "./data/Skills-dataEn";
import SkillsDataFa from "./data/Skills-dataFa";

const Skills = () => {
  const { en, darkMode } = useContext(Context);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box data-aos="fade-up" color={darkMode ? "white" : "black"}>
      {en ? <SkillsDataEn /> : <SkillsDataFa />}
    </Box>
  );
};

export default Skills;
