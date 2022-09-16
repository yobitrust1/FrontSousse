/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';


import tailwind from 'tailwind-rn';
import { CheckBox, Text, View, StyleSheet } from 'react-native';

const FormCheckBox = (props) => {
  const [value, setValue] = useState(props.value)
  return (
    <>
      <View style={tailwind("text-left")} >
        <View style={styles.row}>

          <CheckBox
            disabled={false}
            value={value}
            tintColors={{ true: '#7a49a5', false: '#7a49a5' }}

            onValueChange={(newValue) => { setValue(newValue); props.onPress(newValue, props.text) }}
          />
          <Text style={tailwind("py-1 text-gray-700")}> {props.text}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});





export default FormCheckBox;
