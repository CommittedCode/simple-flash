import React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem } from "@mui/material";

const Sidebar = ({ groups }) => {
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      PaperProps={{
        sx: { width: "250px", backgroundColor: "lightgrey", pl: 3 },
      }}
    >
      <List>
        {groups.map((group, index) => (
          <ListItem key={index}>{group.name}</ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
