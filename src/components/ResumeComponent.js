import {

    Card,
    InputAdornment,
    TextareaAutosize,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";

  import { LinkedIn, Facebook, GitHub } from "@mui/icons-material";
  // import ReactPDF from "@react-pdf/renderer";
  const ResumeComponent = () => {
    const handleChange = (inputvalue) => {
      document.getElementById("value".concat(inputvalue)).innerHTML =
        document.getElementById(inputvalue).value;
    };
    return (
      <>

        <div style={{ margin: "100px 0 100px 0" }}>
          <Typography variant="h2" align="center" fontFamily={"monospace"}>
            Resume Builder
          </Typography>
          <div className="container" style={{ display: "flex" }}>
            <div className="container" style={{ width: "45%" }}>
              <Typography variant="h5" align="center">
                Enter Your Details
              </Typography>
              <div className="container">
                <Card sx={{ margin: "0 10px" }}>
                  <Typography variant="subtitle1">Personal Detail</Typography>
  
                  <Card sx={{ margin: "10px", padding: "10px" }}>
                    <TextField
                      id="roleid"
                      label="Title / Role"
                      style={{ width: "100%" }}
                      variant="standard"
                      onChange={() => handleChange("roleid")}
                    />
  
                    <TextField
                      id="nameid"
                      label="Name"
                      variant="standard"
                      style={{ width: "100%" }}
                      onChange={() => handleChange("nameid")}
                    />
                    <TextareaAutosize
                      minRows={3}
                      placeholder="About You"
                      style={{ width: "100%" ,margin:'10px 0'}}
                      id="aboutid"
                      onChange={() => handleChange("aboutid")}
                    />
                  </Card>
  
                  <Card
                    sx={{
                      margin: "10px",
                      padding: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      id="addressid"
                      label="Address"
                      variant="standard"
                      onChange={() => handleChange("addressid")}
                    />
                    <TextField
                      id="emailid"
                      label="Email"
                      variant="standard"
                      style={{ marginLeft: "10px", width: "60%" }}
                      onChange={() => handleChange("emailid")}
                    />
                  </Card>
  
                  <Card sx={{ margin: "10px", padding: "10px" }}>
                    <TextField
                      id="contactid"
                      label="Contact No"
                      variant="standard"
                      style={{ width: "100%" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            +977 -{" "}
                          </InputAdornment>
                        ),
                      }}
                      onChange={() => handleChange("contactid")}
                    />
  
                    
                  </Card>
  
                  <Card sx={{ margin: "10px", padding: "10px" }}>
                    <Typography variant="subtitle1">Social Icons</Typography>
                    <TextField
                      id="linkedinid"
                      label="Linkedin"
                      variant="standard"
                      style={{ width: "80%" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LinkedIn />
                          </InputAdornment>
                        ),
                      }}
                      onChange={() => handleChange("linkedinid")}
                    />
                    <TextField
                      id="facebookid"
                      label="Facebook"
                      variant="standard"
                      style={{ width: "80%" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Facebook />{" "}
                          </InputAdornment>
                        ),
                      }}
                      onChange={() => handleChange("facebookid")}
                    />
                    <TextField
                      id="githubid"
                      label="Github"
                      variant="standard"
                      style={{ width: "80%" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <GitHub />
                          </InputAdornment>
                        ),
                      }}
                      onChange={() => handleChange("githubid")}
                    />
                  </Card>
  
                  <Card sx={{ margin: "10px", padding: "10px", width: "100%" }}>
                    <Typography variant="subtitle1">Education</Typography>
                    <Card sx={{ margin: "10px", padding: "10px" }}>
                      <Typography variant="subtitle2">SEE / SLC</Typography>
                      <TextField
                        id="schoolid"
                        label="School Name"
                        variant="standard"
                        onChange={() => handleChange("schoolid")}
                      />
                      <TextField
                        id="schoolgradeid"
                        label="Percentage / Grade"
                        variant="standard"
                        onChange={() => handleChange("schoolgradeid")}
                      />
                      <TextField
                        id="schoolyearid"
                        label="Passed Year"
                        type={"number"}
                        variant="standard"
                        onChange={() => handleChange("schoolyearid")}
                      />
                    </Card>
  
                    <Card sx={{ margin: "10px", padding: "10px" }}>
                      <Typography variant="subtitle2">10+2</Typography>
                      <TextField
                        id="collegeid"
                        label="College Name"
                        variant="standard"
                        onChange={() => handleChange("collegeid")}
                      />
                      <TextField
                        id="collegegradeid"
                        label="Percentage / Grade"
                        variant="standard"
                        onChange={() => handleChange("collegegradeid")}
                      />
                      <TextField
                        id="collegecourseid"
                        label="Stream / Course"
                        variant="standard"
                        onChange={() => handleChange("collegecourseid")}
                      />
                      <TextField
                        id="collegeyearid"
                        label="Passed Year"
                        type={"number"}
                        variant="standard"
                        onChange={() => handleChange("collegeyearid")}
                      />
                    </Card>
                    <Card sx={{ margin: "10px", padding: "10px" }}>
                      <Typography variant="subtitle2">Bachelor</Typography>
                      <TextField
                        id="bcollegeid"
                        label="College Name"
                        variant="standard"
                        onChange={() => handleChange("bcollegeid")}
                      />
                      <TextField
                        id="bcollegegradeid"
                        label="Percentage / Grade"
                        variant="standard"
                        onChange={() => handleChange("bcollegegradeid")}
                      />
                      <TextField
                        id="bcollegecourseid"
                        label="Stream / Course"
                        variant="standard"
                        onChange={() => handleChange("bcollegecourseid")}
                      />
                      <TextField
                        id="bcollegeyearid"
                        label="Passed Year"
                        type={"number"}
                        variant="standard"
                        onChange={() => handleChange("bcollegeyearid")}
                      />
                    </Card>
                  </Card>
  
                  <Card sx={{ margin: "10px", padding: "10px" }}>
                    <Typography variant="subtitle1">Skills</Typography>
                    <TextField
                      id="skill1"
                      style={{ margin: "10px 5px" }}
                      variant="standard"
                      onChange={() => handleChange("skill1")}
                    />
                    <TextField
                      id="skill2"
                      style={{ margin: "10px 5px" }}
                      variant="standard"
                      onChange={() => handleChange("skill2")}
                    />
                    <TextField
                      id="skill3"
                      style={{ margin: "10px 5px" }}
                      variant="standard"
                      onChange={() => handleChange("skill3")}
                    />
                    <TextField
                      id="skill4"
                      style={{ margin: "10px 5px" }}
                      variant="standard"
                      onChange={() => handleChange("skill4")}
                    />
                    <TextField
                      id="skill5"
                      style={{ margin: "10px 5px" }}
                      variant="standard"
                      onChange={() => handleChange("skill5")}
                    />
                    <TextField
                      id="skill6"
                      style={{ margin: "10px 5px" }}
                      variant="standard"
                      onChange={() => handleChange("skill6")}
                    />
                    <TextField
                      id="skill7"
                      style={{ margin: "10px 5px" }}
                      variant="standard"
                      onChange={() => handleChange("skill7")}
                    />
                    <TextField
                      id="skill8"
                      style={{ margin: "10px 5px" }}
                      variant="standard"
                      onChange={() => handleChange("skill8")}
                    />
                    <TextField
                      id="skill9"
                      style={{ margin: "10px 5px" }}
                      variant="standard"
                      onChange={() => handleChange("skill9")}
                    />
                  </Card>
  
                  <Card sx={{ margin: "10px", padding: "10px" }}>
                    <Typography variant="subtitle1">Work Experience</Typography>
                    <Card sx={{ margin: "10px", padding: "10px" }}>
                      <TextField
                        id="company1nameid"
                        label="company name"
                        variant="standard"
                        style={{ width: "100%" }}
                        onChange={() => handleChange("company1nameid")}
                      />
                      <TextField
                        id="company1roleid"
                        label="Role"
                        variant="standard"
                        onChange={() => handleChange("company1roleid")}
                      />
                      <TextField
                        id="company1yearid"
                        label="Years"
                        type={"number"}
                        variant="standard"
                        onChange={() => handleChange("company1yearid")}
                      />
                    </Card>
                    <Card sx={{ margin: "10px", padding: "10px" }}>
                      <TextField
                        id="company2nameid"
                        label="company name"
                        variant="standard"
                        style={{ width: "100%" }}
                        onChange={() => handleChange("company2nameid")}
                      />
                      <TextField
                        id="company2roleid"
                        label="Role"
                        variant="standard"
                        onChange={() => handleChange("company2roleid")}
                      />
                      <TextField
                        id="company2yearid"
                        label="Years"
                        type={"number"}
                        variant="standard"
                        onChange={() => handleChange("company2yearid")}
                      />
                    </Card>
                    <Card sx={{ margin: "10px", padding: "10px" }}>
                      <TextField
                        id="company3nameid"
                        label="company name"
                        variant="standard"
                        style={{ width: "100%" }}
                        onChange={() => handleChange("company3nameid")}
                      />
                      <TextField
                        id="company3roleid"
                        label="Role"
                        variant="standard"
                        onChange={() => handleChange("company3roleid")}
                      />
                      <TextField
                        id="company3yearid"
                        label="Years"
                        type={"number"}
                        variant="standard"
                        onChange={() => handleChange("company3yearid")}
                      />
                    </Card>
                  </Card>
                </Card>
              </div>
            </div>
            <div className="container" style={{ width: "50%" }}>
              <Card sx={{ margin: "0 10px" }}>
                <Card style={{ padding: "10px 20px", margin: "10px" }}>
                  <div className="container" style={{padding:'0 10px'}}>
                    <p
                      id="valuenameid"
                      style={{
                        textAlign: "center",
                        fontSize: "36px",
                        fontWeight: "500",
                      }}
                    ></p>
                    <p
                      id="valueroleid"
                      style={{
                        textAlign: "center",
                        marginTop: "-30px",
                        fontStyle: "italic",
                        fontSize: "25px",
                      }}
                    ></p>
                  </div>
  
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p id="valueaddressid" style={{ fontStyle: "italic" }}></p>
                    <p id="valueemailid" style={{ fontStyle: "italic" }}></p>
                    <p id="valuecontactid" style={{ fontStyle: "italic" }}></p>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                      <div className="container" style={{display:'flex'}}>
                      <Facebook/><p id="valuefacebookid" style={{ fontStyle: "italic" }}></p>
                      </div>
                      <div className="container" style={{display:'flex'}}>
                          <LinkedIn/><p id="valuelinkedinid" style={{ fontStyle: "italic" }}></p>
                      </div>
                    
                    <div className="container" style={{display:'flex'}}>
                      <GitHub/><p id="valuegithubid" style={{ fontStyle: "italic" }}></p>
                    </div>
                    
                  </div>
                  
                </Card>
                <Card style={{ padding: "10px", margin: "10px" }}>
                  <Typography
                    variant="h6"
                    fontFamily={"verdana"}
                    style={{ textDecoration: "underline" }}
                  >
                    About Me
                  </Typography>
                  <Card style={{display:'flex',flexWrap:'wrap'}}>
                    <p id="valueaboutid" style={{ margin: "10px",padding:'10px',wordBreak:'break-all'}}></p>
                  </Card>
              </Card>
                <Card style={{ padding: "10px", margin: "10px" }}>
                  <Typography
                    variant="h6"
                    fontFamily={"verdana"}
                    style={{ textDecoration: "underline" }}
                  >
                    Academic Qualification
                  </Typography>
                  <Card style={{ display: "flex" }}>
                    <p id="valueschoolid" style={{ margin: "10px",fontWeight:'600' }}></p>
                    <p id="valueschoolgradeid" style={{ margin: "10px" }}></p>
                    <p id="valueschoolyearid" style={{ margin: "10px",fontStyle:'italic' }}></p>
                  </Card>
                  <Card style={{ display: "flex" }}>
                    <p id="valuecollegeid" style={{ margin: "10px",fontWeight:'600' }}></p>
                    <p id="valuecollegegradeid" style={{ margin: "10px" }}></p>
                    <p id="valuecollegeyearid" style={{ margin: "10px",fontStyle:'italic' }}></p>
                    <p id="valuecollegecourseid" style={{ margin: "10px" }}></p>
                  </Card>
                  <Card style={{ display: "flex" }}>
                    <p id="valuebcollegeid" style={{ margin: "10px",fontWeight:'600' }}></p>
                    <p id="valuebcollegegradeid" style={{ margin: "10px" }}></p>
                    <p id="valuebcollegeyearid" style={{ margin: "10px",fontStyle:'italic' }}></p>
                    <p id="valuebcollegecourseid" style={{ margin: "10px" }}></p>
                  </Card>
                </Card>
                <Card style={{ padding: "10px", margin: "10px" }}>
                  <Typography
                    variant="h6"
                    fontFamily={"verdana"}
                    style={{ textDecoration: "underline" }}
                  >
                    Skills
                  </Typography>
                  <Card style={{ display: "flex" }}>
                    <p id="valueskill1" style={{ margin: "10px" }}></p>
                    <p id="valueskill2" style={{ margin: "10px" }}></p>
                    <p id="valueskill3" style={{ margin: "10px" }}></p>
                    <p id="valueskill4" style={{ margin: "10px" }}></p>
                    <p id="valueskill5" style={{ margin: "10px" }}></p>
                    <p id="valueskill6" style={{ margin: "10px" }}></p>
                    <p id="valueskill7" style={{ margin: "10px" }}></p>
                    <p id="valueskill8" style={{ margin: "10px" }}></p>
                    <p id="valueskill9" style={{ margin: "10px" }}></p>
                  </Card>
                </Card>
  
                <Card style={{ padding: "10px", margin: "10px" }}>
                  <Typography
                    variant="h6"
                    fontFamily={"verdana"}
                    style={{ textDecoration: "underline" }}
                  >
                    Work Experience
                  </Typography>
                  <Card style={{ display: "flex" }}>
                    <p id="valuecompany1nameid" style={{ margin: "10px" }}></p>
                    <p id="valuecompany1roleid" style={{ margin: "10px" }}></p>
                    <p id="valuecompany1yearid" style={{ margin: "10px" }}></p>
                  </Card>
                  <Card style={{ display: "flex" }}>
                    <p id="valuecompany2nameid" style={{ margin: "10px" }}></p>
                    <p id="valuecompany2roleid" style={{ margin: "10px" }}></p>
                    <p id="valuecompany2yearid" style={{ margin: "10px" }}></p>
                  </Card>
                  <Card style={{ display: "flex" }}>
                    <p id="valuecompany2nameid" style={{ margin: "10px" }}></p>
                    <p id="valuecompany2roleid" style={{ margin: "10px" }}></p>
                    <p id="valuecompany2yearid" style={{ margin: "10px" }}></p>
                  </Card>
                </Card>
              </Card>
            </div>
          </div>
        </div>
        {/* <Button onclick={ReactPDF.render(<Resume />, `${__dirname}/example.pdf`)}>Save</Button> */}
        
        
      </>
    );
  };
  
  export default ResumeComponent;
  