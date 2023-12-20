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
import jwtDecode from "jwt-decode";

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

const PilihPengadaanStyle8 = styled("label")({
  backgroundColor: `rgba(8, 31, 114, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `211px`,
  display: "flex",
  height: `57px`,
  position: `absolute`,
  left: `947px`,
  top: `593px`,
  cursor: "pointer",
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
});
const PilihPengadaanStyle9 = styled("label")({
  backgroundColor: `rgba(8, 31, 114, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `211px`,
  display: "flex",
  height: `57px`,
  position: `absolute`,
  left: `1171px`,
  top: `593px`,
  cursor: "pointer",
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
});
const PilihPengadaanStyle10 = styled("label")({
  backgroundColor: `rgba(8, 31, 114, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `211px`,
  display: "flex",
  height: `57px`,
  position: `absolute`,
  left: `1395px`,
  top: `593px`,
  cursor: "pointer",
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
});

const PilihPengadaanStyle11 = styled("label")({
  backgroundColor: `rgba(255, 199, 0, 1)`,
  border: `1px solid rgba(255, 255, 255, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `211px`,
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
const PilihPengadaanStyle12 = {
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `858px`,
  height: `73px`,
  position: `absolute`,
  left: `947px`,
  top: `654px`,
};

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

//tata letak tulisan tulisan

function SelectForm() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  const [id_pegawaii, setIdPegawai] = useState(""); // Replace 'jwtToken' with your actual token key
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch data from API for options
    axios
      .get("http://localhost:9000/user/faker")
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
      });
  }, []);

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
  const [selectedOption, setSelectedOption] = useState("");

  const [formData, setFormData] = useState({
    paket_pengadaan: "",
    id_rup: "",
    nilai_rab: "",
    nilai_rup: "",
    nilai_tkdn: "",
    tkdn: "",
    no_pr: "",
    Klasifikai: "",
    nama_penyedia: "",
    Klasifikasi1Penyedia: "Ini Sudah Otomatis",
    status_penyedia: "",
    rab: "",
    kk: "",
    izin_prinsip: "",
  });
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({
      paket_pengadaan: "",
      id_rup: "",
      nilai_rab: "",
      nilai_rup: "",
      nilai_tkdn: "",
      tkdn: "",
      no_pr: "",
      Klasifikai: "",
      nama_penyedia: "",
      Klasifikasi1Penyedia: "Ini Sudah Otomatis",
      status_penyedia: "",
      rab: "",
      kk: "",
      izin_prinsip: "",
    });
  };

  console.log(formData.Id_pegawai);

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
      const response = await axios.post(
        "http://127.0.0.1:9000/pengadaan/buat_pengadaan",
        formData
      );
      console.log(formData);
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
      IdRUP: "",
      NilaiRAB: "",
      NilaiRUP: "",
      NilaiTKDN: "",
      TKDN: "",
      NomorPR: "",
      KlasifikasiPenyedia: "",
      PilihNamaPenyedia: "",
      Klasifikasi1Penyedia: "Ini Ss",
      StatusPenyedia: "",
      UploadRAB: "",
      UploadKAK: "",
      UploadIzinPrinsip: "",
      Id_pegawai: id_pegawaii,
    });
    window.location.reload();
  };
  /*


  


  */

  return (
    <Beranda1>
      <Rectangle54 src={Backround} loading="lazy" alt={"Rectangle 54"} />
      <Navbar />
      <div
        style={{
          left: "1600px",
          top:'70px',
          position: "absolute",
          display: "flex",
          flexDirection: "column",
        }}
      >
       
        <CostumSelect1 value={selectedOption} onChange={handleSelectChange}>
          <option value="">Pilih Jenis Pengadaan</option>
          <option value="option1">Opsi 1</option>
          <option value="option2">Opsi 2</option>
          <option value="Penetapan Langsung">Penetapan Langsung</option>
        </CostumSelect1>
      </div>

      {selectedOption === "option1" && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="paket_pengadaan"></label>
            <select
              id="paket_pengadaan"
              name="paket_pengadaan"
              style={PilihPengadaanStyle1}
              value={formData.paket_pengadaan}
              onChange={handleChange}
            >
              <option value="pilih">Pilih Paket Pengadaan</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              {/* Tambahkan opsi lainnya sesuai kebutuhan */}
            </select>
          </div>

          <div>
            <label htmlFor="nilai_rab"></label>
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
            <label htmlFor="nilai_rup" style={{ left: "400px" }}>
              {" "}
              testing{" "}
            </label>
            <input
              type="number"
              id="nilai_rup"
              name="nilai_rup"
              placeholder="nilai_rup"
              style={PilihPengadaanStyle4}
              value={formData.nilai_rup}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nilai_tkdn"></label>
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
            <label htmlFor="tkdn"></label>
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
            <label htmlFor="no_pr"></label>
            <input
              type="number"
              id="no_pr"
              name="no_pr"
              placeholder="no_pr PR"
              style={PilihPengadaanStyle7}
              value={formData.no_pr}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="id_pegawai"></label>
            <input
              type="hidden"
              id="id_pegawai"
              name="id_pegawai"
              placeholder="id_pegawai"
              value={formData.Id_pegawai}
              onChange={handleChange}
            />
          </div>
          <div>
            <PilihPengadaanStyle8>
              Upload
              <UploadInput type="file" />
            </PilihPengadaanStyle8>
          </div>
          <div>
            <PilihPengadaanStyle9>
              Upload
              <UploadInput type="file" />
            </PilihPengadaanStyle9>
          </div>
          <div>
            <PilihPengadaanStyle10>
              Upload
              <UploadInput type="file" />
            </PilihPengadaanStyle10>
          </div>
          <div>
            <PilihPengadaanStyle11>
              Upload
              <UploadInput type="file" />
            </PilihPengadaanStyle11>
          </div>
          <div>
            <label htmlFor="Klasifikai"></label>
            <input
              type="text"
              id="Klasifikai"
              name="Klasifikai"
              placeholder="Pilih Klasifikai Penyedia"
              style={PilihPengadaanStyle12}
              value={formData.Klasifikai}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nama_penyedia"></label>
            <input
              type="text"
              id="nama_penyedia"
              name="nama_penyedia"
              style={PilihPengadaanStyle13}
              value={formData.nama_penyedia}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="status_penyedia"></label>
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
            <label htmlFor="Klasifikasi1Penyedia"></label>
            <input
              type="text"
              id="Klasifikasi1Penyedia"
              name="Klasifikasi1Penyedia"
              placeholder="Terisi Secara Otomatis "
              style={PilihPengadaanStyle15}
              value={formData.Klasifikasi1Penyedia}
              onChange={handleChange}
              readOnly
            />
          </div>

          <Submit onClick={handleSubmit}>Submit</Submit>
        </form>
      )}

      {selectedOption === "option2" && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="paket_pengadaan"></label>
            <input
              type="text"
              id="paket_pengadaan"
              name="paket_pengadaan"
              placeholder="paket_pengadaan"
              style={PilihPengadaanStyle1}
              value={formData.paket_pengadaan}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="id_rup"></label>
            <input
              type="text"
              id="id_rup"
              name="id_rup"
              placeholder="Id RUP"
              style={PilihPengadaanStyle2}
              value={formData.id_rup}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nilai_rab"></label>
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
            <label htmlFor="nilai_rup" style={{ left: "400px" }}>
              {" "}
              testing{" "}
            </label>
            <input
              type="number"
              id="nilai_rup"
              name="nilai_rup"
              placeholder="nilai_rup"
              style={PilihPengadaanStyle4}
              value={formData.nilai_rup}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nilai_tkdn"></label>
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
            <label htmlFor="tkdn"></label>
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
            <label htmlFor="no_pr"></label>
            <input
              type="number"
              id="no_pr"
              name="no_pr"
              placeholder="no_pr PR"
              style={PilihPengadaanStyle7}
              value={formData.no_pr}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="id_pegawai"></label>
            <input
              type="hidden"
              id="id_pegawai"
              name="id_pegawai"
              placeholder="id_pegawai"
              value={formData.Id_pegawai}
              onChange={handleChange}
            />
          </div>
          <div>
            <PilihPengadaanStyle8>
              Upload
              <UploadInput type="file" />
            </PilihPengadaanStyle8>
          </div>
          <div>
            <PilihPengadaanStyle9>
              Upload
              <UploadInput type="file" />
            </PilihPengadaanStyle9>
          </div>
          <div>
            <PilihPengadaanStyle10>
              Upload
              <UploadInput type="file" />
            </PilihPengadaanStyle10>
          </div>
          <div>
            <PilihPengadaanStyle11>
              Upload
              <UploadInput type="file" />
            </PilihPengadaanStyle11>
          </div>
          <div>
            <label htmlFor="Klasifikai"></label>
            <input
              type="text"
              id="Klasifikai"
              name="Klasifikai"
              placeholder="Pilih Klasifikai Penyedia"
              style={PilihPengadaanStyle12}
              value={formData.Klasifikai}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nama_penyedia"></label>
            <input
              type="text"
              id="nama_penyedia"
              name="nama_penyedia"
              style={PilihPengadaanStyle13}
              value={formData.nama_penyedia}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="status_penyedia"></label>
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
            <label htmlFor="Klasifikasi1Penyedia"></label>
            <input
              type="text"
              id="Klasifikasi1Penyedia"
              name="Klasifikasi1Penyedia"
              placeholder="Terisi Secara Otomatis "
              style={PilihPengadaanStyle15}
              value={formData.Klasifikasi1Penyedia}
              onChange={handleChange}
              readOnly
            />
          </div>

          <Submit onClick={handleSubmit}>Submit</Submit>
        </form>
      )}
      {selectedOption === "Penetapan Langsung" && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="paket_pengadaan"></label>
            <input
              type="text"
              id="paket_pengadaan"
              name="paket_pengadaan"
              placeholder="paket_pengadaan"
              style={PilihPengadaanStyle1}
              value={formData.paket_pengadaan}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="id_rup"></label>
            <input
              type="text"
              id="id_rup"
              name="id_rup"
              placeholder="Id RUP"
              style={PilihPengadaanStyle2}
              value={formData.id_rup}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nilai_rab"></label>
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
            <label htmlFor="nilai_rup" style={{ left: "400px" }}>
              {" "}
              testing{" "}
            </label>
            <input
              type="number"
              id="nilai_rup"
              name="nilai_rup"
              placeholder="nilai_rup"
              style={PilihPengadaanStyle4}
              value={formData.nilai_rup}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="nilai_tkdn"></label>
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
            <label htmlFor="tkdn"></label>
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
            <label htmlFor="no_pr"></label>
            <input
              type="number"
              id="no_pr"
              name="no_pr"
              placeholder="no_pr PR"
              style={PilihPengadaanStyle7}
              value={formData.no_pr}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="id_pegawai"></label>
            <input
              type="hidden"
              id="id_pegawai"
              name="id_pegawai"
              placeholder="id_pegawai"
              value={formData.Id_pegawai}
              onChange={handleChange}
            />
          </div>
          <div>
            <PilihPengadaanStyle8>
              RAB
              <UploadInput type="file" />
            </PilihPengadaanStyle8>
          </div>
          <div>
            <PilihPengadaanStyle9>
              Spak
              <UploadInput type="file" />
            </PilihPengadaanStyle9>
          </div>
          <div></div>
          <div>
            <PilihPengadaanStyle11>
              download
              <UploadInput type="file" />
            </PilihPengadaanStyle11>
          </div>

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
    </Beranda1>
  );
}

/*
function SelectForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    no_pr: '',
    tkdn: '',
    nilai_rab: '',
    id_rup: '',
  });

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({
      no_pr: '',
      tkdn: '',
      nilai_rab: '',
      id_rup: '',
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h2>Pilih Opsi</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Pilih Opsi</option>
        <option value="option1">Opsi 1</option>
        <option value="option2">Opsi 2</option>
        <option value="option3">Opsi 3</option>
      </select>

      {selectedOption === 'option1' && (
        <div>
          <label>No PR:</label>
          <input
            type="text"
            name="no_pr"
            value={formData.no_pr}
            onChange={handleChange}
          />
          <br />
          <label>TKDN:</label>
          <input
            type="text"
            name="tkdn"
            value={formData.tkdn}
            onChange={handleChange}
          />
        </div>
      )}

      {selectedOption === 'option2' && (
        <div>
          <label>Nilai RAB:</label>
          <input
            type="number"
            name="nilai_rab"
            value={formData.nilai_rab}
            onChange={handleChange}
          />
          <br />
          <label>ID RUP:</label>
          <input
            type="text"
            name="id_rup"
            value={formData.id_rup}
            onChange={handleChange}
          />
        </div>
      )}

      {selectedOption === 'option3' && (
        <div>
          <label>No PR:</label>
          <input
            type="text"
            name="no_pr"
            value={formData.no_pr}
            onChange={handleChange}
          />
          <br />
          <label>TKDN:</label>
          <input
            type="text"
            name="tkdn"
            value={formData.tkdn}
            onChange={handleChange}
          />
          <br />
          <label>Nilai RAB:</label>
          <input
            type="number"
            name="nilai_rab"
            value={formData.nilai_rab}
            onChange={handleChange}
          />
          <br />
          <label>ID RUP:</label>
          <input
            type="text"
            name="id_rup"
            value={formData.id_rup}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
*/
export default SelectForm;
