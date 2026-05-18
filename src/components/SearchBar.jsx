function SearchBar({ valeur, onChange }) {
  return (
    <div className="searchbar-wrapper">
      <input
        type="text"
        className="searchbar-input"
        placeholder="Rechercher une série..."
        value={valeur}
        onChange={(e) => onChange(e.target.value)}
      />
      {valeur && (
        <button className="searchbar-clear" onClick={() => onChange('')} title="Effacer">
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar
