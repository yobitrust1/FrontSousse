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
    const test =props.patientList.examBio;
  })
    const test =props.patientList.examBio;
    var handleModifier = (item,date) => {
      localStorage.setItem("type", item)
      localStorage.setItem("datePr",date)
      props.navigation.navigate("examBioModif")
    }
  
    var handleRemove = (item,date) => {
      var values = {
        "type": item,
        "datePr":date
      }
      props.delOneExamenBio(props.patientList["cin"], values)
    }
  return (
<div>
      <div className="bg-image"></div>
      <div className="bg-text">
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-200 font-bold py-2 text-xl text-center')}>Examen biologique:</Text>

        <div>
          
    {Object.keys(test).map((setNom, key) => (<div> 
        <h1>{setNom}</h1>
    <div >
      {Object.keys(test[setNom]).map((key1, key2) => (<div> 
        <div> {key1=="gbs" && <div> {Object.keys(test[setNom][key1]).map((key2, key3) => (<div> 
                          <Text >{test[setNom][key1][key2]["datePr"]}</Text>   
                          <TouchableOpacity onPress={() => handleModifier("NFS",test[setNom][key1][key2]["datePr"])}>
                          <Text style={tailwind('text-teal-200 px-8')}> Modifier ? </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => { handleRemove("NFS",test[setNom][key1][key2]["datePr"]) }}>
                          <Text style={tailwind('text-teal-200 px-8')}> Supprimer ?</Text>
                          </TouchableOpacity>
                          </div>))}</div>
        
      }</div> <div> 
      {key1=="creats" && <div> {Object.keys(test[setNom][key1]).map((key2, key3) => (<div> 
                          <Text >{test[setNom][key1][key2]["datePr"]}</Text>   
                          <TouchableOpacity onPress={() => handleModifier("BilanRenal",test[setNom][key1][key2]["datePr"])}>
                          <Text style={tailwind('text-teal-200 px-8')}> Modifier ? </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => { handleRemove("BilanRenal",test[setNom][key1][key2]["datePr"]) }}>
                          <Text style={tailwind('text-teal-200 px-8')}> Supprimer ?</Text>
                          </TouchableOpacity>
                          </div>))}</div>
        
      }</div> <div> 
      {key1=="bilirus" && <div> {Object.keys(test[setNom][key1]).map((key2, key3) => (<div> 
                          <Text >{test[setNom][key1][key2]["datePr"]}</Text>   
                          <TouchableOpacity onPress={() => handleModifier("BilanHepa",test[setNom][key1][key2]["datePr"])}>
                          <Text style={tailwind('text-teal-200 px-8')}> Modifier ? </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => { handleRemove("BilanHepa",test[setNom][key1][key2]["datePr"]) }}>
                          <Text style={tailwind('text-teal-200 px-8')}> Supprimer ?</Text>
                          </TouchableOpacity>
                          </div>))}</div>
        
      }</div> <div> 
      {key1=="phs" && <div> {Object.keys(test[setNom][key1]).map((key2, key3) => (<div> 
                          <Text >{test[setNom][key1][key2]["datePr"]}</Text>   
                          <TouchableOpacity onPress={() => handleModifier("GDSA",test[setNom][key1][key2]["datePr"])}>
                          <Text style={tailwind('text-teal-200 px-8')}> Modifier ? </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => { handleRemove("GDSA",test[setNom][key1][key2]["datePr"]) }}>
                          <Text style={tailwind('text-teal-200 px-8')}> Supprimer ?</Text>
                          </TouchableOpacity>
                          </div>))}</div>
        
      }</div> <div> 
      {key1=="naks" && <div> {Object.keys(test[setNom][key1]).map((key2, key3) => (<div> 
                          <Text >{test[setNom][key1][key2]["datePr"]}</Text>   
                          <TouchableOpacity onPress={() => handleModifier("Ionogra",test[setNom][key1][key2]["datePr"])}>
                          <Text style={tailwind('text-teal-200 px-8')}> Modifier ? </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => { handleRemove("Ionogra",test[setNom][key1][key2]["datePr"]) }}>
                          <Text style={tailwind('text-teal-200 px-8')}> Supprimer ?</Text>
                          </TouchableOpacity>
                          </div>))}</div>
        
      }</div> <div> 
      {key1=="pathss" && <div> {Object.keys(test[setNom][key1]).map((key2, key3) => (<div> 
                          <Text >{test[setNom][key1][key2]["datePr"]}</Text>   
                          <TouchableOpacity onPress={() => handleModifier("AutreBilan",test[setNom][key1][key2]["datePr"])}>
                          <Text style={tailwind('text-teal-200 px-8')}> Modifier ? </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => { handleRemove("AutreBilan",test[setNom][key1][key2]["datePr"]) }}>
                          <Text style={tailwind('text-teal-200 px-8')}> Supprimer ?</Text>
                          </TouchableOpacity>
                          </div>))}</div>  
      }</div>
      </div>))}
    </div> 
  </div>
    
        ))
}
  </div>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => props.navigation.navigate("DiagnosticDetails")} />
          <FormButton title=" Ajouter un Examen biologique" onPress={() => props.navigation.navigate("ExamBio")} />

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
  delOneExamenBio: actions.delOneExamenBio
};

export default connect(mapStateToProps, mapActionToProps)(AntecedentsList);
