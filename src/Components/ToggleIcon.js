import React from "react";

const ToggleIcon = ({ isExpanded }) => {
  return (
    <>
      {isExpanded ? (
        <svg
          version="1.1"
          className="iconToggle"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 20 20"
          focusable="false"
        >
          <g>
            <rect y="8.99" width="20" height="2.03" />
          </g>
        </svg>
      ) : (
        <svg
          version="1.1"
          className="iconToggle"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 20 20"
          focusable="false"
        >
          <g>
            <rect x="8.97" width="2.03" height="20" />
          </g>
          <g>
            <rect y="8.99" width="20" height="2.03" />
          </g>
        </svg>
      )}
    </>
  );
};

export default ToggleIcon;
