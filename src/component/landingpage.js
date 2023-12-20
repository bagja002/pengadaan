import React, { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';

import Ellipse1Image from './assets/Ellipse1.png';
import Ellipse2Image from './assets/Ellipse2.png';
import Image1Image from './assets/image1.png';
import Usernamepict from './assets/username.png';
import Password from './assets/password.png'
import { useNavigate } from 'react-router-dom';



const Slide16911 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `100vw`,
  height: `100vh`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Group1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `40vw`, // 40% of viewport width
  height: `50vh`, // 50% of viewport height
  left: `-20vw`, // Shift left by 20% of viewport width
  top: `60vh`, // Shift down by 36% of viewport height
});

const Ellipse1 = styled("img")({
  height: `50vh`, // 50% of viewport height
  width: `40vw`, // 40% of viewport width
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Ellipse2 = styled("img")({
  height: `30vh`, // 30% of viewport height
  width: `25vw`, // 25% of viewport width
  position: `absolute`,
  left: `7.5vw`, // Shift right by 7.5% of viewport width
  top: `4.9vh`, // Shift down by 4.9% of viewport height
});

const Usernamed = styled("img")({
  height: `40px`,
  position: `absolute`,
  left: `11%`,
  top: `25%`, 
});
const Login = styled("div")({
  boxShadow: `1px 10px 4px rgba(0, 0, 0, 0.3)`,
  borderBlockColor:`red`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `86.8vw`,
  height: `82vh`,
  left: `6vw`,
  top: `10vh`,
});



const Bacround = styled("div")({
  boxShadow: `10px 10px 50px rgba(0, 0, 0, 0.25)`,
  backgroundColor: `white`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `86.8vw`,
  height: `82vh`,
  left: `0px`,
  top: `0px`,
});

const Image1 = styled("img")({
  height: `60vh`,
  width: `30vw`,
  objectFit: `cover`,
  position: `absolute`,
  left: `6vw`,
  top: `6vh`,
});

const Login1 = styled("div")({
  boxShadow: `4px 4px 4px rgba(0, 0, 0, 0.25)`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `48vw`,
  height: `82vh`,
  left: `38.5vw`,
  top: `0px`,
});

const Rectangle2 = styled("div")({
  backgroundColor: `rgba(26, 52, 90, 1)`,
  width: `48.5vw`,
  height: `82vh`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const SelamatDatang = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inria Sans`,
  fontWeight: `400`,
  fontSize: `6vw`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `5vw`,
  top: `40px`,
});

const inputStyleUsername = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '100px',
  width: `80%`, // Use relative width
  position: "absolute",
  height: `4vh`,
  left: `10%`, // Use relative position
  top: `25%`, // Use relative position
  fontSize: `3vh`,
}

const inputStylePassword = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '100px',
  width: `80%`, // Use relative width
  position: "absolute",
  height: `4vh`,
  left: `10%`, // Use relative position
  top: `35%`, // Use relative position
  fontSize: `3vh`,
}

const button = {
  textAlign: `center`,
  backgroundColor:`orange`,
  whiteSpace: `pre-wrap`,
  color: `rgba(255, 255, 255, 1)`,
  fontFamily: `Inter`,
  fontWeight: `600`,
  fontSize: `24px`,
  width: `10vw`,
  height: `5vh`,
  position: `absolute`,
  left: `34vw`,
  top: `40vh`,
  borderRadius:`10px`,
};

const mediaQuery = `@media (max-width: 168px) {
  ${Group1} {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  ${Ellipse1} {
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  ${Usernamed} {
    height: 20px;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
  }
  ${Ellipse2} {
    height: 300px;
    width: 300px;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
  }
  ${Login} {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  ${Bacround} {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  ${Image1} {
    height: 300px;
    width: 300px;
    left: 10%;
    top: 10%;
  }
  ${Login1} {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  ${Rectangle2} {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  ${SelamatDatang} {
    font-size: 48px;
    left: 10%;
    top: 10%;
  }
  ${inputStyleUsername},
  ${inputStylePassword} {
    width: 80%;
    left: 10%;
    top: 25%;
  }
}`;

const userpict= {
  height:`6%`,

  left:`5.5vw`,
}
const passpict= {
  height:`6%`,

  left:`5.5vw`,
  top:`29vh`
}


function Slide1691() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [token, setToken] = useState(''); // State untuk menyimpan token


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const[msg, setMsg]= useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ganti 'YOUR_API_ENDPOINT' dengan URL API endpoint Anda
      //const response = await axios.post('http://127.0.0.1:9000/user/login', formData);

      // Lakukan tindakan lanjutan setelah berhasil mengirim data ke API
      /*if (response.status === 200) {
        const token = response.data.token; // Ambil token dari respons
        setToken(token); // Simpan token ke dalam state
        localStorage.setItem('jwtToken', token);
        console.log('Token:', token);
        const jwtToken = localStorage.getItem('jwtToken');
        console.log('jwtToken:', jwtToken);
        if (jwtToken){
          Navigate("beranda")
        } else {console.log("login dulu bre")}
        
      }
      */
      Navigate("beranda")
   
    } catch (error) {
      // Tangani error jika ada
      if (error.response){
        setMsg(error.response.data.pesan)
  
      }
      

    }
  };
  const Navigate = useNavigate()

  

  return (
    <Slide16911>
      <div>{msg}</div>
      <Group1>
        <Ellipse1 src={Ellipse1Image} loading='lazy' alt={"Ellipse 1"} />
        <Ellipse2 src={Ellipse2Image} loading='lazy' alt={"Ellipse 2"} />
      </Group1>
      <style>{mediaQuery}</style>
      <Login>

        <Bacround>
          <Image1 src={Image1Image} loading='lazy' alt={"image 1"} />

          <Login1>
            <Rectangle2>
              <form onSubmit={handleSubmit} >
                
                <div>
                 
                </div>
                <div>

                  <label htmlFor='email'></label>

                  <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder={"       Username"}
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyleUsername}
                  />
                  {!formData.email && <Usernamed src={Usernamepict} style={userpict} loading='lazy' alt={"email"} />}

                </div>
                <div>
                  <label htmlFor='password'></label>
                  <input
                    type="password"
                    id='password'
                    name='password'
                    placeholder='        Password'
                    value={formData.password}
                    style={inputStylePassword}
                    onChange={handleChange}
                  />
                </div>
                {!formData.password && <Usernamed src={Password} style={passpict} loading='lazy' alt={"username"} />}

              <button  style={button}>Login</button>
              </form>
            </Rectangle2>
            <SelamatDatang>
              {`Selamat Datang!`}
            </SelamatDatang>


          </Login1>
        </Bacround>
      </Login>

    </Slide16911>
  );
}

export default Slide1691;
