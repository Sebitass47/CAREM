import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import './Barra.css'

const Barra = () => {
    return (
        <nav>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>
                            <img
                                src="/CAREM.png"
                                width="55"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Link>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            
                                <NavLink to='/cursos' className="nav-link" activeClassName="active">
                                    Cursos
                                </NavLink>
                            
                            
                                <NavLink to='cursos/secundaria' className="nav-link" activeClassName="active">
                                    Ingreso a Secundaria
                                </NavLink>
                           
                                <NavLink to='cursos/preparatoria' className="nav-link" activeClassName="active">
                                    Ingreso a Preparatoria
                                </NavLink>
                            
                                <NavLink to='cursos/universidad' className="nav-link" activeClassName="active">
                                    Ingreso a Universidad
                                </NavLink>
                         
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    )
}

export default Barra