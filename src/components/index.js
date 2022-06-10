import NavigationBar from "./navigation-bar";
import {Outlet} from "react-router-dom";

function Game() {
  return (
      <div className="my-4">
        <div className="row mt-2">
          <h1 className="text-center">
            <a href="/" className="text-decoration-none">Guess the Point in the Anime Opening Song at Which a Character Starts Running</a>
          </h1>
        </div>
        <div className="container">
          <NavigationBar/>
          <Outlet/>
        </div>
      </div>
  );
}

export default Game;
