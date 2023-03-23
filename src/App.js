import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import React from "react";
import Mapa from "./componentes/Mapa";
import Carrusel from "./componentes/Carrusel";
import Inicio from "./pages/Inicio";
import Alumno from "./pages/Alumno";
import Mockup from "./pages/Mockup";
import Logout from "./componentes/Logout";
import Carrera from "./pages/Carrera";
import Universidad from "./pages/Universidad";
import Curriculum from "./pages/Curriculum";
import LoginPage from "./componentes/LoginPage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
  return (
    <>
      <Router>
        <div className="container mt-5">
          <div className="btn-group">
            <Container>
              <Row>
                <Col sm>
                  <Link to="/Inicio" className="btn btn-dark">
                    Inicio
                  </Link>
                </Col>
                <Col sm>
                  <Link to="/Alumno" className="btn btn-dark">
                    Alumno
                  </Link>
                </Col>
                <Col sm>
                  <Link to="/Universidad" className="btn btn-dark">
                    Universidad
                  </Link>
                </Col>
                <Col sm>
                  <Link to="/Carrera" className="btn btn-dark">
                    Carrera
                  </Link>
                </Col>
                <Col sm>
                  <Link to="/Curriculum" className="btn btn-dark">
                    CV
                  </Link>
                </Col>
                <Col sm>
                  <Link to="/Mapa" className="btn btn-dark">
                    Mapa
                  </Link>
                </Col>
                <Col sm>
                  <Link to="/Mockup" className="btn btn-dark">
                    Mockup
                  </Link>
                </Col>
                <Col sm>
                  <Link to="/Carrusel" className="btn btn-dark">
                    Carrusel
                  </Link>
                </Col>
                <Col sm>
                  <Link to="/LoginPage" className="btn btn-dark">
                    Login
                  </Link>
                </Col>
                <Col sm>
                  <Link to="/Logout" className="btn btn-dark">
                    Logout
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
          <hr />
          <Switch>
            <Route path="/Inicio">
              <Inicio />
            </Route>
            <Route path="/Alumno">
              <Alumno />
            </Route>
            <Route path="/Universidad">
              <Universidad />
            </Route>
            <Route path="/Carrera">
              <Carrera />
            </Route>
            <Route path="/Curriculum">
              <Curriculum />
            </Route>
            <Route path="/Mapa">
              <Mapa />
            </Route>
            <Route path="/Mockup">
              <Mockup />
            </Route>
            <Route path="/LoginPage">
              <LoginPage />
            </Route>
            <Route path="/Carrusel">
              <Carrusel />
            </Route>
            <Route path="/Logout">
              <Logout />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
