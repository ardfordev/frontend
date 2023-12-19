import { NavLink } from 'react-router-dom'
import Select from 'react-select'
import { MoreVertical, FileDown, Plus } from "lucide-react"
import LayoutStaf from "./LayoutStaf"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"

const MataKuliah = () => {
  const options = [
    { value: '1EAF405020', label: '1EAF405020 2 SKS Filsafat Hukum Tahasak Sahay, S.H., M.H.' },
    { value: '1EAF385020', label: '1EAF385020 2 SKS Ilmu Perundang-Undangan Agus Mulyawan, S.H., M.H.', },
    { value: '1EAF365020', label: '1EAF365020 2 SKS Tindak Pidana Korporasi Yurika F. Dewi, S.H., M.H.', }
  ]

  return (
    <LayoutStaf>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='flex items-center justify-between mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Mata Kuliah</h1>
            <div className='flex bg-green-500 hover:bg-green-600 text-sm p-2 rounded-lg text-white'>
              <NavLink to="/staf/mata-kuliah/tambah" className="flex"><Plus className='mr-2' />Tambah Mata Kuliah</NavLink>
            </div>
          </div>
          <div className='md:flex my-4 space-y-2 md:space-y-0'>
            <div className='sm:w-full md:w-8/12 md:mr-2'>
              <Select
                id="matakuliah"
                instanceId="matakuliah"
                className='text-sm'
                options={options} />
            </div>
            <div>
              <Button className='bg-green-500 hover:bg-green-600'>Cari</Button>
            </div>
          </div>
          <div className="w-full">
            <Table>
              <TableHeader className="bg-green-500">
                <TableRow>
                  <TableHead><span className='text-gray-900'>#</span></TableHead>
                  <TableHead><span className='text-gray-900'>Kode Mata Kuliah</span></TableHead>
                  <TableHead><span className='text-gray-900'>Mata Kuliah</span></TableHead>
                  <TableHead><span className='text-gray-900'>SKS</span></TableHead>
                  <TableHead><span className='text-gray-900'>Dosen Pengampu</span></TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>1EAF405020</TableCell>
                  <TableCell>Filsafat Hukum</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Tahasak Sahay, S.H., M.H.</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className='mr-2 h-4 w-4' />
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                          <FileDown className='mr-2 w-4 h-4'/>
                          <span className="text-sm font-medium">Edit</span>
                        </button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>1EAF385020</TableCell>
                  <TableCell>Ilmu Perundang-Undangan</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Agus Mulyawan, S.H., M.H.</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className='mr-2 h-4 w-4' />
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                          <FileDown className='mr-2 w-4 h-4'/>
                          <span className="text-sm font-medium">Edit</span>
                        </button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>1EAF365020</TableCell>
                  <TableCell>Tindak Pidana Korporasi</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>Yurika F. Dewi, S.H., M.H.</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className='mr-2 h-4 w-4' />
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                          <FileDown className='mr-2 w-4 h-4'/>
                          <span className="text-sm font-medium">Edit</span>
                        </button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </LayoutStaf>
  )
}

export default MataKuliah