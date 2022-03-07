import './NotFound.css'

import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={'404.png'} alt='Not Found' />
            <h3>El contenido que estas buscando ya no se encuentra disponible</h3>
            <div className='contenedor-boton'>
                <Link to={'/'} className="button-menu">
                    Página principal
                </Link>
            </div>
        </div>
    )
}

export default NotFound