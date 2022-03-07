import { useRef } from "react";
import useOnScreen from '../useOnScreen'
import { BsWhatsapp } from 'react-icons/bs'

const Informacion = () => {
    const ref = useRef()
    const onScreen = useOnScreen(ref, '-150px')

    return (
        <div className="information">
            <article  ref={ref} className={onScreen ? "info-izquierda" : "animado"} style={onScreen ? {animation: '1s aparecer'} : null}>
                <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/JSrjXqK3sh0?rel=0&amp;autoplay=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </article>
            <article className="info-derecha">
                <div>
                    <h3>Contáctanos</h3>
                </div>
                <div >
                    <ul>
                        <li>
                            Nunca fue tan fácil aprender, contáctenos y sea parte de la revolución educativa en México.
                        </li>
                        <li>
                            Más de 10 años de experiencia nos respaldan.
                        </li>
                        <li>
                            Cientos de alumnos que dan testimonio de sus éxitos.
                        </li>
                        <li>
                            Profesionales certificados dando las mejores clases.
                        </li>
                        <li>
                            La primera clase va por nuestra cuenta.
                        </li>
                    </ul>
                </div>
                <div>
                <a className='boton-whatsapp' href="https://api.whatsapp.com/send?phone=+525546329182&text=Hola%20quiero%20mi%20clase%20gratis!!!">
                    <span>
                        <BsWhatsapp />
                        <span> Whatsapp</span>
                    </span>
                </a>
                </div>
                
            </article>
        </div>


    )
}

export default Informacion