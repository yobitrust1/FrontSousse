import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
import InputRd from '../../Form/inputrd';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

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
const AddAntecendentsMedicaux1 = (props) => {
  const [nextPath, setNextPath] = useState("")

  var handleAntecedentChange = (data) => {
      setNextPath(data.target.value)
  }
  return (
    <div className="landing-background6">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer  >
      <MDBRow>
        <MDBCol >
          <MDBCard style={{backgroundColor:"#c9cecb"}}>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Antecedents Medicaux</h2>
          <div class="mx-4">
          <InputRd onChange={handleAntecedentChange} type="radio" value="PathRespChronique1" name="gender" id="1425" name1="Pathologie respiratoire chronique ?"/>
      <InputRd onChange={handleAntecedentChange} type="radio" value="Cardiopathies1" name="gender"id="2532" name1="Cardiopathies ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="TrRythCardiaque1" name="gender"id="3253" name1="Trouble du rythme cardiaque ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="HTA1" name="gender"id="47572" name1="HTA ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="Diabete1" name="gender"id="52733" name1="Diabète ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="InsRenaleChro1" name="gender"id="73736" name1="Insuffisance rénale chronique ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="AVC1" name="gender"id="77373" name1="AVC ?" /> 
      <InputRd onChange={handleAntecedentChange} type="radio" value="Retinopathie1" name="gender"id="87373" name1="Rétinopathie ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="ATCDchir1" name="gender" id="9737" name1="ATCD chirugicaux ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="Grossesse1" name="gender" id="17737370" name1="Grossesse en cours ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="PriseAINS1" name="gender" id="1737353" name1="Prise récente d'AINS ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="Immunosuppreseur1" name="gender" id="1747" name1="Traitement immunosuppresseur ?" />
      <InputRd onChange={handleAntecedentChange} type="radio" value="AutresATCD1" name="gender" id="1735" name1="Autres ATCD ?" />
          </div>
          <form class="row justify-content-center">
          <FormButton title="Retour1" onPress={() => { props.navigation.navigate("Exposition1") }} />
          <FormButton title="Suivant" onPress={() => { props.navigation.navigate(nextPath) }} />
          <FormButton title="Suivant" onPress={() => { props.navigation.navigate("HabitudesDeVie1") }} />
          </form>
           </form> 
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={2} class="col-md-6"/>  
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

  patientList: state.medicalService.patientList
});
const mapActionToProps = {

};

export default connect(mapStateToProps, mapActionToProps)(AddAntecendentsMedicaux1);
