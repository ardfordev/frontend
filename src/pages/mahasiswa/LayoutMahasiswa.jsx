import React from 'react'
import NavMahasiswa from '@/components/NavMahasiswa'
import HeaderMahasiswa from '@/components/HeaderMahasiswa'
import FooterMahasiswa from '@/components/FooterMahasiswa'

// eslint-disable-next-line react/prop-types
const LayoutMahasiswa = ({children}) => {
  return (
    <React.Fragment>
      <div className='flex font-jakarta bg-white h-screen w-full'>
        <NavMahasiswa />
        <div className="flex flex-col flex-1 overflow-hidden">
          <HeaderMahasiswa />
          {children}
          <FooterMahasiswa />
        </div>
      </div>
    </React.Fragment>
  )
}

export default LayoutMahasiswa