import React from 'react'

const EventCard = ({eventData}) => {
  return (
    <div className='flex flex-row justify-between p-1'>

      <div className='flex flex-row gap-3  items-center p-4 '>
        
        <img src={eventData.imagePath} alt="event-profile"/>

        <div className='flex flex-col'>
                <p>{eventData.eventOwner}</p>
                <div className='flex flex-col md:flex-row gap-1 text-[14px]'>

                  <div className='flex flex-row space-x-1'>
                    <p>{eventData.greetingImage}</p>
                  <p className={`${eventData.eventDate === "Today" ? 'text-[#1E88E5]' : ''}`}>{eventData.eventName} <span className='text-[#C7C8D9]'>.</span></p>
                  </div>

                  <p>{eventData.eventDate}</p>
                </div>
        </div>

      </div>

      <div className='flex items-center p-1'>
        { 
          eventData.eventDate === "Today" ? (<p className='bg-[#1E88E5] text-white px-[8px] py-[4px] rounded-md'>
          {eventData.greetingMsg}</p>) : ("")
          
        }
        
      </div>

    </div>
  )
}

export default EventCard