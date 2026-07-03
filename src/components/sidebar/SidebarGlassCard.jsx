import { Box, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

const items = [
  { icon: "/images/dashboard/blueprint.PNG", path: "/blueprints" },
  { icon: "/images/dashboard/quote.PNG", path: "/quote" },
  { icon: "/images/dashboard/process.PNG", path: "/process" },
  { icon: "/images/dashboard/testimonials.PNG", path: "/testimonials" },
  { icon: "/images/dashboard/chat.PNG", path: "/chat" },
  { icon: "/images/dashboard/contact.PNG", path: "/contact" },
];

export default function SidebarGlassCard() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 120,
        left: 26,

        width: 84,

        py: 3,

        display: {
          xs: "none",
          lg: "block",
        },

        background: "rgba(18,22,32,.18)",

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        borderRadius: 0,

        zIndex: 30,
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
      >
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={{
              textDecoration: "none",
            }}
          >
            {({ isActive }) => (
              <Box
                component="img"
                src={item.icon}
                alt=""
                sx={{
                  width: isActive ? 48 : 42,
                  height: isActive ? 48 : 42,

                  cursor: "pointer",

                  transition: ".25s",

                  filter: isActive
                    ? "drop-shadow(0 0 12px rgba(214,164,90,.45))"
                    : "none",

                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              />
            )}
          </NavLink>
        ))}
      </Stack>
    </Box>
  );
}
