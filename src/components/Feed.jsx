import { Box, Typography, Stack } from "@mui/material";
import { Sidebar, Videos } from "./";
import { useEffect, useState } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Youtube 2.0
        </Typography>
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: "bold", mb: 2 }}
        >
          {selectedCategory} <span style={{ color: "#FC1305" }}>videos</span>
        </Typography>

        <Videos videos={[videos]} />
      </Box>
    </Stack>
  );
};

export default Feed;
