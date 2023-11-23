import { NavLink, useLocation } from "react-router-dom"
import { LogOut, AlignLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const HeaderDosen = () => {
  let location = useLocation();
  
  return (
    <div className="flex justify-between md:justify-end items-center h-16 px-6 border-b">
      <div className='md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost"><AlignLeft className='h-4 w-4' /></Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>ASP Dashboard</SheetTitle>
            </SheetHeader>
            <NavLink className={cn(
                "flex px-4 py-1 rounded-lg text-sm",
                location.pathname === "/dosen/profile" ? "bg-green-500" : ""
              )} to="/dosen/profile">Profile</NavLink>
            <NavLink className={cn(
                "flex px-4 py-1 rounded-lg text-sm",
                location.pathname === "/dosen/bimbingan-mahasiswa" ? "bg-green-500" : ""
              )} to="/dosen/bimbingan-mahasiswa">Bimbingan Mahasiswa</NavLink>
          </SheetContent>
        </Sheet>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Agus Mulyawan, S.H., M.H.</p>
              <p className="text-xs leading-none text-muted-foreground">
                agusmulyawan@upr.ac.id
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <NavLink className='flex items-center' to="/">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </NavLink>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default HeaderDosen