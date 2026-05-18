import { useState } from 'react'
import series from '../data/series.json'
import SerieCard from '../components/SerieCard'
import SearchBar from '../components/SearchBar'
import FilterBar from '../components/FilterBar'

function Accueil() {
  const [recherche, setRecherche] = useState('')
  const [genreSelec, setGenreSelec] = useState('')
  const [chaineSelec, setChaineSelec] = useState('')

  const seriesFiltrees = series.filter((s) => {
    const matchTitre = s.titre.toLowerCase().includes(recherche.toLowerCase())
    const matchGenre = !genreSelec || s.genre.includes(genreSelec)
    const matchChaine = !chaineSelec || s.chaine === chaineSelec
    return matchTitre && matchGenre && matchChaine
  })

  return (
    <main className="page-accueil">
      <div className="accueil-header">
        <h1 className="accueil-titre">Découvrez les séries sénégalaises</h1>
        <p className="accueil-sous-titre">
          {series.length} séries dans le catalogue
        </p>
      </div>

      <div className="accueil-filtres">
        <SearchBar valeur={recherche} onChange={setRecherche} />
        <FilterBar
          genreSelec={genreSelec}
          setGenreSelec={setGenreSelec}
          chaineSelec={chaineSelec}
          setChaineSelec={setChaineSelec}
        />
      </div>

      <p className="resultats-count">
        <strong>{seriesFiltrees.length}</strong>{' '}
        série{seriesFiltrees.length !== 1 ? 's' : ''} trouvée
        {seriesFiltrees.length !== 1 ? 's' : ''}
      </p>

      {seriesFiltrees.length === 0 ? (
        <div className="no-result">
          <p>Aucune série ne correspond à votre recherche.</p>
        </div>
      ) : (
        <div className="series-grid">
          {seriesFiltrees.map((s) => (
            <SerieCard key={s.id} serie={s} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Accueil
