import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import starIcon from "../utils/photos/star.svg";
import caloriIcon from "../utils/photos/calories.svg";
import timeIcon from "../utils/photos/time.svg";
import "./Product.css";
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function Cards({
  image,
  title,
  tara,
  calories,
  wakht,
  price,
  color,
}: any) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background: `${color}`,
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        paddingBottom: 2,
      }}
    >
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
      >
        <Box style={{ display: "flex", gap: "50px" }}>
          <Typography
            variant="h5"
            style={{ fontFamily: "Poppins", fontWeight: 600 }}
          >
            {title}
          </Typography>
          <Box style={{ display: "flex", gap: "4px" }}>
            <Typography
              style={{ color: "#ED8E25", fontSize: "20px", fontWeight: 600 }}
            >
              $
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              {price}
            </Typography>
          </Box>
        </Box>

        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Box style={{ display: "flex", gap: "4px" }}>
            <img src={starIcon} alt="star icon" />
            <Typography>{tara}</Typography>
          </Box>
          <Box style={{ display: "flex", gap: "4px" }}>
            <img src={caloriIcon} alt="star icon" />
            <Typography>{calories}</Typography>
          </Box>
          <Box style={{ display: "flex", gap: "4px" }}>
            <img src={timeIcon} alt="time icon" />
            <Typography>{wakht}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          reating a restaurant website involves several key elements to ensure
          it
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <button className="card-button">Buy Now</button>
      </CardActions>
    </Card>
  );
}
