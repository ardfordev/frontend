import { NavLink } from 'react-router-dom'
import Select from 'react-select'
import LayoutDosen from './LayoutDosen'
import { Button } from "@/components/ui/button"
import { MoreVertical, FileDown, FileSearch2 } from "lucide-react"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"

const BimbinganMahasiswa = () => {
  const options = [
    { value: 'Diahadi Triwasti', label: 'Diahadi Triwasti' },
    { value: 'Putri Susilawati', label: 'Putri Susilawati', },
    { value: 'Rosa Husadah', label: 'Rosa Husadah', }
  ]

  return (
    <LayoutDosen>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Kemahasiswaan</h1>
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
                  <TableHead><span className='text-gray-900'>NIM</span></TableHead>
                  <TableHead><span className='text-gray-900'>Nama Mahasiswa</span></TableHead>
                  <TableHead><span className='text-gray-900'>Jumlah KRS</span></TableHead>
                  <TableHead><span className='text-gray-900'>Status</span></TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>213010601027</TableCell>
                  <TableCell>Diahadi Triwasti</TableCell>
                  <TableCell>21</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                      Diproses
                    </span>
                  </TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className='mr-2 h-4 w-4' />
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <NavLink className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500 text-sm font-medium">
                          <FileDown className='mr-2 w-4 h-4'/>
                          Cetak KRS
                        </NavLink>
                        <NavLink to="/dosen/bimbingan-mahasiswa/detailkrs" className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500 text-sm font-medium">
                          <FileSearch2 className='mr-2 w-4 h-4' />
                          Detail KRS
                        </NavLink>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>213010503010</TableCell>
                  <TableCell>Putri Susilawati</TableCell>
                  <TableCell>21</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                      Diproses
                    </span>
                  </TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className='mr-2 h-4 w-4' />
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <NavLink className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500 text-sm font-medium">
                          <FileDown className='mr-2 w-4 h-4'/>
                          Cetak KRS
                        </NavLink>
                        <NavLink to="/dosen/bimbingan-mahasiswa/detailkrs" className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500 text-sm font-medium">
                          <FileSearch2 className='mr-2 w-4 h-4' />
                          Detail KRS
                        </NavLink>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>213010503001</TableCell>
                  <TableCell>Rosa Husadah</TableCell>
                  <TableCell>21</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                      Diproses
                    </span>
                  </TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className='mr-2 h-4 w-4' />
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <NavLink className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500 text-sm font-medium">
                          <FileDown className='mr-2 w-4 h-4'/>
                          Cetak KRS
                        </NavLink>
                        <NavLink to="/dosen/bimbingan-mahasiswa/detailkrs" className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500 text-sm font-medium">
                          <FileSearch2 className='mr-2 w-4 h-4' />
                          Detail KRS
                        </NavLink>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </LayoutDosen>
  )
}

export default BimbinganMahasiswa