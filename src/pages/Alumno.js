import yo from "../img/yo.jpg"
import { Container } from "reactstrap";

function Alumno() {
    return ( 
        <>
        <Container>
            <h1>Hector Ramos</h1>
            <img className="foto1" src={yo}/>
        </Container>
        </>
    );
}

export default Alumno;