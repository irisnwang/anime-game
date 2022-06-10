import {useLocation} from 'react-router-dom'

const NavigationBar = () => {
  const location = useLocation()
  const pathname = location.pathname
  const yuuri = "https://i.imgur.com/xtQ3JpV.gif";
  const yuki = "https://i.imgur.com/QIcLcXp.gif";
  const miki = "https://i.imgur.com/wB3RqQ8.gif";
  return (
      <nav className="navbar navbar-expand navbar-dark bg-primary p-2">
        <div className="container-fluid">
          <a className={pathname === "/play" ? "ms-2 active navbar-brand"
              : "ms-2 navbar-brand"} href="/play">{pathname === "/play" ? "Restart"
              : "Start"} </a>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">

            </li>
            <li className="nav-item">
              <a className={pathname === "/rules" ? "nav-link active"
                  : "nav-link"} href="/rules">How to Play</a>
            </li>
            <li className="nav-item">
              <a className={pathname === "/about" ? "nav-link active"
                  : "nav-link"} href="/about">About</a>
            </li>
          </ul>
        </div>
          <img className="wd-20p me-2" src={miki} alt="penis"/>
          <img className="wd-20p me-2" src={yuuri} alt="penis"/>
        <img className="wd-20p me-2" src={yuki} alt="penis"/>

      </nav>
  );
}

export default NavigationBar;