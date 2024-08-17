import React from "react";

import { BorderBottom, FaCustomBox } from "@/constant/Mui-styles";
import { Box, Typography } from "@mui/material";

const SkillsDataFa = () => {
  return (
    <Box>
      <FaCustomBox mt={10}>
        <Typography variant="h5" style={BorderBottom}>
          مهارت های من
        </Typography>
      </FaCustomBox>

      <FaCustomBox mt={2}>
        <Box
          display={"flex"}
          justifyContent={"start"}
          flexDirection={"column"}
          textAlign={"right"}
        >
          <Typography variant="h6">Html</Typography>
          <Typography variant="h6">Css</Typography>
          <Typography variant="h6">Bootstrap</Typography>
          <Typography variant="h6">Tailwind Css</Typography>
          <Typography variant="h6">Javascript</Typography>
          <Typography variant="h6">Typescript</Typography>
          <Typography variant="h6">React Js</Typography>
          <Typography variant="h6">Material ui</Typography>
          <Typography variant="h6">Next Js</Typography>
          <Typography variant="h6">Node Js</Typography>
          <Typography variant="h6">Express Js</Typography>
          <Typography variant="h6">Nest Js</Typography>
          <Typography variant="h6">Java</Typography>
          <Typography variant="h6">MongoDB</Typography>
          <Typography variant="h6">MySQL</Typography>
        </Box>
      </FaCustomBox>
    </Box>
  );
};

export default SkillsDataFa;
