import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { tableData } from '../data/TableData';

// border b-[#EBEBEB]

const TableSection = () => {
  return (
    <div className='bg-white p-2 rounded-lg  shadow-lg shadow-gray-300'>

        <div className='flex justify-between p-4 '>
            <p>Current Projects</p>
            <button className='bg-[#1CD2AD] text-white px-[12px] py-[8px] rounded-md'>Create</button>
        </div>
       
        <div className="mt-4">
        <Table className="w-full">
      <Thead>
        <Tr>
          <Th className='text-left px-4 w-[292px]'>Project Name</Th>
          <Th className='text-left px-4 w-[291px]'>Customer</Th>
          <Th className='text-left px-4 w-[292px]'>Sent Date</Th>
          <Th className='text-left px-4 w-[202px]'>Amount</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
            tableData.map((item,index)=>{
                return(
                    <Tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-[#F9FBFB]"}`}>
                    <Td className='p-3 text-[#8E90A6]'>{item.projectName}</Td>
                    <Td className='p-3 text-[#8E90A6]'>{item.customer}</Td>
                    <Td className='p-3 text-[#8E90A6]' >{item.sentDate}</Td>
                    <Td className='flex flex-col md:flex-row gap-2 md:gap-11 p-2 text-[#8E90A6]'>
                        <p>{item.amount}</p>
                        { 
                        <p
                        className={`
                          ${
                            item.status === "REJECTED"
                              ? "bg-[#FEDBDB] text-[#EC4A4A]"
                              : item.status === "DRAFT"
                              ? "bg-[#AAAAAA33] text-[#AAAAAA]"
                              : "bg-[#E5F7FB] text-[#18C3D9]"
                          } p-2 mt-1 md:px-8 rounded-full text-center
                        `}
                      >
                        {item.status}
                      </p>
            }
                    </Td>
                  </Tr>
                )
            })
        }
       
      </Tbody>
    </Table>
    </div>
        

    </div>
  )
}

export default TableSection