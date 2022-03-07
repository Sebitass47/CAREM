import { BsCheck2Circle } from 'react-icons/bs'
import { BiMedal } from 'react-icons/bi'

const Portada = (props) => {
    const { curso } = props;
    return (
        <section className="portada-cursos">
            <div className="nombre-curso">
                <h1>Curso de Ingreso a {curso}</h1>
                <p>Tenemos calidad humana y académica, preparamos alumnos de excelencia y con los mejores materiales.</p>
            </div>
            
            <div className='caract-curso'>
                <p>Solo nosotros te damos un entrenamiento completo. Abarcamos todo lo relacionado a las materias y un poco más.</p>
                <div className="portada-caract">
                    <span><BsCheck2Circle className="icono" />Calidad Mundial</span>
                    <span><BiMedal className="icono" />Personal Certificado</span>
                </div>
            </div>

        </section>
    )

}

export default Portada