import { NavLink } from "react-router-dom"
import { Instagram, Globe } from "lucide-react"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const AboutUs = () => {

  const ASPTeam = [
    {name : "Evita Handayani", fallback : "EV", role : "Hustler"},
    {name : "Fernanda Sugiwa D.", fallback : "FS", role : "Scrum & Hacker"},
    {name : "Nanda Alif Bakri", fallback : "NA", role : "Hipster"},
    {name : "Syarif Hidayatulloh", fallback : "SH", role : "Hipster"},
    {name : "Ardi Supriyadi", fallback : "AS", role : "Hacker"},
    {name : "Dedan Adam", fallback : "DA",role : "Hacker"},
  ];

  return (
    <section className='bg-white font-jakarta'>
      <header className='container bg-white mx-auto border-b p-4 z-40 flex items-center justify-between sticky top-0'>
        <div className='flex items-center justify-between'>
          <NavLink to="#">
            <img
              src={logo}
              alt='Universitas Palangka Raya'
              width="24"
            />
          </NavLink>
          <nav className='hidden md:flex md:ml-10 md:pr-4 md:space-x-8'>
            <NavLink className='text-base font-medium text-gray-500 hover:text-gray-900' to="/">Beranda</NavLink>
            <NavLink className='text-base font-medium text-gray-500 hover:text-gray-900' to="/aboutus">Tentang Kami</NavLink>
          </nav>
        </div>
        <div className='flex items-center justify-center space-x-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-green-500">
                Masuk
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48" align="end" forceMount>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <NavLink to="/mahasiswa/login">Mahasiswa</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink to="/dosen/login">Dosen</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink to="/staf/login">Staff</NavLink>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className='container bg-gray-50 min-h-screen mx-auto px-4 py-20 text-center'>
        <h2 className='md:text-6xl text-4xl font-extrabold tracking-tighter text-green-500'>ASP <span className="text-gray-900">Team</span></h2>
        <p className='max-w-md mx-auto text-gray-500 text-base mt-10'>Academic Study Planner Team Massive Project</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-content-around gap-x-32 gap-y-10 mx-12">
          {
            ASPTeam.map((member, index) => (
              <div className="rounded-lg shadow-lg" key={index}>
                <div className="h-24 bg-green-500 rounded-t-lg" />
                  <Avatar className="rounded-full -mt-12 border-4 border-white mx-auto h-24 w-24">
                    <AvatarFallback>{member.fallback}</AvatarFallback>
                  </Avatar>
                <div className="text-center mt-2">
                  <h2 className="text-lg font-semibold">{member.name}</h2>
                  <p className="text-gray-500">{member.role}</p>
                </div>
                <div className="px-6 py-4">
                  <Button className="w-full bg-green-500 text-white rounded-lg">Kontak</Button>
                </div>
              </div>
            ))
          }
        </div>
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

export default AboutUs