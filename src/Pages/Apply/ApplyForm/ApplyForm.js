import React, { useState } from "react";
import { Button, Input, TextField } from "@mui/material";

const ApplyForm = (props) => {
  console.log(props.details);
  const { job_title, _id, vaccancy } = props.details;
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [file, setfile] = useState(null);
  const [success, setSuccess] = useState(false);
  const status = "Pending";
  const vaccancys = vaccancy;
  const namePost = job_title;
  const id = _id;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    const formData = new FormData();

    formData.append("name", name);
    formData.append("job_id", id);
    formData.append("vaccancy", vaccancys);
    formData.append("status", status);
    formData.append("namePost", namePost);

    formData.append("email", email);
    formData.append("file", file);
    fetch("http://localhost:5000/applications", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Applied successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      {" "}
      <h3>Apply Now</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Name"
          required
          onChange={(e) => setName(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
        />
        <br />
        <Input
          type="file"
          lebel="upload file"
          onChange={(e) => setfile(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          Apply
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default ApplyForm;
