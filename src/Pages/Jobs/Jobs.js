import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, []);
  return (
    <div className="mt-4" data-aos="fade-up" data-aos-duration="3000">
      <h1 style={{ marginTop: "100px " }}>Find the Goal</h1>
      {jobs.map((job) => (
        <div className="container card flex-row mt-4">
          <div>
            <img src={job.img}></img>
          </div>
          <div className="mt-5" style={{ margin: "30px " }}>
            <h2>{job.job_title}</h2>
            <p style={{ fontSize: "12px", textAlign: "left" }}>
              {job.job_description}
            </p>
            <h4 style={{ textAlign: "left", fontSize: "15px" }}>
              Required Skills:
              <span>{job.require_skills},</span>
            </h4>
            <h3 style={{ textAlign: "left" }}>Vaccancy:{job.vaccancy}</h3>
            <Link to={`/apply/${job._id}`}>
              <Button variant="outline-success">Apply Now</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
