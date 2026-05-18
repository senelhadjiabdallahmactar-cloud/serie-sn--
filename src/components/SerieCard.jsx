import { Link } from 'react-router-dom'
import StarRating from './StarRating'

function SerieCard({ serie }) {
  return (
    <Link to={`/serie/${serie.id}`} className="serie-card">
      <div className="serie-card-img-wrapper">
        <img
          src={serie.image}
          alt={serie.titre}
          className="serie-card-img"
          loading="lazy"
        />
        {serie.enCours && (
          <span className="badge-encours"> En cours</span>
        )}
      </div>

      <div className="serie-card-body">
        <h3 className="serie-card-titre">{serie.titre}</h3>

        <div className="serie-card-meta">
          <span className="serie-card-chaine">{serie.chaine}</span>
          <span className="serie-card-annee">{serie.annee}</span>
        </div>

        <StarRating note={serie.note} />

        <div className="serie-card-genres">
          {serie.genre.map((g) => (
            <span key={g} className="genre-tag">
              {g}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default SerieCard
