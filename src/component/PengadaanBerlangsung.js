
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Backround from "../component/assets/Rectangle54.png"
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const Beranda1 = styled("div")({
    backgroundColor: `rgba(212, 212, 212, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `1920px`,
    height: `1080px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
});


const Rectangle54 = styled("img")({
    height: `1080px`,
    width: `1330px`,
    position: `absolute`,
    left: `591px`,
    top: `0px`,
});


//table Pengadaan Berlangsung 
const columns = [
    { id: "no", label: "no", minWidth: 170 },
    { id: "id_rup", label: "ID RUP", minWidth: 100 },
    {
      id: "nama_pengadaan",
      label: "Nama Pengadaan",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "upload_spk",
      label: "Upload SPK",
      minWidth: 170,
      align: "right",
      
    },
    {
      id: "bukti_pembayaran",
      label: "Nukti Pembayaran ",
      minWidth: 170,
      align: "right",
    
    },
    { id: "survey_kepuasan_pemasok", label: "Survei Kepuasan Pemasok", minWidth: 100, align: "center" },
    { id: "Survei_Kinerja_penyedia", label: "Survei Kinerja Penyedia", minWidth: 100, align: "center" },
    { id: "selesai", label: "selesai", minWidth: 100, align: "center" },
  ];


  






function PengadaanBerlangsung(){
    const token = "r"//localStorage.getItem("jwtToken");
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = useState([])
  const navigate = useNavigate()





  useEffect(() => {
    if (!token) {
      console.log("Maaf Harus Login terlebih dahulu");
      alert("Anda Harus Login terlebih dahulu");
      navigate("/");
    }
  }, [token, navigate]);

  //use efect untuk table 
  /*
  useEffect(() => {
    // Fetch data from API and update the state
    const getData = async () => {
      try {
        axios
          .get("//ling api nya ") // Replace with your API endpoint
          .then((response) => {
            setData(
              response.data.map((item) => ({
                nama_pengadaan: item.Nama_pengadaan,
                upload_spk: item.Upload_spk,
                bukti_pembayaran: item.Bukti_pembayaran,
                survey_kepuasan_pemasok: item.Survey_kepuasan_pemasok,
                Survei_Kinerja_penyedia: item.Survei_Kinerja_penyedia,
              }))
            );
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // Ambil data setiap 1 detik (1000 ms)
    const interval = setInterval(getData, 1000);

    // Bersihkan interval ketika komponen tidak lagi digunakan
    return () => clearInterval(interval);
  }, []);

  */
     



    return(
        <Beranda1>
            <Rectangle54 src={Backround} loading='lazy' alt={"Rectangle 54"}/>
           <Navbar />
           
           
        </Beranda1>
    )    
}

export default PengadaanBerlangsung