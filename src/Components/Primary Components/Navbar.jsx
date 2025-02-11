import { arrow, logoIcon, ticz } from "../../images"



function Navbar() {
  return (
    <nav>
        <div>
            <img src={logoIcon} alt="logoIcon" />
            <img src={ticz} alt="ticz" />
        </div>
        <ul>
            <li>Events</li>
            <li>My Tickets</li>
            <li>About Projects</li>
        </ul>
        <button>My Tickets <span><img src={arrow} alt="arrow" /></span></button>
    </nav>
  )
}

export default Navbar