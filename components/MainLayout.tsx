"use client";
import React from "react";

import HeaderBox from "./sections/Header-box";
import HeaderInfo from "./sections/Header-info";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import LikesSection from "./sections/Likes-Section";
import Contacts from "./sections/Contacts";

import { Container } from "@mui/material";

const Content = () => {
  return (
    <Container maxWidth="sm">
      <HeaderBox />
      <HeaderInfo />
      <AboutMe />
      <Experience />
      <Skills />
      <LikesSection />
      <Contacts />
    </Container>
  );
};

export default Content;
