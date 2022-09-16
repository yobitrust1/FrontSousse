import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";

import { connect } from "react-redux";
import { div, Text, StyleSheet } from 'react-native';

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

const ConfirmationDiag = (props) => {
  const [test, setTest] = useState("Pcr")
  const [datePr, setDatePr] = useState()
  const [type, setType] = useState("Nasopharyngé")
  const [resultat, setResultat] = useState("Positif")
  var handleTypeSdate = (data) => {
    setDatePr(data.target.value)


       }
       var handleTypeSdate1 = (data) => {
        setDatePr(data.target.value)


           }
           var handleTypeSdate2 = (data) => {
            setDatePr(data.target.value)


               }
               var handleTypeSdate3 = (data) => {
                setDatePr(data.target.value)


                   }
  var handleSubmit = (e) => {
    e.preventDefault();
    var values = {
      test: test,
      datePr: datePr,
      result: resultat,
      type: type
    }
    //console.log(values)
    props.addConfDiag(props.patientList["cin"], values)
    props.navigation.navigate("ConfirmationDiag1")
  }

  var handleTestChange = (data) => {
      setTest(data.target.value)
    setResultat("Positif")
    setDatePr()
  }
  var handleTypeChange = (data) => {
      setType(data.target.value)
  }

  var handleResulat1Change = (data) => {
      setResultat(data.target.value)
  }
  var handleResultatChange = (data) => {
      setResultat(data.target.value)

  }

  return (
    <div className="landing-background10">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer  >
      <MDBRow>
        <MDBCol >
          <MDBCard style={{backgroundColor:"#c9cecb"}}>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Confirmation diagnostique</h2>
          <label class="form-label mx-3">Niveau d'étude ?</label>
          <div class="row mx-4 p-3">
          <div class="form-check mx-1">
          <label class="form-check-label" for="Pcr">
          <input  class="form-check-input" id="Pcr" onChange={handleTestChange} type="radio" value="Pcr" name="gender" />PCR
          </label>
          </div>
          <div class="form-check mx-1">
          <label class="form-check-label" for="RapideAc">
          <input  class="form-check-input" id="RapideAc" onChange={handleTestChange} type="radio" value="RapideAc" name="gender" />Test rapide AC
          </label>
          </div>
          <div class="form-check mx-1">
          <label class="form-check-label" for="RapideAg">
          <input  class="form-check-input" id="RapideAg" onChange={handleTestChange} type="radio" value="RapideAg" name="gender" />Test rapide AG
          </label>
          </div>
          <div class="form-check mx-1">
          <label class="form-check-label" for="Serologie">
          <input  class="form-check-input" id="Serologie" onChange={handleTestChange} type="radio" value="Serologie" name="gender" />Sérologie
          </label>
          </div>
          </div>
          {test === "Pcr" && <div>
          <label class="form-label mx-4">Date de prise ?</label>
      <input class="border border-primary"  type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
        <div>
        <label class="form-label mx-3 p-3">Type ?</label>
        <div class="row mx-4 p-3">
        <div class="form-check mx-1">
        <label class="form-check-label" for="Nasopharyngé">
        <input  class="form-check-input" id="Nasopharyngé" onChange={handleTypeChange} type="radio" value="Nasopharyngé" name="gender1" />Nasopharyngé
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Aspiration trachéale">
        <input  class="form-check-input" id="Aspiration trachéale" onChange={handleTypeChange} type="radio" value="Aspiration trachéale" name="gender1" />Aspiration trachéale
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Sanguin">
        <input  class="form-check-input" id="Sanguin" onChange={handleTypeChange} type="radio" value="Sanguin" name="gender1" />Sanguin
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Selle ou pvt rectal">
        <input  class="form-check-input" id="Selle ou pvt rectal" onChange={handleTypeChange} type="radio" value="Selle ou pvt rectal" name="gender1" />Selle ou pvt rectal
        </label>
        </div>
        </div>
        </div>
        <label class="form-label mx-3 p-3">Resultat ?</label>
        <div class="row mx-4 p-3">
        <div class="form-check mx-1">
        <label class="form-check-label" for="Positif">
        <input  class="form-check-input" id="Positif" onChange={handleResulat1Change} type="radio" value="Positif" name="gender2" />Positif
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Negatif">
        <input  class="form-check-input" id="Negatif" onChange={handleResulat1Change} type="radio" value="Negatif" name="gender2" />Negatif
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Douteux">
        <input  class="form-check-input" id="Douteux" onChange={handleResulat1Change} type="radio" value="Douteux" name="gender2" />Douteux
        </label>
        </div>
        </div>
      </div> }
      {test === "RapideAc" && <div>
      <label class="form-label mx-4 p-4">Date de prise ?</label>
      <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
      <div class="row mx-4 p-3">
        <label class="form-label mx-3 p-3">Resultat ?</label>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Positif">
        <input  class="form-check-input" id="Positif" onChange={handleResulat1Change} type="radio" value="Positif" name="gender3" />Positif
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Negatif">
        <input  class="form-check-input" id="Negatif" onChange={handleResulat1Change} type="radio" value="Negatif" name="gender3" />Negatif
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="row">
        <input  class="form-check-input" id="row" onChange={handleResulat1Change} type="radio" value="row" name="gender3" />row
        </label>
        </div>
        </div>
      </div>
      }
      {test === "RapideAg" && <div>
      <label class="form-label mx-4">Date de prise ?</label>
      <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate2}/>
      <div class="row mx-4 p-3">
        <label class="form-label mx-3">Resultat ?</label>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Positif">
        <input  class="form-check-input" id="Positif" onChange={handleResultatChange} type="radio" value="Positif" name="gender4" />Positif
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Negatif">
        <input  class="form-check-input" id="Negatif" onChange={handleResultatChange} type="radio" value="Negatif" name="gender4" />Negatif
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="row">
        <input  class="form-check-input" id="row" onChange={handleResultatChange} type="radio" value="row" name="gender4" />row
        </label>
        </div>
        </div>
      </div>
      }
      {test === "Serologie" && <div>
      <label class="form-label mx-4">Date de prise ?</label>
      <input class="border border-primary"  type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate3}/>
      <div class="row mx-4 p-3">
        <label class="form-label mx-3">Resultat ?</label>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Positif">
        <input  class="form-check-input" id="Positif" onChange={handleResultatChange} type="radio" value="Positif" name="gender5" />Positif
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="Negatif">
        <input  class="form-check-input" id="Negatif" onChange={handleResultatChange} type="radio" value="Negatif" name="gender5" />Negatif
        </label>
        </div>
        <div class="form-check mx-1">
        <label class="form-check-label" for="row">
        <input  class="form-check-input" id="row" onChange={handleResultatChange} type="radio" value="row" name="gender5" />row
        </label>
        </div>
        </div>
      </div>
      }
      <form class="row justify-content-center">
      <FormButton title="Retour" onPress={() => { props.navigation.navigate("HabitudesDeVie1") }} />
      <FormButton title="Enregistrer" onPress={handleSubmit} />
      <FormButton title="Suivant" onPress={() => { props.navigation.navigate("Admission1") }} />
      </form>
           </form>

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  current={4} class="col-md-6"/>
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
  //login: actions.login,
  //logout:actions.logout
  addConfDiag: actions.addConfDiag
};
export default connect(mapStateToProps, mapActionToProps)(ConfirmationDiag);
