import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Context } from "@/context";

import { Box, Button, Typography } from "@mui/material";
import { BorderBottom, FaCustomBox } from "@/constant/Mui-styles";

import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactsDataFa = () => {
  const { darkMode } = useContext(Context);

  const FAcopyPhoneToClipboard = () => toast.success("شماره تلفن کپی شد  ");
  const FAcopyGmailToClipboard = () => toast.success("جیمیل کپی شد  ");
  return (
    <Box>
      <FaCustomBox mt={10} color={darkMode ? "white" : "black"}>
        <Typography variant="h5" style={BorderBottom}>
          نحوه تماس با من
        </Typography>
      </FaCustomBox>

      <FaCustomBox>
        <CopyToClipboard text={"09917240664"}>
          <Button variant="text" color="info" onClick={FAcopyPhoneToClipboard}>
            <span
              style={{
                marginLeft: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaPhoneAlt />
            </span>
            09917240664(کلیک برای کپی)
          </Button>
        </CopyToClipboard>
      </FaCustomBox>

      <FaCustomBox>
        <CopyToClipboard text={"mamadakgh@gmail.com"}>
          <Button variant="text" color="info" onClick={FAcopyGmailToClipboard}>
            <span
              style={{
                marginLeft: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <SiGmail />
            </span>
            جیمیل (کلیک برای کپی )
          </Button>
        </CopyToClipboard>
      </FaCustomBox>

      <FaCustomBox>
        <Button
          href="https://github.com/Mmd-Ghodoosi"
          target="_blank"
          variant="text"
          color="info"
        >
          <span
            style={{
              marginLeft: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaGithub />
          </span>
          گیت هاب
        </Button>
      </FaCustomBox>

      <FaCustomBox>
        <Button
          href="https://Linkedin.com"
          target="_blank"
          variant="text"
          color="info"
        >
          <span
            style={{
              marginLeft: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaLinkedin />
          </span>
          لینکداین
        </Button>
      </FaCustomBox>
    </Box>
  );
};

export default ContactsDataFa;
