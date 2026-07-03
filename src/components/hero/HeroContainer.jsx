import { Box } from "@mui/material";

import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

export default function HeroContainer() {
  return (
    <Box
      sx={{
        position: "relative",

        width: "100%",
        minHeight: "calc(100vh - 72px)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        px: {
          xs: 3,
          md: 6,
        },

        zIndex: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 980,

          background: "rgba(18,22,32,.18)",

          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",

          borderRadius: 0,

          px: {
            xs: 4,
            md: 8,
          },

          py: {
            xs: 6,
            md: 8,
          },
        }}
      >
        <HeroDescription />

        <HeroButtons />
      </Box>
    </Box>
  );
}
