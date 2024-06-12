"use client";
import React, {  useContext } from "react";
import { Context } from "@/context";

import ContactsDataEn from "./data/Contacts-dataEn";
import ContactsDataFa from "./data/Contacts-dataFa";

import { Box } from "@mui/material";


const Contacts = () => {
  const { en } = useContext(Context);


  return (
    <Box >{en ? <ContactsDataEn /> : <ContactsDataFa />}</Box>
  );
};

export default Contacts;
