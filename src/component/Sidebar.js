import { Stack } from "@mui/material";
import { categories } from "../utlis/contants";

const selectedCategory = "New";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "#fff",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#fff" : "red",
            marginRight: "10px",
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
