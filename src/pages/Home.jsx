import { Typography } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#FFFFFF",
        }}
      >
        HOME
      </Typography>
    </MainLayout>
  );
}
