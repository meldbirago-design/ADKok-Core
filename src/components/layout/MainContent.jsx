import { Box } from "@mui/material";

import BackgroundCanvas from "./BackgroundCanvas";
import SidebarGlassCard from "./SidebarGlassCard";

export default function MainContent({ children }) {
  return (
    <Box
      component="main"
      sx={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 64px)",
        bgcolor: "#0B0E14",
        overflow: "hidden",
      }}
    >
      <BackgroundCanvas />

      {/* Glass panel beneath the logo */}
      <SidebarGlassCard />

      {children}
    </Box>
  );
}
