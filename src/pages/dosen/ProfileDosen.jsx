import LayoutDosen from "./LayoutDosen"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ProfileDosen = () => {
  return (
    <LayoutDosen>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Informasi Dosen</h1>
          </div>
          <div className="grid my-4 grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Dosen</Label>
              <Input className="w-full" id="name" value="Agus Mulyawan, S.H., M.H." type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nidn">NIP</Label>
              <Input className="w-full" id="nidn" value="198310282006041002" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dosen">Dosen</Label>
              <Input className="w-full" id="dosen" value="Hukum/Ilmu Hukum" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input className="w-full" id="email" value="agusmulyawan@upr.ac.id" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="alamat">Alamat</Label>
              <Input className="w-full" id="alamat" value="Kalimantan Tengah" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="jabatan">Jabatan</Label>
              <Input className="w-full" id="jabatan" value="Lektor" type="text" disabled/>
            </div>
          </div>
          <Button className="bg-green-500">Edit</Button>
        </div>
      </div>
    </LayoutDosen>
  )
}

export default ProfileDosen