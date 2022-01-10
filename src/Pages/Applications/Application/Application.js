import React from "react";
import { Button } from "@mui/material";
import swal from "sweetalert";

const Application = (props) => {
  const { name, email, namePost, _id, status, id } = props.application;

  const handleStatus = (id1, id2) => {
    fetch(`http://localhost:5000/applications/${id1}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.modifiedCount) {
          swal({
            title: "status Updated!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }

        // setTimeout(() => {
        //   window.location.reload();
        // }, 1200);
      });
    fetch(`http://localhost:5000/job/${id2}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((result) => {
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1200);
      });
  };
  return (
    <div
      className="container card flex-grow mt-4"
      style={{ textAlign: "left" }}
    >
      <h3>Post:{namePost}</h3>
      <br />
      <h3>Applicants Name:{name}</h3>
      <br />
      <h3>Email:{email}</h3>
      <br />
      <h3>Status:{status}</h3>
      {status === "Accepted" ? (
        ""
      ) : (
        <Button
          variant="contained"
          onClick={() => handleStatus(_id, id)}
          sx={{ color: "error.main", bgcolor: "text.primary" }}
        >
          Accept
        </Button>
      )}
    </div>
  );
};

export default Application;
