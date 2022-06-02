import {useLocation} from 'react-router-dom'

const NavigationBar = () => {
  const location = useLocation()
  const about = location.pathname === "/about"
  return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={about? "nav-link" : "nav-link active"} href="/">{about? "Start" : "Restart"} <span
                className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className={about? "nav-link active" : "nav-link"} href="/about">About</a>
          </li>
        </ul>
      </nav>
  );
}

export default NavigationBar;