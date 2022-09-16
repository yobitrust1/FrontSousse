import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../../Form/FormInput';
import FormInput2 from '../../Form/FormInput2';
import '@assenti/rui-components/css/index.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
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



const EvaluationFinale = (props) => {
  const [dateSor, setDateSor] = useState()
  const [deces, setDeces] = useState(false)
  const [dateDispSig, setDateDispSig] = useState()
  const [causesDir, setCausesDir] = useState()
  const [causesIndir, setCausesIndir] = useState()
  var handleTypeSdate = (data) => {
    setDateSor(data.target.value)
       }
       var handleTypeSdate = (data) => {
        setDateDispSig(data.target.value)
           }
  var handleDecesChange = (data) => {
    if (data.target.value==="non")
      setDeces(false)
    else setDeces(true)
  }
  var handleSubmit = (e) => {
    e.preventDefault()
    var values = {
      dateSor: dateSor,
      dateDispSig: dateDispSig,
      deces: deces,
      causesDir: causesDir,
      causesIndir: causesIndir,
    }
    //console.log(values)
    props.addEvaluationFinale(props.patientList["cin"], values)
    props.navigation.navigate("Dash2")
  }


  return (
    <div className="landing-background11">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer  >
      <MDBRow>
        <MDBCol >
          <MDBCard style={{backgroundColor:"#c9cecb"}}>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Evaluation finale</h2>
          <label class="form-label mx-4">Date de sortie?</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          <div class="row mx-4">
      <label class="form-label mx-3">Décès</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Oui44">
        <input type="radio" class="form-check-input" id="Oui44" name="optradio" value={true} onChange={handleDecesChange}/>Oui
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Non12">
        <input type="radio" class="form-check-input" id="Non12" name="optradio" value={false} onChange={handleDecesChange}/>Non
      </label>
      </div>
      </div>
      {
          deces === false &&<div>
          <label class="form-label mx-4">Date de disparition des signes</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          </div>
        }
        {
          deces === true && <div>
            <FormInput placeholder="Causes directes" onChangeText={setCausesDir} />
            <FormInput placeholder="Causes indirectes" onChangeText={setCausesIndir} />
          </div>
        }
        <form class="row justify-content-center">
        <FormButton title="Retour" onPress={() => { props.navigation.navigate("Evolution1") }} />
        <FormButton title="Enregistrer" onPress={handleSubmit} />
        <FormButton title="Suivant" onPress={() => { props.navigation.navigate("Dash2") }} />
        </form>
           </form>

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={12} class="col-md-6"/>
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
  login: actions.login,
  logout: actions.logout,
  addEvaluationFinale: actions.addEvaluationFinale
};
export default connect(mapStateToProps, mapActionToProps)(EvaluationFinale);
