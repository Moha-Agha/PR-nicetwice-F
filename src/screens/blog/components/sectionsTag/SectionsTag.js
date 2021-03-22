import React from "react";
import { Link } from 'react-router-dom';

const SectionsTag = ({ id, title = '', slug = '', articleNumber = '' }) => {
  return (
    <Link to={`/section/${slug}`} className="section-tag">
      <span className="section-tag_number">{articleNumber}</span>
      <span className="section-tag_title">{title}</span>
    </Link>
  );
};

export default SectionsTag;


