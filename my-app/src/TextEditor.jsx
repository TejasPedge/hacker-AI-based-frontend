import React, { useState } from 'react';

const TextEditor = ({onChange,code}) => {
 
    const handleCodeChange = (e) => {
        onChange(e.target.value);
      };
    


  const editorStyles = {
    width: '50%',
  };

  const textareaStyles = {
    width: '100%',
    height: '97%',
    padding: '10px',
    fontFamily: 'monospace',
    fontSize: '14px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#2d2d2d',
    color: '#fff',
    resize: 'none',
  };

  return (
    <div style={editorStyles}>
      <textarea
        style={textareaStyles}
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your code here..."
      ></textarea>
    </div>
  );
};

export default TextEditor;
