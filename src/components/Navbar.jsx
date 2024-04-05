import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "black",
        height: "20px",
        top: 0,
        justifyContent: "space-between",
        mx: 0,
        mb: 1,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography
          variant="h5"
          ml={1}
          fontWeight={"bold"}
          fontFamily={"monospace"}
          color={"#fff"}
          letterSpacing={-2}
        >
          Youtube 2.0
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
