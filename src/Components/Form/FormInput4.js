import React from 'react';
//import { TextInput } from 'react-native-paper';
import {MDBInput } from 'mdbreact';
const FormInput = (props) => {
  return (

    <>
      <MDBInput
                label={props.label}
                group
                type={props.type}
                validate
                error={props.error}
                success={props.success}
                onChange={(text) => props.onChangeText(text.target.value)}
              />
      
      
      
      
    

    </>
  );
};

export default FormInput;
