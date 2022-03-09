import { useRef } from "react";
import useOnScreen from '../../functions/useOnScreen'

const EscuelaCarem = (props) => {
    const { nombre, imagen, duracion, tiempo, caracteristica, costo, link} = props

    const ref = useRef()
    const onScreen = useOnScreen(ref, '50px')

    return (
        <div ref={ref} className={onScreen ? "curso" : "animado"} style={onScreen ? {animation: '2s aparecer'} : null}>
            <div className="contenedor-imagen">
                <img src={imagen} alt={nombre} />
            </div>
            <h1>{nombre}</h1>
            <div className="contenedor-info">
                <div className="contenedor-duracion">
                    <h4>Duración</h4>
                    <p>{duracion}</p>
                </div>
                <div className="contenedor-caract">
                    <h4>Caracteristicas</h4>
                    <ul>
                        <li>
                            CAREM te brinda equipo de computo, acceso a internet y todo lo que se requiera para tu bachillerato.
                        </li>
                        <li>
                            {tiempo}
                        </li>
                        <li>
                            Guías y material actualizado
                        </li>
                        <li>
                            {caracteristica}
                        </li>
                    </ul>
                </div>
                <h4>Costo por semana</h4>
                <p>{costo}</p>

                <div className='contenedor-boton'>                
                <a href={link} target='_blank' rel="noreferrer" className="button">
                    <span>Más información</span>
                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                    </svg>
                </a>


            </div>
            </div>
        </div>

    )
}

export default EscuelaCarem