import React from "react";

const Select = ({ type, name, value, placeholder, classs, required, onChange, handleChange }) => {
  let classesName = 'select ' + classs;
  return (
    <div className={classesName} >

      <select
        type={type}
        name={name}
        onChange={onChange}
        required={required}
      >
        <option value="DEFAULT" disabled hidden>{placeholder}</option>
        <option value="logo">Logo</option>
        <option value="website">Webseite</option>
        <option value="logo-website">Logo und Webseite</option>
      </select>

    </div>
  )
};

export default Select;
