import { arrow, logoIcon, ticz } from "../../images"



function Navbar() {
  return (
    <nav className="navbar flex justify-between w-[85%] border-[#197686] border-[1px] bg-[rgba(5, 37, 44, 0.40)] h-[60px] md:h-[76px] py-[12px] px-[16px] rounded-[24px] items-center">
        <div className="flex gap-[8px]">
            <img src={logoIcon} alt="logoIcon" />
            <img src={ticz} alt="ticz" />
        </div>
        <ul className="text-[#B3B3B3] hidden md:flex md:gap-[16px] md:justify-between md:items-center">
            <li>Events</li>
            <li>My Tickets</li>
            <li>About Projects</li>
        </ul>
        <button className="bg-white flex justify-center items-center h-[44px] w-[141px] rounded-[12px] md:h-[52px] md:w-[169px]"><span>My Tickets </span><img src={arrow} alt="arrow" /></button>
    </nav>
  )
}

export default Navbar