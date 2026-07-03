import { Box } from "@mui/material";

import Topbar from "../components/layout/Topbar";
import MainContent from "../components/layout/MainContent";

export default function MainLayout({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#0B0E14",
        overflow: "hidden",
      }}
    >
      <Topbar />

      <MainContent>
        {children}
      </MainContent>
    </Box>
  );
}
