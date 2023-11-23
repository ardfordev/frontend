import React from 'react'
import NavStaf from '@/components/NavStaf'
import HeaderStaf from '@/components/HeaderStaf'
import FooterStaf from '@/components/FooterStaf'

// eslint-disable-next-line react/prop-types
const LayoutStaf = ({children}) => {
  return (
    <React.Fragment>
      <div className='flex font-jakarta bg-white h-screen w-full'>
        <NavStaf />
        <div className="flex flex-col flex-1 overflow-hidden">
          <HeaderStaf />
          {children}
          <FooterStaf />
        </div>
      </div>
    </React.Fragment>
  )
}

export default LayoutStaf