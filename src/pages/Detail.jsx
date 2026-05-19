import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import series from '../data/series.json'
import { useFavoris } from '../context/FavorisContext'
import StarRating from '../components/StarRating'
import Loader from '../components/Loader'

function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { estFavori, ajouterFavori, retirerFavori } = useFavoris()

  const [serie, setSerie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notePerso, setNotePerso] = useState(null)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      const trouvee = series.find((s) => s.id === parseInt(id))
      setSerie(trouvee || null)
      const noteSauvegardee = localStorage.getItem(`note-${id}`)
      setNotePerso(noteSauvegardee ? parseFloat(noteSauvegardee) : null)
      setLoading(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [id])

  const handleNoter = (nouvelleNote) => {
    setNotePerso(nouvelleNote)
    localStorage.setItem(`note-${id}`, nouvelleNote)
  }

  if (loading) return <Loader />

  if (!serie) {
    return (
      <div className="detail-erreur">
        <h2>Série introuvable</h2>
        <p>L'identifiant <strong>{id}</strong> ne correspond à aucune série.</p>
        <button className="btn-retour" onClick={() => navigate('/')}>
          ← Retour au catalogue
        </button>
      </div>
    )
  }

  const favori = estFavori(serie.id)

  const handleFavori = () => {
    if (favori) retirerFavori(serie.id)
    else ajouterFavori(serie)
  }

  return (
    <div className="page-detail">
      <button className="btn-retour" onClick={() => navigate('/')}>
        ← Retour au catalogue
      </button>

      <div className="detail-layout">
        <div className="detail-colonne-img">
          <img src={serie.image} alt={serie.titre} className="detail-img" />
        </div>

        <div className="detail-colonne-info">
          <h1 className="detail-titre">{serie.titre}</h1>

          <div className="detail-badges">
            <span className="detail-chaine">{serie.chaine}</span>
            {serie.enCours && <span className="badge-encours">En cours</span>}
          </div>

          <div className="detail-notes">
            <div className="detail-note-bloc">
              <span className="detail-note-label">Note officielle</span>
              <StarRating note={serie.note} />
            </div>

            <div className="detail-note-bloc">
              <span className="detail-note-label">Votre note</span>
              <StarRating
                note={notePerso || 0}
                interactif={true}
                onNoter={handleNoter}
              />
              {notePerso && (
                <span className="note-perso-confirmation">
                  Vous avez noté {notePerso}/5
                </span>
              )}
            </div>
          </div>

          <section className="detail-section">
            <h2 className="detail-section-titre">Synopsis</h2>
            <p className="detail-synopsis">{serie.synopsis}</p>
          </section>

          <section className="detail-section">
            <h2 className="detail-section-titre">Genres</h2>
            <div className="detail-genres">
              {serie.genre.map((g) => (
                <span key={g} className="genre-tag">{g}</span>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2 className="detail-section-titre">Informations</h2>
            <div className="detail-infos-grid">
              <div className="detail-info-item">
                <span className="detail-info-label">Année</span>
                <span className="detail-info-valeur">{serie.annee}</span>
              </div>
              <div className="detail-info-item">
                <span className="detail-info-label">Saisons</span>
                <span className="detail-info-valeur">{serie.saisons}</span>
              </div>
              <div className="detail-info-item">
                <span className="detail-info-label">Chaîne</span>
                <span className="detail-info-valeur">{serie.chaine}</span>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2 className="detail-section-titre">Acteurs principaux</h2>
            <div className="detail-acteurs">
              {serie.acteurs.map((acteur) => (
                <span key={acteur} className="acteur-chip">{acteur}</span>
              ))}
            </div>
          </section>

          <button
            className={`btn-favori ${favori ? 'btn-favori-retirer' : 'btn-favori-ajouter'}`}
            onClick={handleFavori}
          >
            {favori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Detail
