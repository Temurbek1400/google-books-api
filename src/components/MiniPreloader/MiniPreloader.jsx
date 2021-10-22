import React from "react";
import "./MiniPreloaderCSS.css";

const MiniPreloader = () => {
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
export default MiniPreloader;
