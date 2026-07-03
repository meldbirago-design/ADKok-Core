import { Stack, Typography } from "@mui/material";

export default function HeroDescription() {
  return (
    <Stack
      spacing={3}
      alignItems="center"
      textAlign="center"
    >
      <Typography
        sx={{
          color: "#FFFFFF",
          fontWeight: 700,
          fontSize: {
            xs: 42,
            md: 78,
          },
          lineHeight: 1,
          letterSpacing: ".03em",
        }}
      >
        [A]DKok
      </Typography>

      <Typography
        sx={{
          color: "#D6A45A",
          fontWeight: 700,
          fontSize: {
            xs: 22,
            md: 36,
          },
          letterSpacing: ".08em",
        }}
      >
        You Imagine.
        <br />
        We Build.
      </Typography>

      <Typography
        sx={{
          color: "rgba(255,255,255,.82)",
          fontSize: {
            xs: 17,
            md: 21,
          },
          maxWidth: 720,
          lineHeight: 1.9,
        }}
      >
        Whether you're starting a business, growing a church,
        launching a school or building your personal brand,
        ADKok creates premium websites that are beautiful,
        affordable and built to help you grow with confidence.
      </Typography>
    </Stack>
  );
}
