import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import ErrorMsg from "../ErrorMsg";
import axios from "axios";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import './Login.css'

const Login = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        email: user.email,
        password: user.password,
      };

      const loginResponse = await axios.post("/api/users/login", newUser);
      //console.log(loginResponse.data)
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);

      setUser({
        email: "",
        password: "",
      });

      if(user.email === 'som99@staff.tu.ac.th'){
        window.location = "/fruitlist";
      }
      if(user.email === 'nuttanon@staff.tu.ac.th'){
        window.location = "/doc-for-lec-nut";
      }
      if(user.email === 'tyaowade@staff.tu.ac.th'){
        window.location = "/doc-for-lec-yao";
      }
      if(user.email === 'wsaowalu@staff.tu.ac.th'){
        window.location = "/doc-for-lec-sao";
      }
      if(user.email === 'wirat@staff.tu.ac.th'){
        window.location = "/doc-for-lec-wir";
      }
      if(user.email === 'tanatorn@staff.tu.ac.th'){
        window.location = "/doc-for-lec-tana";
      }
      if(user.email === 'rongviri@staff.tu.ac.th'){
        window.location = "/doc-for-lec-song";
      }
      if(user.email === 'onjira@staff.tu.ac.th'){
        window.location = "/doc-for-lec-onj";
      }
      if(user.email === 'denduang@staff.tu.ac.th'){
        window.location = "/doc-for-lec-den";
      }
      if(user.email === 'pakornl@staff.tu.ac.th'){
        window.location = "/doc-for-lec-pak";
      }
      if(user.email === 'pmonvora@staff.tu.ac.th'){
        window.location = "/doc-for-lec-mon";
      }
      if(user.email === 'pokpongs@staff.tu.ac.th'){
        window.location = "/doc-for-lec-pok";
      }
      if(user.email === 'papong@staff.tu.ac.th'){
        window.location = "/doc-for-lec-vor";
      }
      if(user.email === 'ch_krit@staff.tu.ac.th'){
        window.location = "/doc-for-lec-krit";
      }
      if(user.email === 'wpakorn@staff.tu.ac.th'){
        window.location = "/doc-for-lec-wpa";
      }
      if(user.email === 'ckasidit@staff.tu.ac.th'){
        window.location = "/doc-for-lec-kasi";
      }
      if(user.email === 'rwilawan@staff.tu.ac.th'){
        window.location = "/doc-for-lec-wila";
      }
      if(user.email === 'rattanat@staff.tu.ac.th'){
        window.location = "/doc-for-lec-parpha";
      }
      if(user.email === 'pwanida@stuff.tu.ac.th'){
        window.location = "/doc-for-lec-wani";
      }
      if(user.email === 'nnucahko@stuff.tu.ac.th'){
        window.location = "/doc-for-lec-nucha";
      }
      if(user.email === 'nsirikun@stuff.tu.ac.th'){
        window.location = "/doc-for-lec-siri";
      }
      if(user.email === 'lumpapun@stuff.tu.ac.th'){
        window.location = "/doc-for-lec-lumpa";
      }
      if(user.email === 'thapanab@stuff.tu.ac.th'){
        window.location = "/doc-for-lec-thapa";
      }
      if(user.email === 'njrin@staff.tu.ac.th'){
        window.location = "/doc-for-lec-nuji";
      }
      if(user.email === 'Wasit@stuff.tu.ac.th'){
        window.location = "/doc-for-lec-wasit";
      }
    } catch (err) {
      err.response.data.msg
        ? setErrorMsg(err.response.data.msg)
        : setErrorMsg("We have an error!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((oldUser) => {
      return {
        ...oldUser,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='img/logo.png' alt='spaceship' />
        </div>
        <div className='form-content-right'>
          <form className='form' onSubmit={handleSubmit}>
          <h1>
            ยินดีต้อนรับ
          </h1>
          {errorMsg && <ErrorMsg msg={errorMsg} />}
            <div className='form-inputs'>
              <input 
                className='form-input'
                type='text'
                name='email'
                placeholder='อีเมลแอดเดรส'
                value={user.email}
                required
                onChange={handleChange}
              />
            </div>

            <div className='form-inputs'>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='รหัสผ่าน'
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <Button className='form-input-btn' type='submit'>
              ลงชื่อเข้าใช้
            </Button>

            <span className='form-input-login'>
              <a href='/register'>สร้างบัญชีผู้ใช้ใหม่</a>
            </span>

          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
