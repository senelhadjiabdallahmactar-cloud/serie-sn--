import { Link, useLocation } from 'react-router-dom'
import { useFavoris } from '../context/FavorisContext'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const { favoris } = useFavoris()
  const { modeSombre, basculerTheme } = useTheme()
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-serie">Série</span>
        <span className="logo-sn">SN</span>
        <span className="logo-explorer"> Explorer</span>
      </Link>

      <div className="navbar-liens">
        <Link
          to="/"
          className={`nav-lien ${location.pathname === '/' ? 'actif' : ''}`}
        >
          Accueil
        </Link>

        <Link
          to="/favoris"
          className={`nav-lien ${location.pathname === '/favoris' ? 'actif' : ''}`}
        >
          Favoris
          <span className="fav-badge">{favoris.length}</span>
        </Link>

        <button
          className="btn-theme"
          onClick={basculerTheme}
          title={modeSombre ? 'Passer en mode clair' : 'Passer en mode sombre'}
        >
          {modeSombre ? 'Clair' : 'Sombre'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
