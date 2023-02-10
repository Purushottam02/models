import React from "react";
import "./model.scss";

function Model() {
  return (
    <div className="wrapper">
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Latitude</div>
          <div className="inputbox">
            <input></input>
          </div>
        </div>
      </div>
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Longitude</div>
          <div className="inputbox">
            <input  type="Number"/>
          </div>
        </div>
      </div>
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Tilt</div>
          <div className="inputbox">
            <input/><span className="unit">deg</span>
          </div>
        <div className="hover">!<span className="tooltip">invalid</span></div>

        </div>
      </div>
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Azimuth</div>
          <div className="inputbox">
            <input/><span>deg</span>
          </div>
        </div>
      </div>
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Height (AGL)</div>
          <div className="inputbox">
            <input/><span>m</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
