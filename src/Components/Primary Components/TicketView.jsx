// import React from 'react'

function TicketView() {
  return (
    <div className=" w-[90%] bg-[#08252B] ms:bg-[#041E23] p-[24px] border-[#197686] border-[1px] ms:w-[70%] md:w-[55%] md:p-[48px] rounded-2xl space-y-6">
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

        <section className='card border-[#197686] border-[1px] w-[400px] ms:w-[80%] m-auto h-[600px]' >
            <div>
                <div className="w-full text-white">
                    <div className="border-[1px] border-[#197686] flex flex-col justify-center items-center">
                        <h1>Techember Fest&apos;25</h1>
                        <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                        <p>📅 March 15, 2025 | 7:00 PM</p>

                        <div className="w-[140px] h-[140px] border-[4px] border-[#197686] ">
                            <img src="" alt="image display" />
                        </div>

                        <div>
                            <div>
                                <p>Enter your name</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Enter your email</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Ticket Type</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Ticket for</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Special request?</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>

            </div>
        </section>

    </div>
  )
}

export default TicketView