import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h4"
        sx={{ color: "white", fontWeight: "bold", mb: 2 }}
      >
        Search Results For:{" "}
        <span style={{ color: "#FC1305" }}>{searchTerm}</span> Videos
      </Typography>

      <Videos videos={[videos]} />
    </Box>
  );
};

export default SearchFeed;
