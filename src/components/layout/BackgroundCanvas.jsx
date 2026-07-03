import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

const shimmer = keyframes`
  0% {
    transform: translateX(-160%) rotate(-18deg);
    opacity: 0;
  }

  8% {
    opacity: .035;
  }

  22% {
    opacity: .035;
  }

  30% {
    transform: translateX(160%) rotate(-18deg);
    opacity: 0;
  }

  100% {
    transform: translateX(160%) rotate(-18deg);
    opacity: 0;
  }
`;

const breathe = keyframes`
  0% {
    filter: brightness(100%);
  }

  50% {
    filter: brightness(101.5%);
  }

  100% {
    filter: brightness(100%);
  }
`;

export default function BackgroundCanvas() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          animation: `${breathe} 18s ease-in-out infinite`,
        }}
      >
        <Box
          component="img"
          src="/images/dashboard/dashboard-bg.png"
          alt="ADKok Background"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",

            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Ambient Shimmer */}

      <Box
        sx={{
          position: "absolute",

          inset: 0,

          overflow: "hidden",

          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",

            top: "-20%",

            left: "-40%",

            width: "45%",

            height: "160%",

            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.07) 50%, transparent 100%)",

            filter: "blur(70px)",

            animation: `${shimmer} 15s ease-in-out infinite`,
          }}
        />
      </Box>
    </Box>
  );
}
