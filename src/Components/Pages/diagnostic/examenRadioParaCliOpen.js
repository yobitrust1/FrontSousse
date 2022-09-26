import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormButton2 from "../../Form/FormButton2";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import "../login2.css";
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
    <div className="bg-image"></div>
    <div className="bg-text">
    <View style={tailwind(' items-center ')} >
        
        <Container style={tailwind(' items-center ')}>
      <View style={tailwind(' items-center ')} >
        
        <View style={tailwind('items-center py-24')}>
          <FormButton2 title="Ajouter un Examen radiologique et para-clinique" onPress={() => { props.navigation.navigate("ExamenRadioParaCli") }} />
          <FormButton2 title="Liste des Examens radiologiques et para-cliniques" onPress={() => props.navigation.navigate("ExamenRadioParaCliList")} />
        </View>
        <FormButton2 title="Retour" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
      </View>
      </Container>
      </View>
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
  getAllAntecedentsMedicaux: actions.getAllAntecedentsMedicaux,
  removeAntecedentMedical: actions.removeAntecedentMedical
};

export default connect(mapStateToProps, mapActionToProps)(AntecendentsMedicaux);
