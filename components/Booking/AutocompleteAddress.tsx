import React from 'react'

function AutocompleteAddress() {

  const getAddress=async()=>{
    const res=fetch('/api/search-address?q=')
  }
  return (
    <div className='mt-5'>
        <div>
            <label className='text-gray-700'>Where From?</label>
            <input type="text"
             className='bg-white p-1 border-[1-px] w-full rounded-md outline-none
             focus:bg-yellow-500'/>
            </div>
            <div className='mt-3'>
            <label className='text-gray-700'>Where To?</label>
            <input type="text"
             className='bg-white p-1 border-[1-px] w-full rounded-md outline-none
             focus:bg-yellow-500'/>
            </div>
    </div>
  )
  
}

export default AutocompleteAddress