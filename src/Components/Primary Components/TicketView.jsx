import React from 'react'

function TicketView() {
  return (
    <div className=" w-[90%] bg-[#08252B] ms:bg-[#041E23] p-[24px] border-[#197686] border-[1px] ms:w-[60%] md:w-[55%] md:p-[48px] rounded-2xl space-y-6">
        <section className="flex-col justify-center items-center space-y-3">
            <div className="text-white md:flex md:justify-between md:items-center">
                <h1 className="text-[24px] md:text-[32px]">Attendee Details</h1>
                <p>Step 3/3</p>
            </div>
            <div className="bg-[#0E464F] h-[4px] w-full rounded-sm"></div>
        </section>

        <section className='text-white text-center'>
            <p className='text-[24px] md:text-[32px]'>Your Ticket is Booked</p>
            <p>Check your email for a copy or you can <strong>download</strong></p>
        </section>

        <section className='card h-50 border-[#197686] border-[1px] w-[70%] m-auto' >
            Body
        </section>

    </div>
  )
}

export default TicketView