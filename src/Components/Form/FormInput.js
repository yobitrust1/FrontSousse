import React from 'react';
const FormInput = (props) => {
  return (

    <>
      
      <div class="form-outline my-2 container">
      <label class="form-label mx-4" for={props.id}>  {props.placeholder} :</label>
      <input class="form-control" 
          type={props.type} 
          placeholder={props.placeholder} 
          min={props.min}
          max={props.max}
          maxLength={props.maxLength}
          onChange={(text) => props.onChangeText(text.target.value)}/>      </div>
       


    </>
  );
};

export default FormInput;
