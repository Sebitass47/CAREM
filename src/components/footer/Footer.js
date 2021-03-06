import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi'
import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <h1>CAREM A.C.</h1>
            <span>
                <a href='https://www.facebook.com/carem.ug' target='_blank' rel="noreferrer">
                    <BsFacebook/>
                </a>   
                <a href='https://api.whatsapp.com/send?phone=+525546329182' className='whatsapp' target='_blank' rel="noreferrer">
                    <BsWhatsapp />
                </a>
                </span>
            <hr/>
            <div>
                <p>Página hecha por <a href='https://github.com/Sebitass47' target='_blank' rel="noreferrer" className='creador'>Sebastián Martínez de la Rosa</a>  </p>
                <p>Copyright <BiCopyright /> 2022</p>
            </div>
            
        </footer>
    )
}

export default Footer