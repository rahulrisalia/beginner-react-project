import React from "react";
import "../components/Langingpage.css";

function Landingpage(props) {
  return (
    <div className="landing align-items-center d-flex justify-content-center ">
      <div className="w-50">
        <svg className="main mx-auto d-flex">
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            WELCOME
          </text>
        </svg>
        <div className="sub">
          <div className="typewriter d-flex mx-auto">
            <h1>"CODE WITH RAHUL...."</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
