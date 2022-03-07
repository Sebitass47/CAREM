import Portada from './Portada'
import Informacion from './Informacion'
import Modalidades from './Modalidades'

import './Inicio.css'


const Inicio = ({ scrollToTop}) => {
    scrollToTop()
    return(
        <div>
            <Portada/>
            <Informacion/>
            <Modalidades/>
        </div>
       
    )
}

export default Inicio