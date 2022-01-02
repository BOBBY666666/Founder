import React from "react";

const ErrorMsg = (props) => {
  return (
    <div style={{ padding: "10px",marginTop: "-13px" ,marginBottom: "20px", border: "1px solid #D9534F" }}>
      <span style={{ color: "#D9534F", textAlign: "center", marginLeft: "-2.75px"}}>
        <b>{props.msg}</b>
      </span>
    </div>
  );
};

export default ErrorMsg;
