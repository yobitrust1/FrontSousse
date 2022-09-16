import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text } from 'react-native';
//import 'localstorage-polyfill';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
const AntecedentsList = (props) => {
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
  useEffect(() => {
    props.getAllAntecedensMedicaux(props.patientList["cin"])
  }, [])

  const list = {
    "grossesse": "Grossesse",
    "PathResChronique": "Pathologie respiratoire chronique",
    "Cardiopathies": "Cardiopathies",
    "TrRythCardiaque": "Trouble de rythme cardique",
    "HTA": "HTA",
    "Diabete": "Diabète",
    "InsRenaleChro": "Inssufisance rénale chronique",
    "Retinopathie": "Retinopathie",
    "ATCDchir": "ATCD chirurgicaux",
    "PriseAINS": "Prise récente d'AINS",
    "Immunosuppreseur": "Traitement immunosuppreseur",
    "AutresATCD": "Autres ATCD"
  }

  const listPath = {
    "grossesse": "Grossesse",
    "PathResChronique": "PathRespChronique",
    "Cardiopathies": "Cardiopathies",
    "TrRythCardiaque": "TrRythCardiaque",
    "HTA": "HTA",
    "Diabete": "Diabete",
    "InsRenaleChro": "InsRenaleChro",
    "Retinopathie": "Retinopathie",
    "ATCDchir": "ATCDchir",
    "PriseAINS": "PriseAINS",
    "Immunosuppreseur": "Immunosuppreseur",
    "AutresATCD": "AutresATCD",
    "AVC": "AVC"

  }

  var handleModifier = (item) => {
    props.navigation.navigate(listPath[item])
  }

  var handleRemove = (item) => {
    var values = {
      "antecedent": item
    }
    props.removeAntecedentMedical(props.patientList["cin"], values)
  }



  return (

    <>
    <section className="landing-background">
<div class=" d-flex align-items-center m-4 " >
<MDBContainer  style={{height: "350px"}}>
      <MDBRow>
        <MDBCol md="6">
<div >
<h2 class="font-weight-bold text-center p-5 text-primary">Antécedents Médicaux:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</h2>
<View >
          {props.antecedents.map((item, index) => (<View key={item} >

            <Text >{list[item]}</Text>
<button onClik={() => handleModifier(item)}>Modifier ?</button>
<button onClik={() => { handleRemove(item) }}>supp ?</button>

          </View>
          ))}

        </View>

</div>
</MDBCol>
      </MDBRow>
    </MDBContainer>
</div>
    </section>
 </>

  );
};


const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList,
  antecedents: state.medicalService.antecedentList,
});
const mapActionToProps = {
  getAllAntecedensMedicaux: actions.getAllAntecedentsMedicaux,
  removeAntecedentMedical: actions.removeAntecedentMedical
};

export default connect(mapStateToProps, mapActionToProps)(AntecedentsList);
