import React from "react";
import "./title.scss";
function Title(props) {
  const { title, subtitle } = props;
  return (
    <div className="label">
      <div className="title">
        {title}
       
      </div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
}

export default Title;
