import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import "./Product.css";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function MenuCards({ image, title, desc, price }: any) {
  return (
    <Card
      sx={{
        flex: "1 0 230px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        paddingBottom: 2,
      }}
    >
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          textAlign: "center",
        }}
      >
        <Box>
          <Box>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontWeight: 607,
                fontSize: "22px",
                color: "#AD343E",
              }}
            >
              $ {price}
            </Typography>
          </Box>
          <Typography
            variant="h5"
            style={{
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "#2C2F24",
              fontSize: "20px",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 500, fontSize: "16px" }}
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
