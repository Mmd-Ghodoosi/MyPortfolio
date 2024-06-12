import React, { useContext } from "react";
import { Context } from "@/context";

import { BorderBottom, CustomBox, FaCustomBox } from "@/constant/Mui-styles";
import { Box, Typography } from "@mui/material";

const AboutMe = () => {
  const { en, darkMode } = useContext(Context);
  return (
    <Box color={darkMode ? "white" : "black"}>
      {en ? (
        <Box>
          {/* //! english */}
          <CustomBox mt={10}>
            <Typography variant="h5" style={BorderBottom}>
              About Me
            </Typography>
          </CustomBox>
          <CustomBox mt={1}>
            <Typography variant="body1" textAlign={"justify"}>
              <span style={{ marginLeft: "20px" }}>
                I'm a Full developer {""}
              </span>
              located in Iran. I love to create simple yet beautiful websites
              with great user experience like trying new things and building
              great projects. I love to see movies and read books. I believe
              everything is an Art when you put your consciousness in it.
            </Typography>
          </CustomBox>
        </Box>
      ) : (
        <Box>
          <FaCustomBox mt={10}>
            <Typography variant="h5" style={BorderBottom}>
              درباره من
            </Typography>
          </FaCustomBox>
          {/* //! persian */}
          <FaCustomBox mt={1}>
            <Typography variant="body1" textAlign={"justify"}>
              <span style={{ marginRight: "20px" }}> من یک توسعه دهنده</span>{" "}
              فول استک در ایران هستم. من عاشق ایجاد وب سایت های ساده و در عین
              حال زیبا با تجربه کاربری عالی مانند آزمایش چیزهای جدید و ساختن
              پروژه های عالی هستم. من عاشق دیدن فیلم و کتاب خواندن هستم. وقتی
              آگاهی خود را در آن قرار دهید باور کنید همه چیز یک هنر است.
            </Typography>
          </FaCustomBox>
        </Box>
      )}
    </Box>
  );
};

export default AboutMe;
