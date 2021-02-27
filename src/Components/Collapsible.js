import React, { useEffect, useState } from "react";
import ToggleIcon from "./ToggleIcon";

const Collapsible = ({ title, id, content }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [contentSize, setContentSize] = React.useState(null);
  const contentRef = React.createRef();

  React.useEffect(() => {
    setContentSize(contentRef.current.scrollHeight);
    console.log(contentSize);
  });

  const handleToggleExpand = () => {
    if (window) {
      window.location.href = `#${id}`;
    }
    setExpanded(!expanded);
    console.log(expanded);
    console.log(contentSize);
  };

  return (
    <div
      className={`collapsible ${
        expanded ? "collapsible--expanded" : "collapsible--collapsed"
      }`}
      id={id}
    >
      <button
        className="collapse-toggle__top"
        onClick={() => handleToggleExpand()}
        aria-expanded={expanded}
        aria-controls={`${id}-content`}
        id={`${id}-toggle`}
      >
        <h2 className="collapse__title">{title}</h2>
        <ToggleIcon isExpanded={expanded} />
      </button>
      <div
        className="collapse__content"
        ref={contentRef}
        style={{ maxHeight: expanded ? `${contentSize}px` : "0px" }}
        role="region"
        aria-labelledby={`${id}-toggle`}
        id={`${id}-content`}
      >
        {content}
      </div>
      <div className="collapse-toggle__bottom"></div>
    </div>
  );
};

export default Collapsible;
