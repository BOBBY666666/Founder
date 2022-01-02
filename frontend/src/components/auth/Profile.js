import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from '../Header'
import Sidebar from '../Sidebar'
import '../css/main.css'

const Profile = () => {
  
  const [fruits, setFruits] = useState([]);
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    axios.get("/api/fruits").then((response) => setFruits(response.data));
  }, []);

  const userDelete = () => {
    Swal.fire({
      title: 'ยืนยันการลบบัญชีผู้ใช้',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#eb6864',
      cancelButtonColor: '#B0B7BD',
      confirmButtonText: 'ลบ',
      cancelButtonText: 'ยกเลิก',
      customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("/api/users/profile", {
            headers: {
              "auth-token": userData.token,
            },
          })
          .then((window.location = "/fruitlist"));

        setUserData({
          token: undefined,
          user: undefined,
        });
        localStorage.setItem("auth-token", "");
      }
    })
  }

  return (
    <div className="main">
      <Header />
      <Sidebar />
      <h1>{userData.user.name}</h1>
      <br />
      <h5>
        <b>User ID : </b>
        {userData.user.id}
      </h5>
      <h5>
        <b>วันที่: </b>
        {userData.user.date.toString().slice(0, 10) +
          " @ " +
          userData.user.date.toString().slice(11, 19)}
      </h5>
      <br />
      <h3>
        <b>Fruits Added by {userData.user.name}:</b>
      </h3>

      <ul>
        {fruits
          .filter((fruit) => {
            if (fruit.addedBy === userData.user.name) {
              return fruit;
            }
          })
          .map((fruit) => {
            return (
              <li key={fruit._id}>
                <Link to={`/fruit/${fruit._id}`}>
                  <b>{fruit.name}</b>
                </Link>{" "}
                ({fruit.amount}) - {fruit.info}
                &nbsp;[Added on{" "}
                <i>
                  {fruit.day} / {fruit.month} / {fruit.year}
                </i>
                ]
              </li>
            );
          })}
      </ul>

      <Button className="delete-btn" class="danger" onClick={userDelete}>
        ลบบัญชีผู้ใช้
      </Button>
    </div>
  );
};

export default Profile;
