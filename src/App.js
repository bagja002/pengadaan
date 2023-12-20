
import './App.css';
import BuatPengadaan from './component/BuatPengadaan';
import HistoryPengadaan from './component/HistoryPengadaan';

import PengadaanBerlangsung from './component/PengadaanBerlangsung';
import StickyHeadTable from './component/ProsesPengadaan';
import Beranda from './component/beranda';
import LandingPage from './component/landingpage';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SelectForm from './component/PilihanPengajdaan';
import YourComponent from './component/test';
import EditPage from './component/editproses';

import FileUploadComponent from './component/Testss';

function App() {
  return (
   <Router>
    
    <Routes>
    <Route path ='/' element={<LandingPage />} />
        <Route path ='/beranda' element={<Beranda />} />
        <Route path ='/buat_pengadaan' element={<BuatPengadaan />}  />
        <Route path ="/proses_pengadaan" element={<StickyHeadTable/>}>
         
        </Route>
        <Route path ="/proses_pengadaan/edit" element={<EditPage />}/>

        <Route path ="/pengadaan_berlangsung" element={<PengadaanBerlangsung />} />
        <Route path ="/history_pengadaan" element={<HistoryPengadaan />} />
        <Route path ="/select" element={< SelectForm/>} />
        <Route path ="/test" element={< YourComponent/>} />
        <Route path ="/testss" element={< FileUploadComponent/>} />
      
    </Routes>
   </Router>
  );
};



export default App;

