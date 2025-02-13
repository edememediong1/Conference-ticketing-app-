// import React from 'react'


function TicketType({ticketDesc, selectedTicketType, setSelectedTicketType,  quantity, setQuantity, onNext, onCancel}) {
    
    function handleActiveType(id){
        setSelectedTicketType(id)
    }

  return (
    <div className="flex flex-col gap-3 md:grid ms:grid-cols-2">
        {ticketDesc.map((data) => {
            return <div key={data.id} className={`p-3 rounded-md flex justify-between  border-[#07373F] border-[1px] ${selectedTicketType == data.id ? "bg-[#197686]" : "bg-[#052228]" }`} onClick={() => handleActiveType(data.id)}>
                <div className="flex flex-col gap-3">
                    <p>{data.categories}</p>
                    <p>{data.slots} slots left!</p>
                </div>
                <p className={`bg-[#07373F] border-[#2BA4B9] border-[1px] w-[80px] flex justify-center items-center rounded-md h-[80%]`}>{data.price == 0 ? "Free": `$${data.price}`}</p>
            </div> 
        })}

    </div>
  )
}

export default TicketType