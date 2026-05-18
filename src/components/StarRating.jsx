function StarRating({ note }) {
  const etoiles = []

  for (let i = 1; i <= 5; i++) {
    if (note >= i) {
      etoiles.push(<span key={i} className="star star-pleine">★</span>)
    } else if (note >= i - 0.5) {
      etoiles.push(<span key={i} className="star star-demi">½</span>)
    } else {
      etoiles.push(<span key={i} className="star star-vide">☆</span>)
    }
  }

  return (
    <div className="star-rating" title={`Note : ${note}/5`}>
      {etoiles}
      <span className="star-valeur">{note}/5</span>
    </div>
  )
}

export default StarRating
