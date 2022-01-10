import React, { useEffect, useState } from "react";

import Application from "./Application/Application";

const Applications = () => {
  const [applications, setapplications] = useState([]);
  const [updated, setUpdated] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/applications")
      .then((res) => res.json())
      .then((data) => setapplications(data));
  }, [updated]);
  return (
    <div className="mt-4">
      {applications.map((application) => (
        <Application
          key={application._id}
          application={application}
          updated={setUpdated}
        ></Application>
      ))}
    </div>
  );
};

export default Applications;
