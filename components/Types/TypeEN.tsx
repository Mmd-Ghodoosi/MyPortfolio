import React from "react";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeEN = () => {
  const nameEn = useRef(null);
  const Enstrings = [
    "Hello Im Mohammad ",
    " A Fullstack Developer From Iran 👋",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEn.current, {
      strings: Enstrings,
      typeSpeed: 90,
      backSpeed: 100,
      backDelay: 80,
      showCursor: false,
      loop: true,
    });
    return () => {
      typedName.destroy();
    };
  }, []);

  return (
      <Box
     
      >
        <Typography
          ref={nameEn}
          zIndex={1}
          variant="caption"
          fontSize={15}
          fontWeight={"bold"}
          sx={{ userSelect: "none" }}
        />
      </Box>
  );
};

export default TypeEN;
