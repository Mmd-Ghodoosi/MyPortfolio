import React from "react";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Type = () => {
  const nameEl = useRef(null);
  const strings = [" توسعه دهنده فول استک هستم", " فریلنسر هستم"];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: strings,
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
      <Box>
        <Typography
          ref={nameEl}
          zIndex={1}
          variant="caption"
          fontSize={15}
          fontWeight={"bold"}
          sx={{ userSelect: "none" }}
        />
      </Box>
  );
};

export default Type;
