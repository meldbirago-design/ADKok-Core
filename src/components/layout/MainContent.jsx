import { Box } from "@mui/material";
import BackgroundCanvas from "./BackgroundCanvas";

export default function MainContent({ children }) {
  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        pt: "72px",
        overflow: "hidden",
        bgcolor: "#0B0E14",
      }}
    >
      <BackgroundCanvas />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          minHeight: "calc(100vh - 72px)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
