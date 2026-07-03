import { Box, Typography } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";

export default function ChatWithUs() {
  return (
    <MainLayout>

      <Box
        sx={{
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeUp .6s ease",
        }}
      >

        <Typography
          sx={{
            color:"#D6A45A",
            fontSize:42,
            fontWeight:700,
            mb:2,
          }}
        >
          Chat With Us
        </Typography>

        <Typography
          sx={{
            color:"rgba(255,255,255,.72)",
            fontSize:18,
          }}
        >
          Coming Soon
        </Typography>

      </Box>

    </MainLayout>
  );
}
