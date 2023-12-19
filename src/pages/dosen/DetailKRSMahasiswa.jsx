import { NavLink } from 'react-router-dom'
import LayoutDosen from './LayoutDosen'
import { MoreVertical, XCircle, CheckCircle2 } from "lucide-react"
import { Button } from '@/components/ui/button'
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const DetailKRSMahasiswa = () => {
  return (
    <LayoutDosen>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Detail Kartu Rencana Studi</h1>
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
              <Label htmlFor="dosenpa">Dosen Pembimbing Akademik</Label>
              <Input className="w-full" id="dosenpa" value="Prof. Dr. H. SURIANSYAH MURHAINI, S. H., M. H." type="text" disabled/>
            </div>
          </div>
          <div className="w-full">
            <Table>
              <TableHeader className="bg-green-500">
                <TableRow>
                  <TableHead><span className='text-gray-900'>#</span></TableHead>
                  <TableHead><span className='text-gray-900'>KODE MK</span></TableHead>
                  <TableHead><span className='text-gray-900'>Mata Kuliah</span></TableHead>
                  <TableHead><span className='text-gray-900'>SKS</span></TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>1EAF315020</TableCell>
                  <TableCell>
                    <div>
                      <div>Hukum Pemerintahan Daerah</div>
                      <div className='text-xs text-gray-500'>Kristian, S.H., M.H.</div>
                    </div>
                  </TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className='mr-2 h-4 w-4' />
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-red-500">
                          <XCircle className='mr-2 w-4 h-4'/>
                          <span className="text-sm font-medium">Drop</span>
                        </button>
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                          <CheckCircle2 className='mr-2 w-4 h-4' />
                          <span className="text-sm font-medium">Menyetujui</span>
                        </button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>1EAF325020</TableCell>
                  <TableCell>
                    <div>
                      <div>Hukum Penanaman Modal</div>
                      <div className='text-xs text-gray-500'>John Terson S.H., M.Hum.</div>
                    </div>
                  </TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className='mr-2 h-4 w-4' />
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-red-500">
                          <XCircle className='mr-2 w-4 h-4'/>
                          <span className="text-sm font-medium">Drop</span>
                        </button>
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                          <CheckCircle2 className='mr-2 w-4 h-4' />
                          <span className="text-sm font-medium">Menyetujui</span>
                        </button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>1EAF335020</TableCell>
                  <TableCell>
                    <div>
                      <div>Hukum Sumber Daya Alam</div>
                      <div className='text-xs text-gray-500'>Louise Theresia, S.H., L.LM</div>
                    </div>
                  </TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className='mr-2 h-4 w-4' />
                      </PopoverTrigger>
                      <PopoverContent className="w-40">
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-red-500">
                          <XCircle className='mr-2 w-4 h-4'/>
                          <span className="text-sm font-medium">Drop</span>
                        </button>
                        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                          <CheckCircle2 className='mr-2 w-4 h-4' />
                          <span className="text-sm font-medium">Menyetujui</span>
                        </button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className='flex items-center justify-start text-sm font-semibold mt-4'>
              <Button type="submit" className=" bg-green-500 hover:bg-green-600" asChild>
                <NavLink to="/dosen/bimbingan-mahasiswa">Submit</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </LayoutDosen>
  )
}

export default DetailKRSMahasiswa