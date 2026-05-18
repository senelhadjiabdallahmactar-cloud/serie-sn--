import { Link } from 'react-router-dom'
import { useFavoris } from '../context/FavorisContext'
import SerieCard from '../components/SerieCard'

function Favoris() {
  const { favoris, retirerFavori } = useFavoris()

  if (favoris.length === 0) {
    return (
      <div className="favoris-vide">
        <div className="favoris-vide-icon"></div>
        <h2>Votre liste de favoris est vide</h2>
        <p>
          Explorez le catalogue et cliquez sur <strong>Ajouter aux favoris</strong>{' '}
          sur les séries qui vous intéressent !
        </p>
        <Link to="/" className="btn-explorer">
          Découvrir le catalogue
        </Link>
      </div>
    )
  }

  return (
    <main className="page-favoris">
      <div className="favoris-header">
        <h1 className="favoris-titre">Mes Favoris</h1>
        <p className="favoris-sous-titre">
          {favoris.length} série{favoris.length !== 1 ? 's' : ''} dans votre liste
        </p>
      </div>

      <div className="series-grid">
        {favoris.map((serie) => (
          <div key={serie.id} className="favoris-item">
            <SerieCard serie={serie} />
            <button
              className="btn-retirer-favori"
              onClick={() => retirerFavori(serie.id)}
            >
              Retirer
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Favoris
