import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Game from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AnimeGame from "./components/anime-game";
import AboutPage from "./components/about-page";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Game />}>
              <Route index
                     element={<AnimeGame />} />
              <Route path="about"
                     exact={true}
                     element={<AboutPage/>} />

            </Route>
          </Routes>
        </div>
      </BrowserRouter>  );
}

export default App;
