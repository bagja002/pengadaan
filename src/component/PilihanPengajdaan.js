import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Backround from "../component/assets/Rectangle54.png";
import Dialog from "@mui/material/Dialog";
import axios from "axios";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

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

const PilihPengadaanStyle1 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `858px`,
  height: `73px`,
  position: `absolute`,
  left: `947px`,
  top: `113px`,
};
const PilihPengadaanStyle2 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `858px`,
  height: `73px`,
  position: `absolute`,
  left: `947px`,
  top: `213px`,
};
const PilihPengadaanStyle3 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `376px`,
  height: `73px`,
  position: `absolute`,
  left: `947px`,
  top: `313px`,
};

const PilihPengadaanStyle4 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `376px`,
  height: `73px`,
  position: `absolute`,
  left: `1427px`,
  top: `313px`,
};
const PilihPengadaanStyle5 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `376px`,
  height: `73px`,
  position: `absolute`,
  left: `947px`,
  top: `413px`,
};
const PilihPengadaanStyle6 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `376px`,
  height: `73px`,
  position: `absolute`,
  left: `1427px`,
  top: `413px`,
};
const PilihPengadaanStyle7 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `858px`,
  height: `73px`,
  position: `absolute`,
  left: `947px`,
  top: `513px`,
};

const UploadIzinPrinsipStyle = styled("label")(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? "red" : "rgba(8, 31, 114, 1)",
  border: `1px solid ${theme.palette.common.white}`,
  boxSizing: "border-box",
  borderRadius: "15px",
  width: "211px",
  height: "57px",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  position: "absolute",
  display: "flex",
  left: "1395px",
  top: "593px",
}));

const UploadSpek = styled("label")(({ theme, isSelected1 }) => ({
  backgroundColor: isSelected1 ? "red" : "rgba(8, 31, 114, 1)",
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: "border-box",
  borderRadius: "15px",
  width: "211px",
  height: "57px",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  position: "absolute",
  display: "flex",
  left: `1171px`,
  top: `594px`,
}));

const UploadRAB = styled("label")(({ isSelected2 }) => ({
  backgroundColor: isSelected2 ? "red" : "rgba(8, 31, 114, 1)",
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: "border-box",
  borderRadius: "15px",
  width: "211px",
  height: "57px",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  position: "absolute",
  display: "flex",
  left: `947px`,
  top: `594px`,
}));

const PilihPengadaanStyle11 = styled("label")({
  backgroundColor: `rgba(255, 199, 0, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `185px`,
  display: "flex",
  height: `57px`,
  position: `absolute`,
  left: `1619px`,
  top: `593px`,
  cursor: "pointer",
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
});

const PilihPengadaanStyle13 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `858px`,
  height: `73px`,
  position: `absolute`,
  left: `947px`,
  top: `752px`,
};

const PilihPengadaanStyle14 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `376px`,
  height: `73px`,
  position: `absolute`,
  left: `1427px`,
  top: `850px`,
};

const PilihPengadaanStyle15 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `376px`,
  height: `73px`,
  position: `absolute`,
  left: `947px`,
  top: `850px`,
};

const Submit = styled("button")({
  backgroundColor: `rgba(47, 85, 151, 1)`,
  borderRadius: `30px`,
  width: `257.45px`,
  height: `59px`,
  position: `absolute`,
  left: `1554px`,
  top: `939px`,
});

const UploadInput = styled("input")({
  display: "none", // Sembunyikan input tipe "file"
});

const SuccessMessage = styled("p")({
  color: `green`,
  fontSize: `18px`,
  fontWeight: `bold`,
  left: "1000px",
  top: "300px",
});

const CostumSelect1 = styled("select")({
  appearance: `none`,
  padding: `10px`,
  fontSize: `16px`,
  border: `2px solid #3498db`,
  borderRadius: `30px`,
  backgroundColor: `#f1f1f1`,
  color: `#333`,
  width: `200px`,
  outline: `none`,
  cursor: `pointer`,
});

function SelectForm() {
  const navigate = useNavigate();
  const token = 'O'//localStorage.getItem("jwtToken");
  const [id_pegawaii, setIdPegawai] = useState(""); // Replace 'jwtToken' with your actual token key
 
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  const [formData, setFormData] = useState({
    paket_pengadaan: "",
    id_jenis_pengadaan: "",
    id_rup: "",
    nilai_rab: "",
    nilai_tkdn: "",
    nilai_rup: "",
    tkdn: "",
    no_pr: "",
    dokumen_rab: "",
    dokumen_spek: "",
    dokumen_izin_prinsip: "",
    klasifikasi_penyedia: "",
    nama_penyedia: "",
    status_penyedia: "",
    no_penyedia: "081943348517",
    email_penyedia: "mitrajaya@gmail.com",
  });

  //pengubahan warna jika udh upload file Izin Prinsip
  //handler Mengubah Sting menjadi APBN

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected(true);
      setFormData({
        ...formData,
        dokumen_izin_prinsip: event.target.files[0],
      });
    } else {
      setIsSelected(false);
      setFormData({
        dokumen_izin_prinsip: "",
      });
    }
  };

  //pengubah warna RAB
  const handleFileChange1 = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected1(true);
      setFormData({
        ...formData,
        dokumen_rab: event.target.files[0],
      });
    } else {
      setIsSelected1(false);
      setFormData({
        dokumen_rab: "",
      });
    }
  };
  //pengubah warna SPEK
  const handleFileChange2 = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected2(true);
      setFormData({
        ...formData,
        dokumen_spek: event.target.files[0],
      });
    } else {
      setIsSelected2(false);
      setFormData({
        dokumen_spek: "",
      });
    }
  };

  useEffect(() => {
    if (!token) {
      console.log("Maaf Harus Login terlebih dahulu");
      alert("Anda Harus Login terlebih dahulu");
      navigate("/");
    } else {
      const decodetoken = jwtDecode(token);
      const id_pegawai = decodetoken.id_admin;
      setIdPegawai(id_pegawai);
    }
  }, [token, navigate]);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ganti 'YOUR_API_ENDPOINT' dengan URL API endpoint Anda
      setShowSuccessDialog(true);

      toast("Pengadaan  buat!", {
        position: "top-center", // Posisi toast
        autoClose: 3000, // Durasi tampilan (dalam milidetik)
        hideProgressBar: false, // Menampilkan progress bar atau tidak
        closeOnClick: true, // Menutup toast saat di klik
        pauseOnHover: true, // Menjeda tampilan saat di hover
        draggable: true, // Bisa di-drag atau tidak
      });
      const axiosInstace = axios.create({
        baseURL: "http://127.0.0.1:9000",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const response = await axiosInstace.post(
        "/pengadaan/buat_pengadaan",
        formData
      );
      console.log(response.data);
      // Lakukan tindakan lanjutan setelah berhasil mengirim data ke API
    } catch (error) {
      // Tangani error jika ada

      console.error(error);
    }
  };

  const handleCreateAgain = () => {
    // Reset state form data dan status pesan sukses
    setShowSuccessDialog(false);
    setFormData({
      paket_pengadaan: "",
      id_jenis_pengadaan: "",
      id_rup: "",
      nilai_rab: "",
      nilai_tkdn: "",
      nilai_rup: "",
      tkdn: "",
      no_pr: "",
      dokumen_rab: "",
      dokumen_spek: "",
      dokumen_izin_prinsip: "",
      klasifikasi_penyedia: "",
      nama_penyedia: "",
      status_penyedia: "",
      no_penyedia: "",
      email_penyedia: "",
    });
  };
  //Select Pengadaan
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch data from API for options
    axios
      .get("http://localhost:9000/user/faker")
      .then((response) => {
        setOptions(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
      });
  }, []);
  /*const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]:e.target.value});
    };
    */

  const handleChangeSelect = (event) => {
    const { name, value } = event.target;

    if (name === "paket_pengadaan") {
      const selectedOption = options.find(
        (option) => option.NamaPengadaan === value
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        id_rup: selectedOption ? selectedOption.IDRUP.toString() : "",
        nilai_rup: selectedOption ? selectedOption.NilaiRUP.toString() : "",
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const [selects, setSelects] = useState("");
  const handlerSelects = (e) => {
    setSelects(e.target.value);
    const select_id_pengadaan = e.target.value
    console.log(select_id_pengadaan)
  
    setFormData({
      paket_pengadaan: "",
      id_jenis_pengadaan: select_id_pengadaan,
      id_rup: "",
      nilai_rab: "",
      nilai_tkdn: "",
      nilai_rup: "",
      tkdn: "",
      no_pr: "",
      dokumen_rab: "",
      dokumen_spek: "",
      dokumen_izin_prinsip: "",
      klasifikasi_penyedia: "",
      nama_penyedia: "",
      status_penyedia: "",
      no_penyedia: "081943348517",
      email_penyedia: "mitrajaya@gmail.com",
    });
  };
  //mengatur untuk pemilihan jenis pengadaan

  return (
    <Beranda1>
      {token ? (
        <>
          <Rectangle54 src={Backround} loading="lazy" alt={"Rectangle 54"} />
          <Navbar />
          <div
            style={{
              left: "1600px",
              top: "70px",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CostumSelect1 value={selects} onChange={handlerSelects}>
              <option value="">Pilih Jenis Pengadaan</option>
              <option value="1">Penetapan Langsung</option>
              <option value="2">Penyedia Offline</option>
              <option value="3">E-Catalogue</option>
              <option value="4">Toko/Supermarket/Online</option>
              <option value="5">Padi UMKM</option>
            </CostumSelect1>
          </div>
          {selects === "1" && (
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  style={{ position: "relative", top: "140px", left: "810px" }}
                  htmlFor="paket_pengadaan"
                >
                  Paket Pengadaan
                </label>
                <select
                  style={PilihPengadaanStyle1}
                  id="paket_pengadaan"
                  name="paket_pengadaan"
                  value={formData.paket_pengadaan}
                  onChange={handleChangeSelect}
                >
                  <option value="">Pilih Paket Pengadaan</option>
                  {options.map((option) => (
                    <option key={option.ID} value={option.NamaPengadaan}>
                      {option.NamaPengadaan}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  style={{
                    marginTop: "220px",
                    marginLeft: "875px",
                    position: "absolute",
                  }}
                  htmlFor="id_rup"
                >
                  ID RUP
                </label>
                <input
                  type="number"
                  id="id_rup"
                  name="id_rup"
                  placeholder="Id RUP"
                  style={PilihPengadaanStyle2}
                  value={formData.id_rup}
                  onChange={handleChangeSelect}
                  readOnly
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "320px",
                    marginLeft: "875px",
                    position: "absolute",
                  }}
                  htmlFor="nilai_rab"
                >
                  Nilai Rab
                </label>
                <input
                  type="number"
                  id="nilai_rab"
                  name="nilai_rab"
                  placeholder="nilai_rab"
                  style={PilihPengadaanStyle3}
                  value={formData.nilai_rab}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "320px",
                    marginLeft: "1350px",
                    display: "flex",
                    position: "absolute",
                  }}
                  htmlFor="nilai_rup"
                >
                  Nilai RUP{" "}
                </label>
                <input
                  type="number"
                  id="nilai_rup"
                  name="nilai_rup"
                  placeholder="nilai_rup"
                  style={PilihPengadaanStyle4}
                  value={formData.nilai_rup}
                  onChange={handleChangeSelect}
                  readOnly
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", top: "420px", left: "860px" }}
                  htmlFor="nilai_tkdn"
                >
                  Nilai TKDN
                </label>
                <input
                  type="number"
                  id="nilai_tkdn"
                  name="nilai_tkdn"
                  placeholder="nilai_tkdn"
                  style={PilihPengadaanStyle5}
                  value={formData.nilai_tkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", top: "400px", left: "1375px" }}
                  htmlFor="tkdn"
                >
                  TKDN
                </label>
                <input
                  type="number"
                  id="tkdn"
                  name="tkdn"
                  placeholder="tkdn"
                  style={PilihPengadaanStyle6}
                  value={formData.tkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", top: "480px", left: "890px" }}
                  htmlFor="no_pr"
                >
                  No PR
                </label>
                <input
                  type="text"
                  id="no_pr"
                  name="no_pr"
                  placeholder="no_pr PR"
                  style={PilihPengadaanStyle7}
                  value={formData.no_pr}
                  onChange={handleChange}
                />
              </div>
              <div>
                <UploadIzinPrinsipStyle
                  isSelected={isSelected}
                  component="label"
                  varian="contained"
                >
                  {isSelected ? "File Dipilih" : "Upload IzinPrinsip"}
                  <UploadInput type="file" onChange={handleFileChange} />
                </UploadIzinPrinsipStyle>
              </div>
              <div>
                <UploadSpek
                  isSelected1={isSelected1}
                  component="label"
                  varian="contained"
                >
                  {isSelected1 ? "File Dipilih" : "Upload Spek/KK"}
                  <UploadInput type="file" onChange={handleFileChange1} />
                </UploadSpek>
              </div>
              <div>
                <UploadRAB
                  isSelected2={isSelected2}
                  component="label"
                  varian="contained"
                >
                  {isSelected2 ? "File Dipilih" : "Upload RAB "}
                  <UploadInput type="file" onChange={handleFileChange2} />
                </UploadRAB>
              </div>

              <div>
                <PilihPengadaanStyle11>
                  Download
                  <UploadInput type="file" />
                </PilihPengadaanStyle11>
              </div>
              {/*
                <div>
                    <label htmlFor='klasifikai'></label>
                    <input 
                    type='text'
                    id='klasifikai' 
                    name='klasifikai' 
                    placeholder='Pilih Klasifikai Penyedia'
                    style={PilihPengadaanStyle12}
                    value={formData.klasifikai}
                    onChange={handleChange}/>
                </div>*/}
              <div>
                <label
                  style={{ position: "relative", left: "830px", top: "705px" }}
                  htmlFor="nama_penyedia"
                >
                  Nama Penyedia
                </label>
                <input
                  type="text"
                  id="nama_penyedia"
                  name="nama_penyedia"
                  style={PilihPengadaanStyle13}
                  value={formData.nama_penyedia}
                  placeholder="Nama Penyedia"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{
                    position: "relative",
                    left: "1325px",
                    top: "785px",
                    fontSize: "13px",
                  }}
                  htmlFor="status_penyedia"
                >
                  Status Penyedia
                </label>
                <input
                  type="text"
                  id="status_penyedia"
                  name="status_penyedia"
                  placeholder="status_penyedia"
                  style={PilihPengadaanStyle14}
                  value={formData.status_penyedia}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", left: "800px", top: "766px" }}
                  htmlFor="klasifikasi_penyedia"
                >
                  Klasifikasi Penyedia
                </label>
                <input
                  type="text"
                  id="klasifikasi_penyedia"
                  name="klasifikasi_penyedia"
                  placeholder="Terisi Secara Otomatis "
                  value={formData.klasifikasi_penyedia}
                  style={PilihPengadaanStyle15}
                  onChange={handleChange}
                />
              </div>

              <Submit onClick={handleSubmit}>Submit</Submit>
            </form>
          )}
          {selects === "2" && (
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  style={{ position: "relative", top: "140px", left: "810px" }}
                  htmlFor="paket_pengadaan"
                >
                  Paket Pengadaan
                </label>
                <select
                  style={PilihPengadaanStyle1}
                  id="paket_pengadaan"
                  name="paket_pengadaan"
                  value={formData.paket_pengadaan}
                  onChange={handleChangeSelect}
                >
                  <option value="">Pilih Paket Pengadaan</option>
                  {options.map((option) => (
                    <option key={option.ID} value={option.NamaPengadaan}>
                      {option.NamaPengadaan}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  style={{
                    marginTop: "220px",
                    marginLeft: "875px",
                    position: "absolute",
                  }}
                  htmlFor="id_rup"
                >
                  ID RUP
                </label>
                <input
                  type="number"
                  id="id_rup"
                  name="id_rup"
                  placeholder="Id RUP"
                  style={PilihPengadaanStyle2}
                  value={formData.id_rup}
                  onChange={handleChangeSelect}
                  readOnly
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "320px",
                    marginLeft: "875px",
                    position: "absolute",
                  }}
                  htmlFor="nilai_rab"
                >
                  Nilai Rab
                </label>
                <input
                  type="number"
                  id="nilai_rab"
                  name="nilai_rab"
                  placeholder="nilai_rab"
                  style={PilihPengadaanStyle3}
                  value={formData.nilai_rab}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "320px",
                    marginLeft: "1350px",
                    display: "flex",
                    position: "absolute",
                  }}
                  htmlFor="nilai_rup"
                >
                  Nilai RUP{" "}
                </label>
                <input
                  type="number"
                  id="nilai_rup"
                  name="nilai_rup"
                  placeholder="nilai_rup"
                  style={PilihPengadaanStyle4}
                  value={formData.nilai_rup}
                  onChange={handleChangeSelect}
                  readOnly
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", top: "420px", left: "860px" }}
                  htmlFor="nilai_tkdn"
                >
                  Nilai TKDN
                </label>
                <input
                  type="number"
                  id="nilai_tkdn"
                  name="nilai_tkdn"
                  placeholder="nilai_tkdn"
                  style={PilihPengadaanStyle5}
                  value={formData.nilai_tkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", top: "400px", left: "1375px" }}
                  htmlFor="tkdn"
                >
                  TKDN
                </label>
                <input
                  type="number"
                  id="tkdn"
                  name="tkdn"
                  placeholder="tkdn"
                  style={PilihPengadaanStyle6}
                  value={formData.tkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", top: "480px", left: "890px" }}
                  htmlFor="no_pr"
                >
                  No PR
                </label>
                <input
                  type="text"
                  id="no_pr"
                  name="no_pr"
                  placeholder="no_pr PR"
                  style={PilihPengadaanStyle7}
                  value={formData.no_pr}
                  onChange={handleChange}
                />
              </div>
              <div>
                <UploadIzinPrinsipStyle
                  isSelected={isSelected}
                  component="label"
                  varian="contained"
                >
                  {isSelected ? "File Dipilih" : "Upload IzinPrinsip"}
                  <UploadInput type="file" onChange={handleFileChange} />
                </UploadIzinPrinsipStyle>
              </div>
              <div>
                <UploadSpek
                  isSelected1={isSelected1}
                  component="label"
                  varian="contained"
                >
                  {isSelected1 ? "File Dipilih" : "Upload Spek/KK"}
                  <UploadInput type="file" onChange={handleFileChange1} />
                </UploadSpek>
              </div>
              <div>
                <UploadRAB
                  isSelected2={isSelected2}
                  component="label"
                  varian="contained"
                >
                  {isSelected2 ? "File Dipilih" : "Upload RAB "}
                  <UploadInput type="file" onChange={handleFileChange2} />
                </UploadRAB>
              </div>

              <div>
                <PilihPengadaanStyle11>
                  Download
                  <UploadInput type="file" />
                </PilihPengadaanStyle11>
              </div>
              {/*
                <div>
                    <label htmlFor='klasifikai'></label>
                    <input 
                    type='text'
                    id='klasifikai' 
                    name='klasifikai' 
                    placeholder='Pilih Klasifikai Penyedia'
                    style={PilihPengadaanStyle12}
                    value={formData.klasifikai}
                    onChange={handleChange}/>
                </div>*/}
              <div>
                <label
                  style={{ position: "relative", left: "830px", top: "705px" }}
                  htmlFor="nama_penyedia"
                >
                  Nama Penyedia
                </label>
                <input
                  type="text"
                  id="nama_penyedia"
                  name="nama_penyedia"
                  style={PilihPengadaanStyle13}
                  value={formData.nama_penyedia}
                  placeholder="Nama Penyedia"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{
                    position: "relative",
                    left: "1325px",
                    top: "785px",
                    fontSize: "13px",
                  }}
                  htmlFor="status_penyedia"
                >
                  Status Penyedia
                </label>
                <input
                  type="text"
                  id="status_penyedia"
                  name="status_penyedia"
                  placeholder="status_penyedia"
                  style={PilihPengadaanStyle14}
                  value={formData.status_penyedia}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", left: "800px", top: "766px" }}
                  htmlFor="klasifikasi_penyedia"
                >
                  Klasifikasi Penyedia
                </label>
                <input
                  type="text"
                  id="klasifikasi_penyedia"
                  name="klasifikasi_penyedia"
                  placeholder="Terisi Secara Otomatis "
                  value={formData.klasifikasi_penyedia}
                  style={PilihPengadaanStyle15}
                  onChange={handleChange}
                />
              </div>

              <Submit onClick={handleSubmit}>Submit</Submit>
            </form>
          )}

          {selects === "3" && (
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  style={{ position: "relative", top: "140px", left: "810px" }}
                  htmlFor="paket_pengadaan"
                >
                  Paket Pengadaan
                </label>
                <select
                  style={PilihPengadaanStyle1}
                  id="paket_pengadaan"
                  name="paket_pengadaan"
                  value={formData.paket_pengadaan}
                  onChange={handleChangeSelect}
                >
                  <option value="">Pilih Paket Pengadaan</option>
                  {options.map((option) => (
                    <option key={option.ID} value={option.NamaPengadaan}>
                      {option.NamaPengadaan}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  style={{
                    marginTop: "220px",
                    marginLeft: "875px",
                    position: "absolute",
                  }}
                  htmlFor="id_rup"
                >
                  ID RUP
                </label>
                <input
                  type="number"
                  id="id_rup"
                  name="id_rup"
                  placeholder="Id RUP"
                  style={PilihPengadaanStyle2}
                  value={formData.id_rup}
                  onChange={handleChangeSelect}
                  readOnly
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "320px",
                    marginLeft: "875px",
                    position: "absolute",
                  }}
                  htmlFor="nilai_rab"
                >
                  Nilai Rab
                </label>
                <input
                  type="number"
                  id="nilai_rab"
                  name="nilai_rab"
                  placeholder="nilai_rab"
                  style={PilihPengadaanStyle3}
                  value={formData.nilai_rab}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{
                    marginTop: "320px",
                    marginLeft: "1350px",
                    display: "flex",
                    position: "absolute",
                  }}
                  htmlFor="nilai_rup"
                >
                  Nilai RUP{" "}
                </label>
                <input
                  type="number"
                  id="nilai_rup"
                  name="nilai_rup"
                  placeholder="nilai_rup"
                  style={PilihPengadaanStyle4}
                  value={formData.nilai_rup}
                  onChange={handleChangeSelect}
                  readOnly
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", top: "420px", left: "860px" }}
                  htmlFor="nilai_tkdn"
                >
                  Nilai TKDN
                </label>
                <input
                  type="number"
                  id="nilai_tkdn"
                  name="nilai_tkdn"
                  placeholder="nilai_tkdn"
                  style={PilihPengadaanStyle5}
                  value={formData.nilai_tkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", top: "400px", left: "1375px" }}
                  htmlFor="tkdn"
                >
                  TKDN
                </label>
                <input
                  type="number"
                  id="tkdn"
                  name="tkdn"
                  placeholder="tkdn"
                  style={PilihPengadaanStyle6}
                  value={formData.tkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", top: "480px", left: "890px" }}
                  htmlFor="no_pr"
                >
                  No PR
                </label>
                <input
                  type="text"
                  id="no_pr"
                  name="no_pr"
                  placeholder="no_pr PR"
                  style={PilihPengadaanStyle7}
                  value={formData.no_pr}
                  onChange={handleChange}
                />
              </div>
              <div>
                <UploadIzinPrinsipStyle
                  isSelected={isSelected}
                  component="label"
                  varian="contained"
                >
                  {isSelected ? "File Dipilih" : "Upload IzinPrinsip"}
                  <UploadInput type="file" onChange={handleFileChange} />
                </UploadIzinPrinsipStyle>
              </div>
              <div>
                <UploadSpek
                  isSelected1={isSelected1}
                  component="label"
                  varian="contained"
                >
                  {isSelected1 ? "File Dipilih" : "Upload Spek/KK"}
                  <UploadInput type="file" onChange={handleFileChange1} />
                </UploadSpek>
              </div>
              <div>
                <UploadRAB
                  isSelected2={isSelected2}
                  component="label"
                  varian="contained"
                >
                  {isSelected2 ? "File Dipilih" : "Upload RAB "}
                  <UploadInput type="file" onChange={handleFileChange2} />
                </UploadRAB>
              </div>

              <div>
                <PilihPengadaanStyle11>
                  Download
                  <UploadInput type="file" />
                </PilihPengadaanStyle11>
              </div>
              {/*
                <div>
                    <label htmlFor='klasifikai'></label>
                    <input 
                    type='text'
                    id='klasifikai' 
                    name='klasifikai' 
                    placeholder='Pilih Klasifikai Penyedia'
                    style={PilihPengadaanStyle12}
                    value={formData.klasifikai}
                    onChange={handleChange}/>
                </div>*/}
              <div>
                <label
                  style={{ position: "relative", left: "830px", top: "705px" }}
                  htmlFor="nama_penyedia"
                >
                  Nama Penyedia
                </label>
                <input
                  type="text"
                  id="nama_penyedia"
                  name="nama_penyedia"
                  style={PilihPengadaanStyle13}
                  value={formData.nama_penyedia}
                  placeholder="Nama Penyedia"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{
                    position: "relative",
                    left: "1325px",
                    top: "785px",
                    fontSize: "13px",
                  }}
                  htmlFor="status_penyedia"
                >
                  Status Penyedia
                </label>
                <input
                  type="text"
                  id="status_penyedia"
                  name="status_penyedia"
                  placeholder="status_penyedia"
                  style={PilihPengadaanStyle14}
                  value={formData.status_penyedia}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  style={{ position: "relative", left: "800px", top: "766px" }}
                  htmlFor="klasifikasi_penyedia"
                >
                  Klasifikasi Penyedia
                </label>
                <input
                  type="text"
                  id="klasifikasi_penyedia"
                  name="klasifikasi_penyedia"
                  placeholder="Terisi Secara Otomatis "
                  value={formData.klasifikasi_penyedia}
                  style={PilihPengadaanStyle15}
                  onChange={handleChange}
                />
              </div>

              <Submit onClick={handleSubmit}>Submit</Submit>
            </form>
          )}
          {selects ==="4" && (
            <form onSubmit={handleSubmit}>
            <div>
              <label
                style={{ position: "relative", top: "140px", left: "810px" }}
                htmlFor="paket_pengadaan"
              >
                Paket Pengadaan
              </label>
              <select
                style={PilihPengadaanStyle1}
                id="paket_pengadaan"
                name="paket_pengadaan"
                value={formData.paket_pengadaan}
                onChange={handleChangeSelect}
              >
                <option value="">Pilih Paket Pengadaan</option>
                {options.map((option) => (
                  <option key={option.ID} value={option.NamaPengadaan}>
                    {option.NamaPengadaan}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                style={{
                  marginTop: "220px",
                  marginLeft: "875px",
                  position: "absolute",
                }}
                htmlFor="id_rup"
              >
                ID RUP
              </label>
              <input
                type="number"
                id="id_rup"
                name="id_rup"
                placeholder="Id RUP"
                style={PilihPengadaanStyle2}
                value={formData.id_rup}
                onChange={handleChangeSelect}
                readOnly
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "320px",
                  marginLeft: "875px",
                  position: "absolute",
                }}
                htmlFor="nilai_rab"
              >
                Nilai Rab
              </label>
              <input
                type="number"
                id="nilai_rab"
                name="nilai_rab"
                placeholder="nilai_rab"
                style={PilihPengadaanStyle3}
                value={formData.nilai_rab}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "320px",
                  marginLeft: "1350px",
                  display: "flex",
                  position: "absolute",
                }}
                htmlFor="nilai_rup"
              >
                Nilai RUP{" "}
              </label>
              <input
                type="number"
                id="nilai_rup"
                name="nilai_rup"
                placeholder="nilai_rup"
                style={PilihPengadaanStyle4}
                value={formData.nilai_rup}
                onChange={handleChangeSelect}
                readOnly
              />
            </div>
            <div>
              <label
                style={{ position: "relative", top: "420px", left: "860px" }}
                htmlFor="nilai_tkdn"
              >
                Nilai TKDN
              </label>
              <input
                type="number"
                id="nilai_tkdn"
                name="nilai_tkdn"
                placeholder="nilai_tkdn"
                style={PilihPengadaanStyle5}
                value={formData.nilai_tkdn}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{ position: "relative", top: "400px", left: "1375px" }}
                htmlFor="tkdn"
              >
                TKDN
              </label>
              <input
                type="number"
                id="tkdn"
                name="tkdn"
                placeholder="tkdn"
                style={PilihPengadaanStyle6}
                value={formData.tkdn}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{ position: "relative", top: "480px", left: "890px" }}
                htmlFor="no_pr"
              >
                No PR
              </label>
              <input
                type="text"
                id="no_pr"
                name="no_pr"
                placeholder="no_pr PR"
                style={PilihPengadaanStyle7}
                value={formData.no_pr}
                onChange={handleChange}
              />
            </div>
            {/*
            <div>
              <UploadIzinPrinsipStyle
                isSelected={isSelected}
                component="label"
                varian="contained"
              >
                {isSelected ? "File Dipilih" : "Upload IzinPrinsip"}
                <UploadInput type="file" onChange={handleFileChange} />
              </UploadIzinPrinsipStyle>
            </div>
              
            <div>
              <UploadSpek
                isSelected1={isSelected1}
                component="label"
                varian="contained"
              >
                {isSelected1 ? "File Dipilih" : "Upload Spek/KK"}
                <UploadInput type="file" onChange={handleFileChange1} />
              </UploadSpek>
            </div>
              */}
            <div>
              <UploadRAB
                isSelected2={isSelected2}
                component="label"
                varian="contained"
              >
                {isSelected2 ? "File Dipilih" : "Upload RAB "}
                <UploadInput type="file" onChange={handleFileChange2} />
              </UploadRAB>
            </div>
            {/*
            <div>
              <PilihPengadaanStyle11>
                Download
                <UploadInput type="file" />
              </PilihPengadaanStyle11>
            </div>
            {/*
                <div>
                    <label htmlFor='klasifikai'></label>
                    <input 
                    type='text'
                    id='klasifikai' 
                    name='klasifikai' 
                    placeholder='Pilih Klasifikai Penyedia'
                    style={PilihPengadaanStyle12}
                    value={formData.klasifikai}
                    onChange={handleChange}/>
                </div>*/}
              {/*
            <div>
              <label
                style={{ position: "relative", left: "830px", top: "705px" }}
                htmlFor="nama_penyedia"
              >
                Nama Penyedia
              </label>
              <input
                type="text"
                id="nama_penyedia"
                name="nama_penyedia"
                style={PilihPengadaanStyle13}
                value={formData.nama_penyedia}
                placeholder="Nama Penyedia"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{
                  position: "relative",
                  left: "1325px",
                  top: "785px",
                  fontSize: "13px",
                }}
                htmlFor="status_penyedia"
              >
                Status Penyedia
              </label>
              <input
                type="text"
                id="status_penyedia"
                name="status_penyedia"
                placeholder="status_penyedia"
                style={PilihPengadaanStyle14}
                value={formData.status_penyedia}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{ position: "relative", left: "800px", top: "766px" }}
                htmlFor="klasifikasi_penyedia"
              >
                Klasifikasi Penyedia
              </label>
              <input
                type="text"
                id="klasifikasi_penyedia"
                name="klasifikasi_penyedia"
                placeholder="Terisi Secara Otomatis "
                value={formData.klasifikasi_penyedia}
                style={PilihPengadaanStyle15}
                onChange={handleChange}
              />
            </div>
              */}

            <Submit onClick={handleSubmit}>Submit</Submit>
          </form>
          )}
          {selects ==="5" && (
            <form onSubmit={handleSubmit}>
            <div>
              <label
                style={{ position: "relative", top: "140px", left: "810px" }}
                htmlFor="paket_pengadaan"
              >
                Paket Pengadaan
              </label>
              <select
                style={PilihPengadaanStyle1}
                id="paket_pengadaan"
                name="paket_pengadaan"
                value={formData.paket_pengadaan}
                onChange={handleChangeSelect}
              >
                <option value="">Pilih Paket Pengadaan</option>
                {options.map((option) => (
                  <option key={option.ID} value={option.NamaPengadaan}>
                    {option.NamaPengadaan}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                style={{
                  marginTop: "220px",
                  marginLeft: "875px",
                  position: "absolute",
                }}
                htmlFor="id_rup"
              >
                ID RUP
              </label>
              <input
                type="number"
                id="id_rup"
                name="id_rup"
                placeholder="Id RUP"
                style={PilihPengadaanStyle2}
                value={formData.id_rup}
                onChange={handleChangeSelect}
                readOnly
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "320px",
                  marginLeft: "875px",
                  position: "absolute",
                }}
                htmlFor="nilai_rab"
              >
                Nilai Rab
              </label>
              <input
                type="number"
                id="nilai_rab"
                name="nilai_rab"
                placeholder="nilai_rab"
                style={PilihPengadaanStyle3}
                value={formData.nilai_rab}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{
                  marginTop: "320px",
                  marginLeft: "1350px",
                  display: "flex",
                  position: "absolute",
                }}
                htmlFor="nilai_rup"
              >
                Nilai RUP{" "}
              </label>
              <input
                type="number"
                id="nilai_rup"
                name="nilai_rup"
                placeholder="nilai_rup"
                style={PilihPengadaanStyle4}
                value={formData.nilai_rup}
                onChange={handleChangeSelect}
                readOnly
              />
            </div>
            <div>
              <label
                style={{ position: "relative", top: "420px", left: "860px" }}
                htmlFor="nilai_tkdn"
              >
                Nilai TKDN
              </label>
              <input
                type="number"
                id="nilai_tkdn"
                name="nilai_tkdn"
                placeholder="nilai_tkdn"
                style={PilihPengadaanStyle5}
                value={formData.nilai_tkdn}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{ position: "relative", top: "400px", left: "1375px" }}
                htmlFor="tkdn"
              >
                TKDN
              </label>
              <input
                type="number"
                id="tkdn"
                name="tkdn"
                placeholder="tkdn"
                style={PilihPengadaanStyle6}
                value={formData.tkdn}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{ position: "relative", top: "480px", left: "890px" }}
                htmlFor="no_pr"
              >
                No PR
              </label>
              <input
                type="text"
                id="no_pr"
                name="no_pr"
                placeholder="no_pr PR"
                style={PilihPengadaanStyle7}
                value={formData.no_pr}
                onChange={handleChange}
              />
            </div>
            {/*
            <div>
              <UploadIzinPrinsipStyle
                isSelected={isSelected}
                component="label"
                varian="contained"
              >
                {isSelected ? "File Dipilih" : "Upload IzinPrinsip"}
                <UploadInput type="file" onChange={handleFileChange} />
              </UploadIzinPrinsipStyle>
            </div>
              
            <div>
              <UploadSpek
                isSelected1={isSelected1}
                component="label"
                varian="contained"
              >
                {isSelected1 ? "File Dipilih" : "Upload Spek/KK"}
                <UploadInput type="file" onChange={handleFileChange1} />
              </UploadSpek>
            </div>
              */}
            <div>
              <UploadRAB
                isSelected2={isSelected2}
                component="label"
                varian="contained"
              >
                {isSelected2 ? "File Dipilih" : "Upload RAB "}
                <UploadInput type="file" onChange={handleFileChange2} />
              </UploadRAB>
            </div>
            {/*
            <div>
              <PilihPengadaanStyle11>
                Download
                <UploadInput type="file" />
              </PilihPengadaanStyle11>
            </div>
            {/*
                <div>
                    <label htmlFor='klasifikai'></label>
                    <input 
                    type='text'
                    id='klasifikai' 
                    name='klasifikai' 
                    placeholder='Pilih Klasifikai Penyedia'
                    style={PilihPengadaanStyle12}
                    value={formData.klasifikai}
                    onChange={handleChange}/>
                </div>*/}
              {/*
            <div>
              <label
                style={{ position: "relative", left: "830px", top: "705px" }}
                htmlFor="nama_penyedia"
              >
                Nama Penyedia
              </label>
              <input
                type="text"
                id="nama_penyedia"
                name="nama_penyedia"
                style={PilihPengadaanStyle13}
                value={formData.nama_penyedia}
                placeholder="Nama Penyedia"
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{
                  position: "relative",
                  left: "1325px",
                  top: "785px",
                  fontSize: "13px",
                }}
                htmlFor="status_penyedia"
              >
                Status Penyedia
              </label>
              <input
                type="text"
                id="status_penyedia"
                name="status_penyedia"
                placeholder="status_penyedia"
                style={PilihPengadaanStyle14}
                value={formData.status_penyedia}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                style={{ position: "relative", left: "800px", top: "766px" }}
                htmlFor="klasifikasi_penyedia"
              >
                Klasifikasi Penyedia
              </label>
              <input
                type="text"
                id="klasifikasi_penyedia"
                name="klasifikasi_penyedia"
                placeholder="Terisi Secara Otomatis "
                value={formData.klasifikasi_penyedia}
                style={PilihPengadaanStyle15}
                onChange={handleChange}
              />
            </div>
              */}

            <Submit onClick={handleSubmit}>Submit</Submit>
          </form>
          )}

          {/* Tampilan dialog pesan sukses */}
          <Dialog
            open={showSuccessDialog}
            onClose={() => setShowSuccessDialog(false)}
          >
            <DialogTitle>Pesan Sukses</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Pengadaan telah berhasil dibuat!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCreateAgain}>Tutup</Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <div
          style={{ backgroundColor: "black", width: "100%", height: "100vh" }}
        ></div>
      )}
    </Beranda1>
  );
}

export default SelectForm;
