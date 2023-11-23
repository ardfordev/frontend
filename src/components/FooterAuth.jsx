import { NavLink } from "react-router-dom"
import { Instagram, Globe } from "lucide-react"

const FooterAuth = () => {
  return (
    <footer className='container mx-auto px-4 py-10 flex items-center justify-center'>
      <div className='flex space-x-6'>
        <NavLink to="#"><Instagram className='h-4 w-4' /></NavLink>
        <NavLink to="#"><Globe className='h-4 w-4' /></NavLink>
      </div>
    </footer>
  )
}

export default FooterAuth