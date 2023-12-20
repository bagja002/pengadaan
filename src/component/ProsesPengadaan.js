import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import Backround from "../component/assets/Rectangle54.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const dummy_data = [
  {
      "Id_rup": 1,
      "Nama_pengadaan": "Pengadaan Barang 1",
      "Nilai_rab": 10000,
      "NamaPenyedia": "Penyedia 1"
  },
  {
      "Id_rup": 2,
      "Nama_pengadaan": "Pengadaan Barang 2",
      "Nilai_rab": 15000,
      "NamaPenyedia": "Penyedia 2"
  },
  {
      "Id_rup": 3,
      "Nama_pengadaan": "Pengadaan Barang 3",
      "Nilai_rab": 12000,
      "NamaPenyedia": "Penyedia 3"
  },
  {
      "Id_rup": 4,
      "Nama_pengadaan": "Pengadaan Barang 4",
      "Nilai_rab": 8000,
      "NamaPenyedia": "Penyedia 4"
  },
  {
      "Id_rup": 5,
      "Nama_pengadaan": "Pengadaan Barang 5",
      "Nilai_rab": 20000,
      "NamaPenyedia": "Penyedia 5"
  },
  {
      "Id_rup": 6,
      "Nama_pengadaan": "Pengadaan Barang 6",
      "Nilai_rab": 9000,
      "NamaPenyedia": "Penyedia 6"
  },
  {
      "Id_rup": 7,
      "Nama_pengadaan": "Pengadaan Barang 7",
      "Nilai_rab": 11000,
      "NamaPenyedia": "Penyedia 7"
  },
  {
      "Id_rup": 8,
      "Nama_pengadaan": "Pengadaan Barang 8",
      "Nilai_rab": 13000,
      "NamaPenyedia": "Penyedia 8"
  },
  {
      "Id_rup": 9,
      "Nama_pengadaan": "Pengadaan Barang 9",
      "Nilai_rab": 7000,
      "NamaPenyedia": "Penyedia 9"
  },
  {
      "Id_rup": 10,
      "Nama_pengadaan": "Pengadaan Barang 10",
      "Nilai_rab": 18000,
      "NamaPenyedia": "Penyedia 10"
  },
  {
      "Id_rup": 11,
      "Nama_pengadaan": "Pengadaan Barang 11",
      "Nilai_rab": 9500,
      "NamaPenyedia": "Penyedia 11"
  },
  {
      "Id_rup": 12,
      "Nama_pengadaan": "Pengadaan Barang 12",
      "Nilai_rab": 14000,
      "NamaPenyedia": "Penyedia 12"
  },
  {
      "Id_rup": 13,
      "Nama_pengadaan": "Pengadaan Barang 13",
      "Nilai_rab": 10500,
      "NamaPenyedia": "Penyedia 13"
  },
  {
      "Id_rup": 14,
      "Nama_pengadaan": "Pengadaan Barang 14",
      "Nilai_rab": 7500,
      "NamaPenyedia": "Penyedia 14"
  },
  {
      "Id_rup": 15,
      "Nama_pengadaan": "Pengadaan Barang 15",
      "Nilai_rab": 16000,
      "NamaPenyedia": "Penyedia 15"
  }
]




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

const columns = [
  { id: "name", label: "no", minWidth: 170 },
  { id: "code", label: "ID_RUP", minWidth: 100 },
  {
    id: "population",
    label: "Nama Pengadaan",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Nilai Pengadaan",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Nama Penyedia ",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  { id: "actions", label: "Actions", minWidth: 100, align: "center" },
];

export default function StickyHeadTable() {
  const token = "4" //localStorage.getItem("jwtToken");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]); // State for API data
  const navigate = useNavigate();


  useEffect(() => {
    if (!token) {
      console.log("Maaf Harus Login terlebih dahulu");
      alert("Anda Harus Login terlebih dahulu");
      navigate("/");
    }
  }, [token, navigate]);

  /*
  useEffect(() => {
    // Fetch data from API and update the state
    const getData = async () => {
      try {
        axios
          .get("http://localhost:9000/user/pengadaan") // Replace with your API endpoint
          .then((response) => {
            setData(
              response.data.map((item) => ({
                name: item.ID_pengadaan,
                code: item.Id_rup,
                population: item.Nama_pengadaan,
                size: item.Nilai_rab,
                density: item.NamaPenyedia,
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

  useEffect(() => {
    // Fungsi untuk mengambil data dari data dummy
    const getData = () => {
      setData(
        dummy_data.map((item) => ({
          name: item.ID_pengadaan,
          code: item.Id_rup,
          population: item.Nama_pengadaan,
          size: item.Nilai_rab,
          density: item.NamaPenyedia,
        }))
      );
    };

    // Panggil fungsi getData saat komponen dimount
    getData();

    // Bersihkan interval ketika komponen tidak lagi digunakan
    return () => clearInterval(100);
  }, []);

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditClick = (row) => {
    console.log("Editing row:", row);
    console.log(row.name);
    navigate(`edit?name=${row.name}`);
  };

  const handleDeleteClick = async (row) => {
    try {
      console.log("Deleting row:", row);

      const axiosInstance = axios.create({
        baseURL: "http://127.0.0.1:9000",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await axiosInstance.put(`/pengadaan/delete/${row.name}`); // Menggunakan row.id sebagai URL parameter
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <Beranda1>
      {token ? (
        <>
          <Rectangle54 src={Backround} loading="lazy" alt={"Rectangle 54"} />
          <Navbar />
          <Paper
            style={{
              width: "100%",
              overflow: "hidden",
              maxWidth: 1291,
              margin: "auto",
              marginLeft: "611px",
              marginTop: "193px",
              zIndex: 1,
            }}
          >
            <TableContainer style={{ maxHeight: 640 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          minWidth: column.minWidth,
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          if (column.id === "actions") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleEditClick(row)}
                                >
                                  Proses
                                </Button>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => handleDeleteClick(row)}
                                >
                                  Delete
                                </Button>
                              </TableCell>
                            );
                          }
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>

          {/* Other content of your component */}
        </>
      ) : (
        <div
          style={{ backgroundColor: "black", width: "100%", height: "100vh" }}
        ></div>
      )}
    </Beranda1>
  );
}
