import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Context } from "@/context";

import { Box, Button, Typography } from "@mui/material";
import { BorderBottom, CustomBox } from "@/constant/Mui-styles";

import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactsDataEn = () => {
  const { darkMode } = useContext(Context);

  const copyPhoneToClipboard = () => toast.success("Phone Copied Successfully");
  const copyGmailToClipboard = () => toast.success("Gmail Copied Successfully");
  return (
    <Box>
      <CustomBox mt={10} color={darkMode ? "white" : "black"}>
        <Typography variant="h5" style={BorderBottom}>
          Contact Me
        </Typography>
      </CustomBox>

      <CustomBox>
        <CopyToClipboard text={"09917240664"}>
          <Button variant="text" color="info" onClick={copyPhoneToClipboard}>
            <span
              style={{
                marginRight: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaPhoneAlt />
            </span>
            +98 09917240664(click to copy)
          </Button>
        </CopyToClipboard>
      </CustomBox>

      <CustomBox>
        <CopyToClipboard text={"mamadakgh@gmail.com"}>
          <Button variant="text" color="info" onClick={copyGmailToClipboard}>
            <span
              style={{
                marginRight: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <SiGmail />
            </span>
            Gmail (click to copy)
          </Button>
        </CopyToClipboard>
      </CustomBox>

      <CustomBox>
        <Button
          href="https://github.com/Mmd-Ghodoosi"
          target="_blank"
          variant="text"
          color="info"
        >
          <span
            style={{
              marginRight: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaGithub />
          </span>
          My Github
        </Button>
      </CustomBox>

      <CustomBox>
        <Button
          href="https://Linkedin.com"
          target="_blank"
          variant="text"
          color="info"
        >
          <span
            style={{
              marginRight: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaLinkedin />
          </span>
          Linkedin
        </Button>
      </CustomBox>
    </Box>
  );
};

export default ContactsDataEn;
