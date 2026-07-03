import { Box } from "@mui/material";

export default function BackgroundCanvas() {
  return (
    <>
      {/* Base Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: `
            radial-gradient(circle at 18% 22%, rgba(214,164,90,.12), transparent 34%),
            radial-gradient(circle at 82% 16%, rgba(255,255,255,.05), transparent 26%),
            radial-gradient(circle at 72% 78%, rgba(214,164,90,.08), transparent 34%),
            linear-gradient(180deg,#0B0E14 0%,#11151F 100%)
          `,
        }}
      />

      {/* Top Glow */}
      <Box
        sx={{
          position: "absolute",
          top: -180,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(214,164,90,.08), transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* Left Glow */}
      <Box
        sx={{
          position: "absolute",
          left: -250,
          bottom: -250,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(214,164,90,.06), transparent 70%)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />

      {/* Right Glow */}
      <Box
        sx={{
          position: "absolute",
          right: -220,
          top: 120,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,.05), transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />
    </>
  );
}
