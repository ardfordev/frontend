import { NavLink } from "react-router-dom"
import { Instagram, Globe } from "lucide-react"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Home = () => {
  return (
    <section className='bg-white font-jakarta'>
    <header className='container bg-white mx-auto border-b p-4 flex items-center justify-between sticky top-0'>
      <div className='flex items-center justify-between'>
        <NavLink to="#">
          <img
            src={logo}
            alt='Universitas Palangka Raya'
            width="24"
          />
        </NavLink>
        <span className='sr-only'>Universitas Palangka Raya</span>
        <nav className='hidden md:flex md:ml-10 md:pr-4 md:space-x-8'>
          <NavLink className='text-base font-medium text-gray-500 hover:text-gray-900' to="#">Home</NavLink>
        </nav>
      </div>
      <div className='flex items-center justify-center space-x-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-green-500">
              Login
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end" forceMount>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <NavLink to="/mahasiswa/login">Login Mahasiswa</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/dosen/login">Login Dosen</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to="/staf/login">Login Staff</NavLink>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>

    <main className='container bg-gray-50 h-screen mx-auto px-4 py-20 text-center'>
      <h2 className='md:text-6xl text-4xl font-extrabold tracking-tighter text-green-500'>ASP</h2>
      <h2 className='md:text-6xl text-4xl font-extrabold tracking-tighter text-gray-900'>Academic</h2>
      <h2 className='md:text-6xl text-4xl font-extrabold tracking-tighter text-gray-900'>Study</h2>
      <h2 className='md:text-6xl text-4xl font-extrabold tracking-tighter text-gray-900'>Planner</h2>
      <p className='max-w-md mx-auto text-gray-500 text-base mt-10'>Academic Study Planner adalah sebuah website untuk management Kartu Rencana Studi mahasiswa Fakultas Hukum Universitas Palangka Raya</p>
    </main>

    <footer className='container mx-auto px-4 py-10 flex items-center justify-center'>
      <div className='flex space-x-6'>
        <NavLink to="#"><Instagram className='h-4 w-4' /></NavLink>
        <NavLink to="#"><Globe className='h-4 w-4' /></NavLink>
      </div>
    </footer>
  </section>
  )
}

export default Home