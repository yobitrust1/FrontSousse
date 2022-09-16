import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import {View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
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
const PathRespChronique1 = (props) => {
  const [anciennete, setAnciennete] = useState(0.0);
  const [traitement, setTraitement] = useState(0);
  const [equilibre, setEquilibre] = useState(true);
  var handleAnciennteChange = (text) => {
    setAnciennete(text)
  }
  var handleTraitementChange = (text) => {
    setTraitement(text)
  }
  var handleEquilibreChange = (data) => {
      setEquilibre(data.target.value)
  }
  var handleSubmit = (e) => {
    var values = {
      antecedent: "PathResChronique",
      anciennete: anciennete,
      traitement: traitement,
      equilibre: equilibre
    }
    e.preventDefault();
    //console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux")
  }
  return (
    <section className="landing-background2">
    <div class=" d-flex align-items-center m-4 " style={{height: "550px"}}>
<MDBContainer  style={{height: "350px"}}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Pathologie Respiratoire chroniques</h2>
          <FormInput title="Ancienneté" placeholder="Ancienneté" onChangeText={handleAnciennteChange} type="decimal-pad"  type="number"  />
        <FormInput title="Traitement" placeholder="Traitement" onChangeText={handleTraitementChange} />
          <div class="row mx-4">
      <label class="form-label mx-3">Equilibré?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Oui">
        <input type="radio" class="form-check-input" id="Oui" name="optradio" value={true} onChange={handleEquilibreChange}/>Oui
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Non">
        <input type="radio" class="form-check-input" id="Non" name="optradio" value={false} onChange={handleEquilibreChange}/>Non
      </label>
      </div>
      </div>
          <form class="row justify-content-center">
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux") }} />
          <FormButton title="Enregister" onPress={handleSubmit} />
          </form>
           </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});
export default connect(mapStateToProps, mapActionToProps)(PathRespChronique1);
