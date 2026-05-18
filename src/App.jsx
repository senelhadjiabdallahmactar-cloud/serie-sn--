import { Routes, Route } from 'react-router-dom'
import { FavorisProvider } from './context/FavorisContext'
import Navbar from './components/navbar'
import Accueil from './pages/Accueil'
import Detail from './pages/Detail'
import Favoris from './pages/Favoris'
import './index.css'

function App() {
  return (
    <FavorisProvider>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Accueil />} />
        <Route path="/serie/:id"  element={<Detail />} />
        <Route path="/favoris"    element={<Favoris />} />
      </Routes>
    </FavorisProvider>
  )
}

export default App
