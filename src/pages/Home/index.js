import { Link } from 'react-router-dom';
import {Nav,Container, Navbar} from 'react-bootstrap';


export default function Home (){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Pets</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="text-white mx-2" to="/" style={{textDecoration: 'none'}}>Inicio</Link>
                    <Link className="text-white mx-2" to="/new" style={{textDecoration: 'none'}}>Cadastrar</Link>
                    <Link className="text-white mx-2" to="/show" style={{textDecoration: 'none'}}>Lista</Link>
                </Nav>
            </Container>
        </Navbar>
    )
} 