import React, {Component} from 'react';

// prop.input from redux-form
export default ({ input, label, meta }) => {
  return (
    <div>
      <label> { label } </label>
      <input {...input} style={{marginBottom: 5 }}/>
      <div className="red-text" style={{marginBottom:10}}>
      {meta.touched && meta.error}
      </div>
    </div>
  );
};
