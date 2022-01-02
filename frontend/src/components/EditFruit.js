import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import axios from "axios";
import Swal from 'sweetalert2'
import { Button } from "react-bootstrap";
import Header from './Header'
import Sidebar from './Sidebar'
import './css/main.css'

const EditFruit = ({ match }) => {

  const { userData, setUserData } = useContext(UserContext);

  const [fruit, setFruit] = useState({
    no: "",
    name: "",
    type: "",
    date: "",
    time: "",
    file: "",
    access1: "",
    access2: "",
    access3: "",
    access4: "",
    access5: "",
  });

  useEffect(() => {
    axios
      .get("/api/fruits/" + match.params.id)
      .then((response) => setFruit(response.data));
  }, []);

  const fruitUpdate = () => {
    axios
      .put("/api/fruits/" + match.params.id, fruit, {
        headers: {
          "auth-token": userData.token,
        },
      })
      .then((window.location = "/fruitlist"));
  };

  const DeleteDoc = () => {
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
        .delete("/api/fruits/" + match.params.id, {
          headers: {
            "auth-token": userData.token,
          },
        })
        .then((window.location = "/fruitlist"));
      }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFruit((oldFruit) => {
      return {
        ...oldFruit,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main">
        <h4>แก้ไขเอกสาร {fruit.name}</h4>
        <p>
          <b>ID: {fruit._id}</b>
        </p>
        <hr />
        <div className="info1">
          <div className="nodoc">
            <label>เลขที่หนังสือ&nbsp; </label>
            <input
              type="text"
              name="no"
              value={fruit.no}
              required
              onChange={handleChange}
            />
            <br />
          </div>

          <label>หัวเรื่องเอกสาร&nbsp; </label>
            <input
            className="namedoc"
            type="text"
            name="name"
            value={fruit.name}
            required
            onChange={handleChange}
          />
          <br />
          
          <div className="type">
          <label>ประเภทของเอกสาร&nbsp; </label>
            <select required
              className="typedoc"
              type="text"
              name="type"
              value={fruit.type}
              onChange={handleChange}>
              <option value="" disabled selected hidden>ประเภทของเอกสาร</option>
              <option value="เอกสารทั่วไป">เอกสารทั่วไป</option>
              <option value="เอกสารบุคคล">เอกสารบุคคล</option>
              <option value="เอกสารถึงหัวหน้าสาขา">เอกสารถึงหัวหน้าสาขา</option>
              <option value="เอกสารโครงการต่างๆ">เอกสารโครงการต่างๆ</option>                <option value="เอกสารออก">เอกสารออก</option>
            </select>
            <br />
          </div>

          <div className="datedoc">
              <label>วันที่&nbsp; </label>
              <input
                className="daydoc"
                placeholder="วันที่"
                type="date"
                name="date"
                value={fruit.day}
                required
                onChange={handleChange}
              />
            </div>

            <div className="timedoc">
              <label>เวลา&nbsp; </label>
              <input
                className="hourdoc"
                type="time"
                name="time"
                value={fruit.time}
                required
                onChange={handleChange}
              />
            </div>
        </div>

        <div className="access">
            <label className="accdoc">ผู้มีสิทธิเข้าถึงเอกสาร&nbsp; </label>
                <select required
                  className="selectaccdoc"
                  type="text"
                  name="access1"
                  value={fruit.access1}
                  required
                  onChange={handleChange}>
                  <option value="" disabled selected hidden>ผู้มีสิทธิเข้าถึงเอกสาร</option>
                  <option value="none">ไม่เลือก</option>
                  <option value="all">ทุกคน</option>
                  <option value="ผศ.ดร. กษิดิศ ชาญเชี่ยว">ผศ.ดร. กษิดิศ ชาญเชี่ยว</option>
                  <option value="ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช">ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช</option>
                  <option value="ผศ.ดร. ธนาธร ทะนานทอง">ผศ.ดร. ธนาธร ทะนานทอง</option>
                  <option value="ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย">ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย</option>
                  <option value="ผศ.ดร. ประภาพร รัตนธำรง">ผศ.ดร. ประภาพร รัตนธำรง</option>
                  <option value="ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย">ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย</option>
                  <option value="ผศ.ดร. วนิดา พฤทธิวิทยา">ผศ.ดร. วนิดา พฤทธิวิทยา์</option>
                  <option value="ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์">ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์</option>
                  <option value="ผศ.ดร. วิลาวรรณ รักผกาวงศ์">ผศ.ดร. วิลาวรรณ รักผกาวงศ์</option>
                  <option value="ผศ.ดร. อรจิรา สิทธิศักดิ์">ผศ.ดร. อรจิรา สิทธิศักดิ์</option>
                  <option value="ผศ.ดร. เด่นดวง ประดับสุวรรณ">ผศ.ดร. เด่นดวง ประดับสุวรรณ</option>
                  <option value="ผศ.ดร. เสาวลักษณ์ วรรธนาภา">ผศ.ดร. เสาวลักษณ์ วรรธนาภา</option>
                  <option value="รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร">รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร</option>
                  <option value="รศ.ดร. เยาวดี เต็มธนาภัทร">รศ.ดร. เยาวดี เต็มธนาภัทร</option>
                  <option value="อ.ดร. ฐาปนา บุญชู">อ.ดร. ฐาปนา บุญชู</option>
                  <option value="อ.ดร. ปกป้อง ส่องเมือง">อ.ดร. ปกป้อง ส่องเมือง</option>
                  <option value="อ.ดร. มนวรรัตน์ ผ่องไพบูลย์">อ.ดร. มนวรรัตน์ ผ่องไพบูลย์</option>
                  <option value="อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์">อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์</option>
                  <option value="อ. กฤตคม ศรีจิรานนท์">อ. กฤตคม ศรีจิรานนท์</option>
                  <option value="อ. นุชชากร งามเสาวรส">อ. นุชชากร งามเสาวรส</option>
                  <option value="อ. ปกรณ์ แววสว่างวงศ์">อ. ปกรณ์ แววสว่างวงศ์</option>
                  <option value="อ. สิริกันยา นิลพานิช">อ. สิริกันยา นิลพานิช</option>
                </select>
          </div>
          <div className="access">
                <select required
                  className="selectaccdoc2"
                  type="text"
                  name="access2"
                  value={fruit.access2}
                  required
                  onChange={handleChange}>
                  <option value="" disabled selected hidden>ผู้มีสิทธิเข้าถึงเอกสาร</option>
                  <option value="none" className="none">ไม่เลือก</option>
                  <option value="ผศ.ดร. กษิดิศ ชาญเชี่ยว">ผศ.ดร. กษิดิศ ชาญเชี่ยว</option>
                  <option value="ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช">ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช</option>
                  <option value="ผศ.ดร. ธนาธร ทะนานทอง">ผศ.ดร. ธนาธร ทะนานทอง</option>
                  <option value="ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย">ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย</option>
                  <option value="ผศ.ดร. ประภาพร รัตนธำรง">ผศ.ดร. ประภาพร รัตนธำรง</option>
                  <option value="ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย">ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย</option>
                  <option value="ผศ.ดร. วนิดา พฤทธิวิทยา">ผศ.ดร. วนิดา พฤทธิวิทยา์</option>
                  <option value="ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์">ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์</option>
                  <option value="ผศ.ดร. วิลาวรรณ รักผกาวงศ์">ผศ.ดร. วิลาวรรณ รักผกาวงศ์</option>
                  <option value="ผศ.ดร. อรจิรา สิทธิศักดิ์">ผศ.ดร. อรจิรา สิทธิศักดิ์</option>
                  <option value="ผศ.ดร. เด่นดวง ประดับสุวรรณ">ผศ.ดร. เด่นดวง ประดับสุวรรณ</option>
                  <option value="ผศ.ดร. เสาวลักษณ์ วรรธนาภา">ผศ.ดร. เสาวลักษณ์ วรรธนาภา</option>
                  <option value="รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร">รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร</option>
                  <option value="รศ.ดร. เยาวดี เต็มธนาภัทร">รศ.ดร. เยาวดี เต็มธนาภัทร</option>
                  <option value="อ.ดร. ฐาปนา บุญชู">อ.ดร. ฐาปนา บุญชู</option>
                  <option value="อ.ดร. ปกป้อง ส่องเมือง">อ.ดร. ปกป้อง ส่องเมือง</option>
                  <option value="อ.ดร. มนวรรัตน์ ผ่องไพบูลย์">อ.ดร. มนวรรัตน์ ผ่องไพบูลย์</option>
                  <option value="อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์">อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์</option>
                  <option value="อ. กฤตคม ศรีจิรานนท์">อ. กฤตคม ศรีจิรานนท์</option>
                  <option value="อ. นุชชากร งามเสาวรส">อ. นุชชากร งามเสาวรส</option>
                  <option value="อ. ปกรณ์ แววสว่างวงศ์">อ. ปกรณ์ แววสว่างวงศ์</option>
                  <option value="อ. สิริกันยา นิลพานิช">อ. สิริกันยา นิลพานิช</option>
                </select>
          </div>
          <div className="access">
                <select required
                  className="selectaccdoc2"
                  type="text"
                  name="access3"
                  value={fruit.access3}
                  required
                  onChange={handleChange}>
                  <option value="" disabled selected hidden>ผู้มีสิทธิเข้าถึงเอกสาร</option>
                  <option value="none" className="none">ไม่เลือก</option>
                  <option value="ผศ.ดร. กษิดิศ ชาญเชี่ยว">ผศ.ดร. กษิดิศ ชาญเชี่ยว</option>
                  <option value="ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช">ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช</option>
                  <option value="ผศ.ดร. ธนาธร ทะนานทอง">ผศ.ดร. ธนาธร ทะนานทอง</option>
                  <option value="ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย">ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย</option>
                  <option value="ผศ.ดร. ประภาพร รัตนธำรง">ผศ.ดร. ประภาพร รัตนธำรง</option>
                  <option value="ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย">ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย</option>
                  <option value="ผศ.ดร. วนิดา พฤทธิวิทยา">ผศ.ดร. วนิดา พฤทธิวิทยา์</option>
                  <option value="ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์">ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์</option>
                  <option value="ผศ.ดร. วิลาวรรณ รักผกาวงศ์">ผศ.ดร. วิลาวรรณ รักผกาวงศ์</option>
                  <option value="ผศ.ดร. อรจิรา สิทธิศักดิ์">ผศ.ดร. อรจิรา สิทธิศักดิ์</option>
                  <option value="ผศ.ดร. เด่นดวง ประดับสุวรรณ">ผศ.ดร. เด่นดวง ประดับสุวรรณ</option>
                  <option value="ผศ.ดร. เสาวลักษณ์ วรรธนาภา">ผศ.ดร. เสาวลักษณ์ วรรธนาภา</option>
                  <option value="รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร">รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร</option>
                  <option value="รศ.ดร. เยาวดี เต็มธนาภัทร">รศ.ดร. เยาวดี เต็มธนาภัทร</option>
                  <option value="อ.ดร. ฐาปนา บุญชู">อ.ดร. ฐาปนา บุญชู</option>
                  <option value="อ.ดร. ปกป้อง ส่องเมือง">อ.ดร. ปกป้อง ส่องเมือง</option>
                  <option value="อ.ดร. มนวรรัตน์ ผ่องไพบูลย์">อ.ดร. มนวรรัตน์ ผ่องไพบูลย์</option>
                  <option value="อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์">อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์</option>
                  <option value="อ. กฤตคม ศรีจิรานนท์">อ. กฤตคม ศรีจิรานนท์</option>
                  <option value="อ. นุชชากร งามเสาวรส">อ. นุชชากร งามเสาวรส</option>
                  <option value="อ. ปกรณ์ แววสว่างวงศ์">อ. ปกรณ์ แววสว่างวงศ์</option>
                  <option value="อ. สิริกันยา นิลพานิช">อ. สิริกันยา นิลพานิช</option>
                </select>
          </div>
          <div className="access">
                <select required
                  className="selectaccdoc2"
                  type="text"
                  name="access4"
                  value={fruit.access4}
                  required
                  onChange={handleChange}>
                  <option value="" disabled selected hidden>ผู้มีสิทธิเข้าถึงเอกสาร</option>
                  <option value="none" className="none">ไม่เลือก</option>
                  <option value="ผศ.ดร. กษิดิศ ชาญเชี่ยว">ผศ.ดร. กษิดิศ ชาญเชี่ยว</option>
                  <option value="ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช">ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช</option>
                  <option value="ผศ.ดร. ธนาธร ทะนานทอง">ผศ.ดร. ธนาธร ทะนานทอง</option>
                  <option value="ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย">ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย</option>
                  <option value="ผศ.ดร. ประภาพร รัตนธำรง">ผศ.ดร. ประภาพร รัตนธำรง</option>
                  <option value="ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย">ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย</option>
                  <option value="ผศ.ดร. วนิดา พฤทธิวิทยา">ผศ.ดร. วนิดา พฤทธิวิทยา์</option>
                  <option value="ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์">ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์</option>
                  <option value="ผศ.ดร. วิลาวรรณ รักผกาวงศ์">ผศ.ดร. วิลาวรรณ รักผกาวงศ์</option>
                  <option value="ผศ.ดร. อรจิรา สิทธิศักดิ์">ผศ.ดร. อรจิรา สิทธิศักดิ์</option>
                  <option value="ผศ.ดร. เด่นดวง ประดับสุวรรณ">ผศ.ดร. เด่นดวง ประดับสุวรรณ</option>
                  <option value="ผศ.ดร. เสาวลักษณ์ วรรธนาภา">ผศ.ดร. เสาวลักษณ์ วรรธนาภา</option>
                  <option value="รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร">รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร</option>
                  <option value="รศ.ดร. เยาวดี เต็มธนาภัทร">รศ.ดร. เยาวดี เต็มธนาภัทร</option>
                  <option value="อ.ดร. ฐาปนา บุญชู">อ.ดร. ฐาปนา บุญชู</option>
                  <option value="อ.ดร. ปกป้อง ส่องเมือง">อ.ดร. ปกป้อง ส่องเมือง</option>
                  <option value="อ.ดร. มนวรรัตน์ ผ่องไพบูลย์">อ.ดร. มนวรรัตน์ ผ่องไพบูลย์</option>
                  <option value="อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์">อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์</option>
                  <option value="อ. กฤตคม ศรีจิรานนท์">อ. กฤตคม ศรีจิรานนท์</option>
                  <option value="อ. นุชชากร งามเสาวรส">อ. นุชชากร งามเสาวรส</option>
                  <option value="อ. ปกรณ์ แววสว่างวงศ์">อ. ปกรณ์ แววสว่างวงศ์</option>
                  <option value="อ. สิริกันยา นิลพานิช">อ. สิริกันยา นิลพานิช</option>
                </select>
          </div>
          <div className="access">
                <select required
                  className="selectaccdoc2"
                  type="text"
                  name="access5"
                  value={fruit.access5}
                  required
                  onChange={handleChange}>
                  <option value="" disabled selected hidden>ผู้มีสิทธิเข้าถึงเอกสาร</option>
                  <option value="none" className="none">ไม่เลือก</option>
                  <option value="ผศ.ดร. กษิดิศ ชาญเชี่ยว">ผศ.ดร. กษิดิศ ชาญเชี่ยว</option>
                  <option value="ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช">ผศ.ดร. ทรงศักดิ์ รองวิริยะพานิช</option>
                  <option value="ผศ.ดร. ธนาธร ทะนานทอง">ผศ.ดร. ธนาธร ทะนานทอง</option>
                  <option value="ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย">ผศ.ดร. ปกรณ์ ลี้สุทธิพรชัย</option>
                  <option value="ผศ.ดร. ประภาพร รัตนธำรง">ผศ.ดร. ประภาพร รัตนธำรง</option>
                  <option value="ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย">ผศ.ดร. วรวรรณ ดีอัซ การ์บาโย</option>
                  <option value="ผศ.ดร. วนิดา พฤทธิวิทยา">ผศ.ดร. วนิดา พฤทธิวิทยา์</option>
                  <option value="ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์">ผศ.ดร. วิรัตน์ จารีวงศ์ไพบูลย์</option>
                  <option value="ผศ.ดร. วิลาวรรณ รักผกาวงศ์">ผศ.ดร. วิลาวรรณ รักผกาวงศ์</option>
                  <option value="ผศ.ดร. อรจิรา สิทธิศักดิ์">ผศ.ดร. อรจิรา สิทธิศักดิ์</option>
                  <option value="ผศ.ดร. เด่นดวง ประดับสุวรรณ">ผศ.ดร. เด่นดวง ประดับสุวรรณ</option>
                  <option value="ผศ.ดร. เสาวลักษณ์ วรรธนาภา">ผศ.ดร. เสาวลักษณ์ วรรธนาภา</option>
                  <option value="รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร">รศ.ดร. ณัฐธนนท์ หงส์วริทธิ์ธร</option>
                  <option value="รศ.ดร. เยาวดี เต็มธนาภัทร">รศ.ดร. เยาวดี เต็มธนาภัทร</option>
                  <option value="อ.ดร. ฐาปนา บุญชู">อ.ดร. ฐาปนา บุญชู</option>
                  <option value="อ.ดร. ปกป้อง ส่องเมือง">อ.ดร. ปกป้อง ส่องเมือง</option>
                  <option value="อ.ดร. มนวรรัตน์ ผ่องไพบูลย์">อ.ดร. มนวรรัตน์ ผ่องไพบูลย์</option>
                  <option value="อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์">อ.ดร. ลัมพาพรรณ พันธ์ชูจิตร์</option>
                  <option value="อ. กฤตคม ศรีจิรานนท์">อ. กฤตคม ศรีจิรานนท์</option>
                  <option value="อ. นุชชากร งามเสาวรส">อ. นุชชากร งามเสาวรส</option>
                  <option value="อ. ปกรณ์ แววสว่างวงศ์">อ. ปกรณ์ แววสว่างวงศ์</option>
                  <option value="อ. สิริกันยา นิลพานิช">อ. สิริกันยา นิลพานิช</option>
                </select>

                <div className="filedoc">
                  <label>กรุณาแนบลิงค์รูปภาพเอกสาร&nbsp; </label>
                    <input
                    type="text"
                    name="file" 
                    value={fruit.file}
                    onChange={handleChange}/>
                </div>
                <div className="file-info">
                  <p>อัพโหลดรูปภาพที่ <a className="link-to-upload-image" href="https://postimages.org/">PostImages</a> แล้วกรอกลิงค์ที่นี่</p>
                </div>
          </div>

        <div className="pum">
          <Button className="cancal" variant="secondary" href='/fruitlist'>ยกเลิก</Button>
          {userData.user ? (
          <>
            
              <Button className="delete-btn" class="danger" onClick={DeleteDoc}>
                ลบเอกสาร
              </Button>
              &nbsp;
              <Button className="update-btn" onClick={fruitUpdate}>
                แก้ไขเอกสาร
              </Button>
          </>
          ) : (
            <b>You need to log in to edit or delete!</b>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditFruit;
