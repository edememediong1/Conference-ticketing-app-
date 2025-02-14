// import React from 'react'

function TicketView({ticketDesc, selectedTicketType, quantity, userDetails, onCancel}) {
    
    const selectedTicketData = ticketDesc.find((ticket) => ticket.id=== selectedTicketType)
  
    return (
    <div className=" w-[90%] bg-[#08252B] ms:bg-[#041E23] p-[24px] border-[#197686] border-[1px] ms:w-[60%] md:w-[50%] md:p-[48px] rounded-2xl space-y-6 my-[20vh]">
        <section className="flex-col justify-center items-center space-y-3">
            <div className="text-white md:flex md:justify-between md:items-center">
                <h1 className="text-[24px] md:text-[32px]">Attendee Details</h1>
                <p className="font-roboto">Step 3/3</p>
            </div>
            <div className="bg-[#0E464F] h-[4px] w-full rounded-sm"></div>
        </section>

        <section className='text-white text-center font-roboto space-y-5 my-10'>
            <p className='text-[24px] md:text-[32px]'>Your Ticket is Booked</p>
            <p>Check your email for a copy or you can <strong>download</strong></p>
        </section>

        <section className='card  w-[300px] ms:w-[70%] m-auto h-[600px] p-5 ' >
            <div className="">
                <div className="w-full text-white border-[1px] border-[#197686] rounded-[24px] p-4">
                    <div className="border-[1px] border-[#197686] flex flex-col justify-center items-center p-[14px] rounded-[24px]">
                        <h1 className="font-rage text-[40px]">Techember Fest&apos;25</h1>
                        <p className="font-roboto">📍 04 Rumens road, Ikoyi, Lagos</p>
                        <p className="font-roboto">📅 March 15, 2025 | 7:00 PM</p>

                        <div className="w-[140px] h-[140px] border-[4px] border-[#197686] my-10 rounded-md">
                            {userDetails.image && <img src={userDetails.image} className="w-full h-full" alt="user image" />}
                        </div>

                        <div className=" w-full font-roboto grid grid-cols-2 bg-[#08343C] p-1 gap-1 rounded-[12px] border-[#133D44] border-[1.5px]">
                            <div className="border-[#133D44] border-r-[1.5px] p-2 border-b-[1.5px]">
                                <p className=" text-[#fff] text-[15px] opacity-[0.33] font-roboto font-[400]">Enter your name</p>
                                <p className="text-[14px] font-roboto font-[400]">{userDetails.name}</p>
                            </div>
                            <div className="border-[#133D44] p-2 border-b-[1.5px]">
                                <p className="text-[#fff] text-[15px] opacity-[0.33] font-roboto font-[400]">Enter your email</p>
                                <p className="text-[14px] font-roboto font-[400]">{userDetails.email}</p>
                            </div>
                            <div className="border-[#133D44] border-r-[1.5px] p-2 border-b-[1.5px]">
                                <p className='text-[#fff] text-[15px] opacity-[0.33] font-roboto font-[400]'>Ticket Type</p>
                                <p className="text-[14px] font-roboto font-[400]">{selectedTicketData.categories}</p>
                            </div>
                            <div className="border-[#133D44] p-2 border-b-[1.5px]">
                                <p className="text-[#fff] text-[15px] opacity-[0.33] font-roboto font-[400]">Ticket for</p>
                                <p className="text-[14px] font-roboto font-[400]">{quantity}</p>
                            </div>
                            <div className="py-3 p-2">
                                <p className="text-[#fff] text-[15px] opacity-[0.33] font-roboto font-[400]">Special request?</p>
                                <p className="text-[15px] font-roboto font-[400]">{userDetails.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>

            </div>
        </section>

        <div className="flex flex-col gap-4 md:flex md:flex-row-reverse md:justify-around mt-6 md:px-8 md:border-[#07373F] md:border-[1px] md:rounded-[12px]">
            <button className=" w-full p-[12px] border-[#24A0B5] border-[1px] hover:bg-[#24A0B5] text-white rounded-[12px]" >
                Download Ticket
            </button>
            <button className="w-full p-[12px] border-[#24A0B5] border-[1px] hover:bg-[#24A0B5] text-white rounded-[12px]" onClick={onCancel}>
                Book another ticket
            </button>
        </div>

    </div>
  )
}

export default TicketView