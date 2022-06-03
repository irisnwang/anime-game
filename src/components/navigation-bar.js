import {useLocation} from 'react-router-dom'

const NavigationBar = () => {
  const location = useLocation()
  const pathname = location.pathname
  return(
      <nav className="navbar-expand navbar-light bg-light">
        <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={pathname === "/play"? "active nav-link" : "nav-link"} href="/play">{pathname === "/play"? "Restart" : "Start"} <span
                className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className={pathname === "/rules"? "nav-link active" : "nav-link"} href="/rules">How to Play</a>
          </li>
          <li className="nav-item">
            <a className={pathname === "/about"? "nav-link active" : "nav-link"} href="/about">About</a>
          </li>
        </ul>
          </div>
      </nav>
  );
}

export default NavigationBar;