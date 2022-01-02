import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import axios from "axios";
import Swal from 'sweetalert2'
import { Button } from "react-bootstrap";
import Header from './Header'
import Sidebar from './Sidebar'
import './css/main.css'

const EditTeacher = ({ match }) => {

  const [users, setUsers] = useState([]);
  const [fruits, setFruits] = useState([]);
  const { userData, setUserData } = useContext(UserContext);
 
  useEffect(() => {
    axios.get("/api/users").then((response) => setUsers(response.data));
  }, []);

  const DeleteTeacher = () => {
    Swal.fire({
      title: 'ยืนยันการลบเอกสาร',
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
        .delete("/api/users/:id" + match.params.id, {
          headers: {
            "auth-token": userData.token,
          },
        })
        .then((window.location = "/edit-teacher"));
      }
    })
  }


  return (
    <div class="main">
      <Header />
      <Sidebar />
      <div>
        <h4>รายชื่ออาจารย์</h4>
        <hr className="line-edit-teacher"/>
        <div className="container-info2">
          <table>
            {users
              .map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default EditTeacher;
