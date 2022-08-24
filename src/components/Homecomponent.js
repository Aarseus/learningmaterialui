// import { Typography } from '@mui/material'
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Homecomponent = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <Typography
          variant="h2"
          sx={{ fontFamily: "monospace" }}
          align="center"
        >
          Choose your tool
        </Typography>
      </div>

      <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap" }}>
        <Link to={"/signin"} style={{ textDecoration: "none" }}>
          <Card
            style={{
              width: "200px",
              margin: "10px 20px",
              height: "300px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <CardContent>
              <img
                src="https://www.positronx.io/wp-content/uploads/2019/09/react-login-ui-6748-01.png"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt=""
              />
            </CardContent>
            <CardContent
              align="center"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>SignUp</h1>
            </CardContent>
          </Card>
        </Link>

        <Link to={"/notes"} style={{ textDecoration: "none" }}>
          <Card
            style={{
              width: "200px",
              margin: "10px 20px",
              height: "300px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <CardContent>
              <img
                src="https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt=""
              />
            </CardContent>
            <CardContent
              align="center"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>Notes</h1>
            </CardContent>
          </Card>
        </Link>
        <Link to={"/counter"} style={{ textDecoration: "none" }}>
          <Card
            style={{
              width: "200px",
              margin: "10px 20px",
              height: "300px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <CardContent>
              <img
                src="https://4.imimg.com/data4/AJ/AQ/MY-13106999/token-500x500.jpg"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt=""
              />
            </CardContent>
            <CardContent
              align="center"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>Counter</h1>
            </CardContent>
          </Card>
        </Link>

        <Link to={"/time"} style={{ textDecoration: "none" }}>
          <Card
            style={{
              width: "200px",
              margin: "10px 20px",
              height: "300px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <CardContent>
              <img
                src="  https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/date_time.png
"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt=""
              />
            </CardContent>
            <CardContent
              align="center"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>Date Time</h1>
            </CardContent>
          </Card>
        </Link>

        <Link to={"/users"} style={{ textDecoration: "none" }}>
          <Card
            style={{
              width: "200px",
              margin: "10px 20px",
              height: "300px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <CardContent>
              <img
                src=" https://rietveld-ict.nl/wp-content/uploads/2014/01/users.png  
"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt=""
              />
            </CardContent>
            <CardContent
              align="center"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>Users</h1>
            </CardContent>
          </Card>
        </Link>

        <Link to={"/calculator"} style={{ textDecoration: "none" }}>
          <Card
            style={{
              width: "200px",
              margin: "10px 20px",
              height: "300px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <CardContent>
              <img
                src="https://www.kindpng.com/picc/m/284-2843938_calculator-brokerage-clipart-calculation-firm-transparent-calculator-illustration.png"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt=""
              />
            </CardContent>
            <CardContent
              align="center"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>Calculator</h1>
            </CardContent>
          </Card>
        </Link>

        <Link to={"/resume"} style={{ textDecoration: "none" }}>
          <Card
            style={{
              width: "200px",
              margin: "10px 20px",
              height: "300px",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <CardContent>
              <img
                src="https://www.kindpng.com/picc/m/238-2384326_marketing-clipart-investment-portfolio-portfolio-management-png-free.png
"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt=""
              />
            </CardContent>
            <CardContent
              align="center"
              style={{ position: "absolute", bottom: "0" }}
            >
              <h1>Resume Builder</h1>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Homecomponent;
