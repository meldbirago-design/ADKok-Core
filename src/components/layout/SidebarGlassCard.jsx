import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  {
    title: "Blueprints",
    label: "Preview our website templates. You might find your choice.",
    path: "/blueprints",
    icon: "/images/dashboard/blueprint.PNG",
  },
  {
    title: "Get a Quote",
    label: "Clear pricing and realistic timelines. No surprises.",
    path: "/quote",
    icon: "/images/dashboard/quote.PNG",
  },
  {
    title: "Our Process",
    label: "A glance at how we develop ideas into live websites.",
    path: "/process",
    icon: "/images/dashboard/process.PNG",
  },
  {
    title: "Testimonials",
    label: "Our clients have the microphone. We love the feedback.",
    path: "/testimonials",
    icon: "/images/dashboard/testimonials.PNG",
  },
  {
    title: "Chat With Us",
    label: "Questions, ideas or urgent assistance? We're here.",
    path: "/chat",
    icon: "/images/dashboard/chat.PNG",
  },
  {
    title: "Contact",
    label: "Prefer a phone call? We'd love to hear from you.",
    path: "/contact",
    icon: "/images/dashboard/contact.PNG",
  },
];

export default function SidebarGlassCard() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 155,
          left: 24,

          width: 178,
          height: 470,

          background: "rgba(14,18,28,.14)",

          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",

          border: "1px solid transparent",

          boxShadow: "none",

          borderRadius: 0,

          zIndex: 8,
        }}
      >
        <Stack
          spacing={3}
          alignItems="center"
          sx={{
            pt: -5,
            pl: 4,
          }}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={{ textDecoration: "none" }}
            >
              {({ isActive }) => (
                <Box
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered(null)}
                  component="img"
                  src={item.icon}
                  alt={item.title}
                  sx={{
                    width: isActive ? 48 : 42,
                    height: isActive ? 48 : 42,

                    objectFit: "contain",

                    cursor: "pointer",

                    transition: ".25s",

                    filter: isActive
                      ? "drop-shadow(0 0 10px rgba(214,164,90,.35))"
                      : "none",

                    "&:hover": {
                      transform: "scale(1.06)",
                    },
                  }}
                />
              )}
            </NavLink>
          ))}
        </Stack>
      </Box>

      <Box
        sx={{
          position: "absolute",

          top: hovered ? 190 : 190,
          left: hovered ? 230 : 215,

          width: 250,

          px: 2.5,
          py: 2,

          background: "rgba(14,18,28,.20)",

          backdropFilter: "blur(18px)",

          border: "1px solid rgba(255,255,255,.04)",

          opacity: hovered ? 1 : 0,

          transform: hovered
            ? "translateX(0)"
            : "translateX(-10px)",

          transition: ".22s ease",

          pointerEvents: "none",

          zIndex: 100,
        }}
      >
        {hovered && (
          <>
            <Typography
              sx={{
                color: "#D6A45A",
                fontWeight: 600,
                fontSize: 15,
                mb: .6,
              }}
            >
              {hovered.title}
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,.88)",
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              {hovered.label}
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}
