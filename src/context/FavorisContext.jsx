import { createContext, useContext, useState } from 'react'

const FavorisContext = createContext()

export function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([])

  const ajouterFavori = (serie) => {
    setFavoris((prev) => [...prev, serie])
  }

  const retirerFavori = (id) => {
    setFavoris((prev) => prev.filter((s) => s.id !== id))
  }

  const estFavori = (id) => favoris.some((s) => s.id === id)

  return (
    <FavorisContext.Provider value={{ favoris, ajouterFavori, retirerFavori, estFavori }}>
      {children}
    </FavorisContext.Provider>
  )
}

export const useFavoris = () => useContext(FavorisContext)
