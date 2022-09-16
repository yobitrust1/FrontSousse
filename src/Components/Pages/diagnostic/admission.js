import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../../Form/FormInput';
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
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


const Admission = (props) => {
  const [type, setType] = useState("hhop")
  const [lieu, setLieu] = useState("chez lui")
  const [lieuCB, setLieuCB] = useState("lui")
  const [dateEnt, setDateEnt] = useState()
  const [mode, setMode] = useState("transfert inter-hopital")
  const [modeCB, setModeCB] = useState("transfert")
  const [hopital, setHopital] = useState()
  const [service, setService] = useState()

  var handleTypeSdate = (data) => {
    setDateEnt(data.target.value)
       }
  var handleModeCB = (data) => {
    if (data.target.value==="0") {
      setMode("Transfert inter-hopital")
      setModeCB("Transfert inter-hopital")
    }
    if (data.target.value==="1") {
      setMode("Transfert inter-service")
      setModeCB("Transfert inter-service")
    }
    if (data.target.value==="2") {
      setMode("Urgences")
      setModeCB("Urgences")
    }
    if (data.target.value==="3") {
      setMode("SAMU")
      setModeCB("SAMU")
    }
    if (data.target.value==="4") {
      setMode("D'un lieu d'isolement(Chez lui ou centre)")
      setModeCB("D'un lieu d'isolement(Chez lui ou centre)")
    }
    if (data.target.value==="5") {
      //setMode(data[5].label)
      setModeCB("Autre")
    }
  }
  var handleTypeChange = (data) => {
      setType(data.target.value)
  }
  var handleLieuCB = (data) => {
    if (data.target.value==="0") {
      setLieu("chez lui")
        setLieuCB("lui")
    }
    if (data.target.value==="1") {
      setLieuCB("centre")
    }
    if (data.target.value==="2")
      setLieuCB("autre")

  }
  var handleLieuChange = (text) => {
    setLieu(text)
  }
  var handleHopitalChange = (text) => {
    setHopital(text)
  }
  var handleServiceChange = (text) => {
    setService(text)
  }
  var handleModeChange = (text) => {
    setMode(text)
  }

  var handleSubmit = (e) => {
    e.preventDefault();
    var values = {
      type: type,
      lieu: lieu,
      hopital: hopital,
      service: service,
      dateEnt: dateEnt,
      mode: mode,

    }
    console.log(values)
    console.log(props.patientList["cin"])
    props.addAdmission(props.patientList["cin"], values)
    props.navigation.navigate("DiagnosticDetails")

  }

  return (
    <div className="landing-background7">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer  >
      <MDBRow>
        <MDBCol >
          <MDBCard style={{backgroundColor:"#c9cecb"}}>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Admission d'un cas confirmé</h2>
          <label class="form-label mx-3">Admission?</label>
           <div class="row mx-4">

      <div class="form-check mx-1">
      <label class="form-check-label" for="hhop">
      <input  class="form-check-input" id="hhop" onChange={handleTypeChange} type="radio" value="hhop" name="gender" />En dehors de l'hopital
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="hop">
      <input  class="form-check-input" id="hop" onChange={handleTypeChange} type="radio" value="hop" name="gender" />A l'hopital
      </label>
      </div>
      </div>
      {
        type === "hhop" && <div >
        <label class="form-label mx-3 p-3">Précisier le lieu?</label>
          <div  class="row mx-4">
            <InputRd onChange={handleLieuCB} type="radio" value="0" name="gender1" id="4" name1="Chez lui"/>
            <InputRd onChange={handleLieuCB} type="radio" value="1" name="gender1"id="445" name1="Dans un centre d'isolement" />
            <InputRd onChange={handleLieuCB} type="radio" value="2" name="gender1" id="442" name1="Autre"/>
          </div>


          {lieuCB === "autre" && <FormInput placeholder="..." onChangeText={handleLieuChange} />}
          {lieuCB === "centre" && <FormInput placeholder="Préciser le quel" onChangeText={handleLieuChange} />}
            <div>
            <label class="form-label mx-3 p-3">Date d'entée?</label>
            <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          </div>
        </div>
      }
      {
        type === "hop" && <div>
          <FormInput placeholder="Hopital" onChangeText={handleHopitalChange} />
          <FormInput placeholder="Service" onChangeText={handleServiceChange} />
          <label class="form-label mx-3 p-3">Date d'entée?</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          <div class="row mx-4">
      <label class="form-label mx-3">Mode d'entrée?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="0">
      <input  class="form-check-input" id="0" onChange={handleModeCB} type="radio" value="0" name="gender1" />Transfert inter-hopital
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="1">
      <input  class="form-check-input" id="1" onChange={handleModeCB} type="radio" value="1" name="gender1" />Transfert inter-service
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="2">
      <input  class="form-check-input" id="2" onChange={handleModeCB} type="radio" value="2" name="gender1" />Urgences
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="3">
      <input  class="form-check-input" id="3" onChange={handleModeCB} type="radio" value="3" name="gender1" />SAMU
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="4">
      <input  class="form-check-input" id="4" onChange={handleModeCB} type="radio" value="4" name="gender1" />D'un lieu d'isolement(Chez lui ou centre)
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="5">
      <input  class="form-check-input" id="5" onChange={handleModeCB} type="radio" value="5" name="gender1" />Autre
      </label>
      </div>
      </div>
      {modeCB === "Autre" && <FormInput placeholder="Précisier" onChangeText={handleModeChange} />}
        </div>
      }
      <form class="row justify-content-center">
      <FormButton title="Retour" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
      <FormButton title="Enregistrer" onPress={handleSubmit} />
      </form>
      </form>

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  current={5} class="col-md-6"/>
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
  loggedUser: state.medicalService.loggedUser,
  patientList: state.medicalService.patientList,

});
const mapActionToProps = {
  addAdmission: actions.addAdmission
};
export default connect(mapStateToProps, mapActionToProps)(Admission);
