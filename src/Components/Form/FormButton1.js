/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';



const FormButton1 = (prpos) => {
  return (
<button type="button" class="btn btn-primary " onPress={prpos.onPress}>{prpos.title}</button>

  );
};




export default FormButton1;
