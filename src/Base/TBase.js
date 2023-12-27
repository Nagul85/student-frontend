import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//Navbar
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const TBase = ({ title, description, children }) => {
  const history = useHistory();
  return (
    <Container>
      <div className="main-componenet base-component">
        <Row>
          <div className="nav-bar">
            <Col sm>
              <Button variant="contained" onClick={() => history.push("/")}>
                Teacher Dashboard
              </Button>
            </Col>
            <Col sm>
              <Button
                variant="contained"
                onClick={() => history.push("/techerslist")}
              >
                Teacher-List
              </Button>
            </Col>
            <Col sm>
              <Button
                variant="contained"
                onClick={() => history.push("/addteach")}
              >
                Add Teacher
              </Button>
            </Col>
             <Col sm>
              <Button variant="contained" onClick={() => history.push("/login")}>
                Home
              </Button>
            </Col>
            <Col sm className="tech">
              <Button variant="contained" onClick={() => history.push("/")}>
                Switch to StudentDashboard
              </Button>
            </Col>
          </div>
        </Row>

        <header>
          <h1 className="heading">{title}</h1>
        </header>
        <main className="main-segment">
          <h2>{description}</h2>
          <div>{children}</div>
        </main>
      </div>
    </Container>
  );
};

export default TBase;
