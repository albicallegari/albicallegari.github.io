import vars from "../../../../styles/variables.scss";
import { Box, useMediaQuery } from "@mui/material";
import bbg from "../../../../assets/bg-b-bs.png";
import wbg from "../../../../assets/bg-w-bs.png";
import './BSTitle.scss';

const BSTitle = () => {
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <Box
      className="bsTitle"
      sx={{
        display: "flex",
        flexDirection: isTablet ? "row" : "column",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <img
        className="bsTitle_img"
        src={isDarkModeEnabled ? bbg : wbg}
        alt="bloodsucker-logo"
      />
    </Box>
  );
};

export default BSTitle;
