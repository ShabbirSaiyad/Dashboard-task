import React from 'react'

const FinanceOverviewCard = ({field, imagePath,amount}) => {
    return (
        
            <div className='rounded-md bg-white w-full md:w-[263px] p-5 relative border b-[#EBEBEB]'>

                <p>{amount}</p>
                <p className='text-[#767676] mb-5'>{field}</p>
                <img src={imagePath} alt={field} className='absolute bottom-0 right-[20px] top-18 ' />

            </div>
        

    )
}

export default FinanceOverviewCard