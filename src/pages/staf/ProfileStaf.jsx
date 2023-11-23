import LayoutStaf from "./LayoutStaf"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const ProfileStaf = () => {
  return (
    <LayoutStaf>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Informasi Staf</h1>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Staf</Label>
              <Input className="w-full md:w-1/2" id="name" value="Kanigara, S.H." type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="nip">NIP</Label>
              <Input className="w-full md:w-1/2" id="nip" value="198510062005101005" type="text" disabled/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bidang">Bidang</Label>
              <Input className="w-full md:w-1/2" id="bidang" value="Akademik Hukum/Ilmu Hukum" type="text" disabled/>
            </div>
          </div>
        </div>
      </div>
    </LayoutStaf>
  )
}

export default ProfileStaf