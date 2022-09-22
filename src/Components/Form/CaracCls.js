import React from 'react';


import tailwind from 'tailwind-rn';
import { } from 'react-native';
import FormButton10 from "./FormButton10";
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import { Text,View, StyleSheet } from 'react-native';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Enregistrer', {
  style: {
    border: '1px solid #713200',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
  },
}); 

const CaracCls = (props) => {


  return (
    
<div style={tailwind("items-center")}>
  <br/>
<div><Text style={tailwind('text-gray-700 py-2')}>Date de debut    :</Text>
<input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={(value) => props.setDateD(value)}/></div>
<br/><div><Text style={tailwind('text-gray-700 py-2')}> Date de fin   :</Text>
  <input type="date" min={props.dateD} data-date="" data-date-format="DD MMMM YYYY" onChange={(value) => props.setDateF(value)}/></div>

        
        
 
<div><FormButton10 title="Enregistrer" onPress={() => {  notify();return props.onSubmit;}}   /></div>
      
      </div>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});



export default CaracCls;