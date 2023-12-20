import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyleNavbar = styled("nav")({
  backgroundColor: `rgba(32, 56, 100, 1)`,
  width: `590px`,
  height: `1080px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
  textDecoration: "none",
});

const Styled_Nav_beranda = ({ isActive }) => {
  return {
    borderRadius: `30px`,
    width: `506px`,
    height: `119px`,
    position: `absolute`,
    left: `42px`,
    top: `66px`,
    backgroundColor: isActive ? `rgba(253, 182, 0, 1)` : `rgba(47, 85, 151, 1)`,
    display: "flex",
    alignItems: "center", // Teks berada di tengah secara vertikal
    justifyContent: "center", // Teks berada di tengah secara horizontal
    transition: "background-color 0.5s ease",
    textDecoration: "none", // Menyembunyikan garis bawah
  };
};
const NavLinkText = styled("span")({
  fontSize: "24px",
  fontWeight: "bold",
  color: "white",
  textDecoration: "none", // Menyembunyikan garis bawah
});
const Styled_Nav_BuatPengadaan = ({ isActive }) => {
  return {
    borderRadius: `30px`,
    width: `506px`,
    height: `119px`,
    position: `absolute`,
    left: `42px`,
    top: `217px`,
    backgroundColor: isActive ? `rgba(253, 182, 0, 1)` : `rgba(47, 85, 151, 1)`,

    display: "flex",
    alignItems: "center", // Teks berada di tengah secara vertikal
    justifyContent: "center", // Teks berada di tengah secara horizontal
    transition: "background-color 0.5s ease",
    textDecoration: "none",
  };
};

const Styled_Nav_proses_pengadaan = ({ isActive }) => {
  return {
    borderRadius: `30px`,
    width: `506px`,
    height: `119px`,
    position: `absolute`,
    left: `42px`,
    top: `360px`,
    backgroundColor: `rgba(253, 182, 0, 1)`,

    display: "flex",
    alignItems: "center", // Teks berada di tengah secara vertikal
    justifyContent: "center", // Teks berada di tengah secara horizontal
    transition: "background-color 0.5s ease",
    textDecoration: "none", // Menyembunyikan garis bawah
  };
};
const Styled_Nav_PengadaanBerlangsung = ({ isActive }) => {
  return {
    borderRadius: `30px`,
    width: `506px`,
    height: `119px`,
    position: `absolute`,
    left: `42px`,
    top: `503px`,
    backgroundColor: isActive ? `rgba(253, 182, 0, 1)` : `rgba(47, 85, 151, 1)`,
    display: "flex",
    alignItems: "center", // Teks berada di tengah secara vertikal
    justifyContent: "center", // Teks berada di tengah secara horizontal
    transition: "background-color 0.5s ease",
    textDecoration: "none", // Menyembunyikan garis bawah
  };
};

const Styled_Nav_Hstory = ({ isActive }) => {
  return {
    borderRadius: `30px`,
    width: `506px`,
    height: `119px`,
    position: `absolute`,
    backgroundColor: isActive ? `rgba(253, 182, 0, 1)` : `rgba(47, 85, 151, 1)`,
    display: "flex",
    alignItems: "center", // Teks berada di tengah secara vertikal
    justifyContent: "center", // Teks berada di tengah secara horizontal
    left: `42px`,
    top: `650px`,
    transition: "background-color 0.5s ease",
    textDecoration: "none",
  };
};

function NavbarEdit() {
  return (
    <StyleNavbar>
      <NavLink style={Styled_Nav_beranda} to="/beranda">
        <NavLinkText>Beranda</NavLinkText>
      </NavLink>
      <NavLink style={Styled_Nav_BuatPengadaan} to="/buat_pengadaan">
        <NavLinkText>Buat Pengadaan</NavLinkText>
      </NavLink>
      <NavLink style={Styled_Nav_proses_pengadaan} to="/proses_pengadaan">
        <NavLinkText>Proses Pengadaan</NavLinkText>
      </NavLink>
      <NavLink
        style={Styled_Nav_PengadaanBerlangsung}
        to="/pengadaan_berlangsung"
      >
        <NavLinkText>Pengadaan Berlangsung</NavLinkText>
      </NavLink>
      <NavLink style={Styled_Nav_Hstory} to="/history_pengadaan">
        <NavLinkText>History </NavLinkText>
      </NavLink>
    </StyleNavbar>
  );
}

export default NavbarEdit;
