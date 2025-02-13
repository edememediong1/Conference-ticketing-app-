import React from 'react'

function TicketForm({userDetails, setUserDetails, onNext, onBack}) {
  return (
    <div className="w-[90%] bg-[#08252B] ms:bg-[#041E23] p-[24px] border-[#197686] border-[1px] ms:w-[60%] md:w-[60%] md:p-[48px] rounded-2xl space-y-6">
        <section className="flex-col justify-center items-center space-y-3">
            <div className="text-white md:flex md:justify-between md:items-center">
                <h1 className="text-[24px] md:text-[32px]">Attendee Details</h1>
                <p>Step 2/3</p>
            </div>
            <div className="bg-[#0E464F] h-[4px] w-full rounded-sm"></div>
        </section>
        <article className="space-y-6 bg-[#08252B] ms:p-[24px] ms:border-[1px] ms:border-[#197686] ms:rounded-[24px]">
            <section>
                
            </section>

        </article>
    </div>
  )
}

export default TicketForm