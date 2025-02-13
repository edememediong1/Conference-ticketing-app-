// import React from 'react'
import { useState } from "react"
import QuantitySelector from "./QuantitySelector"


function TicketType({ticketDesc, selectedTicketType, setSelectedTicketType,  quantity, setQuantity, onNext, onCancel}) {
    
    const [error, setError] = useState("")

    function handleActiveType(id){
        setSelectedTicketType(id)
        setQuantity(0)
        setError("")
    }

    function handleQuantityChange(newQuantity) {
        setQuantity(newQuantity)
        setError("")
    }

    function handleNext(){
        if(!selectedTicketType){
            setError("Please select a ticket type.")
        } else if (quantity === 0) {
            setError('Please select a quantity.')
        } else {
            onNext()
        }
    }

    
    const selectedTicketData = selectedTicketType ? ticketDesc.find((ticket) => ticket.id === selectedTicketType) : null
  return (
    <>
        <section >
            <p className="text-[20px] mb-3">Select Ticket Type</p>
            <div className="flex flex-col gap-3 md:grid ms:grid-cols-2 border-[#07373F] border-[1px] rounded-[24px] p-5">
                {ticketDesc.map((data) => {

                    return <div key={data.id} className={`p-3 rounded-[15px] flex justify-between  border-[#07373F] border-[1px] text-[14px] ${selectedTicketType == data.id ? "bg-[#197686]" : "bg-[#052228]" }`} onClick={() => handleActiveType(data.id)}>
                        <div className="flex flex-col gap-3">
                            <p>{data.categories}</p>
                            <p>{data.slots} slots left!</p>
                        </div>
                        <p className={`bg-[#07373F] border-[#2BA4B9] border-[1px] w-[80px] flex justify-center items-center rounded-md h-[80%]`}>{data.price == 0 ? "Free": `$${data.price}`}</p>
                    </div> 
                })

                }
            </div>
        </section>
        {selectedTicketData && (
        <section>
            <p className="text-[20px] font-bold mb-3">Number of Tickets</p>
            <QuantitySelector
                quantity={quantity}
                maxQuantity={selectedTicketData.slots}
                onQuantityChange={handleQuantityChange}
            />
        </section>)}
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-col gap-4 md:flex md:flex-row-reverse md:justify-around mt-6 md:px-8 md:border-[#07373F] md:border-[1px] md:rounded-[12px]">
            <button className=" w-full p-[12px] border-[#24A0B5] border-[1px] hover:bg-[#24A0B5] text-white rounded-[12px]" onClick={handleNext}>
                Next
            </button>
            <button className="w-full p-[12px] border-[#24A0B5] border-[1px] hover:bg-[#24A0B5] text-white rounded-[12px]" onClick={onCancel}>
                Cancel
            </button>
        </div>
        
    </>
  )
}

export default TicketType