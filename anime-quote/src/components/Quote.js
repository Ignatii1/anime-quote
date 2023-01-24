import React from 'react'

function Quote(props) {
  const { character, quote } = props
  return (
    <div className="quote-container">
      <h2>{character}</h2>
      <p>{quote}</p>
    </div>
  )
}

export default Quote
