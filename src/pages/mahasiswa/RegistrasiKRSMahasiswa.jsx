import LayoutMahasiswa from "./LayoutMahasiswa"
import Select from 'react-select'
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

const RegistrasiKRSMahasiswa = () => {
  const options = [
    { value: '1EAF405020', label: '1EAF405020 2 SKS Filsafat Hukum Tahasak Sahay, S.H., M.H.' },
    { value: '1EAF385020', label: '1EAF385020 2 SKS Ilmu Perundang-Undangan Agus Mulyawan, S.H., M.H.', },
    { value: '1EAF365020', label: '1EAF365020 2 SKS Tindak Pidana Korporasi Yurika F. Dewi, S.H., M.H.', }
  ]

  return (
    <LayoutMahasiswa>
      <div className="flex-1 overflow-y-auto">
        <div className='p-6'>
          <div className='mb-5'>
            <h1 className="text-base font-semibold text-gray-900">Registrasi Mata Kuliah</h1>
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
              <Button className='bg-green-500 hover:bg-green-600'>Tambah Mata Kuliah</Button>
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
                  <TableHead><span className='text-gray-900'>Status</span></TableHead>
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
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                      Diproses
                    </span>
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
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                      Diproses
                    </span>
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
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-md">
                      Diproses
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className='flex items-center justify-around text-sm font-semibold p-4 bg-green-500'>
              <div>Jumlah Kredit yang diprogramkan semester ini</div>
              <div>6 SKS</div>
            </div>
          </div>
        </div>
      </div>
    </LayoutMahasiswa>
  )
}

export default RegistrasiKRSMahasiswa