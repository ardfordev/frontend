import { NavLink, useLocation } from "react-router-dom"
import { UserSquare, Users } from "lucide-react"
import logo from "@/assets/logo.png"
import { cn } from "@/lib/utils"

function NavDosen() {
  let location = useLocation();

  return (
    <div className="hidden md:flex md:flex-col w-72 bg-zinc-900 border-r">
      <div className="flex items-center p-4">
        <NavLink className="flex" to="/dosen/profile">
          <img
            src={logo}
            alt='Universitas Palangka Raya'
            width="24"
          />
          <h1 className="ml-2 text-xl text-white font-semibold">ASP Dashboard</h1>
        </NavLink>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="px-4">
          <NavLink className={cn(
              "flex items-center text-sm text-gray-400 px-4 py-2 rounded-sm",
              location.pathname === "/dosen/profile" ? "bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white font-semibold" : ""
            )} to="/dosen/profile"><UserSquare size={20} className="mr-2" />Profile</NavLink>
          <NavLink className={cn(
              "flex items-center text-sm text-gray-400 px-4 py-2 rounded-lg",
              location.pathname === "/dosen/bimbingan-mahasiswa" ? "bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white font-semibold" : ""
              )} to="/dosen/bimbingan-mahasiswa"><Users size={20} className="mr-2" />Bimbingan Mahasiswa</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default NavDosen