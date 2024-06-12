"use client";
import React, { useEffect, useContext } from "react";
import { Context } from "@/context";

import ContactsDataEn from "./data/Contacts-dataEn";
import ContactsDataFa from "./data/Contacts-dataFa";

import { Box } from "@mui/material";
// @ts-ignore
import AOS from "aos";

const Contacts = () => {
  const { en } = useContext(Context);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box data-aos="fade-up">{en ? <ContactsDataEn /> : <ContactsDataFa />}</Box>
  );
};

export default Contacts;
