import { NavLink } from "react-router-dom"
import LayoutAuth from "./LayoutAuth"
import logo from "@/assets/logo.png"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const LoginMahasiswa = () => {
  return (
    <LayoutAuth>
      <main className='bg-gray-100 container min-h-screen flex items-center justify-center'>
        <div className='w-96 rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200'>
          <div className='space-y-2 text-center'>
            <div className='flex justify-center'>
              <img
                src={logo}
                alt='Universitas Palangka Raya'
              />
            </div>
            <h1 className='text-2xl font-bold'>Login Mahasiswa</h1>
            <p className='text-gray-500'>Universitas Palangka Raya</p>
          </div>
          <form>
            <div className='space-y-4'>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" required type="email" placeholder="diahaditriwasti@upr.ac.id"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Password</Label>
                <Input id="paswword" required type="password" placeholder="*****"/>
              </div>
              <div className="space-y-2">
                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" asChild>
                  <NavLink to="/mahasiswa/profile">Login</NavLink>
                </Button>
              </div>
            </div>
          </form>
        </div>  
      </main>
    </LayoutAuth>
  )
}

export default LoginMahasiswa