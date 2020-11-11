import React from "react";

const SectionsTag = ({ name = '', title = '', articleNumber = '' }) => {
  return (
    <a href={`/section/${name}`} className="sections-tag">
      <span className="sections-tag_number">{articleNumber}</span>
      <span className="sections-tag_title">{title}</span>
    </a>
  );
};

export default SectionsTag;


