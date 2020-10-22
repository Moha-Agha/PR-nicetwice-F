import React from "react";

const Select = ({ id, type, name, value, placeholder, classs, required, onChange, handleChange }) => {
  let classesName = 'select ' + classs;
  return (
    <div className={classesName} >

      <select
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        required={required}
      >
        <option value="" selected disabled hidden>{placeholder}</option>
        <option value="logo">Logo</option>
        <option value="website">Webseite</option>
        <option value="logo-website">Logo und Webseite</option>
      </select>

    </div>
  )
};

export default Select;
