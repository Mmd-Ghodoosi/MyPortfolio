"use client";
import React, { useContext, useState } from "react";

import { Context } from "@/context";
import ThemeData from "./sections/navbar-sections/Theme-data";

import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Navbar = () => {
  const { en, setEn, darkMode } = useContext(Context);
  const [lang, setLang] = useState<boolean>(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"}>
            {/* //! Flag Section */}
            <Button
              sx={{ borderRadius: 10 }}
              onClick={() => {
                setLang((prev) => !prev);
              }}
            >
              {en ? (
                <Typography color={"red"}>En</Typography>
              ) : (
                <Typography color={"red"}>Fa</Typography>
              )}

              <Box ml={1}>
                {lang ? (
                  <MdOutlineKeyboardDoubleArrowUp
                    style={darkMode ? { color: "white" } : { color: "black" }}
                  />
                ) : (
                  <MdOutlineKeyboardDoubleArrowDown
                    style={darkMode ? { color: "white" } : { color: "black" }}
                  />
                )}
              </Box>
            </Button>
            {/* //! Theme */}
            <ThemeData />
          </Box>

          {/* //! Name in header section */}
          {en ? (
            <Typography variant="body1" color={"white"}>
              Mohammad Ghodoosi
            </Typography>
          ) : (
            <Typography variant="body1" color={"white"}>
              محمد قدوسی
            </Typography>
          )}
          <Avatar sx={{ width: 50, height: 50 }} />
        </Toolbar>
      </AppBar>

      {/* //! Select flag section */}
      {lang ? (
        <Box
          width={80}
          height={80}
          bgcolor={darkMode ? "#202023" : "#ffffffd5"}
          position={"fixed"}
          top={70}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={"center"}
          border={"2 solid white"}
          zIndex={1}
        >
          {en ? (
            <Box
              mb={1}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setLang((prev) => !prev);
              }}
            >
              <Typography color={"red"}>En</Typography>
            </Box>
          ) : (
            <Box
              mb={1}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setLang((prev) => !prev);
              }}
            >
              <Typography
                color={"red"}
                onClick={() => {
                  setEn();
                }}
              >
                En
              </Typography>
            </Box>
          )}

          {en ? (
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setLang((prev) => !prev);
              }}
            >
              <Typography
                color={"red"}
                onClick={() => {
                  setEn();
                }}
              >
                Fa
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setLang((prev) => !prev);
              }}
            >
              <Typography color={"red"}>Fa</Typography>
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;
