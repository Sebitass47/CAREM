import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import './Barra.css'

const Barra = () => {
    const [isHidden, setHidden] = useState(false)

    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        return  width 
      };

    const Hidden = () => {
        if (getWindowDimensions() < 1000){
            setHidden(!isHidden)
        }else{
            
        }
        
    }
    

      console.log(getWindowDimensions())
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

                    </Navbar.Brand >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={Hidden} />
                    <div className={isHidden ? "navbar-collapse collapse show":  "navbar-collapse collapse"} style={isHidden ? {animation: '0.3s visible'}:null} >
                        <Nav className="me-auto" >
                            
                                <NavLink to='/cursos' className="nav-link" activeClassName="active"  onClick={Hidden}>
                                    Cursos
                                </NavLink>
                            
                            
                                <NavLink to='cursos/secundaria' className="nav-link" activeClassName="active" onClick={Hidden}>
                                    Ingreso a Secundaria
                                </NavLink>
                           
                                <NavLink to='cursos/preparatoria' className="nav-link" activeClassName="active"  onClick={Hidden} >
                                    Ingreso a Preparatoria
                                </NavLink>
                            
                                <NavLink to='cursos/universidad' className="nav-link" activeClassName="active"  onClick={Hidden}>
                                    Ingreso a Universidad
                                </NavLink>
                         
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </nav>
    )
}

export default Barra