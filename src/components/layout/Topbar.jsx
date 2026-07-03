import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "rgba(11,14,20,.35)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: "none",
        border: "none",
      }}
    >
      <Toolbar
        sx={{
          height: 72,
          px: { xs: 3, md: 5 },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: ".04em",
              lineHeight: 1,
            }}
          >
            [A]DKok
          </Typography>

          <Typography
            sx={{
              color: "#D6A45A",
              fontSize: 12,
              letterSpacing: ".25em",
              mt: .5,
            }}
          >
            YOU IMAGINE. WE BUILD.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
