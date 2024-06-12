import React, { useContext } from "react";
import { Context } from "@/context";

import { CustomBox, FaCustomBox } from "@/constant/Mui-styles";
import { Typography, Box } from "@mui/material";

const HeaderInfo = () => {
  const { en, darkMode } = useContext(Context);
  return (
    <Box color={darkMode ? "white" : "black"}>
      {en ? (
        //! English Section
        <Box>
          <CustomBox mt={5}>
            <Typography variant="h5">Mohammad Ghodoosi</Typography>
          </CustomBox>

          <CustomBox>
            <Typography variant="body1">
              Programing Lover (Developer with{" "}
              <span style={{ color: "green" }}>❤</span>)
            </Typography>
          </CustomBox>
        </Box>
      ) : (
        //! Persian Section
        <Box>
          <FaCustomBox mt={5}>
            <Typography variant="h5">محمد قدوسی </Typography>
          </FaCustomBox>

          <FaCustomBox>
            <Typography variant="body1">
              عاشق برنامه نویسی (توسعه دهنده همراه با{" "}
              <span style={{ color: "green" }}>❤</span>)
            </Typography>
          </FaCustomBox>
        </Box>
      )}
    </Box>
  );
};

export default HeaderInfo;
