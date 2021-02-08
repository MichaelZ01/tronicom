import React from 'react';

// Error messagebox
export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.varient || 'info'}`}>
      {props.children}
    </div>
  )
}