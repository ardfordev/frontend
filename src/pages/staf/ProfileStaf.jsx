import LayoutStaf from "./LayoutStaf"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ProfileStaf = () => {
  return (
    <LayoutStaf>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Informasi Staf</h1>
          </div>
          <div className="grid my-4 grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Staf</Label>
              <Input className="w-full" id="name" value="Kanigara, S.H." type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nip">NIP</Label>
              <Input className="w-full" id="nip" value="198510062005101005" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bidang">Bidang</Label>
              <Input className="w-full" id="bidang" value="Akademik Hukum/Ilmu Hukum" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input className="w-full" id="email" value="kanigara@upr.ac.id" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="alamat">Alamat</Label>
              <Input className="w-full" id="alamat" value="Kalimantan Tengah" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="jabatan">Jabatan</Label>
              <Input className="w-full" id="jabatan" value="Staf BAAK" type="text" disabled/>
            </div>
          </div>
          <Button className="bg-green-500">Edit</Button>
        </div>
      </div>
    </LayoutStaf>
  )
}

export default ProfileStaf