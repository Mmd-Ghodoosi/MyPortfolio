"use client";
import React, { useEffect, useContext } from "react";
import { Context } from "@/context";

import { BorderBottom, CustomBox, FaCustomBox } from "@/constant/Mui-styles";
import { Box, Typography } from "@mui/material";

// @ts-ignore
import AOS from "aos";

const LikesSection = () => {
  const { en,darkMode } = useContext(Context);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box data-aos="fade-up" color={darkMode ? "white" : "black"}>
      {en ? (
        //! English Section 
        <Box>
          <CustomBox mt={10}>
            <Typography variant="h5" style={BorderBottom}>
              <Box color={"green"}>I ❤</Box>
            </Typography>
          </CustomBox>

          <CustomBox mt={1}>
            <Typography variant="body1">
              <span style={{ marginLeft: "10px" }}>
                Music, Playing, Research, Reading
              </span>
            </Typography>
          </CustomBox>
        </Box>
      ) : (
         //! Persian Section 
        <Box>
          <FaCustomBox mt={10}>
            <Typography variant="h5" style={BorderBottom}>
              <Box color={"green"}>I ❤</Box>
            </Typography>
          </FaCustomBox>

          <FaCustomBox mt={1}>
            <Typography variant="body1">
              <span style={{ marginLeft: "10px" }}>
                اهنگ , گیم , تحقیق , کتاب
              </span>
            </Typography>
          </FaCustomBox>
        </Box>
      )}
    </Box>
  );
};

export default LikesSection;
