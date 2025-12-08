import React from 'react'

const CustomFieldsTab = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center flex-col'>
                <div className='w-20 aspect-square bg-gray-300'></div>
                <p>You don’t have any custom fields created yet</p>
            </div>
            <button className='bg-blue-100 text-blue-600 px-2 py-3 '>+ Create Custom Fields</button>
        </div>
    </div>
  )
}

export default CustomFieldsTab