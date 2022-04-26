import {useState} from 'react'

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients."
  ];

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0)) // Luodaan nollilla täytetty useState-taulukko, jonka pituus on sama kuin anecdotes
  const [selected, setSelected] = useState(0)
  const [mostPopularAnecdote, setMostPopularAnecdote] = useState(0)

  // funktio vote napin painallukseen
  const handleVoteClick = () => {
    const temp = [...points] // luodaan kopio points taulukosta
    temp[selected] += 1 // inkrementoidaan valittua anekdoottia vastaavaa laskuria
    setPoints(temp) // asetetaan uusi taulukko

    // jos uusi arvo on suurempi, kuin nykyinen suurin arvo, niin
    if(temp[selected] > temp[mostPopularAnecdote]) {
      setMostPopularAnecdote(selected) // asetetaan valittu anekdootti suosituimmaksi
    }
  }

  // palauttaa satunnaisen luvun 0:n ja (anekdoottilistan pituus - 1):n väliltä
  const handleNextClick = () => {
    setSelected((Math.floor(Math.random()*100)) % (anecdotes.length))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p> has {points[selected]} votes.</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleNextClick}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostPopularAnecdote]}</p>
      <p>has {points[mostPopularAnecdote]} votes.</p>
    </div>
  )
}

export default App
