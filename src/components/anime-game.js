import formatChars from "./game-components/text-box";
import {useState, useRef, useEffect} from "react";
import InputMask from "react-input-mask";
import {fetchQuestionByID} from "../services/questions-service";

function AnimeGame() {
  // Hooks
  const [correct, setCorrect] = useState()
  const [show, setShow] = useState(-1)
  const [count, setCount] = useState(0)
  const [numCorrect, setNumCorrect] = useState(0)
  const [question, setQuestion] = useState({})
  const [max, setMax] = useState(11);
  const time = useRef()
  const audio = useRef()
  const [array, setArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const shuffle = () => {
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    setArray(shuffledArray)
  }

  const getNextQuestion = async (idx) => {
    const nextQuestion = await fetchQuestionByID(idx)
    setQuestion(nextQuestion)
  }

  useEffect(() => {
    if (audio.current) {
      audio.current.load();
    }
  }, [question])

  // Helpers
  const correctness = () => {
    if (correct) {
      return <h3 className="text-center text-primary">CORRECT!</h3>
    }
    return <h3 className="text-center text-secondary">INCORRECT!</h3>
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
      return (
          <div className="container mt-2">
            <div className="form-group">
              <h2 className="text-center"><label htmlFor="formControlRange">Select number of
                questions: </label></h2>
              <div className="d-flex justify-content-center align-items-center">
                <input type="range" className="form-range w-25"
                       id="formControlRange" min="1" max="11"
                       onChange={e => setMax(e.target.value)}/>
                <h3 className="d-inline-flex mx-2">{max}</h3>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <button onClick={handleBegin}
                    className="btn btn-primary rounded">Start Playing
            </button>
            </div>
          </div>);
    case 0:
      return (
          <div className="container mt-2">
            <div className="clearfix">
              <h4 className="float-end">Current Score: {numCorrect}/{count}</h4>
            </div>
            <h3 className="text-center">Anime: {question.anime}</h3>
            <h4 className="text-center">Song: {question["song-title"]}</h4>
                <h4 className="text-center">By {question.artist}</h4>
                <div className="d-flex justify-content-center align-items-center">
                  <audio className="container-audio" controls autoPlay={false}
                         loop={false} ref={audio}>
                    <source
                        src={`https://drive.google.com/uc?export=view&id=${question["drive-link"]}`}/>
                  </audio>
                </div>
                <form className="mt-2 d-flex justify-content-center align-items-center" onSubmit={handleEnter}>
                  <InputMask
                      formatChars={formatChars}
                      maskChar=" "
                      className="form-control rounded w-auto d-inline-block align-middle"
                      mask='9:59'
                      ref={time}>
                  </InputMask>
                  <button onClick={handleEnter}
                          className="btn btn-primary rounded mx-1">Enter
                  </button>
                </form>
          </div>
      );
    case 1:
      return (
          <div className="container mt-2">
            <div className="clearfix">
              <h4 className="float-end">Current Score: {numCorrect}/{count + 1}</h4>
            </div>
              {correctness()}
            <div className="text-center">
              You said: {time.current.value}
            </div>
            <div className="text-center">
              Actual: {question["answer-string"]}
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="ratio ratio-16x9 w-50 my-2">
                <iframe src={question["youtube-link"]}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button onClick={handleNext}
                      className="btn btn-primary rounded">Next
              </button>
            </div>
          </div>
      );
    case 2:
      return (
          <div className="container mt-2">
            <h1 className="text-center">Finished!</h1>
            <h2 className="text-center">You got: {numCorrect}/{max} right!</h2>
          </div>);
    default:
      return <p>Error</p>
  }
}

export default AnimeGame;