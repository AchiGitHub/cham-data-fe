import React, { cloneElement } from "react";

const CommonIcon = ({ icon }) => {
  return (
    <div>
      {icon && cloneElement(icon.icon, { size: 24, "stroke-width": 2 })}
    </div>
  );
};

export default CommonIcon;
