import { Box, Typography } from "@mui/material";

export default function ComingSoon({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60vh",
      }}
    >
      <Box
        sx={{
          p: 5,
          borderRadius: 4,
          bgcolor: "rgba(20,20,20,.75)",
          border: "1px solid rgba(212,175,55,.25)",
          backdropFilter: "blur(12px)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#D4AF37",
            fontWeight: 700,
            mb: 2,
          }}
        >
          {title}
        </Typography>

        <Typography sx={{ color: "#ddd" }}>
          This page is under construction.
        </Typography>
      </Box>
    </Box>
  );
}
