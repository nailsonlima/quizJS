import {useContext} from 'react'
import { QuizContext } from '../context/quiz'

import WellDone from '../img/WellDone.svg'

import './GameOver.css'

function GameOver() {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>Fim de JOGO!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={WellDone} alt="fim do quiz" />
        <button onClick={()=> dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver