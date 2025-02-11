import Navbar from "./Components/Primary Components/Navbar"
import TicketSelection from "./Components/Primary Components/TicketSelection"


function App() {
  return(
    <div className="body h-screen flex flex-col justify-start items-center gap-10">
        <Navbar />
        <TicketSelection/>
    </div>
  )
}

export default App