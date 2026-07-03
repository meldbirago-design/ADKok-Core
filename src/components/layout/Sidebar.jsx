import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Our Process", to: "/process" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Chat With Us", to: "/chat" },
  { label: "Get a Quote", to: "/quote" },
  { label: "Contact", to: "/contact" },
];

export default function Sidebar() {
  return (
    <Box
      sx={{
        position: "absolute",

        top: 110,          // Starts directly below the logo already on the background
        left: 0,

        width: 235,
        height: "calc(100vh - 110px)",

        px: 4,
        py: 5,

        display: {
          xs: "none",
          md: "flex",
        },

        flexDirection: "column",

        pointerEvents: "none",
        zIndex: 30,
      }}
    >
      <Stack
        spacing={4}
        sx={{
          pointerEvents: "auto",
        }}
      >
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            style={{
              textDecoration: "none",
            }}
          >
            {({ isActive }) => (
              <Typography
                sx={{
                  color: isActive ? "#D6A45A" : "#FFFFFF",

                  fontSize: 20,
                  fontWeight: 500,

                  letterSpacing: ".2px",

                  transition: ".25s ease",

                  "&:hover": {
                    color: "#D6A45A",
                    transform: "translateX(8px)",
                  },
                }}
              >
                {item.label}
              </Typography>
            )}
          </NavLink>
        ))}
      </Stack>
    </Box>
  );
}
