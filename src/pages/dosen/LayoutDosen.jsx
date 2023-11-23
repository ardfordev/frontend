import React from 'react'
import NavDosen from '@/components/NavDosen'
import HeaderDosen from '@/components/HeaderDosen'
import FooterDosen from '@/components/FooterDosen'

// eslint-disable-next-line react/prop-types
const LayoutDosen = ({children}) => {
  return (
    <React.Fragment>
      <div className='flex font-jakarta bg-white h-screen w-full'>
        <NavDosen />
        <div className="flex flex-col flex-1 overflow-hidden">
          <HeaderDosen />
          {children}
          <FooterDosen />
        </div>
      </div>
    </React.Fragment>
  )
}

export default LayoutDosen