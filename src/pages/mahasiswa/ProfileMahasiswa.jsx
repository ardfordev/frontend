import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import LayoutMahasiswa from "./LayoutMahasiswa"
import { Button } from "@/components/ui/button"

const ProfileMahasiswa = () => {
  return (
    <LayoutMahasiswa>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Informasi Mahasiswa</h1>
          </div>
          <div className="grid my-4 grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Mahasiswa</Label>
              <Input className="w-full" id="name" value="Diahadi Triwasti" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nim">NIM</Label>
              <Input className="w-full" id="nim" value="213010601027" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fakultas">Fakultas/Jurusan</Label>
              <Input className="w-full" id="fakultas" value="Hukum/Ilmu Hukum" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input className="w-full" id="email" value="diahaditriwasti@upr.ac.id" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="alamat">Alamat</Label>
              <Input className="w-full" id="alamat" value="Kalimantan Tengah" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dosenpa">Dosen Pembimbing Akademik</Label>
              <Input className="w-full" id="dosenpa" value="Prof. Dr. H. SURIANSYAH MURHAINI, S. H., M. H." type="text" disabled/>
            </div>
          </div>
          <Button className="bg-green-500">Edit</Button>
        </div>
      </div>
    </LayoutMahasiswa>
  )
}

export default ProfileMahasiswa