import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import JSONViewer from 'react-json-viewer';
import Scroll from "react-scroll";
import {MDBBtn } from 'mdbreact';
import SplineChart from '../../Form/SplineChart';
var Element = Scroll.Element;
const Json3 = (props) => {
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
      const list = {
        "nom": "nom",
        "prenom": "prenomaaa",
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
      const sampleJSON = {
        "object": {
          "name": "Pluralsight",
          "number": 1,
          "address": "India",
          "website": "https://www.pluralsight.com/"
        }
      }
      const test =props.patientList.antecedentMedicaux;
      return (
        <div> 
 <SplineChart></SplineChart>
              </div>
      );
};

  const mapStateToProps = (state) => ({
      patientList: state.medicalService.patientList
  });
  const mapActionToProps = {
  };
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2193b0',
    },
  });
  export default connect(mapStateToProps, mapActionToProps)(Json3);
