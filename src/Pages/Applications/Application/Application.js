import React from "react";
import { Grid } from "@mui/material";

const Application = (props) => {
  const { name, email } = props.application;
  return (
    <div>
      <Grid item xs={12} sm={6} md={4}>
        <h3>{name}</h3>
        <h3>{email}</h3>
      </Grid>
    </div>
  );
};

export default Application;
