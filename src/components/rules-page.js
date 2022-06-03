const RulesPage = () => {
  return (
      <div className="container mt-2">
        <p>First, choose how many questions will be in the quiz. There are 11 possible questions, so a number 1-11 must be chosen.</p>
        <p>
          Listen to the audio and guess the timestamp at which a character begins running in the anime op.
          To account for human error in deciding when exactly the character begins running, and so that the game is not overly
          difficult, there is a ±2 second window for the answer to count as correct.
        </p>
        <p>After each question, the correct answer and a clip of the character running at that timestamp will be shown.</p>
        <p>After all questions are answered, the final score will be shown.</p>

      </div>
  )
}

export default RulesPage