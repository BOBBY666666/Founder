import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './css/Sidebar.css'

function Navbar(){
    return(
        <div className="sidenav">
            <ul>
            <br /><br /><br /><br />
                <li><Link to="/fruitlist">
                    <span>เอกสารเข้าทั้งหมด</span></Link>
                </li>
                <div className="sub">
                    <li><Link to="/doc-general">
                        <span>เอกสารทั่วไป</span></Link>
                    </li>
                    <li><Link to="/doc-personal">
                        <span>เอกสารบุคคล</span></Link>
                    </li>
                    <li><Link to="/doc-head">
                        <span>เอกสารถึงหัวหน้าสาขา</span></Link>
                    </li>
                    <li><Link to="/doc-project">
                        <span>เอกสารโครงการต่างๆ</span></Link>
                    </li>
                </div>
                <li><Link to="/doc-out">
                    <span>เอกสารออกทั้งหมด</span></Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
