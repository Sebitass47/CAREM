import Portada from './Portada'
import Informacion from './Informacion'
import Modalidades from './Modalidades'
import componentDidMount from '../Titulo'
import './Inicio.css'


const Inicio = ({ scrollToTop}) => {
    scrollToTop()
    componentDidMount('CAREM')
    return(
        <div>
            <Portada/>
            <Informacion/>
            <Modalidades/>
        </div>
       
    )
}

export default Inicio