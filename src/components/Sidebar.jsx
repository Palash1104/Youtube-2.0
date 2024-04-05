import React from "react";
import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((e) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(e.name)}
        style={{
          color: "white",
          backgroundColor: e.name === selectedCategory && "#FC1503",
        }}
        key={e.name}
      >
        <span
          style={{
            color: e.name === selectedCategory ? "white" : "#95eaea",
            marginRight: "15px",
          }}
        >
          {e.icon}
        </span>
        <span style={{ opacity: e.name === selectedCategory ? "1" : "0.8" }}>
          {e.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
