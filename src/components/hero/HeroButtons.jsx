import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeroButtons() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        mt: 6,

        display: "flex",
        justifyContent: "center",

        gap: 2,

        flexWrap: "wrap",
      }}
    >
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/blueprints")}
        sx={{
          minWidth: 220,

          py: 1.6,

          bgcolor: "#D6A45A",

          color: "#111",

          fontWeight: 700,

          borderRadius: 0,

          textTransform: "none",

          transition: ".25s",

          "&:hover": {
            bgcolor: "#E0B56A",
            transform: "translateY(-2px)",
          },
        }}
      >
        Explore Blueprints
      </Button>

      <Button
        variant="outlined"
        size="large"
        onClick={() => navigate("/quote")}
        sx={{
          minWidth: 220,

          py: 1.6,

          color: "#FFFFFF",

          borderColor: "rgba(255,255,255,.18)",

          borderRadius: 0,

          textTransform: "none",

          fontWeight: 600,

          transition: ".25s",

          "&:hover": {
            borderColor: "#D6A45A",
            bgcolor: "rgba(214,164,90,.08)",
            transform: "translateY(-2px)",
          },
        }}
      >
        Get a Quote
      </Button>
    </Box>
  );
}
