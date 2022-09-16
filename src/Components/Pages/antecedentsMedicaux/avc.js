import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
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
const AVC1 = (props) => {

  const [anciennete, setAnciennete] = useState(0.0);
  const [traitement, setTraitement] = useState(0);
  const [episode_1, setEpisode_1] = useState(true)
  const [episode_x, setEpisode_x] = useState(false)
  const [handicap, setHandicap] = useState("mineur")

  var handleHandicapChange = (data) => {
      setHandicap(data.target.value)
  }

  var handleAnciennteChange = (text) => {
    setAnciennete(text)
  }
  var handleTraitementChange = (text) => {
    setTraitement(text)
  }
  var handleAvcChange = (data) => {
    if (data.target.value==="1") {
      setEpisode_1(true);
      setEpisode_x(false);
    }
    else if (data.target.value==="2") {
      setEpisode_1(false);
      setEpisode_x(true)
    }
  }
  var handleSubmit = (e) => {
    var values = {
      antecedent: "AVC",
      anciennete: anciennete,
      traitement: traitement,
      episode_1: episode_1,
      getEpisode_x: episode_x,
      handicap: handicap
    }
    e.preventDefault();
    console.log(values)
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
          <h2 class="font-weight-bold text-center p-5 text-primary">AVC</h2>
          <div class="row mx-4">
      <label class="form-label mx-3">AVC?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="1">
      <input  class="form-check-input" id="1" onChange={handleAvcChange} type="radio" value="1" name="gender" />Un seul episode
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="2">
      <input  class="form-check-input" id="2" onChange={handleAvcChange} type="radio" value="2" name="gender" />Plusieurs episodes
      </label>
      </div>
      </div>
      <FormInput title="Ancienneté" placeholder="Ancienneté" onChangeText={handleAnciennteChange} type="decimal-pad"  type="number"  />
      <FormInput title="Traitement" placeholder="Traitement" onChangeText={handleTraitementChange} />
      <div class="row mx-4">
      <label class="form-label mx-3">Handicap?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="mineur">
      <input  class="form-check-input" id="mineur" onChange={handleHandicapChange} type="radio" value="mineur" name="gender1" />Mineur
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="moyen">
      <input  class="form-check-input" id="moyen" onChange={handleHandicapChange} type="radio" value="moyen" name="gender1" />Moyen
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="majeur">
      <input  class="form-check-input" id="majeur" onChange={handleHandicapChange} type="radio" value="majeur" name="gender1" />Majeur
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

  antecedentsMedicaux: actions.antecedentsMedicaux
};

export default connect(mapStateToProps, mapActionToProps)(AVC1);
