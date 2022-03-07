import { useRef } from "react";
import useOnScreen from '../useOnScreen'
import { BiTimeFive } from 'react-icons/bi'

const Modalidades = () => {
    const ref = useRef()
    const onScreen = useOnScreen(ref, '-100px')

    return (
        <article className="modalidades-article">
            <h3>Modalidades y horarios <BiTimeFive/></h3>
            <section className="modalidades">
                <div c ref={ref} className={onScreen ? "horarios" : "animado"} style={onScreen ? {animation: '1s aparecer'} : null}>
                    <h4>Presenciales</h4>
                    <p>Lunes a Viernes: 8:00 - 13:00 / 16:00 - 20:00</p>
                </div>
                <div ref={ref} className={onScreen ? "horarios" : "animado"} style={onScreen ? {animation: '1s aparecer'} : null}>
                    <h4>En línea</h4>
                    <p>Lunes a Viernes: 10:00 - 22:00</p>
                    <p>Sábado 9:00 - 14:00</p>
                </div>
            </section>
            <h3>Donde nos encontramos</h3>
            <section className="ubicacion">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d482081.5099159915!2d-99.1903768!3d19.2709782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfe27545de72b%3A0x81e1d34065400c6!2sCAREM%20A.C.!5e0!3m2!1ses-419!2smx!4v1643577544148!5m2!1ses-419!2smx" />
            </section>
        </article>
    )
}

export default Modalidades