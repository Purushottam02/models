import React from "react";
import "./model.scss";

function Model() {
  return (
    <div className="wrapper">
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Latitude</div>
          <div className="division">
            <div className="box">
              <div className="inputbox">
                <input />
                <span className="unit"></span>
                <div className="range">Max()to Min()</div>
              </div>
              <div className="hover">
                !<span className="tooltip">invalid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Longitude</div>
          <div className="division">
            <div className="box">
              <div className="inputbox">
                <input />
                <span className="unit"></span>
                <div className="range">Max()to Min()</div>
              </div>
              <div className="hover">
                !<span className="tooltip">invalid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Tilt</div>
          <div className="division">
            <div className="box">
              <div className="inputbox">
                <input />
                <span className="unit">deg</span>
                <div className="range">Max()to Min()</div>
              </div>
              <div className="hover">
                !<span className="tooltip">invalid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Azimuth</div>
          <div className="division">
            <div className="box">
              <div className="inputbox">
                <input />
                <span className="unit">deg</span>
                <div className="range">Max()to Min()</div>
              </div>
              <div className="hover">
                !<span className="tooltip">invalid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inputs">
        <div className="latitutde-inputs">
          <div className="label">Height (AGL)</div>
          <div className="division">
            <div className="box">
              <div className="inputbox">
                <input />
                <span className="unit">m</span>
                <div className="range">Max()to Min()</div>
              </div>
              <div className="hover">
                !<span className="tooltip">invalid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
