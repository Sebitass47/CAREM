import { useRef } from "react";
import useOnScreen from '../../functions/useOnScreen'

const CursosAdicionales = (props) => {
    const { nombre, descripcion, imagen, url } = props

    const ref = useRef()
    const onScreen = useOnScreen(ref, '50px')

    return (
        <div ref={ref} className={onScreen ? "curso" : "animado"} style={onScreen ? {animation: '1s aparecer'} : null}>
            <div className="contenedor-imagen">
                <img src={imagen} alt={nombre} />
            </div>
            <h1>{nombre}</h1>
            <div className="contenedor-info">
                <p>{descripcion}</p>
            </div>

            <div className='contenedor-boton'>
                <a className='boton-whatsapp' type='button' href={url} target='_blank' rel="noreferrer">Inscribete ahora</a>
            </div>
        </div>
    )
}

export default CursosAdicionales