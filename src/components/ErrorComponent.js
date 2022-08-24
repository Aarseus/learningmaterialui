import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const ErrorComponent = () => {
  return (
    <div>
      <div className="container" style={{ padding: "10%" }}>
        <Typography variant="h1" style={{ fontWeight: "500" }}>
          ERROR <br />
          Page Not Found
        </Typography>

        <Link to={"/"} type="btn">
          Fly back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
