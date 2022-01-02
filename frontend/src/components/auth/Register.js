import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import ErrorMsg from "../ErrorMsg";
import axios from "axios";
import { Button } from "react-bootstrap";

const Register = () => {
  const { userData, setUserData } = useContext(UserContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordAgain: "",
  });
  const [errorMsg, setErrorMsg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        name: user.name,
        email: user.email,
        password: user.password,
      };

      if (user.password !== user.passwordAgain) {
        setErrorMsg("กรุณาป้อนรหัสผ่านให้ตรงกัน");
        return;
      } else {
        console.log(newUser);
      }
      await axios.post("/api/users/register", newUser);

      const loginResponse = await axios.post("/api/users/login", newUser);
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);

      setUser({
        name: "",
        email: "",
        password: "",
        passwordAgain: "",
      });

      window.location = "/doc-for-lec";
    } catch (err) {
      err.response.data.msg
        ? setErrorMsg(err.response.data.msg)
        : setErrorMsg("เกิดข้อผิดพลาดบางอย่างขึ้น");
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
            สร้างบัญชีผู้ใช้ใหม่
          </h1>
          {errorMsg && <ErrorMsg msg={errorMsg} />}
          <div className='form-inputs'>
              <input
                className='form-input'
                type='text'
                name='name'
                placeholder='ชื่อ-นามสกุล'
                value={user.name}
                required
                onChange={handleChange}
                autocomplete='off'
              />
            </div>

            <div className='form-inputs'>
              <input
                className='form-input'
                type='text'
                name='email'
                placeholder='อีเมลแอดเดรส'
                value={user.email}
                required
                onChange={handleChange}
                autocomplete='off'
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

            <div className='form-inputs'>
              <input
                className='form-input'
                type='password'
                name='passwordAgain'
                placeholder='ยืนยันรหัสผ่าน'
                value={user.passwordAgain}
                onChange={handleChange}
              />
            </div>

            <Button className='form-input-btn' type='submit'>
              สร้างบัญชีผู้ใช้
            </Button>

            <span className='form-input-login'>
              <a href='/'>ลงชื่อเข้าใช้</a>
            </span>

          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
