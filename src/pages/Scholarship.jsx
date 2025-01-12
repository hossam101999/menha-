import React, { useState } from 'react'
import Filter from '../features/scholarship/Filter'
import CardScholarship from '../features/scholarship/CardScholarship'

export default function Scholarship() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='flex bg-gray-100'>
        <Filter isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`container mx-auto mt-8 px-2 flex justify-center  ${isOpen ? 'hidden md:flex' : ''}`}>

          <CardScholarship isOpen={isOpen}></CardScholarship>
        </div>

      </div>
    </>
  )
}
