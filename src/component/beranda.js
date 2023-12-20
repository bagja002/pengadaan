import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Backround from "../component/assets/Rectangle54.png";
import Navbar from "./Navbar";
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
const Rectangle13 = styled("button")({
  backgroundColor: `rgba(47, 85, 151, 1)`,
  borderRadius: `60px`,
  width: `389px`,
  height: `60px`,
  position: `absolute`,
  left: `1441px`,
  top: `74px`,
});

function Beranda() {
  //ini berisi tentang JWT Token
  const navigate = useNavigate();
  const token = "test" //localStorage.getItem("jwtToken");
  const [namauser, setNamaUser] = useState(""); // Replace 'jwtToken' with your actual token key
  /*
  useEffect(() => {
    if (!token) {
      console.log("Maaf Harus Login terlebih dahulu");
      alert("Anda Harus Login terlebih dahulu");
      navigate("/");
    } else {
      const decodetoken = jwtDecode(token);
      const namauser = decodetoken.name;
      setNamaUser(namauser);
    }
  }, [token, navigate]);
  const code = 1;
  */
  //dekode token untuk mengambil user id

  return (
    <Beranda1>
      {token ? (
        <>
          <Rectangle54 src={Backround} loading="lazy" alt={"Rectangle 54"} />
        
          <Navbar />
          <Rectangle13>{namauser}</Rectangle13>
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

export default Beranda;
