import { useState, useEffect } from "react"
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
  
  useEffect(() => {
    //Load saved data from Localstorage when the component mounts

    const savedData = localStorage.getItem("ticketBookingData")
      if (savedData) {
        const parsedData = JSON.parse(savedData)
        setStep(parsedData.step)
        setSelectedTicketType(parsedData.selectedTicketType)
        setQuantity(parsedData.quantity)
        setUserDetails(parsedData.userDetails)
      }
  }, [])

  useEffect(() => {
    //Save data to localStorage whenever it changes
    const dataToSave = {
      step,
      selectedTicketType,
      quantity,
      userDetails
    }

    localStorage.setItem("ticketBookingData", JSON.stringify(dataToSave))
  }, [step, selectedTicketType, quantity, userDetails])
  
    
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