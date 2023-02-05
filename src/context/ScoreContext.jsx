import { createContext, useReducer, useEffect } from 'react'

const ScoreContext = createContext()

const initialState = {
  score: Number(localStorage.getItem('score')) ?? 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, score: state.score + 1 }
    case 'SUBTRACT':
      return { ...state, score: state.score > 0 ? state.score - 1 : 0 }
    default:
      return state
  }
}

function ScoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('score', state.score)
  }, [state.score])

  return <ScoreContext.Provider value={{ state, dispatch }}>{props.children}</ScoreContext.Provider>
}

export { ScoreContext, ScoreProvider }
