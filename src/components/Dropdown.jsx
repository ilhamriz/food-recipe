import React from 'react'
import './Dropdown.css'

function Dropdown({name, value, onChange, className, children}) {
  return (
    <div className="dropdown-container">
      <select className={`dropdown ${className}`} name={name} value={value} onChange={onChange}>
        {children}
      </select>
      <div className="select-icon">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
      </div>
    </div>
  )
}

export default Dropdown
