import React, { useState } from 'react'

const Anecdote = ({anecdotes, votes}) => {
  return (
    <>
      {anecdotes}
      <br></br>
      <div>has {votes} votes</div>
    </>
  )
}

const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>{text}</button>
  )
  }
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const getNextAnecdote = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randNum)
  }
  const handleVote = () => {
    const updatedPoints = [...points];
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
  } 
  const getMostVotedAnecdoteIndex = () => {
    var max = points[0];
    var index = 0;
    for (let i = 0; i < points.length; i++) {
      if (points[i] > max) {
        index = i;
        max = points[i];
      }
    }
    return index;
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes[selected]} votes={points[selected]}/>

      <br></br>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={getNextAnecdote} text="next anecdote" />
     
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes[getMostVotedAnecdoteIndex()]} votes={points[getMostVotedAnecdoteIndex()]}/>
    </>
  )
}

export default App