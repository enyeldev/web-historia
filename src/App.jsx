import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrincipalLayout } from './layout/PrincipalLayout'
import { Pantalla1 } from './pages/Pantalla1'
import { ContaminacionAmbiental } from './pages/ContaminacionAmbiental'
import { Conflictos } from './pages/Conflictos'
import { EmergenciaClimatica } from './pages/EmergenciaClimatica'
import { Hambre } from './pages/Hambre'
import { Racismo } from './pages/Racismo'
import { ViolenciaGenero } from './pages/ViolenciaGenero'
import { Pobreza } from './pages/Pobreza'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrincipalLayout />}>
          <Route index element={<Pantalla1 />} />
          <Route path='contaminacion-ambiental' element={<ContaminacionAmbiental />} />
          <Route path='conflictos' element={<Conflictos />} />
          <Route path='emergencia-climatica' element={<EmergenciaClimatica />} />
          <Route path='hambre' element={<Hambre />} />
          <Route path='pobreza' element={<Pobreza />} />
          <Route path='racismo' element={<Racismo />} />
          <Route path='violencia-genero' element={<ViolenciaGenero />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
