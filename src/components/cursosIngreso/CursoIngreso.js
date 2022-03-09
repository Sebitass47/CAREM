import { useMatch,  useParams } from 'react-router-dom'
import Portada from './Portada'
import Caracteristicas from './Caracteristicas'
import Precios from './Precios'
import Redirect from '../../functions/Redirect'
import componentDidMount from '../../functions/Titulo'
import './CursoIngreso.css'
import infoSecundaria from './info/infoSecundaria.json'
import infoPrepa from './info/infoPrepa.json'
import infoUni from './info/infoUni.json'


const CursoIngreso = ( {scrollToTop}) => {

    

    scrollToTop();
    
    const match = useMatch("cursos/:nombre_curso")
    const { nombre_curso } = match.params

    let datos

    if (nombre_curso === 'secundaria'){
        datos = infoSecundaria
        componentDidMount('CAREM - Secundaria')
    }
    else if (nombre_curso === 'preparatoria'){
        datos = infoPrepa
        componentDidMount('CAREM - Preparatoria')
    }
    else if (nombre_curso === 'universidad'){
        datos = infoUni
        componentDidMount('CAREM - Universidad')
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