import mockup from "../img/mockup.png";
import { Container } from "reactstrap";

function Mockup() {
    return (  
        <>
        <Container>
            <img className="foto2" src={mockup}/>
        </Container>
        </>
    );
}

export default Mockup;