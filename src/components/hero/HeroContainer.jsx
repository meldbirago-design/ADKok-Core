import { Box } from "@mui/material";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

export default function HeroContainer() {
  return (
    <Box
      sx={{
        position: "absolute",

        top: "81.7%",
        left: "58%",
        transform: "translate(-50%, -50%)",

        width: "74%",
        maxWidth: 760,
        height: 140,

        px: 4,
        py: 3,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        borderRadius: 8,

        // Match the page background
        background: "#121212",

        // Very subtle glass
        backdropFilter: "blur(10px)",

        // Thin premium outline
        border: "1px solid rgba(255,255,255,.05)",

        // Lower, softer floating shadow
        boxShadow: `
          0 12px 24px rgba(0,0,0,.12),
          0 40px 80px rgba(0,0,0,.20),
          0 90px 140px rgba(0,0,0,.10)
        `,

        zIndex: 20,

        transition: "all .35s ease",

        "@media (max-width:900px)": {
          left: "50%",
          top: "62%",
          width: "90%",
          px: 3,
          py: 2.5,
        },

        "@media (max-width:600px)": {
          left: "50%",
          top: "66%",
          width: "94%",
          minHeight: "auto",
          px: 2.5,
          py: 2,
        },
      }}
    >
      <HeroDescription />

      <HeroButtons />
    </Box>
  );
}
