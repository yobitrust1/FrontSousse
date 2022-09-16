import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../Form/FormInput";
import FormButton2 from "../Form/FormButton2";
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import './home.css';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Supprimer', {
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
const ATCDchir1 = (props) => {

  const [ATCD, setATCD] = useState("");


  var handleATCDChange = (text) => {
    setATCD(text)
  }


  var handleSubmit = (e) => {
    var values = {
      antecedent: "ATCDchir",
      atcd: ATCD
    }
    e.preventDefault();
    console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }

  var handleSubmit = () => {
    props.removepConfDiags(props.patientList["cin"])
  }
  var handleSubmit1 = () => {
    props.removepAdmissions(props.patientList["cin"])
  }
  var handleSubmit2 = () => {
    props.removepCaracCliniques(props.patientList["cin"])
  }
  var handleSubmit3 = () => {
    props.removepExamenCli(props.patientList["cin"])
  }

  var handleSubmit4 = () => {
    props.removepExamRadio_ParaCli(props.patientList["cin"])
  }
  var handleSubmit5 = () => {
    props.removepExamBio(props.patientList["cin"])
  }
  var handleSubmit6 = () => {
    props.removepTraitement(props.patientList["cin"])
  }
  var handleSubmit7 = () => {
    props.removepExpoRisque(props.patientList["cin"])
  }
  var handleSubmit8 = () => {
    props.removepEvoluationQuo(props.patientList["cin"])
  }
  var handleSubmit9 = () => {
    props.removepEvaluationFinale(props.patientList["cin"])
  }


  return (
    <section className="landing-background4">
    <div class=" d-flex align-items-center m-4 ">
    <Toaster />
<MDBContainer  >
      <MDBRow>
        <MDBCol md="9">
          <MDBCard>
          <form>
          <div class="row justify-content-center">
          <FormButton2 title="Confirmation diagnostique" onPress={() => { props.navigation.navigate("ConfirmationDiag") }} />
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit(); notify();}} /></div>
          <div class="row justify-content-center">
          <FormButton2 title="Admission" onPress={() => { props.navigation.navigate("Admission") }} />
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit1(); notify();}} /></div>
          <div class="row justify-content-center">
          <FormButton2 title="Caractéristiques cliniques" onPress={() => { props.navigation.navigate("CaracCliniques") }} />
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit2(); notify();}} /></div>
          <div class="row justify-content-center">
          <FormButton2 title="Examens cliniques" onPress={() => { props.navigation.navigate("ExamenCliniques") }} />
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit3(); notify();}} /></div>
          <div class="row justify-content-center">
          <FormButton2 title="Examens radiologiques et para-cliniques" onPress={() => props.navigation.navigate("ExamenRadioParaCli")} />
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit4(); notify();}} /></div>
          <div class="row justify-content-center">
          <FormButton2 title="Examens biologiques" onPress={() => props.navigation.navigate("ExamBio")} />
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit5(); notify();}} /></div>
          <div class="row justify-content-center">
          <FormButton2 title="Traitement" onPress={()=>props.navigation.navigate("Traitement")}/>
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit6(); notify();}} /></div>
          <div class="row justify-content-center">
          <FormButton2 title="Exposition" onPress={()=>props.navigation.navigate("Exposition")}/>
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit7(); notify();}} /></div>
          <div class="row justify-content-center">
          <FormButton2 title="Evolution"  onPress={()=>props.navigation.navigate("Evolution")}/>
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit8(); notify();}} /></div>
          <div class="row justify-content-center">
          <FormButton2 title="Evaluation finale" onPress={() => props.navigation.navigate("EvaluationFinale")} />
          <FormButton2 title="Supprimer" i="col-sm-2 fas fa-trash-alt" onPress={() => { handleSubmit9(); notify();}} /></div>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("PatientDetails") }} />
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

  removepConfDiags: actions.removepConfDiags,
  removepExamBio: actions.removepExamBio,
  removepCaracCliniques: actions.removepCaracCliniques,
  removepAdmissions: actions. removepAdmissions,
  removepExamenCli: actions. removepExamenCli,
  removepExamRadio_ParaCli: actions. removepExamRadio_ParaCli,
  removepEvaluationFinale: actions. removepEvaluationFinale,
  removepTraitement: actions. removepTraitement,
  removepEvoluationQuo: actions. removepEvoluationQuo,
  removepExpoRisque:actions.  removepExpoRisque};

export default connect(mapStateToProps, mapActionToProps)(ATCDchir1);
