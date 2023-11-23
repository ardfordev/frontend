import LayoutDosen from "./LayoutDosen"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const ProfileDosen = () => {
  return (
    <LayoutDosen>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Informasi Dosen</h1>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Dosen</Label>
              <Input className="w-full md:w-1/2" id="name" value="Agus Mulyawan, S.H., M.H." type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nidn">NIP</Label>
              <Input className="w-full md:w-1/2" id="nidn" value="198310282006041002" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dosen">Dosen</Label>
              <Input className="w-full md:w-1/2" id="dosen" value="Hukum/Ilmu Hukum" type="text" disabled/>
            </div>
          </div>
        </div>
      </div>
    </LayoutDosen>
  )
}

export default ProfileDosen