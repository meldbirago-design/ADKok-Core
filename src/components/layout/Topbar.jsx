
import {
  AppBar,
  Toolbar,
  Stack,
  Box,
  IconButton,
  Avatar,
  Typography,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const badges = [
  "Premium",
  "Affordable",
  "Accessible",
  "Speedy Delivery",
];

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "rgba(8,10,16,.72)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,.05)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 64,
          px: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}

        <IconButton
          color="inherit"
          sx={{
            color: "#fff",
          }}
        >
          <MenuRoundedIcon />
        </IconButton>

        {/* CENTER */}

        <Stack
          direction="row"
          spacing={1.2}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            alignItems: "center",
          }}
        >
          {badges.map((badge) => (
            <Box
              key={badge}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.75,
                px: 1.3,
                py: 0.55,
                borderRadius: 999,

                bgcolor: "rgba(255,255,255,.04)",

                border:
                  "1px solid rgba(255,255,255,.06)",

                backdropFilter: "blur(10px)",
              }}
            >
              <CheckCircleRoundedIcon
                sx={{
                  fontSize: 14,
                  color: "#D6B16D",
                }}
              />

              <Typography
                sx={{
                  color: "rgba(255,255,255,.82)",
                  fontSize: 12,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {badge}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* RIGHT */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            color="inherit"
            sx={{
              color: "#fff",
            }}
          >
            <NotificationsNoneRoundedIcon />
          </IconButton>

          <Avatar
            sx={{
              width: 34,
              height: 34,
              bgcolor: "#D6B16D",
              color: "#111",
              fontWeight: 700,
            }}
          >
            A
          </Avatar>

          <Typography
            sx={{
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            Adelaide Kokuro
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

