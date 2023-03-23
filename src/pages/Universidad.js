import { Container } from "reactstrap";
import utd from "../img/utd.png";

function Universidad() {
    return ( 
        <>
        <Container>
            <h1>Universidad Tecnológica de Durango</h1>
            <img className="foto" src={utd}/>
        </Container>
        </>
    );
}

export default Universidad;