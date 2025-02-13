// import React from 'react'
import QuantitySelector from "./QuantitySelector"


function TicketType({ticketDesc, selectedTicketType, setSelectedTicketType,  quantity, setQuantity, onNext, onCancel}) {
    
    function handleActiveType(id){
        setSelectedTicketType(id)
    }

  return (
    <>
        <section>
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
                })}
            </div>
        </section>
        <section>
            <p className="text-[20px] font-bold mb-3">Number of Tickets</p>
            <QuantitySelector/>
        </section>
        
    </>
  )
}

export default TicketType