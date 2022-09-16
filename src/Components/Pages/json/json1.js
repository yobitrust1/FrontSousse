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
var Element = Scroll.Element;
const Json1 = (props) => {
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
      
      const test =props.patientList.generalInformation;
      return (
        <div> 
  <h2 class="font-weight-bold text-center p-5 text-primary">Information general</h2>
<div class="row">
        <div class="col-xl-3 col-sm-6 col-12 mb-4 p-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div class="align-self-center">
                  <i class="fab fa-buffer text-info fa-3x"></i>
                </div>
                <div class="text-end">
                  <h3>Cin</h3>
                  <p class="mb-0">{test["cin"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-xl-3 col-sm-6 col-12 mb-4 p-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between px-md-1">
                <div class="align-self-center">
                  <i class="fab fa-buffer text-info fa-3x"></i>
                </div>
                <div class="text-end">
                  <h3>matricule</h3>
                  <p class="mb-0">{props.patientList["matricule"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  {
        Object.keys(test).map((key, i) => (
          <div class="col-xl-3 col-sm-6 col-12 mb-4 p-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                  <div class="align-self-center">
                    <i class="fab fa-buffer text-info fa-3x"></i>
                  </div>
                  <div class="text-end">
                    <h3 class="d-flex justify-content-between px-md-1">{key}</h3>
                    <p class="mb-0">{String(test[key])}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }

              </div> 
              <div class="row justify-content-center">
              <MDBBtn type="button" gradient="blue" rounded className="btn px-md-5 z-depth-1a"onClick={() => props.navigation.navigate("SearchPatient")}><h3>Retour</h3></MDBBtn>
              <MDBBtn type="button" gradient="blue" rounded className="btn px-md-5 z-depth-1a"onClick={() => props.navigation.navigate("Json1_2")}><h3>Suivant</h3></MDBBtn>
              </div>
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
  export default connect(mapStateToProps, mapActionToProps)(Json1);
