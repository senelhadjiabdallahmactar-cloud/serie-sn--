import series from '../data/series.json'

const tousLesGenres = [...new Set(series.flatMap((s) => s.genre))].sort()
const toutesLesChaines = [...new Set(series.map((s) => s.chaine))].sort()

function FilterBar({ genreSelec, setGenreSelec, chaineSelec, setChaineSelec }) {
  return (
    <div className="filterbar-wrapper">
      <div className="filterbar-group">
        <label className="filterbar-label">Genre :</label>
        <select
          className="filterbar-select"
          value={genreSelec}
          onChange={(e) => setGenreSelec(e.target.value)}
        >
          <option value="">Tous les genres</option>
          {tousLesGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="filterbar-group">
        <label className="filterbar-label">Chaîne :</label>
        <select
          className="filterbar-select"
          value={chaineSelec}
          onChange={(e) => setChaineSelec(e.target.value)}
        >
          <option value="">Toutes les chaînes</option>
          {toutesLesChaines.map((chaine) => (
            <option key={chaine} value={chaine}>
              {chaine}
            </option>
          ))}
        </select>
      </div>

      {(genreSelec || chaineSelec) && (
        <button
          className="filterbar-reset"
          onClick={() => {
            setGenreSelec('')
            setChaineSelec('')
          }}
        >
          Réinitialiser les filtres
        </button>
      )}
    </div>
  )
}

export default FilterBar
