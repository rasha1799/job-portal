import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Application from "./Application/Application";

const Applications = () => {
  const [applications, setapplications] = useState([]);

  useEffect(() => {
    fetch("https://stark-caverns-04377.herokuapp.com/applications")
      .then((res) => res.json())
      .then((data) => setapplications(data));
  }, []);
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {applications.map((application) => (
            <Application
              key={application._id}
              application={application}
            ></Application>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Applications;
