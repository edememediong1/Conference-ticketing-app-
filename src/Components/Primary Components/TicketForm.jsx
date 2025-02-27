// import React from 'react'
import { useState } from "react"
import upload from "../../assets/Icon/cloud-download.svg"

function TicketForm({userDetails, setUserDetails, onNext, onBack}) {
    
    const [error, setError] = useState("")

    const handleChange = (e) => {
      const { name, value } = e.target
      setUserDetails((prev) => ({ ...prev, [name]: value }))
    }
    
    const handleImageChange = async(e) => {
        const file = e.target.files[0]
        console.log(file)

        if (!file) {
            return
        }

        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "the_architect")
        data.append("cloud_name", "dom0lws7q")

        const res = await fetch("https://api.cloudinary.com/v1_1/dom0lws7q/image/upload", {
            method: "POST",
            body: data
        })

        const uplodedImageUrl = await res.json()
        console.log(uplodedImageUrl.url)
        setUserDetails((prev) => ({ ...prev, image: uplodedImageUrl.url}))
        // if (file) {
        //   const reader = new FileReader()
        //   reader.onloadend = () => {
        //     setUserDetails((prev) => ({ ...prev, image: reader.result }))
        //   }
        //   reader.readAsDataURL(file)
        // }
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        if (!userDetails.name || !userDetails.email || !userDetails.image) {
          setError("Please fill in all fields and upload an image.")
        } else {
          onNext()
        }
      }
  
    return (
    <div className="w-[90%] text-white  bg-[#08252B] ms:bg-[#041E23] p-[24px] border-[#197686] border-[1px] ms:w-[60%] md:w-[60%] md:p-[48px] rounded-2xl space-y-6 mt-[20vh]">
        <section className="flex-col justify-center items-center space-y-3">
            <div className="text-white md:flex md:justify-between md:items-center">
                <h1 className="text-[24px] md:text-[32px]">Attendee Details</h1>
                <p>Step 2/3</p>
            </div>
            <div className="bg-[#0E464F] h-[4px] w-full rounded-sm">
                <div className='h-full w-2/3 bg-[#24A0B5] rounded-sm'></div>
            </div>
        </section>
        <form className="space-y-6 bg-[#08252B] ms:p-[24px] ms:border-[1px] ms:border-[#197686] ms:rounded-[24px]" onSubmit={handleSubmit}>
            <section>
                <p className='text-white mb-2'>Upload profile photo</p>
                <div className="bg-[#000] w-full h-auto flex justify-center items-center rounded-[12px]">
                    <div className= {`w-[240px] h-[240px] rounded-[12px] flex justify-center items-center p-4 text-center ${userDetails.image ? `bg-[url("${userDetails.image}")]` : "bg-[#0E464F]"}`}>
                        {/* {userDetails.image && <img src={userDetails.image} alt="image" />} */}
                        {userDetails.image && <img src={userDetails.image} className="w-full h-full"/>}
                        <label htmlFor="image" className=" font-roboto flex flex-col justify-center items-center gap-3">
                            <img src={upload} alt="upload" />
                            Drag & drop or click to upload
                        </label> 
                        
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 w-full hidden"
                        />
                    
                    </div>
                </div>
            </section>
            <div>
                <label htmlFor="name" className="text-[#FAFAFA]">
                    Enter your name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userDetails.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-[#0a8398] p-3 border-[1px] outline-0 focus:bg-[#08252B] rounded-12px"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-[#FAFAFA]">
                    Enter your email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-[#0a8398] p-3 border-[1px] outline-0 focus:bg-[#08252B] rounded-12px"
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-[#FAFAFA]">
                    About the Project
                </label>
                <textarea 
                    name="about" 
                    id="about"
                    value={userDetails.about}
                    onChange={handleChange}
                    className="text-white mt-1 block w-full rounded-md border-[#0a8398] p-3 border-[1px] outline-0 focus:bg-[#08252B] rounded-12px"
                    
                ></textarea>
        
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex flex-col gap-4 md:flex md:flex-row-reverse md:justify-around mt-6 md:px-8 md:border-[#07373F] md:border-[1px] md:rounded-[12px]">
                <button className=" w-full p-[12px] border-[#24A0B5] border-[1px] hover:bg-[#24A0B5] text-white rounded-[12px]" onClick={onNext}>
                    Next
                </button>
                <button className="w-full p-[12px] border-[#24A0B5] border-[1px] hover:bg-[#24A0B5] text-white rounded-[12px]" onClick={onBack}>
                    Back
                </button>
            </div>
        

        </form>
    </div>
  )
}

export default TicketForm