import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import FormButton from "../../Form/FormButton";
import JSONViewer from 'react-json-viewer';
import '../home.css';
import Scroll from "react-scroll";
import { CSVLink} from "react-csv";
import  CsvDownload  from "react-json-to-csv";
var Element = Scroll.Element;
const Csv = (props) => {
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
        props.all()
      }, [])
      return (

        <div>


          <CSVLink data={props.patientList1}>Download me</CSVLink>
          <CsvDownload
    data={props.patientList1}
    filename="csv_data.csv"
    style={{ //pass other props, like styles
      boxShadow:"inset 0px 1px 0px 0px #e184f3",
      background:"linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
      backgroundColor:"#c123de",
      borderRadius:"6px",
      border:"1px solid #a511c0",
      display:"inline-block",
      cursor:"pointer","color":"#ffffff",
      fontSize:"15px",
      fontWeight:"bold",
      padding:"6px 24px",
      textDecoration:"none",
      textShadow:"0px 1px 0px #9b14b3"
      }}
  >
    CSV Data ✨
  </CsvDownload>
  <FormButton title="Retour" onPress={() => { props.navigation.navigate("HomeAdmin") }} />
              </div>
      );
};

  const mapStateToProps = (state) => ({
      patientList1: state.medicalService.patientList1
  });
  const mapActionToProps = {
    all: actions.allPatient
  };
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2193b0',
    },
  });
  export default connect(mapStateToProps, mapActionToProps)(Csv);
