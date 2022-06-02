import AudioPlayer from "./audio-player";
import formatChars from "./text-box";
import questions from "./example-question.json"
import {useState, useRef} from "react";
import InputMask from "react-input-mask";

function AnimeGame() {
  // Hooks
  const [correct, setCorrect] = useState()
  const [answer, setAnswer] = useState()
  const [show, setShow] = useState(0)
  const [count, setCount] = useState(0)
  const [numCorrect, setNumCorrect] = useState(0)
  const time = useRef()

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

    setAnswer(x)
    const abs_diff = Math.abs(x - questions[count]["correct-answer"]);
    const isCorrect = abs_diff <= 2
    setCorrect(isCorrect)
    if (isCorrect) {
      setNumCorrect(numCorrect + 1)
    }
  }

  // Handlers
  const handleNext = () => {
    if (count === 10) {
      setShow(2)
      return
    }
    setShow(0)
    setCount(count + 1)
  }

  const handleEnter = () => {
    if (!time.current.value || time.current.value.charAt(3) === ' ') {
      alert("Please enter a complete value first.")
      return
    }
    verifyAnswer()
    setShow(1)
  }

  if (show === 0) {
    return (
        <div className="container">
          <h2>Anime: {questions[count].anime}</h2>
          <h2>Song: {questions[count]["song-title"]}</h2>
          <h3>By {questions[count].artist}</h3>
          <AudioPlayer driveLink={questions[count]["drive-link"]}/>
            <InputMask
                formatChars={formatChars}
                maskChar=" "
                className="form-control w-auto"
                mask='9:59'
                ref={time}>
            </InputMask>

          <button onClick={handleEnter} className="btn btn-primary">Enter
          </button>
        </div>
    );
  } else if (show === 1) {
    return (
    <div className="container justify-content-center">
      {correctness()}
      <div>
        You said: {answer}
      </div>
      <div>
        Actual: {questions[count]["correct-answer"]}
      </div>
      <iframe height="360px" width="640px"
        src={questions[count]["youtube-link"]}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    <br/>
      <button onClick={handleNext} className="btn btn-primary">Next</button>
    </div>
  );
  } else if (show === 2)
    return(
        <div className="container">
          <h1>Finished!</h1>
          <h2>You got: {numCorrect}/10 right!</h2>
        </div>);
}

export default AnimeGame;