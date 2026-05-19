import { Routes, Route } from 'react-router-dom'
import { FavorisProvider } from './context/FavorisContext'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Accueil from './pages/Accueil'
import Detail from './pages/Detail'
import Favoris from './pages/Favoris'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <FavorisProvider>
        <Nav />
        <Routes>
          <Route path="/"          element={<Accueil />} />
          <Route path="/serie/:id" element={<Detail />} />
          <Route path="/favoris"   element={<Favoris />} />
        </Routes>
      </FavorisProvider>
    </ThemeProvider>
  )
}

export default App
