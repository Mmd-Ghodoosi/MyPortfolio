import React, { useContext } from "react";
import { Context } from "@/context";

import { BorderBottom, CustomBox, FaCustomBox } from "@/constant/Mui-styles";
import { Box, Typography } from "@mui/material";

const Experience = () => {
  const { en, darkMode } = useContext(Context);
  return (
    <Box color={darkMode ? "white" : "black"}>
      {en ? (
        <CustomBox mt={5}>
          <Typography variant="h5" style={BorderBottom}>
            Experience
          </Typography>
        </CustomBox>
      ) : (
        <FaCustomBox mt={5}>
          <Typography variant="h5" style={BorderBottom}>
            تجربه های من
          </Typography>
        </FaCustomBox>
      )}
    </Box>
  );
};

export default Experience;
