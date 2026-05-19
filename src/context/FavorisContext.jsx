import { useState } from 'react'

function StarRating({ note, interactif = false, onNoter }) {
  const [noteHover, setNoteHover] = useState(null)

  const noteAffichee = noteHover !== null ? noteHover : note

  const etoiles = []

  for (let i = 1; i <= 5; i++) {
    let classe = 'star star-vide'
    if (noteAffichee >= i) classe = 'star star-pleine'
    else if (noteAffichee >= i - 0.5) classe = 'star star-demi'

    if (interactif) {
      etoiles.push(
        <span
          key={i}
          className={`${classe} star-interactive`}
          onClick={() => onNoter && onNoter(i)}
          onMouseEnter={() => setNoteHover(i)}
          onMouseLeave={() => setNoteHover(null)}
          title={`Noter ${i}/5`}
        >
          ★
        </span>
      )
    } else {
      etoiles.push(
        <span key={i} className={classe}>
          {noteAffichee >= i ? '★' : noteAffichee >= i - 0.5 ? '½' : '☆'}
        </span>
      )
    }
  }

  return (
    <div
      className={`star-rating ${interactif ? 'star-rating-interactive' : ''}`}
      title={interactif ? 'Cliquez pour noter' : `Note : ${note}/5`}
    >
      {etoiles}
      <span className="star-valeur">
        {interactif && noteHover ? `${noteHover}/5` : `${note}/5`}
      </span>
    </div>
  )
}

export default StarRating
