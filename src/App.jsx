import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import AboutUs from "./pages/AboutUs"
import ProfileMahasiswa from "./pages/mahasiswa/ProfileMahasiswa"
import InformasiPerkuliahanMahasiswa from "./pages/mahasiswa/InformasiPerkuliahanMahasiswa"
import RegistrasiKRSMahasiswa from "./pages/mahasiswa/RegistrasiKRSMahasiswa"
import ProfileDosen from "./pages/dosen/ProfileDosen"
import BimbinganMahasiswa from "./pages/dosen/BimbinganMahasiswa"
import ProfileStaf from "./pages/staf/ProfileStaf"
import Kemahasiswaan from "./pages/staf/Kemahasiswaan"
import LoginMahasiswa from "./pages/auth/LoginMahasiswa"
import LoginDosen from "./pages/auth/LoginDosen"
import LoginStaf from "./pages/auth/LoginStaf"
import PageNotFound from "./pages/PageNotFound"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/mahasiswa/login" element={<LoginMahasiswa />} />
          <Route path="/dosen/login" element={<LoginDosen />} />
          <Route path="/staf/login" element={<LoginStaf />} />
          <Route path="/mahasiswa/profile" element={<ProfileMahasiswa />} />
          <Route path="/mahasiswa/informasi-perkuliahan" element={<InformasiPerkuliahanMahasiswa />} />
          <Route path="/mahasiswa/registrasi-krs" element={<RegistrasiKRSMahasiswa />} />
          <Route path="/dosen/profile" element={<ProfileDosen />} />
          <Route path="/dosen/bimbingan-mahasiswa" element={<BimbinganMahasiswa />} />
          <Route path="/staf/profile" element={<ProfileStaf />} />
          <Route path="/staf/kemahasiswaan" element={<Kemahasiswaan />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App