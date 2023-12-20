
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Backround from "../component/assets/Rectangle54.png"
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


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


function HistoryPengadaan(){
    const token = "i"//localStorage.getItem("jwtToken");
    const navigate = useNavigate();


  useEffect(() => {
    if (!token) {
      console.log("Maaf Harus Login terlebih dahulu");
      alert("Anda Harus Login terlebih dahulu");
      navigate("/");
    }
  }, [token, navigate]);


    return(
        <Beranda1>
        {token ? (
          <>
            <Rectangle54 src={Backround} loading="lazy" alt={"Rectangle 54"} />
            <Navbar />
            
            {/* Other content of your component */}
          </>
        ) : (
          <div
            style={{ backgroundColor: "black", width: "100%", height: "100vh" }}
          ></div>
        )}
  </Beranda1>
    )    
}

export default HistoryPengadaan