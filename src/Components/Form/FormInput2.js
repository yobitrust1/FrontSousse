import React from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { Text, View, TextInput, StyleSheet } from 'react-native';
const FormInput = (props) => {
  return (
<div class=" row justify-content-center form-outline my-2 container">
     <div> <input class="form-control" 
          type={props.type} 
          placeholder={props.placeholder1} 
          min={props.min}
          max={props.max}
          maxLength={10}
          onChange={(text) => props.onChangeText1(text.target.value)}/></div>
           / 
        <div>  <input class="form-control" 
          type={props.type} 
          placeholder={props.placeholder2} 
          min={props.min}
          max={props.max}
          maxLength={10}
          onChange={(text) => props.onChangeText2(text.target.value)}/></div>
                </div>

  );
};



export default FormInput;
