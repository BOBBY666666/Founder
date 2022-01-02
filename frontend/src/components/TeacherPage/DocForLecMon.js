import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import Header from '../Header'
import '../css/main.css'

const DocForLecMon = () => {

  const [fruits, setFruits] = useState([]);
  const { userData, setUserData } = useContext(UserContext);
  const [fruitSearch, setFruitSearch] = useState("");
 
  useEffect(() => {
    axios.get("/api/fruits/doc-for-lec-mon").then((response) => setFruits(response.data));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h4>เอกสารที่เกี่ยวข้อง</h4>
        <hr className="line-for-lec"/>
        <div className="search-box">
          <input className="search"
              type="text"
              placeholder="ค้นหาเอกสาร"
              onChange={(e) => {
                setFruitSearch(e.target.value);
              }}
              style={{ margin: "20px" }}
            />
        </div>
        <div className="container-info">
          <table className="text-info">
            <tr>
              <th>หัวเรื่องหนังสือ</th>
              <th>วันที่</th>
              <th>เวลา</th>
              <th>ประเภทของเอกสาร</th>
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
                    <td>{fruit.name}</td>
                    <td>{fruit.date}</td>
                    <td>{fruit.time}</td>
                    <td>{fruit.type}</td>
                    <td><a href={fruit.file} download="" className="LinkToImage"> ดาวน์โหลดเอกสาร</a></td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocForLecMon;
