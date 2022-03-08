import CursosAdmision from './CursosAdmision'
import CursosAdicionales from './CursosAdicionales'
import EscuelaCarem from './EscuelaCarem'
import './Cursos.css'
import componentDidMount from '../Titulo'



const Cursos = ({ scrollToTop }) => {
    scrollToTop()

    componentDidMount('CAREM - Cursos')
    const cursos = {
        escuelaCarem: [{
            nombre: 'Primaria',
            imagen: '/cursos/escuelaCarem/primaria.jpg',
            duracion: '3 a 6 meses',
            tiempo: 'Se requiere un tiempo de 2 a 3 hrs diarias',
            caracteristica: 'Certificado de primaria',
            costo: '$200',
            link: 'https://api.whatsapp.com/send?phone=525546329182&text=Hola%20deseo%20más%20información%20de%20Primaria%20Carem.'
        },

        {
            nombre: 'Secundaria',
            imagen: '/cursos/escuelaCarem/secundaria.jpg',
            duracion: '3 a 6 meses',
            tiempo: 'Se requiere un tiempo de 2 a 5 hrs diarias',
            caracteristica: 'Certificado oficial emitido por SEP ',
            costo: '$200',
            link: 'https://api.whatsapp.com/send?phone=525546329182&text=Hola%20deseo%20más%20información%20de%20%20Secundaria%20Carem.'
        },

        {
            nombre: 'Preparatoria',
            imagen: '/cursos/escuelaCarem/preparatoria.jpg',
            duracion: '2 años',
            tiempo: 'Se requiere un tiempo de 3 a 5 hrs diarias.',
            caracteristica: ' Certificado oficial Prepa SI ',
            costo: '$225',
            link: 'https://api.whatsapp.com/send?phone=525546329182&text=Hola%20deseo%20más%20información%20de%20%20Preparatoria%20Carem.'
        },

        {
            nombre: 'Universidad',
            imagen: '/cursos/escuelaCarem/universidad.jpg',
            duracion: '4 años',
            tiempo: 'Se requiere un tiempo de 3 a 5 hrs diarias',
            caracteristica: 'Título con validez oficial',
            costo: '$250',
            link: 'https://api.whatsapp.com/send?phone=525546329182&text=Hola%20deseo%20más%20información%20de%20%20Universidad%20Carem.'
        }],

        cursosAdmision: [{
            curso: 'secundaria',
            contado: '$3500',
            msi: '$4000',
            imagen: '/cursos/admision/secundaria.jpg',
            url: 'secundaria'
        },
        {
            curso: 'preparatoria',
            contado: '$4500',
            msi: '$5000',
            imagen: '/cursos/admision/preparatoria.jpg',
            url: 'preparatoria'
        },

        {
            curso: 'universidad',
            contado: '$5000',
            msi: '$6000',
            imagen: '/cursos/admision/universidad.jpg',
            url: 'universidad'
        }],

        cursosAdicionales: [{
            nombre: 'Cuso de nivelacion',
            descripcion: 'Regresa a clases con el mejor conocimiento, tenemos todos los planes educativos y las mejores herramientas, valido para: Kinder, Primaria, Secundaria.',
            imagen: '/cursos/adicionales/nivelacion.jpg',
            url: "https://api.whatsapp.com/send?phone=525546329182&text=Hola%20deseo%20inscribirme%20al%20curso%20de%20nivelación."
        },
        {
            nombre: 'Office',
            descripcion: 'Maneja la paqueteria mas comercial en el mundo como un experto. Sal con la certificación de grado profesional.',
            imagen: '/cursos/adicionales/Office.jpg',
            url: "https://api.whatsapp.com/send?phone=525546329182&text=Hola%20deseo%20inscribirme%20al%20curso%20de%20Office."
        },
        {
            nombre: 'Inglés',
            descripcion: 'La lengua mas usada en el mundo, con exámenes de acreditación de nivel.',
            imagen: '/cursos/adicionales/Ingles.jpg',
            url: "https://api.whatsapp.com/send?phone=525546329182&text=Hola%20deseo%20inscribirme%20al%20curso%20de%20Ingles."
        }]
    }

    return (
        <div className="contenedor-cursos">
            <div className='nombre'>
                <h1>Cursos de admisión</h1>
            </div>
            <div className='cursos'>
                {cursos.cursosAdmision.map(curso =>
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
                <h1>Cursos Adicionales</h1>
            </div>

            <div className="cursos">

                {cursos.cursosAdicionales.map(curso =>
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
                {cursos.escuelaCarem.map(curso =>
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