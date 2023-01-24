import React from 'react'
import Quote from './components/Quote'
import Form from './components/Form'
import api from './components/Api'

function App() {
  const [quote, setQuote] = React.useState()
  const [character, setCharacter] = React.useState()

  function onTitleFormSubmit(value) {
    console.log(value)
    api.getByTitle(value).then((res) => {
      setQuote(res.quote)
      setCharacter(res.character)
    })
  }

  function onCharacterFormSubmit(value) {
    api.getByCharacter(value).then((res) => {
      setQuote(res.quote)
      setCharacter(res.character)
    })
  }

  return (
    <div className="App">
      <header></header>
      <main>
        <Form label="Title name" onSubmit={onTitleFormSubmit} />
        <Form label="Character name" onSubmit={onCharacterFormSubmit} />
        <Quote character={character} quote={quote} />
      </main>
      <footer></footer>
    </div>
  )
}

export default App
