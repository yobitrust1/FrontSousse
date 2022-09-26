import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import '../home.css';
import "../login2.css";
const AntecedentsList = (props) => {
  const [display, setDiplay] = useState(false);
  useEffect(() => {
    const test =props.patientList.examRadio_paraCli;
  })
    const test =props.patientList.examRadio_paraCli;
    var handleModifier = (item,date) => {
      localStorage.setItem("type", item)
      localStorage.setItem("datePr",date)
      props.navigation.navigate("examenRadioParaCliModif")
    }
  
    var handleRemove = (item,date) => {
      var values = {
        "type": item,
        "datepr":date
      }
      props.delOneExamenRadioParacli(props.patientList["cin"], values)
    }
  return (
<div>
      <div className="bg-image"></div>
      <div className="bg-text">
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-200 font-bold py-2 text-xl text-center')}>Examens radiologiques et para-cliniques:</Text>

        
          
  
     
    <div >
      {Object.keys(test).map((key1, key2) => (<div> 
        <div> {key1=="thoraxes" && <div> {Object.keys(test[key1]).map((key2, key3) => (<div> 
                          <Text >{test[key1][key2]["datepr"]}</Text>   
                          <TouchableOpacity onPress={() => handleModifier("Thorax",test[key1][key2]["datepr"])}>
                          <Text style={tailwind('text-teal-200 px-8')}> Modifier ? </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => { handleRemove("Thorax",test[key1][key2]["datepr"]) }}>
                          <Text style={tailwind('text-teal-200 px-8')}> Supprimer ?</Text>
                          </TouchableOpacity>
                          </div>))}</div>
        
      }</div> <div> 
      {key1=="tdmThos" && <div> {Object.keys(test[key1]).map((key2, key3) => (<div> 
                          <Text >{test[key1][key2]["datepr"]}</Text>   
                          <TouchableOpacity onPress={() => handleModifier("TdmTho",test[key1][key2]["datepr"])}>
                          <Text style={tailwind('text-teal-200 px-8')}> Modifier ? </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => { handleRemove("TdmTho",test[key1][key2]["datepr"]) }}>
                          <Text style={tailwind('text-teal-200 px-8')}> Supprimer ?</Text>
                          </TouchableOpacity>
                          </div>))}</div>
        
      }</div> <div> 
      {key1=="ecgs" && <div> {Object.keys(test[key1]).map((key2, key3) => (<div> 
                          <Text >{test[key1][key2]["datepr"]}</Text>   
                          <TouchableOpacity onPress={() => handleModifier("ECG",test[key1][key2]["datepr"])}>
                          <Text style={tailwind('text-teal-200 px-8')}> Modifier ? </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => { handleRemove("ECG",test[key1][key2]["datepr"]) }}>
                          <Text style={tailwind('text-teal-200 px-8')}> Supprimer ?</Text>
                          </TouchableOpacity>
                          </div>))}</div>
        
      }</div>
    
  
  </div>
    
        ))
}
  </div>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => props.navigation.navigate("DiagnosticDetails")} />
          <FormButton title=" Ajouter un antécedent médical" onPress={() => props.navigation.navigate("AddAntecendentsMedicaux")} />

        </View>

      </View>
      <div
          style={{ display: display ? "flex" : "none" }}
          className="flex justify-center align-middle my-4 p-2"
        >
        </div>
        
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  delOneExamenRadioParacli: actions.delOneExamenRadioParacli
};

export default connect(mapStateToProps, mapActionToProps)(AntecedentsList);
