import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from './Header'
import Sidebar from './Sidebar'
import './css/main.css'

const DocGeneral = () => {

  const [fruits, setFruits] = useState([]);
  const [fruitSearch, setFruitSearch] = useState("");
 
  useEffect(() => {
    axios.get("/api/fruits/general").then((response) => setFruits(response.data));
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div class="main">
        <div>
          <Link to="/addfruit"><button className="button"><i class="bi bi-plus-lg"></i> เพิ่มเอกสาร</button></Link>
          <Link to="/EditTeacher"><button className="button2">รายชื่ออาจารย์</button></Link>
        </div>
        <h4>เอกสารทั่วไป</h4>
        <input className="search"
          type="text"
          placeholder="ค้นหาเอกสารด้วยหัวเรื่องหนังสือ"
          onChange={(e) => {
            setFruitSearch(e.target.value);
          }}
          style={{ margin: "20px" }}
        />
        <br />
        <table>
          <tr>
            <th>เลขที่หนังสือ</th>
            <th>หัวเรื่องหนังสือ</th>
            <th>วันที่</th>
            <th>เวลา</th>
            <th>ประเภทของเอกสาร</th>
            <th>รูปภาพ</th>
          </tr>
          {fruits
            .filter((fruit) => {
              if (fruit.name.toLowerCase().includes(fruitSearch.toLowerCase())) {
                return fruit;
              }
            })
            .map((fruit) => {
              return (
                <tr key={fruit._id}>
                  <td className="link"><Link to={`/fruit/${fruit._id}`}>{fruit.no}</Link>{" "}</td>
                  <td className="link"><Link to={`/fruit/${fruit._id}`}>{fruit.name}</Link>{" "}</td>
                  <td>{fruit.date}</td>
                  <td>{fruit.time}</td>
                  <td>{fruit.type}</td>
                  <td><img src={fruit.file} /></td>

                  <div className="edit">
                    <Link to={`/fruit/${fruit._id}`}><button className="button5">แก้ไขเอกสาร</button></Link>
                  </div>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default DocGeneral;
