import AudioPlayer from "./game-components/audio-player";
import formatChars from "./game-components/text-box";
import questions from "./game-components/example-question.json"
import {useState, useRef} from "react";
import InputMask from "react-input-mask";
// import {fetchQuestionByID} from "../services/questions-service";

function AnimeGame() {
  // Hooks
  const [correct, setCorrect] = useState()
  const [show, setShow] = useState(-1)
  const [count, setCount] = useState(0)
  const [numCorrect, setNumCorrect] = useState(0)
  const [question, setQuestion] = useState({})
  const [max, setMax] = useState(11);
  const time = useRef()
  const [array, setArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const shuffle = () => {
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    setArray(shuffledArray)
  }

  const getNextQuestion = (idx) => {
    // const nextQuestion = fetchQuestionByID(idx)
    const nextQuestion = questions[idx]
    setQuestion(nextQuestion)
    // console.log(idx)
  }

  // Helpers
  const correctness = () => {
    if (correct) {
      return <h1>CORRECT!</h1>
    }
    return <h1>INCORRECT!</h1>
  }

  const verifyAnswer = () => {
    let x = parseInt(time.current.value.charAt(0)) * 60
    x = x + parseInt(time.current.value.charAt(2)) * 10
    x = x + parseInt(time.current.value.charAt(3))

    const abs_diff = Math.abs(x - question["correct-answer"]);
    const isCorrect = abs_diff <= 2
    setCorrect(isCorrect)
    if (isCorrect) {
      setNumCorrect(numCorrect + 1)
    }
  }

  // Handlers
  const handleNext = () => {
    if (count === max - 1) {
      setShow(2)
      return
    }
    setShow(0)
    setCount(count + 1)
    getNextQuestion(array[count + 1])
  }

  const handleEnter = () => {
    if (!time.current.value || time.current.value.charAt(3) === ' ') {
      alert("Please enter a complete value first.")
      return
    }
    verifyAnswer()
    setShow(1)
  }

  const handleBegin = () => {
    shuffle();
    getNextQuestion(array[count]);
    setShow(0);
  }

  switch (show) {
    case -1:
      return (<div className="container mt-2">
        <div className="form-group">
          <h2><label htmlFor="formControlRange">Select number of questions: </label></h2>
          <input type="range" className="form-control-range w-25"
                 id="formControlRange" min="1" max="11" onChange={e => setMax(e.target.value)}/>
          <h5 className="d-inline-flex mx-2">{max}</h5>
        </div>
        <button onClick={handleBegin} className="btn btn-primary">Start Playing
        </button>
      </div>);
    case 0:
      return (
          <div className="container mt-2">
            <h2>Anime: {question.anime}</h2>
            <h2>Song: {question["song-title"]}</h2>
            <h3>By {question.artist}</h3>
            <AudioPlayer driveLink={question["drive-link"]}/>
              <InputMask
                  formatChars={formatChars}
                  maskChar=" "
                  className="form-control w-auto d-inline-block align-middle"
                  mask='9:59'
                  ref={time}>
              </InputMask>
              <button onClick={handleEnter} className="btn btn-primary mx-1">Enter</button>

          </div>
      );
    case 1:
      return (
          <div className="container mt-2">
            {correctness()}
            <div>
              You said: {time.current.value}
            </div>
            <div>
              Actual: {question["answer-string"]}
            </div>
            <div className="ratio ratio-16x9 w-50">
              <iframe src={question["youtube-link"]}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen/>
            </div>
            <button onClick={handleNext} className="btn btn-primary">Next
            </button>
          </div>
      );
    case 2:
      return (
          <div className="container mt-2">
            <h1>Finished!</h1>
            <h2>You got: {numCorrect}/{max} right!</h2>
          </div>);
    default:
      return <p>Error</p>
  }
}

export default AnimeGame;