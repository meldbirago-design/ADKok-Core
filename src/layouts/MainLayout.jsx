import { Box } from "@mui/material";

import Topbar from "../components/layout/Topbar";
import MainContent from "../components/layout/MainContent";

export default function MainLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "#0B0E14",
      }}
    >
      <Topbar />

      <Box
        sx={{
          flex: 1,
          pt: "64px",
        }}
      >
        <MainContent>
          {children}
        </MainContent>
      </Box>
    </Box>
  );
}
