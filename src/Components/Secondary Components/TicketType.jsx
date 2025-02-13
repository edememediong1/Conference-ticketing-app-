// import React from 'react'
import { useState } from "react"

function TicketType() {
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

    const [selectedTicketType, setSelectedTicketType] = useState(null)
    

    function handleActiveType(id){
        setSelectedTicketType(id)
    }

  return (
    <div className="flex flex-col gap-3 ms:grid ms:grid-cols-2">
        {ticketDesc.map((data) => {
            return <div key={data.id} className={`p-3 rounded-md flex justify-between  border-[#07373F] border-[1px] ${selectedTicketType == data.id ? "bg-[#197686]" : "bg-[#052228]" }`} onClick={() => handleActiveType(data.id)}>
                <div className="flex flex-col gap-3">
                    <p>{data.categories}</p>
                    <p>{data.slots} slots left!</p>
                </div>
                <p className={`bg-[#07373F] border-[#2BA4B9] border-[1px] w-[80px] flex justify-center items-center rounded-md`}>{data.price == 0 ? "Free": `$${data.price}`}</p>
            </div> 
        })}

    </div>
  )
}

export default TicketType