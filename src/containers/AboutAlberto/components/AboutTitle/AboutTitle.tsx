import vars from "../../../../styles/variables.scss";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { getTranslatedLabel } from "../../../../common/labels/utils";

const AboutTitle = () => {
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  return isTablet ? (
    <Typography
      variant="h1"
      sx={{
        fontFamily: "Nunito, sans-serif",
        position: "fixed",
        left: "calc(50% - 195px)",
        fontSize: "2rem",
        fontWeight: "500",
      }}
    >
      {`${getTranslatedLabel("aboutAlberto.title")} ${getTranslatedLabel(
        "aboutAlberto.title1"
      )}`}
    </Typography>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        left: "calc(50% - 120px)",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "2rem",
          fontWeight: "500",
        }}
      >
        {getTranslatedLabel("aboutAlberto.title")}
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "2rem",
          fontWeight: "500",
        }}
      >
        {getTranslatedLabel("aboutAlberto.title1")}
      </Typography>
    </Box>
  );
};

export default AboutTitle;
