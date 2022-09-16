import React from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { View} from 'react-native';
import InputMask from 'react-input-mask';

const FormInput3 = (props) => {
  return (

    <>
      
      <div class="form-outline my-2 container">
      <label class="form-label mx-4" for={props.id}>  {props.placeholder} :</label>
      <InputMask class="form-control"  maskChar="" mask={props.mask} placeholder={props.placeholder}  onChange={(text) => props.onChangeText(text.target.value)} ></InputMask>
      </div>
      


    </>
  );
};

export default FormInput3;
