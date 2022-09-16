import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-datepicker'
import * as DocumentPicker from 'expo-document-picker'
import FormInput from '../../Form/FormInput';
import apiMedicalService from "../../../Actions/apiMedicalService";
import {LinearGradient} from 'expo-linear-gradient';



const Diag4 = (props) => {
  const [fileName, setFileName] = useState()
  const [file, setFile] = useState()

  var handleFileUpload = async () => {
  	    let res = await DocumentPicker.getDocumentAsync({});
  		  alert(res.uri);
        console.log(res);
        setFileName(res.name)
        setFile(res)
  	}
    //console.log(values)
    props.addExamBio(props.patientList["cin"], values)
    props.navigation.navigate("DiagnosticDetails")

  

  var handleSUbmitAutre = () => {
    if (file === undefined) { setTest("Veuillez selectionner un fichier"); return }
    const uri = file.uri
    const name = file.name
    const type = file.type
    const uploadFile = {
      uri,
      name,
      type
    }
    console.log(uploadFile)
    const formData = new FormData();
    formData.append("file", uploadFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    apiMedicalService.medicalService().uploadFileExamBio(props.patientList["cin"], formData).then((res) => { props.navigation.navigate("DiagnosticDetails") }).catch(err => console.log(err))

  }
  return (

<LinearGradient colors={['#d7dbdd', '#abebc6','#d7dbdd']} style={styles.body}>
    <ScrollView>

      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Examens Biologiques</Text>
      <Text style={tailwind('text-gray-700 font-bold py-2  text-center')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
      <View style={tailwind("items-center")}>
          <FormButton title={fileName !== undefined && fileName.substr(0, 120) || "UPload file"} onPress={handleFileUpload} />
          <FormButton title="Enregistrer" onPress={handleSUbmitAutre} />
        </View>





    </ScrollView>
    </LinearGradient>
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
  login: actions.login,
  logout: actions.logout,
  addExamBio: actions.addExamBio
};
export default connect(mapStateToProps, mapActionToProps)(Diag4);
