/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import tailwind from 'tailwind-rn';
import { Button, TouchableOpacity, Text } from 'react-native';


const FormButton2 = (prpos) => {
  return (
<div>
    <div class="col-12 btn btn-outline-primary " onClick={prpos.onPress}>
      
    
    <h4 class="text-content-center"><i class={prpos.i}></i>{prpos.title}</h4>
    
    </div>
    </div>
  );
};




export default FormButton2;
