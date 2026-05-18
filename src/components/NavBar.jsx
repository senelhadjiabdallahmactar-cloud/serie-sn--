import { Link, useLocation } from 'react-router-dom'
import { useFavoris } from '../context/FavorisContext'

function Navbar() {
  const { favoris } = useFavoris()
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-serie">Série</span>
        <span className="logo-sn">SN</span>
        <span className="logo-explorer"> Explorer</span>
      </Link>

      <div className="navbar-liens">
        <Link to="/" className={`nav-lien ${location.pathname === '/' ? 'actif' : ''}`}>
          Accueil
        </Link>

        <Link to="/favoris" className={`nav-lien ${location.pathname === '/favoris' ? 'actif' : ''}`}>
          Favoris
          <span className="fav-badge">{favoris.length}</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
