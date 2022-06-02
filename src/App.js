import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import AnimeGame from "./components";

function App() {
  return (
      <div>
        <div className="row mt-2">
          <h1 className="text-center">Guess the Point in the Anime Opening Song at Which a Character Starts Running</h1>
        </div>
        <AnimeGame/>
      </div>
  );
}

export default App;
