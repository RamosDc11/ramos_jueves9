import { Container, Col, Row, Button  } from "reactstrap";
function Inicio() {
    return ( 
        <>
        <h1 class="home">Binvenido a Inicio</h1>
        <Container>
            <Row>
                <Col>
                    <h1 class="alumno">MÉTODO RENDER</h1>
                    <p>El término “render prop” se refiere a una técnica para compartir código entre componentes en React utilizando una propiedad cuyo valor es una función. Un componente con una render prop toma una función que devuelve un elemento de React y lo llama en lugar de implementar su propia lógica de representación.</p>
                </Col>
                <Col>
                    <h1 class="alumno">MÉTODO STRICT MODE</h1>
                    <p>El Modo Estricto o Strict Mode en JavaScript es una característica introducida en ECMAScript 5 (ES5), que indica al código que debe ser ejecutado en forma estricta. Esto previene que se tomen ciertas acciones, se muestren más errores, y vuelve a JavaScript más seguro.</p>
                </Col>
                <Col>
                    <h1 class="alumno">MÉTODO RETURN</h1>
                    <p>La sentencia return se emplea para salir de la secuencia de ejecución de las sentencias de un método y, opcionalmente, devolver un valor. Tras la salida del método se vuelve a la secuencia de ejecución del programa al lugar de llamada de dicho método.</p>
                </Col>
            </Row>
            <Button as="a" href="https://github.com/RamosDc11/proyectoPrueba">Github</Button>
        </Container>
        </>
    );
}

export default Inicio;