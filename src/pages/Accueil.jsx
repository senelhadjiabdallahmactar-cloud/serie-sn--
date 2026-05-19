import { useState } from 'react'
import series from '../data/series.json'
import SerieCard from '../components/SerieCard'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'

const SERIES_PAR_PAGE = 6

function Accueil() {
  const [recherche, setRecherche] = useState('')
  const [genreSelec, setGenreSelec] = useState('')
  const [chaineSelec, setChaineSelec] = useState('')
  const [nombreAffiches, setNombreAffiches] = useState(SERIES_PAR_PAGE)

  const seriesFiltrees = series.filter((s) => {
    const matchTitre = s.titre.toLowerCase().includes(recherche.toLowerCase())
    const matchGenre = !genreSelec || s.genre.includes(genreSelec)
    const matchChaine = !chaineSelec || s.chaine === chaineSelec
    return matchTitre && matchGenre && matchChaine
  })

  const seriesVisibles = seriesFiltrees.slice(0, nombreAffiches)
  const ilEnReste = nombreAffiches < seriesFiltrees.length

  const handleRecherche = (val) => {
    setRecherche(val)
    setNombreAffiches(SERIES_PAR_PAGE)
  }

  const handleGenre = (val) => {
    setGenreSelec(val)
    setNombreAffiches(SERIES_PAR_PAGE)
  }

  const handleChaine = (val) => {
    setChaineSelec(val)
    setNombreAffiches(SERIES_PAR_PAGE)
  }

  const voirPlus = () => {
    setNombreAffiches((prev) => prev + SERIES_PAR_PAGE)
  }

  return (
    <main className="page-accueil">
      <div className="accueil-header">
        <h1 className="accueil-titre">Découvrez les séries sénégalaises</h1>
        <p className="accueil-sous-titre">
          {series.length} séries dans le catalogue
        </p>
      </div>

      <div className="accueil-filtres">
        <SearchBar valeur={recherche} onChange={handleRecherche} />
        <FilterBar
          genreSelec={genreSelec}
          setGenreSelec={handleGenre}
          chaineSelec={chaineSelec}
          setChaineSelec={handleChaine}
        />
      </div>

      <p className="resultats-count">
        <strong>{seriesFiltrees.length}</strong>{' '}
        série{seriesFiltrees.length !== 1 ? 's' : ''} trouvée
        {seriesFiltrees.length !== 1 ? 's' : ''}
        {ilEnReste && (
          <span> — affichage de <strong>{seriesVisibles.length}</strong></span>
        )}
      </p>

      {seriesFiltrees.length === 0 ? (
        <div className="no-result">
          <p>Aucune série ne correspond à votre recherche.</p>
        </div>
      ) : (
        <>
          <div className="series-grid">
            {seriesVisibles.map((s) => (
              <SerieCard key={s.id} serie={s} />
            ))}
          </div>

          {ilEnReste && (
            <div className="voir-plus-wrapper">
              <button className="btn-voir-plus" onClick={voirPlus}>
                Voir plus ({seriesFiltrees.length - nombreAffiches} restantes)
              </button>
            </div>
          )}
        </>
      )}
    </main>
  )
}

export default Accueil
