import { NavLink } from "react-router-dom"
import { Instagram, Globe } from "lucide-react"

const FooterDosen = () => {
  return (
    <footer className='container mx-auto p-4 flex border-t items-center justify-between'>
      <div className='flex space-x-6'>
        <NavLink to="#"><Instagram className='h-4 w-4' /></NavLink>
        <NavLink to="#"><Globe className='h-4 w-4' /></NavLink>
      </div>
      <div className='text-sm text-gray-500'>Dosen</div>
    </footer>
  )
}

export default FooterDosen