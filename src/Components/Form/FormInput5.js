import {useState} from 'react';
const FormInput = (props) => {
  const [value, setValue] = useState();

  const handleChange = event => {
    const value = Math.max(props.min, Math.min(props.max, Number(event.target.value)));
    setValue(value);
    props.onChangeText(value)
  };


  return (

    <>
      
      <div class="form-outline my-2 container">
      <label class="form-label mx-4" for={props.id}>  {props.placeholder} :</label>  
          <input class="form-control"
        type="number"
        value={value}
        placeholder={props.placeholder} 
        onChange={handleChange}
      />   { (value==props.max ||value==props.min) &&
        <div>
          <br/>
        <p class="text-danger text-content-center">min is :{props.min} and max is:{props.max}</p>
</div>
      }</div>
       


    </>
  );
};

export default FormInput;
