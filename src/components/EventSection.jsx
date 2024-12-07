import React from 'react'
import { eventData } from '../data/eventData'
import EventCard from './EventCard'
import './EventSection.css'

// const formatEventDate = (date) => {
//   const today = new Date();
//   const [month, day, year] = date.split('-'); // Assuming date format is MM-DD-YYYY
//   const eventDate = new Date(`${year}-${month}-${day}`);

//   return eventDate.toDateString() === today.toDateString() ? "Today" : date;
// };

const formatEventDate = (date) => {
  const today = new Date();
  
  // Parse the input date (e.g., "7 December,2024")
  const eventDate = new Date(date);

  // Format for comparison
  const todayDateString = today.toDateString(); // Today's date as a string
  const eventDateString = eventDate.toDateString(); // Event date as a string

  // Compare the event date with today
  return eventDateString === todayDateString ? "Today" : date;
};

const EventSection = () => {

  const formattedEvents = eventData.map((event) => ({
    ...event,
    eventDate: formatEventDate(event.eventDate),
  }));
  // border b-[#EBEBEB]
  return (
    <div className=' bg-white w-full md:w-[453px] max-h-[332px] overflow-y-auto rounded-lg shadow-lg shadow-gray-300'>
       <p className='p-4'>Events</p>

       <div>
        {
          formattedEvents.map((event)=>{
            return (
                <EventCard key={event.id} eventData={event}/>
            )
          })
        }
       </div>

    </div>
  )
}

export default EventSection