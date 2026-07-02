import { Box } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#0B0E14",
        color: "#FFFFFF",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}
