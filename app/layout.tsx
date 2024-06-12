"use client";
import { useState } from "react";
import { Vazirmatn } from "next/font/google";
import { Context } from "@/context";
import "./globals.css";

const inter = Vazirmatn({ subsets: ["arabic", "latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [en, setEn] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const TriggerEn = () => {
    setEn((prev) => !prev);
  };
  const TriggerMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Context.Provider
      value={{ en, setEn: TriggerEn, darkMode, setDarkMode: TriggerMode }}
    >
      <html lang="en">
        <head>
          <title>{en ? "Mohammad Ghodoosi" : "محمد قدوسی"}</title>
        </head>
        <body
          className={inter.className}
          style={
            darkMode
              ? { backgroundColor: "#202021" }
              : { backgroundColor: "#ffffffd5" }
          }
        >
          {children}
        </body>
      </html>
    </Context.Provider>
  );
}
