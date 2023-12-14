import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Grid } from "@mui/material";
import { fetchGroups } from "../services/groupServices";

const Home = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetchGroups()
      .then((data) => {
        setGroups(data);
      })
      .catch((error) => {
        console.error("Error fetching groups:", error);
      });
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Sidebar groups={groups} />
      </Grid>
      <Grid item xs={10}>
        <h1>Home Page</h1>
      </Grid>
    </Grid>
  );
};

export default Home;
