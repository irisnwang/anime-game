const AboutPage = () => {
  return (
      <div className="container mt-2 row">
        <div className="col">

          <p>
            This game is developed by Iris Wang.
          </p>
          <p>
            There is a common <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/CreditsRunningSequence">trope</a> in 2000s anime openings that characters are always running.
            This game is a riff on that because it often (but not always!) coincides with some sort of dramatic beat drop.
          </p>
          <p>
            Some background info about the game: openings are chosen arbitrarily by animes I know/like.
            What determines "a character starts running" is as follows:
            <ol>
              <li>A character is running in the frame during the timestamp and was not running in the previous frame</li>
              <li>The character is not running in the context of some other action (therefore, a lot of
                sports and action animes didn't make the cut as characters were playing the sport or fighting)</li>
              <li>The character is running for at least a few seconds, or performing the run-up to a leap</li>
              <li>If there is more than one running sequence in the opening, the timestamp corresponds to the first such sequence</li>
            </ol>
            If this seems not-that-logical, it's because I made this app for fun and it doesn't have to make sense.
          </p>
        </div>
        <div className="col-lg">
          <img className="img-fluid" src="https://animesher.com/orig/1/155/1552/15526/animesher.com_love-live-sunshine-kanan-kawaii-1552687.gif" alt="little demon..."/>
          <img className="img-fluid" src="https://animesher.com/orig/1/163/1631/16313/animesher.com_love-live-anime-girl-love-live-sunshine-1631306.gif" alt="shiny neesan"/>
        </div>
      </div>
  )
}

export default AboutPage