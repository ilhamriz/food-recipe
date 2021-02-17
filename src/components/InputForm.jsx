import React from "react";
import './InputForm.css';

export const InputForm = ({
  tag,
  type,
  name,
  placeholder,
  value,
  onChange,
  id,
  className
}) => {
  if (tag === "input") {
    return (
      <input
        type={type}
        id={id}
        className={className}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // required
      />
    );
  } else if (tag === "select") {
    return (
      <select
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    );
  }
  else if(tag === 'textarea') {
    return (      
      <textarea
      name={name}
      placeholder={placeholder}
      cols="20"
      rows="5"
      value={value}
      onChange={onChange}
    />
    )
  }
};