const HomePage = () => {
  return (
      <div className="container mt-2">
        <p>
          There is a common <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/CreditsRunningSequence">trope</a> in 2000s anime openings that characters are always running.
        </p>
        <p>The rules are simple: listen to the audio and guess the timestamp at which a character begins running in the anime op.</p>
        <p>After each question, the correct answer and a clip of the character running at that timestamp will be shown.
          After all questions are answered, the final score will be shown.</p>
        <p>There are currently 11 possible questions, so currently you can pick between 1 and 11 questions to guess.</p>
      </div>
  )
}

export default HomePage