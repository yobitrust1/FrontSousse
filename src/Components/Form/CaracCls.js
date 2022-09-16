import React from 'react';


import tailwind from 'tailwind-rn';
import { } from 'react-native';
import FormButton from "./FormButton11";
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import { Text,View, StyleSheet } from 'react-native';
import toast, { Toaster } from 'react-hot-toast';

const CaracCls = (props) => {
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
  return (
    
<div class="p-4">
<label class="form-label mx-4">Date de début </label>
<div class="p-1"><input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={(value) => props.setDateD(value)}/></div>
<label class="form-label mx-4">Date de fin</label>
<div class="p-1"><input class="border border-primary" min={props.dateD} max={new Date()}type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={(value) => props.setDateF(value)}/></div>

        
        
<div><button class="btn btn-outline-primary" onClick={() =>props.onPress, notify}>Enregistrer</button><Toaster /></div>

      
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
