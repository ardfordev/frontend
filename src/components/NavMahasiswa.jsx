import { NavLink, useLocation } from "react-router-dom"
import { UserSquare, FileStack, File } from "lucide-react"
import logo from "@/assets/logo.png"
import { cn } from "@/lib/utils"

const NavMahasiswa = () => {
  let location = useLocation();
  return (
    <div className="hidden md:flex md:flex-col w-72 bg-zinc-900 border-r">
      <div className="flex items-center p-4">
        <NavLink className="flex" to="/mahasiswa/profile">
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
              location.pathname === "/mahasiswa/profile" ? "bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white font-semibold" : ""
            )} to="/mahasiswa/profile"><UserSquare size={20} className="mr-2" />Profile</NavLink>
          <NavLink className={cn(
              "flex items-center text-sm text-gray-400 px-4 py-2 rounded-lg",
              location.pathname === "/mahasiswa/informasi-perkuliahan" ? "bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white font-semibold" : ""
              )} to="/mahasiswa/informasi-perkuliahan"><FileStack size={20} className="mr-2" />Informasi Perkuliahan</NavLink>
          <NavLink className={cn(
              "flex items-center text-sm text-gray-400 px-4 py-2 rounded-lg",
              location.pathname === "/mahasiswa/registrasi-krs" ? "bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white font-semibold" : ""
            )} to="/mahasiswa/registrasi-krs"><File size={20} className="mr-2" />Registrasi KRS</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default NavMahasiswa