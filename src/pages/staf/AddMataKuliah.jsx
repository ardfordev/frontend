import { NavLink } from "react-router-dom"
import { MoveLeft, Save } from "lucide-react"
import Select from 'react-select'
import LayoutStaf from "./LayoutStaf"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const AddMataKuliah = () => {
  const options = [
    { value: '1', label: 'Tahasak Sahay, S.H., M.H.' },
    { value: '2', label: 'Agus Mulyawan, S.H., M.H.', },
    { value: '3', label: 'Yurika F. Dewi, S.H., M.H.', }
  ]

  return (
    <LayoutStaf>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='flex justify-between mb-5'>
            <div className="flex items-center space-x-4">
              <NavLink to="/staf/mata-kuliah" className="flex bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-sm items-center text-xs md:text-sm text-gray-900"><MoveLeft size={20} /></NavLink>
              <h1 className="text-base font-semibold text-gray-900">Tambah Mata Kuliah</h1>
            </div>
          </div>
          <form>
          <div className="mx-6 my-8 md:my-6 grid grid-cols-1 xl:grid-cols-2 gap-4 items-center">
            <div className="flex items-center justify-between space-x-4">
              <Label>Kode Mata Kuliah</Label>
              <Input className="w-full xl:w-72" type="text" placeholder="Kode Mata Kuliah..." />
            </div>
            <div className="flex items-center justify-between space-x-4">
              <Label className="w-32">Mata Kuliah</Label>
              <Input className="w-full xl:w-72" type="text" placeholder="Mata Kuliah..." />
            </div>
            <div className="flex items-center justify-between space-x-4">
              <Label className="w-32">SKS</Label>
              <Input className="w-full xl:w-72" type="number" placeholder="SKS..." />
            </div>
            <div className="flex items-center justify-between space-x-4">
              <Label className="w-32">Dosen Pengampu</Label>
              <div className='w-full xl:w-72'>
                <Select
                  id="matakuliah"
                  instanceId="matakuliah"
                  className='text-sm'
                  options={options} />
              </div>
            </div>
          </div>
          <div className="mx-6 flex space-x-4"> 
            <Button type="submit" className="bg-green-500 hover:bg-green-600 flex w-full sm:w-32 items-center justify-center py-2 rounded-sm text-white text-sm" asChild>
              <NavLink to="/staf/mata-kuliah"><Save className="mr-2" size={20} />Simpan</NavLink>
            </Button>
          </div>
        </form>
          
        </div>
      </div>
    </LayoutStaf>
  )
}

export default AddMataKuliah