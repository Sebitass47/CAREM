import { useRef } from "react";
import useOnScreen from '../../functions/useOnScreen'
import { AiFillIdcard } from 'react-icons/ai'
import { FaMoneyBillWave } from 'react-icons/fa'
import { MdHealthAndSafety } from 'react-icons/md'
import { RiEnglishInput } from 'react-icons/ri'
import { GrAppsRounded } from 'react-icons/gr'
import { BsCalendarWeekFill } from 'react-icons/bs'

const Caracteristicas = ({ areas }) => {
    const ref = useRef()
    const onScreen = useOnScreen(ref, '-50px')

    return (
        <section className="caracteristicas">
            <h1>Lo que nos hace únicos</h1>
            <div className="caract">
                <span  ref={ref} className={onScreen ? null : "animado"} style={onScreen ? {animation: '1s aparecer'} : null} >
                    <MdHealthAndSafety className="icono"/>
                    <p>Control de higiene</p>
                </span>
                <span ref={ref} className={onScreen ? null : "animado"} style={onScreen ? {animation: '1s aparecer'} : null}>
                    <FaMoneyBillWave className="icono"/>
                    <p>Precios accesibles</p>
                </span>
                <span ref={ref} className={onScreen ? null : "animado"} style={onScreen ? {animation: '1s aparecer'} : null}>
                    <AiFillIdcard className="icono"/>
                    <p>Membresía a nuestro sitio de repaso</p>
                </span>
                <span ref={ref} className={onScreen ? null : "animado"} style={onScreen ? {animation: '1s aparecer'} : null}>
                    <BsCalendarWeekFill className="icono"/>
                    <p>Exámenes cada semana</p>
                </span>
                <span ref={ref} className={onScreen ? null : "animado"} style={onScreen ? {animation: '1s aparecer'} : null}>
                    <GrAppsRounded className="icono"/>
                    <p>Capacitación en las {areas} áreas del examen</p>
                </span>
                <span ref={ref} className={onScreen ? null : "animado"} style={onScreen ? {animation: '1s aparecer'} : null}>
                    <RiEnglishInput className="icono"/>
                    <p>Capacitación en materias adicionales</p>
                </span>
            </div>
        </section>
    )
}

export default Caracteristicas