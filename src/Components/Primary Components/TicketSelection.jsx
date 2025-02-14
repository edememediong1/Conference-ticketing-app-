import TicketType from "../Secondary Components/TicketType"

function TicketSelection({ticketDesc, selectedTicket, setSelectedTicket,  quantity, setQuantity, onNext, onCancel}) {
  return (
    <div className="w-[90%] bg-[#08252B] ms:bg-[#041E23] p-[24px] border-[#197686] border-[1px] ms:w-[60%] md:w-[60%] md:p-[48px] rounded-2xl space-y-6 mt-[20vh]">
        <section className="flex-col justify-center items-center space-y-3">
            <div className="text-white md:flex md:justify-between md:items-center">
                <h1 className="text-[24px] md:text-[32px]">Ticket Selection</h1>
                <p>Step 1/3</p>
            </div>
            <div className="bg-[#0E464F] h-[4px] w-full rounded-sm">
                <div className='h-full w-1/3 bg-[#24A0B5] rounded-sm'></div>
            </div>
        </section>
        <article className="space-y-6 bg-[#08252B] ms:p-[24px] ms:border-[1px] ms:border-[#197686] ms:rounded-[24px]">
            <div className="banner min-h-[243px] p-[10px] md:p-[24px] text-white text-center text-[14px] flex-col justify-center items-center space-y-4">
                <h1 className="banner-head text-[42px] md:text-[62px]">Techember Fest &apos;&apos;25</h1>
                <p className="">Join us for an unforgettable experience at Techember Fest! Secure your spot now!</p>
                <p>📍 Daily Times Hall, Abuja || March 15th, 2025 || 9PM</p>
            </div>

            <hr className="bg-[#07373F] h-[4px] rounded-sm"/>
            <div className="text-white">
                <TicketType
                    ticketDesc={ticketDesc}
                    selectedTicketType={selectedTicket} 
                    setSelectedTicketType={setSelectedTicket}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    onNext={onNext}
                    onCancel={onCancel}
                />
            </div>

        </article>
    </div>
  )
}

export default TicketSelection