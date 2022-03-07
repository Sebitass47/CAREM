import Barra from './components/Barra'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/inicio/Inicio'
import Cursos from './components/servicios/Cursos'
import CursoIngreso from './components/cursosIngreso/CursoIngreso'
import NotFound from './components/NotFound'
import './App.css'

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }

  

  return (
    <div className="home">

      <Barra />
      <Routes>
        <Route path="/" element={<Inicio scrollToTop={scrollToTop} />} />
        <Route path='/cursos' element={<Cursos scrollToTop={scrollToTop} />} />
        <Route path='/cursos/*' element={<CursoIngreso scrollToTop={scrollToTop}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App;
