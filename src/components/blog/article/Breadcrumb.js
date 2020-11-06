import React from "react";

const Breadcrumb = ({ section }) => {
  return (
    <div className="breadcrumb">
      <a href="/" className="breadcrumb_first">Startseite </a>
      /
      <a href="/blog" className="breadcrumb_first"> Blog </a>
      /
      <a href={`/blog/section/${section}`} className="breadcrumb_second">{section}</a>
    </div>
  );
};

export default Breadcrumb;
