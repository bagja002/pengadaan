import React, { useEffect, useState } from "react";
import Backround from "../component/assets/Rectangle54.png";

import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import NavbarEdit from "./NavbarKhususEdit";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";

const PenetapanLangsung1 = styled("div")({
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

const StyledIdRup = {
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `350px`,
  height: `73px`,
  position: `absolute`,
  left: `906px`,
  top: `135px`,
};

const StyledNamaPengadaan = {
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `930px`,
  height: `73px`,
  position: `absolute`,
  left: `906px`,
  top: `230px`,
};

const StyledNamaPenyedia = {
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `930px`,
  height: `73px`,
  position: `absolute`,
  left: `912px`,
  top: `418px`,
};

const StyledNamaPenyedia1 = {
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `930px`,
  height: `73px`,
  position: `absolute`,
  left: `906px`,
  top: `513px`,
};

const StyledPenawaranPenye = {
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `413px`,
  height: `73px`,
  position: `absolute`,
  left: `906px`,
  top: `608px`,
};

const StyledNilaiNegosiasi = {
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `413px`,
  height: `73px`,
  position: `absolute`,
  left: `906px`,
  top: `693px`,
};

const StyledIntruksi = styled("label")(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? "red" : `rgba(32, 56, 100, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `912px`,
  top: `323px`,
  cursor: "pointer",
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
}));

const StyledUndanganPenyed = styled("label")(({ isSelected1 }) => ({
  backgroundColor: isSelected1 ? "red" : `rgba(32, 56, 100, 1)`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1407px`,
  top: `323px`,
  cursor: "pointer",
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",

  display: "flex",
}));

const StyledDownloadTempla = styled("button")({
  backgroundColor: `rgba(255, 199, 0, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1636px`,
  top: `323px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
});

const UploadPenilaianRisik = styled("label")(({ isSelected2 }) => ({
  backgroundColor: isSelected2 ? "red" : `rgba(32, 56, 100, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,

  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1408px`,
  top: `866px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
  cursor: "pointer",
}));

const StyledSmap = styled("label")(({ isSelected3 }) => ({
  backgroundColor: isSelected3 ? "red" : `rgba(32, 56, 100, 1)`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1118px`,
  top: `864px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
  cursor: "pointer",
}));

const UploadRisalahRapatDi = styled("label")(({ isSelected4 }) => ({
  backgroundColor: isSelected4 ? "red" : `rgba(32, 56, 100, 1)`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1636px`,
  top: `779px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
  cursor: "pointer",
}));

const StyledPaktaIntegrita = styled("label")(({ isSelected5 }) => ({
  backgroundColor: isSelected5 ? "red" : `rgba(32, 56, 100, 1)`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `903px`,
  top: `864px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
  cursor: "pointer",
}));

const UploadDokumenTkdnPen = styled("label")(({ isSelected7 }) => ({
  backgroundColor: isSelected7 ? "red" : `rgba(32, 56, 100, 1)`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1408px`,
  top: `781px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
  cursor: "pointer",
}));

const TemplatePenilaianRes = styled("button")({
  backgroundColor: `rgba(255, 199, 0, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1637px`,
  top: `866px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
});

const StyledPenawaran = styled("label")(({ isSelected6 }) => ({
  backgroundColor: isSelected6 ? "red" : `rgba(32, 56, 100, 1)`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1408px`,
  top: `606px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  cursor: "pointer",
  display: "flex",
}));

const DownloadTemplatePena = styled("button")({
  backgroundColor: `rgba(255, 199, 0, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1637px`,
  top: `606px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
});

const Rectangle44 = styled("label")(({ isSelected8 }) => ({
  backgroundColor: isSelected8 ? "red" : `rgba(32, 56, 100, 1)`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1408px`,
  top: `694px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  cursor: "pointer",
  display: "flex",
}));

const DownloadBaNegosiasi = styled("div")({
  backgroundColor: `rgba(255, 199, 0, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `200px`,
  height: `73px`,
  position: `absolute`,
  left: `1637px`,
  top: `694px`,
  alignItems: "center", // Teks berada di tengah secara vertikal
  justifyContent: "center",
  color: "white",
  display: "flex",
});

const StyledTkdn = {
  backgroundColor: `rgba(217, 217, 217, 1)`,
  border: `1px solid rgba(255, 199, 0, 1)`,
  boxSizing: `border-box`,
  borderRadius: `15px`,
  width: `413px`,
  height: `73px`,
  position: `absolute`,
  left: `906px`,
  top: `779px`,
};

const StyleSelesai = styled("button")({
  backgroundColor: `rgba(47, 85, 151, 1)`,
  borderRadius: `30px`,
  width: `226px`,
  height: `58px`,
  position: `absolute`,
  left: `1623px`,
  top: `970px`,
});

const StyledButton = styled("button")({
  backgroundColor: `rgba(47, 85, 151, 1)`,
  borderRadius: `30px`,
  width: `226px`,
  height: `58px`,
  position: `absolute`,
  left: `677px`,
  top: `979px`,
});

const Rectangle54 = styled("img")({
  height: `1080px`,
  width: `1330px`,
  position: `absolute`,
  left: `591px`,
  top: `0px`,
});
const UploadInput = styled("input")({
  display: "none", // Sembunyikan input tipe "file"
});

function EditPage() {
  const token = "U"//localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id_pengadaan = 1//searchParams.get("name");

  //pengubah warna ketika di selec

  const [isSelected, setIsSelected] = useState(false);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false); //penilaian risiko
  const [isSelected3, setIsSelected3] = useState(false);
  const [isSelected4, setIsSelected4] = useState(false); //smap
  const [isSelected5, setIsSelected5] = useState(false); //Pakta
  const [isSelected6, setIsSelected6] = useState(false); //peyedia Penawaran
  const [isSelected7, setIsSelected7] = useState(false); //dokumen tkdn
  const [isSelected8, setIsSelected8] = useState(false);

  useEffect(() => {
    if (!token) {
      console.log("Maaf Harus Login terlebih dahulu");
      alert("Anda Harus Login terlebih dahulu");
      navigate("/");
    }
  }, [token, navigate]);
  ///ambil get data Pengadaan yang di join dan juga masukan nilai nilai nya by id_pengadaan
  const [data, setData] = useState({
    id_rup: "",
    nama_pengadaan: "",
    nama_penyedia: "",
    email_penyedia: "",
    id_jenis_pengadaan: 1,
  });
  const [formData, setFormdata] = useState({
    dokumen_intruksi: "",
    dokumen_undangan_penyedia: "",
    penawaran_penyedia: "",
    nilai_negosiasi: "",
    tkdn_penyedia: "",
    dokumen_penawaran: "",
    dokumen_ba_negosiasi: "",
    dokumen_tkdn_penyedia: "",
    dokumen_risarah_rapat_direktur: "",
    dokumen_penilaian_resiko: "",
    dokumen_smap: "",
    dokumen_pakta_integritas: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const axiosInstance = axios.create({
          baseURL: "http://127.0.0.1:9000",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const response = await axiosInstance.get(
          `/pengadaan/pengadaan/detail/${id_pengadaan}`
        );

        // Mengatur data respons ke state
        setData({
          id_rup: response.data.data.Id_rup,
          nama_pengadaan: response.data.data.Nama_pengadaan,
          nama_penyedia: response.data.data.Nama_penyedia,
          email_penyedia: response.data.data.Email_penyedia,
          id_jenis_pengadaan: response.data.data.Id_jenis_pengadaan,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [token, id_pengadaan]);

  const handlerDownload = async (e) => {
    const fileUrl = "http://127.0.0.1:9000/download"; // Ganti dengan URL file di server
    e.preventDefault();

    try {
      const response = await axios.get(fileUrl, { responseType: "blob" });

      // Membuat objek URL untuk blob
      const blobUrl = URL.createObjectURL(response.data);

      // Membuat elemen anchor untuk mengunduh file
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = blobUrl;
      a.download = "TestDownload.pdf"; // Ganti dengan nama file yang diinginkan
      document.body.appendChild(a);

      // Simulasi klik pada elemen anchor untuk memulai unduhan
      a.click();
    } catch (error) {
      console.error("There was a problem with the Axios request:", error);
    }
  };

  const Handlersubmit = async (e) => {
    e.preventDefault();

    try {
      const axiosInstance = axios.create({
        baseURL: "http://127.0.0.1:9000",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const response = await axiosInstance.put(
        `/pengadaan/proses/${id_pengadaan}`,
        formData
      );

      // Lakukan sesuatu dengan respons jika diperlukan
      console.log(response.data);
      navigate("/proses_pengadaan");
    } catch (error) {
      // Tangani error jika ada
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const Navigate = useNavigate();
  const handerKembali = () => {
    Navigate("/proses_pengadaan");
  };
  //tentang file uplaod intruksi
  const handleFileIntruksi = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected(true);
      setFormdata({
        ...formData,
        dokumen_intruksi: event.target.files[0],
      });
    } else {
      setIsSelected(false);
      setFormdata({
        dokumen_intruksi: "",
      });
    }
  };
  //upload Undangan Penyedia
  const handleFileUndanganPenyedia = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected1(true);
      setFormdata({
        ...formData,
        dokumen_undangan_penyedia: event.target.files[0],
      });
    } else {
      setIsSelected1(false);
      setFormdata({
        dokumen_undangan_penyedia: "",
      });
    }
  };
  //upload Undangan Penyedia
  const handleFileUploadPenawaran = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected6(true);
      setFormdata({
        ...formData,
        dokumen_penawaran: event.target.files[0],
      });
    } else {
      setIsSelected6(false);
      setFormdata({
        dokumen_penawaran: "",
      });
    }
  };
  //Upload BA Negosiasi

  const handleFileBaNegosiasi = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected8(true);
      setFormdata({
        ...formData,
        dokumen_ba_negosiasi: event.target.files[0],
      });
    } else {
      setIsSelected8(false);
      setFormdata({
        dokumen_ba_negosiasi: "",
      });
    }
  };

  //upload dokumen tkdn penyedia

  const handleFileTkdnPenyedia = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected7(true);
      setFormdata({
        ...formData,
        dokumen_tkdn_penyedia: event.target.files[0],
      });
    } else {
      setIsSelected7(false);
      setFormdata({
        dokumen_tkdn_penyedia: "",
      });
    }
  };

  //upload Risalah rapat direktur
  //upload Undangan Penyedia
  const handleFileRisalahRapat = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected4(true);
      setFormdata({
        ...formData,
        dokumen_risarah_rapat_direktur: event.target.files[0],
      });
    } else {
      setIsSelected4(false);
      setFormdata({
        dokumen_risarah_rapat_direktur: "",
      });
    }
  };

  //upload Penilaian resiko
  //upload Undangan Penyedia
  const handleFilePenilaianResiko = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected2(true);
      setFormdata({
        ...formData,
        dokumen_penilaian_resiko: event.target.files[0],
      });
    } else {
      setIsSelected2(false);
      setFormdata({
        dokumen_penilaian_resiko: "",
      });
    }
  };
  // Upload SMAP
  //upload Undangan Penyedia
  const handleFileSmap = (event) => {
    if (event.target.files.length > 0) {
      setIsSelected3(true);
      setFormdata({
        ...formData,
        dokumen_smap: event.target.files[0],
      });
    } else {
      setIsSelected3(false);
      setFormdata({
        dokumen_smap: "",
      });
    }
  };

  //upload_pakta integritas

  const handleFilePaktaIntegritas = (event) => {
    setIsSelected5(true);
    if (event.target.files.length > 0) {
      setFormdata({
        ...formData,
        dokumen_pakta_integritas: event.target.files[0],
      });
    } else {
      setIsSelected5(false);
      setFormdata({
        dokumen_pakta_integritas: "",
      });
    }
  };

  return (
    <PenetapanLangsung1>
      {token ? (
        <>
          <Rectangle54 src={Backround} loading="lazy" alt={"Rectangle 54"} />
          <Navbar />
          {/* Penetapan Langsung */}
          {data.id_jenis_pengadaan === 1 && (
            <form onSubmit={Handlersubmit}>
              <div>
                <label htmlFor="id_rup"></label>
                <input
                  type="text"
                  id="id_rup"
                  name="id_rup"
                  placeholder="ID RUP"
                  style={StyledIdRup}
                  value={data.id_rup}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_pengadaan"></label>
                <input
                  type="text"
                  id="nama_pengadaan"
                  name="nama_pengadaan"
                  placeholder="nama_pengadaan"
                  style={StyledNamaPengadaan}
                  value={data.nama_pengadaan}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_penyedia"></label>
                <input
                  type="text"
                  id="nama_penyedia"
                  name="nama_penyedia"
                  placeholder="nama_penyedia"
                  style={StyledNamaPenyedia}
                  value={data.nama_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="email_penyedia"></label>
                <input
                  type="text"
                  id="email_penyedia"
                  name="email_penyedia"
                  placeholder="email_penyedia"
                  style={StyledNamaPenyedia1}
                  value={data.email_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="penawaran_penyedia"></label>
                <input
                  type="text"
                  id="penawaran_penyedia"
                  name="penawaran_penyedia"
                  placeholder="penawaran_penyedia"
                  style={StyledPenawaranPenye}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="nilai_negosiasi"></label>
                <input
                  type="text"
                  id="nilai_negosiasi"
                  name="nilai_negosiasi"
                  placeholder="nilai_negosiasi"
                  style={StyledNilaiNegosiasi}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="tkdn_penyedia"></label>
                <input
                  type="text"
                  id="tkdn_penyedia"
                  name="tkdn_penyedia"
                  placeholder="tkdn_penyedia"
                  style={StyledTkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <StyledIntruksi
                  isSelected={isSelected}
                  component="label"
                  varian="contained"
                >
                  {isSelected ? "File Dipilih" : "Upload Intruksi"}
                  <UploadInput type="file" onChange={handleFileIntruksi} />
                </StyledIntruksi>
              </div>
              <div>
                <StyledUndanganPenyed
                  isSelected1={isSelected1}
                  component="label"
                  varian="contained"
                >
                  {isSelected1 ? "File Dipilih" : "Undangan Penyedia"}

                  <UploadInput
                    type="file"
                    onChange={handleFileUndanganPenyedia}
                  />
                </StyledUndanganPenyed>
              </div>
              <div>
                <StyledPenawaran
                  isSelected6={isSelected6}
                  component="label"
                  varian="container"
                >
                  {isSelected6 ? "File Dipilih" : "Upload Penawaran"}

                  <UploadInput
                    type="file"
                    onChange={handleFileUploadPenawaran}
                  />
                </StyledPenawaran>
              </div>
              <div>
                <UploadDokumenTkdnPen
                  isSelected7={isSelected7}
                  component="label"
                  varian="container"
                >
                  {isSelected7 ? "File Dipilih" : "Dokumen TKDN Penyedia"}

                  <UploadInput type="file" onChange={handleFileTkdnPenyedia} />
                </UploadDokumenTkdnPen>
              </div>
              <div>
                <StyledPaktaIntegrita
                  isSelected5={isSelected5}
                  component="label"
                  varian="container"
                >
                  {isSelected5 ? "File Dipilih" : "Pakta Integritas"}
                  <UploadInput
                    type="file"
                    onChange={handleFilePaktaIntegritas}
                  />
                </StyledPaktaIntegrita>
              </div>
              <div>
                <StyledSmap
                  isSelected3={isSelected3}
                  component="label"
                  varian="container"
                >
                  {isSelected3 ? "File Dipilih" : "SMAP"}

                  <UploadInput type="file" onChange={handleFileSmap} />
                </StyledSmap>
              </div>
              <div>
                <UploadPenilaianRisik
                  isSelected2={isSelected2}
                  component="label"
                  varian="container"
                >
                  {isSelected2 ? "File Dipilih" : "Penilaian Risiko"}

                  <UploadInput
                    type="file"
                    onChange={handleFilePenilaianResiko}
                  />
                </UploadPenilaianRisik>
              </div>
              <div>
                <UploadRisalahRapatDi
                  isSelected4={isSelected4}
                  component="label"
                  varian="container"
                >
                  {isSelected4 ? "File Dipilih" : "Risalah Rapat Direksi"}
                  <UploadInput type="file" onChange={handleFileRisalahRapat} />
                </UploadRisalahRapatDi>
              </div>
              <div>
                <Rectangle44
                  isSelected8={isSelected8}
                  component="label"
                  varian="container"
                >
                  {isSelected8 ? "File Dipilih" : "BA Negosiasi"}

                  <UploadInput type="file" onChange={handleFileBaNegosiasi} />
                </Rectangle44>
              </div>
              <StyleSelesai> Selesai </StyleSelesai>
            </form>
          )}

          {/* Penyedia Offline */}
          {data.id_jenis_pengadaan === 2 && (
            <form onSubmit={Handlersubmit}>
              <div>
                <label htmlFor="id_rup"></label>
                <input
                  type="text"
                  id="id_rup"
                  name="id_rup"
                  placeholder="ID RUP"
                  style={StyledIdRup}
                  value={data.id_rup}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_pengadaan"></label>
                <input
                  type="text"
                  id="nama_pengadaan"
                  name="nama_pengadaan"
                  placeholder="nama_pengadaan"
                  style={StyledNamaPengadaan}
                  value={data.nama_pengadaan}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_penyedia"></label>
                <input
                  type="text"
                  id="nama_penyedia"
                  name="nama_penyedia"
                  placeholder="nama_penyedia"
                  style={StyledNamaPenyedia}
                  value={data.nama_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="email_penyedia"></label>
                <input
                  type="text"
                  id="email_penyedia"
                  name="email_penyedia"
                  placeholder="email_penyedia"
                  style={StyledNamaPenyedia1}
                  value={data.email_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="penawaran_penyedia"></label>
                <input
                  type="text"
                  id="penawaran_penyedia"
                  name="penawaran_penyedia"
                  placeholder="penawaran_penyedia"
                  style={StyledPenawaranPenye}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="nilai_negosiasi"></label>
                <input
                  type="text"
                  id="nilai_negosiasi"
                  name="nilai_negosiasi"
                  placeholder="nilai_negosiasi"
                  style={StyledNilaiNegosiasi}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="tkdn_penyedia"></label>
                <input
                  type="text"
                  id="tkdn_penyedia"
                  name="tkdn_penyedia"
                  placeholder="tkdn_penyedia"
                  style={StyledTkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <StyledIntruksi
                  isSelected={isSelected}
                  component="label"
                  varian="contained"
                >
                  {isSelected ? "File Dipilih" : "Upload Intruksi"}
                  <UploadInput type="file" onChange={handleFileIntruksi} />
                </StyledIntruksi>
              </div>
              <div>
                <StyledUndanganPenyed
                  isSelected1={isSelected1}
                  component="label"
                  varian="contained"
                >
                  {isSelected1 ? "File Dipilih" : "Undangan Penyedia"}

                  <UploadInput
                    type="file"
                    onChange={handleFileUndanganPenyedia}
                  />
                </StyledUndanganPenyed>
              </div>
              <div>
                <StyledPenawaran
                  isSelected6={isSelected6}
                  component="label"
                  varian="container"
                >
                  {isSelected6 ? "File Dipilih" : "Upload Penawaran"}

                  <UploadInput
                    type="file"
                    onChange={handleFileUploadPenawaran}
                  />
                </StyledPenawaran>
              </div>
              <div>
                <UploadDokumenTkdnPen
                  isSelected7={isSelected7}
                  component="label"
                  varian="container"
                >
                  {isSelected7 ? "File Dipilih" : "Dokumen TKDN Penyedia"}

                  <UploadInput type="file" onChange={handleFileTkdnPenyedia} />
                </UploadDokumenTkdnPen>
              </div>
              <div>
                <StyledPaktaIntegrita
                  isSelected5={isSelected5}
                  component="label"
                  varian="container"
                >
                  {isSelected5 ? "File Dipilih" : "Pakta Integritas"}
                  <UploadInput
                    type="file"
                    onChange={handleFilePaktaIntegritas}
                  />
                </StyledPaktaIntegrita>
              </div>
              <div>
                <StyledSmap
                  isSelected3={isSelected3}
                  component="label"
                  varian="container"
                >
                  {isSelected3 ? "File Dipilih" : "SMAP"}

                  <UploadInput type="file" onChange={handleFileSmap} />
                </StyledSmap>
              </div>
              <div>
                <UploadPenilaianRisik
                  isSelected2={isSelected2}
                  component="label"
                  varian="container"
                >
                  {isSelected2 ? "File Dipilih" : "Penilaian Risiko"}

                  <UploadInput
                    type="file"
                    onChange={handleFilePenilaianResiko}
                  />
                </UploadPenilaianRisik>
              </div>
              {/*
            <div>
              <UploadRisalahRapatDi isSelected4 = {isSelected4} component="label" varian= "container">
                {isSelected4 ? "File Dipilih" : "Risalah Rapat Direksi"}
                <UploadInput type="file" onChange={handleFileRisalahRapat} />
              </UploadRisalahRapatDi>
            </div>
          */}
              <div>
                <Rectangle44
                  isSelected8={isSelected8}
                  component="label"
                  varian="container"
                >
                  {isSelected8 ? "File Dipilih" : "BA Negosiasi"}

                  <UploadInput type="file" onChange={handleFileBaNegosiasi} />
                </Rectangle44>
              </div>
              <StyleSelesai> Selesai </StyleSelesai>
            </form>
          )}

          {/*  e-catalog */}
          {data.id_jenis_pengadaan === 3 && (
            <form onSubmit={Handlersubmit}>
              <div>
                <label htmlFor="id_rup"></label>
                <input
                  type="text"
                  id="id_rup"
                  name="id_rup"
                  placeholder="ID RUP"
                  style={StyledIdRup}
                  value={data.id_rup}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_pengadaan"></label>
                <input
                  type="text"
                  id="nama_pengadaan"
                  name="nama_pengadaan"
                  placeholder="nama_pengadaan"
                  style={StyledNamaPengadaan}
                  value={data.nama_pengadaan}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_penyedia"></label>
                <input
                  type="text"
                  id="nama_penyedia"
                  name="nama_penyedia"
                  placeholder="nama_penyedia"
                  style={StyledNamaPenyedia}
                  value={data.nama_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="email_penyedia"></label>
                <input
                  type="text"
                  id="email_penyedia"
                  name="email_penyedia"
                  placeholder="email_penyedia"
                  style={StyledNamaPenyedia1}
                  value={data.email_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="penawaran_penyedia"></label>
                <input
                  type="text"
                  id="penawaran_penyedia"
                  name="penawaran_penyedia"
                  placeholder="penawaran_penyedia"
                  style={StyledPenawaranPenye}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="nilai_negosiasi"></label>
                <input
                  type="text"
                  id="nilai_negosiasi"
                  name="nilai_negosiasi"
                  placeholder="nilai_negosiasi"
                  style={StyledNilaiNegosiasi}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="tkdn_penyedia"></label>
                <input
                  type="text"
                  id="tkdn_penyedia"
                  name="tkdn_penyedia"
                  placeholder="tkdn_penyedia"
                  style={StyledTkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <StyledIntruksi
                  isSelected={isSelected}
                  component="label"
                  varian="contained"
                >
                  {isSelected ? "File Dipilih" : "Upload Intruksi"}
                  <UploadInput type="file" onChange={handleFileIntruksi} />
                </StyledIntruksi>
              </div>

              <div>
                <UploadDokumenTkdnPen
                  isSelected7={isSelected7}
                  component="label"
                  varian="container"
                >
                  {isSelected7 ? "File Dipilih" : "Dokumen TKDN Penyedia"}

                  <UploadInput type="file" onChange={handleFileTkdnPenyedia} />
                </UploadDokumenTkdnPen>
              </div>

              <StyleSelesai> Selesai </StyleSelesai>
            </form>
          )}

          {/* Toko offline/toko online  */}
          {data.id_jenis_pengadaan === 4 && (
            <form onSubmit={Handlersubmit}>
              <div>
                <label htmlFor="id_rup"></label>
                <input
                  type="text"
                  id="id_rup"
                  name="id_rup"
                  placeholder="ID RUP"
                  style={StyledIdRup}
                  value={data.id_rup}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_pengadaan"></label>
                <input
                  type="text"
                  id="nama_pengadaan"
                  name="nama_pengadaan"
                  placeholder="nama_pengadaan"
                  style={StyledNamaPengadaan}
                  value={data.nama_pengadaan}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_penyedia"></label>
                <input
                  type="text"
                  id="nama_penyedia"
                  name="nama_penyedia"
                  placeholder="nama_penyedia"
                  style={StyledNamaPenyedia}
                  value={data.nama_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="email_penyedia"></label>
                <input
                  type="text"
                  id="email_penyedia"
                  name="email_penyedia"
                  placeholder="email_penyedia"
                  style={StyledNamaPenyedia1}
                  value={data.email_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="penawaran_penyedia"></label>
                <input
                  type="text"
                  id="penawaran_penyedia"
                  name="penawaran_penyedia"
                  placeholder="penawaran_penyedia"
                  style={StyledPenawaranPenye}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="nilai_negosiasi"></label>
                <input
                  type="text"
                  id="nilai_negosiasi"
                  name="nilai_negosiasi"
                  placeholder="nilai_negosiasi"
                  style={StyledNilaiNegosiasi}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="tkdn_penyedia"></label>
                <input
                  type="text"
                  id="tkdn_penyedia"
                  name="tkdn_penyedia"
                  placeholder="tkdn_penyedia"
                  style={StyledTkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <StyledIntruksi
                  isSelected={isSelected}
                  component="label"
                  varian="contained"
                >
                  {isSelected ? "File Dipilih" : "Upload Intruksi"}
                  <UploadInput type="file" onChange={handleFileIntruksi} />
                </StyledIntruksi>
              </div>
              <div>
                <StyledUndanganPenyed
                  isSelected1={isSelected1}
                  component="label"
                  varian="contained"
                >
                  {isSelected1 ? "File Dipilih" : "Undangan Penyedia"}

                  <UploadInput
                    type="file"
                    onChange={handleFileUndanganPenyedia}
                  />
                </StyledUndanganPenyed>
              </div>
              <div>
                <StyledPenawaran
                  isSelected6={isSelected6}
                  component="label"
                  varian="container"
                >
                  {isSelected6 ? "File Dipilih" : "Upload Penawaran"}

                  <UploadInput
                    type="file"
                    onChange={handleFileUploadPenawaran}
                  />
                </StyledPenawaran>
              </div>
              <div>
                <UploadDokumenTkdnPen
                  isSelected7={isSelected7}
                  component="label"
                  varian="container"
                >
                  {isSelected7 ? "File Dipilih" : "Dokumen TKDN Penyedia"}

                  <UploadInput type="file" onChange={handleFileTkdnPenyedia} />
                </UploadDokumenTkdnPen>
              </div>
              <div>
                <StyledPaktaIntegrita
                  isSelected5={isSelected5}
                  component="label"
                  varian="container"
                >
                  {isSelected5 ? "File Dipilih" : "Pakta Integritas"}
                  <UploadInput
                    type="file"
                    onChange={handleFilePaktaIntegritas}
                  />
                </StyledPaktaIntegrita>
              </div>
              <div>
                <StyledSmap
                  isSelected3={isSelected3}
                  component="label"
                  varian="container"
                >
                  {isSelected3 ? "File Dipilih" : "SMAP"}

                  <UploadInput type="file" onChange={handleFileSmap} />
                </StyledSmap>
              </div>
              <div>
                <UploadPenilaianRisik
                  isSelected2={isSelected2}
                  component="label"
                  varian="container"
                >
                  {isSelected2 ? "File Dipilih" : "Penilaian Risiko"}

                  <UploadInput
                    type="file"
                    onChange={handleFilePenilaianResiko}
                  />
                </UploadPenilaianRisik>
              </div>

              <div>
                <Rectangle44
                  isSelected8={isSelected8}
                  component="label"
                  varian="container"
                >
                  {isSelected8 ? "File Dipilih" : "BA Negosiasi"}

                  <UploadInput type="file" onChange={handleFileBaNegosiasi} />
                </Rectangle44>
              </div>
              <StyleSelesai> Selesai </StyleSelesai>
            </form>
          )}

          {/*  Padi Umkm  */}
          {data.id_jenis_pengadaan === 5 && (
            <form onSubmit={Handlersubmit}>
              <div>
                <label htmlFor="id_rup"></label>
                <input
                  type="text"
                  id="id_rup"
                  name="id_rup"
                  placeholder="ID RUP"
                  style={StyledIdRup}
                  value={data.id_rup}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_pengadaan"></label>
                <input
                  type="text"
                  id="nama_pengadaan"
                  name="nama_pengadaan"
                  placeholder="nama_pengadaan"
                  style={StyledNamaPengadaan}
                  value={data.nama_pengadaan}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="nama_penyedia"></label>
                <input
                  type="text"
                  id="nama_penyedia"
                  name="nama_penyedia"
                  placeholder="nama_penyedia"
                  style={StyledNamaPenyedia}
                  value={data.nama_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="email_penyedia"></label>
                <input
                  type="text"
                  id="email_penyedia"
                  name="email_penyedia"
                  placeholder="email_penyedia"
                  style={StyledNamaPenyedia1}
                  value={data.email_penyedia}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="penawaran_penyedia"></label>
                <input
                  type="text"
                  id="penawaran_penyedia"
                  name="penawaran_penyedia"
                  placeholder="penawaran_penyedia"
                  style={StyledPenawaranPenye}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="nilai_negosiasi"></label>
                <input
                  type="text"
                  id="nilai_negosiasi"
                  name="nilai_negosiasi"
                  placeholder="nilai_negosiasi"
                  style={StyledNilaiNegosiasi}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="tkdn_penyedia"></label>
                <input
                  type="text"
                  id="tkdn_penyedia"
                  name="tkdn_penyedia"
                  placeholder="tkdn_penyedia"
                  style={StyledTkdn}
                  onChange={handleChange}
                />
              </div>
              <div>
                <StyledIntruksi
                  isSelected={isSelected}
                  component="label"
                  varian="contained"
                >
                  {isSelected ? "File Dipilih" : "Upload Intruksi"}
                  <UploadInput type="file" onChange={handleFileIntruksi} />
                </StyledIntruksi>
              </div>
              <div>
                <StyledUndanganPenyed
                  isSelected1={isSelected1}
                  component="label"
                  varian="contained"
                >
                  {isSelected1 ? "File Dipilih" : "Undangan Penyedia"}

                  <UploadInput
                    type="file"
                    onChange={handleFileUndanganPenyedia}
                  />
                </StyledUndanganPenyed>
              </div>
              <div>
                <StyledPenawaran
                  isSelected6={isSelected6}
                  component="label"
                  varian="container"
                >
                  {isSelected6 ? "File Dipilih" : "Upload Penawaran"}

                  <UploadInput
                    type="file"
                    onChange={handleFileUploadPenawaran}
                  />
                </StyledPenawaran>
              </div>
              <div>
                <UploadDokumenTkdnPen
                  isSelected7={isSelected7}
                  component="label"
                  varian="container"
                >
                  {isSelected7 ? "File Dipilih" : "Dokumen TKDN Penyedia"}

                  <UploadInput type="file" onChange={handleFileTkdnPenyedia} />
                </UploadDokumenTkdnPen>
              </div>
              <div>
                <StyledPaktaIntegrita
                  isSelected5={isSelected5}
                  component="label"
                  varian="container"
                >
                  {isSelected5 ? "File Dipilih" : "Pakta Integritas"}
                  <UploadInput
                    type="file"
                    onChange={handleFilePaktaIntegritas}
                  />
                </StyledPaktaIntegrita>
              </div>
              <div>
                <StyledSmap
                  isSelected3={isSelected3}
                  component="label"
                  varian="container"
                >
                  {isSelected3 ? "File Dipilih" : "SMAP"}

                  <UploadInput type="file" onChange={handleFileSmap} />
                </StyledSmap>
              </div>
              <div>
                <UploadPenilaianRisik
                  isSelected2={isSelected2}
                  component="label"
                  varian="container"
                >
                  {isSelected2 ? "File Dipilih" : "Penilaian Risiko"}

                  <UploadInput
                    type="file"
                    onChange={handleFilePenilaianResiko}
                  />
                </UploadPenilaianRisik>
              </div>

              <div>
                <Rectangle44
                  isSelected8={isSelected8}
                  component="label"
                  varian="container"
                >
                  {isSelected8 ? "File Dipilih" : "BA Negosiasi"}

                  <UploadInput type="file" onChange={handleFileBaNegosiasi} />
                </Rectangle44>
              </div>
              <StyleSelesai> Selesai </StyleSelesai>
            </form>
          )}
       
          <StyledButton onClick={handerKembali}>Kembali </StyledButton>
          {/*   Form untuk upload File - File   */}
          {/*   Form untuk download upload File - File   */}
          <div>
            <StyledDownloadTempla onClick={handlerDownload}>
              Download Undangan Template
            </StyledDownloadTempla>
          </div>

          <div>
            <DownloadTemplatePena>
              Download template Penawaran
            </DownloadTemplatePena>
          </div>
          <div>
            <DownloadBaNegosiasi>Download BA Negosiasi</DownloadBaNegosiasi>
          </div>
          <div>
            <TemplatePenilaianRes>
              {" "}
              Template Penilaian Resiko
            </TemplatePenilaianRes>
          </div>
        </>
      ) : (
        <div
          style={{ backgroundColor: "black", width: "100%", height: "100vh" }}
        ></div>
      )}
    </PenetapanLangsung1>
  );
}
export default EditPage;

/*
function EditPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedName = searchParams.get('name');

  // Decode the base64-encoded name
  const decodedName = encodedName ? atob(encodedName) : 'No encoded name available';

  return (
    <div>
      <h1>Edit Page</h1>
      <p>Decoded Name: {decodedName}</p>
      {/* Your edit form }
    </div>
  );
}
*/
