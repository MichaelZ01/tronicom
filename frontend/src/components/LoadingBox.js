import React from 'react';

// Loading box for slow internet
export default function LoadingBox() {
  return (
    <div className="loading">
      <i className='fa fa-spinner fa-spin'></i> Loading...
      <div id='loader-wrapper'>
        <div id='loader'></div>
        <div className='loader-section section-left'></div>
        <div className='loader-section section-right'></div>
      </div>
    </div>

  )
}