import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
const AntecendentsMedicaux = (props) => {
  let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9],
        position: "all",
        color: [ "#ff0000"],
        cross: "dead",
        random: 10
      };


  return (
    <div>
    <div class="big">
    <Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Antécédents medicaux:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
        <View style={tailwind('py-24')}>
          <FormButton title="Ajouter un antécédent medical" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux") }} />
          <FormButton title="Liste des antécédents medicaux" onPress={() => props.navigation.navigate("AntecedentsList")} />
        </View>
        <FormButton title="Retour" onPress={() => { props.navigation.navigate("PatientDetails") }} />
      </View>
      </Container>
</div>
<ParticlesBg type="cobweb" config={config} bg={true} />
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
  getAllAntecedentsMedicaux: actions.getAllAntecedentsMedicaux,
  removeAntecedentMedical: actions.removeAntecedentMedical
};

export default connect(mapStateToProps, mapActionToProps)(AntecendentsMedicaux);
