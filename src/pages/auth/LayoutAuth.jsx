import React from 'react'
import HeaderAuth from '@/components/HeaderAuth'
import FooterAuth from '@/components/FooterAuth'

// eslint-disable-next-line react/prop-types
const LayoutAuth = ({children}) => {
  return (
    <React.Fragment>
      <section className="bg-white">
        <HeaderAuth />
        {children}
        <FooterAuth />
      </section>
    </React.Fragment>
  )
}

export default LayoutAuth