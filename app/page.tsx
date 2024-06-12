"use client";
import { useContext } from "react";

import Navbar from "@/components/Navbar";
import Content from "@/components/MainLayout";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "@emotion/react";
import { LightTheme, DarkTheme } from "@/utilities/theme";

import { Context } from "@/context";

export default function Home() {
  const { darkMode } = useContext(Context);

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <main>
        <ToastContainer theme="dark" position="top-center" />
        <Navbar />
        <Content />
      </main>
    </ThemeProvider>
  );
}
