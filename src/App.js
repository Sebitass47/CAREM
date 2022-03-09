import Barra from './components/barra/Barra'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/inicio/Inicio'
import Cursos from './components/servicios/Cursos'
import CursoIngreso from './components/cursosIngreso/CursoIngreso'
import NotFound from './components/404/NotFound'
import scrollToTop from './functions/scrollToTop'
import './App.css'

function App() {

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
