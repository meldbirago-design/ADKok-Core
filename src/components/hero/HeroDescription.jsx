import { Box, Typography } from "@mui/material";

export default function HeroDescription() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 520,
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "rgba(255,255,255,.56)",
          fontSize: {
            xs: 9,
            md: 13,
          },
          fontWeight: 40,
          lineHeight: 2,
          letterSpacing: "2px",
          fontFamily:
            '","Plus Jakarta Sans","Manrope","Poppins",sans-serif',
        }}
      >
        Whether it be for a business, a church, a school or your personal brand,
        ADKok makes it easy to own a premium website through
        affordable pricing, proven website blueprints and
        a steady team ready to support you every step of the way.
      </Typography>
    </Box>
  );
}

