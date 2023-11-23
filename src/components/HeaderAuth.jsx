import { NavLink } from "react-router-dom"
import logo from "@/assets/logo.png"

const HeaderAuth = () => {
  return (
    <header className='container bg-white mx-auto border-b p-4 md:flex md:items-center md:justify-between sticky top-0'>
      <div className='flex items-center justify-between'>
        <NavLink to="#">
          <img
            src={logo}
            alt='Universitas Palangka Raya'
            width="24"
          />
        </NavLink>
        <span className='sr-only'>Universitas Palangka Raya</span>
        <nav className='md:ml-10 md:pr-4 md:space-x-8'>
          <NavLink className='text-base font-medium text-gray-500 hover:text-gray-900 ' to="/">Home</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default HeaderAuth