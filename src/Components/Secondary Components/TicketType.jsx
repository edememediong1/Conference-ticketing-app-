// import React from 'react'

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

  return (
    <div>
        {ticketDesc.map((data) => {
            return <div key={data.id} className="flex ">
                <div>
                    <p>{data.categories}</p>
                    <p>{data.slots}slots left!</p>
                </div>
                <p>{data.price == 0 && "Free"}</p>
            </div> 
        })}

    </div>
  )
}

export default TicketType