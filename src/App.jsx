import { useState } from "react"
import Navbar from "./Components/Primary Components/Navbar"
import TicketSelection from "./Components/Primary Components/TicketSelection"


function App() {
  const ticketDesc = [
    {
        categories: "REGULAR ACCESS",
        slots: 50,
        price: 0,
        id: 1

    },
    {
        categories: "VIP ACCESS",
        slots: 20,
        price: 100,
        id: 2   
    },
    {
        categories: "VIP ACCESS",
        slots: 5,
        price: 150,
        id: 3  
    }
  ]

  const [step, setStep] = useState(1)
  const [selectedTicketType, setSelectedTicketType] = useState(null)
  const [quantity, setQuantity] = useState(0)
  const [userDetails, setUserDetails] = useState({
    image: null,
    name: "",
    email: "",
    about: ""
  })
    
  function handleNext(){
    setStep(step + 1)
  }

  function handleBack(){
    setStep(step - 1)
  }

  function handleCancel(){
    setStep(1)
    setSelectedTicketType(null)
    setQuantity(0)
    setUserDetails({
      image: null,
      name: "",
      email: "",
      about: ""
    })
    // localStorage.removeItem("ticketBookingData")
  }


  return(
    <div className="body flex flex-col justify-start items-center gap-10">
        <Navbar />
        <TicketSelection handleActiveType={handleActiveType} selectedTicketType={selectedTicketType} ticketDes={ticketDesc}/>
    </div>
  )
}

export default App