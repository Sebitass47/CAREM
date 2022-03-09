import CursosAdmision from './CursosAdmision'
import CursosAdicionales from './CursosExtra'
import EscuelaCarem from './EscuelaCarem'
import './Cursos.css'
import componentDidMount from '../../functions/Titulo'
import escuelaCarem from './info/escuelaCarem.json'
import cursosAdmision from './info/cursosAdmision.json'
import cursosExtra from './info/cursosExtra.json'


const Cursos = ({ scrollToTop }) => {
    scrollToTop()

    componentDidMount('CAREM - Cursos')

    return (
        <div className="contenedor-cursos">
            <div className='nombre'>
                <h1>Cursos de admisión</h1>
            </div>
            <div className='cursos'>
                {cursosAdmision.map(curso =>
                    <CursosAdmision 
                        curso={curso.curso}
                        key={curso.curso}
                        contado={curso.contado}
                        msi={curso.msi}
                        imagen={curso.imagen}
                        url={curso.url} />
                )}
            </div>

            <div className='nombre'>
                <h1>Cursos Extracurriculares</h1>
            </div>

            <div className="cursos">

                {cursosExtra.map(curso =>
                    <CursosAdicionales
                        nombre={curso.nombre}
                        key={curso.nombre}
                        descripcion={curso.descripcion}
                        imagen={curso.imagen}
                        url={curso.url} />)}
            </div>

            <div className='nombre'>
                <h1>Escuela Carem</h1>
            </div>

            <div className='cursos'>

                {escuelaCarem.map(curso =>
                    <EscuelaCarem 
                    nombre={curso.nombre} 
                    key={curso.nombre}
                    imagen={curso.imagen} 
                    duracion={curso.duracion} 
                    tiempo={curso.tiempo} 
                    caracteristica={curso.caracteristica} 
                    costo={curso.costo} 
                    link={curso.link}/>)}
            </div>

        </div>

    )
}


export default Cursos