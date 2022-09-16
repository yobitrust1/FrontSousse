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
const Json8 = (props) => {
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
      const test =props.patientList.examBio;
      console.log("test");
      
      return (
<div> 
  <h2 class="font-weight-bold text-center p-5 text-primary">examBio</h2>
    <div>
    {test!=null&&
    Object.keys(test).map((setNom, key) => (
      <div> 
        <h1>{setNom}</h1>
      <div >
        {Object.keys(test[setNom]).map((key, i) => (
          <div> 
            {Boolean(test[setNom][key])  == true  && 
              <div>{Object.keys(test[setNom][key]).length!==0&&
                <div class="row"> 
                  <div class="col-8">
                    <div class="card">
                      <div class="card-body">
                        <div >
                          <div class="align-self-center">
                            <i class="fab fa-buffer text-info fa-3x"></i>
                          </div>
                          <SplineChart data={test[setNom][key]} y={key.slice(0, -1)}  ></SplineChart>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>} 
              </div>}
          </div>
                
        ))
      }

    </div> 
  </div>
    
        ))
}
  </div>
              <div class="row justify-content-center">
              <MDBBtn type="button" gradient="blue" rounded className="btn px-md-5 z-depth-1a"onClick={() => props.navigation.navigate("Json7")}><h3>Retour</h3></MDBBtn>
              <MDBBtn type="button" gradient="blue" rounded className="btn px-md-5 z-depth-1a"onClick={() => props.navigation.navigate("Json9")}><h3>Suivant</h3></MDBBtn>
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
  export default connect(mapStateToProps, mapActionToProps)(Json8);
