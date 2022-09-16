import React from 'react';
const InputRd = (props) => {
    return (
  
      <>
        <div class="form-check mx-4">
      <label class="form-check-label" for={props.id}>
      <input  class="form-check-input" id={props.id}  type="radio" value={props.value} name={props.name}
      onChange={(value) => props.onChange(value)} />{props.name1}
      </label>
      </div>
      </>
    );
  };
  
  export default InputRd;