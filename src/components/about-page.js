const AboutPage = () => {
  return (
      <div className="container">
        <p>
          This game is developed by Iris Wang.
        </p>
        <p>
          Some background info about the game: openings are chosen arbitrarily by animes I know/like.
          What determines "a character starts running" is as follows:
          <ol>
            <li>A character is running in the frame during the timestamp and was not running in the previous frame</li>
            <li>The character is not running in the context of some other action (therefore, a lot of
            sports and action animes didn't make the cut as characters were playing the sport or fighting)</li>
            <li>The character is running for at least a few seconds, or performing the run-up to a leap</li>
          </ol>
          If this seems not-that-logical, it's because I made this app for fun and it doesn't have to make sense.
        </p>

      </div>
  )
}

export default AboutPage