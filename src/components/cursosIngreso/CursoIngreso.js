import { useMatch,  useParams } from 'react-router-dom'
import Portada from './Portada'
import Caracteristicas from './Caracteristicas'
import Precios from './Precios'
import Redirect from '../Redirect'
import './CursoIngreso.css'


const CursoIngreso = ( {scrollToTop}) => {

    

    scrollToTop();
    
    const cursosProps = {
        secundaria: {
            nombre_curso: 'Secundaria',
            areas: 4,
            costo_curso: 3500,
            pago_semanal: 200,
            inicio: 'Enero del 2022',
            linkContado: 'https://api.whatsapp.com/send?phone=+5546329182&text=Hola%20deseo%20inscribir%20a%20mi%20hij@%20y%20pagar%20de%20contado%20el%20curso%20de%20secundaria.',
            linkMeses: 'https://api.whatsapp.com/send?phone=+5546329182&text=Hola,%20me%20interesa%20conocer%20las%20formas%20de%20pago%20para%20el%20curso%20de%20ingreso%20a%20Secundaria',
            linkSemanal: 'https://api.whatsapp.com/send?phone=+5546329182&text=Hola%20quiero%20informes%20del%20curso%20de%20secundaria%20con%20pago%20semanal.'
        },
        
        preparatoria: {
            nombre_curso: 'Preparatoria',
            areas: 10,
            costo_curso: 4500,
            pago_semanal: 250,
            inicio: 'Diciembre del 2022',
            linkContado: 'https://api.whatsapp.com/send?phone=+5546329182&text=Hola%20deseo%20inscribir%20a%20mi%20hij@%20y%20pagar%20de%20contado%20el%20curso%20de%20prepa.',
            linkMeses:'https://api.whatsapp.com/send?phone=+5546329182&text=Hola,%20me%20interesa%20conocer%20las%20formas%20de%20pago%20para%20el%20curso%20de%20ingreso%20a%20prepatoria',
            linkSemanal:'https://api.whatsapp.com/send?phone=+5546329182&text=Hola%20quiero%20informes%20del%20curso%20de%20preparatoria%20con%20pago%20semanal.'
        },

        universidad: {
            nombre_curso: 'Universidad',
            areas: 10,
            costo_curso: 5000,
            pago_semanal: 300,
            inicio: 'Septiembre del 2022',
            linkContado: 'https://api.whatsapp.com/send?phone=+5546329182&text=Hola%20deseo%20inscribir%20a%20mi%20hij@%20y%20pagar%20de%20contado%20el%20curso%20de%20universidad.',
            linkMeses: 'https://api.whatsapp.com/send?phone=+5546329182&text=Hola,%20me%20interesa%20conocer%20las%20formas%20de%20pago%20para%20el%20curso%20de%20ingreso%20a%20universidad',
            linkSemanal: 'https://api.whatsapp.com/send?phone=+5546329182&text=Hola%20quiero%20informes%20del%20curso%20de%20universidad%20con%20pago%20semanal.'
        }

    }

    const match = useMatch("cursos/:nombre_curso")
    const { nombre_curso } = match.params

    let datos

    if (nombre_curso === 'secundaria'){
        datos = cursosProps.secundaria
    }
    else if (nombre_curso === 'preparatoria'){
        datos = cursosProps.preparatoria
    }
    else if (nombre_curso === 'universidad'){
        datos = cursosProps.universidad
    }
    else {
        return(<Redirect  to="/404" />)
        
    }


    return (
        <div className="info-curso">
            <Portada curso={datos.nombre_curso}  /> 
            <Caracteristicas areas={datos.areas} />
            <Precios 
                costo={datos.costo_curso}
                pago_semanal={datos.pago_semanal} 
                inicio={datos.inicio}
                linkContado={datos.linkContado}
                linkMeses={datos.linkMeses}
                linkSemanal={datos.linkSemanal}/>
        </div>
       
    )
}

export default CursoIngreso