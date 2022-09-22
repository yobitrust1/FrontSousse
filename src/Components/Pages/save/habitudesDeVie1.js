import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import FormInput from '../../Form/FormInput';
import FormInput5 from '../../Form/FormInput5';
import FormInput3 from '../../Form/FormInput3';
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

const HabitudesDeVie1 = (props) => {
    useEffect(() => {
    })
    const [tabagisme, setTabagisme] = useState(false)
    const [nbCigarettes, setNbCigarettes] = useState(0)
    const [freqChicha, setFreqChicha] = useState(0)
    const [drogue, setDrogue] = useState(false)
    const [alcool, setAlcool] = useState(false)
    const [gs, setGs] = useState(0)
    const [poids, setPoids] = useState(0)
    const [taille, setTaille] = useState(0)


    var handleAlcoolChange = (data) => {
      if (data.target.value==="Oui")
        setAlcool(true)
      if (data.target.value==="Non")
        setAlcool(false)
    }
    var handleDrogueChange = (data) => {
      if (data.target.value==="Oui")
        setDrogue(true)
      if (data.target.value==="Non")
        setDrogue(false)
    }
    var handleTabagismeChange = (data) => {
      if (data.target.value==="Oui")
        setTabagisme(true)
      if (data.target.value==="Non")
        setTabagisme(false)
    }
    var handleNbCigarettesChange = (data) => {
        setNbCigarettes(data)
    }
    var handleFreqChichaChange = (data) => {
        setFreqChicha(data)
    }
    var handleGsChange = (data) => {
        setGs(data)
    }
    var handlePoidsChange = (data) => {
        setPoids(data)
    }
    var handleTailleChange = (data) => {
        setTaille(data)
    }
    var handleSubmit = (e) => {
        var values = {
            poids: poids,
            taille: taille,
            gs: gs,
            alcool: alcool,
            drogue: drogue,
            nbCigarettes: nbCigarettes,
            freqChicha: freqChicha
        }
        console.log(values)
        e.preventDefault();
        props.habitudesDeViePatient(props.patientList["cin"], values)
        props.navigation.navigate("ConfirmationDiag1")
    }

    return (
      <div className="landing-background7">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
        <MDBContainer>
              <MDBRow>
                <MDBCol >
                  <MDBCard style={{backgroundColor:"#c9cecb"}}>
                  <form>
                  <h2 class="font-weight-bold text-center p-5 text-primary">Habitudes De Vie</h2>
                  <label class="form-label mx-4">Tabagisme ?</label>
                     <div class="row mx-4">
                    <InputRd  id="1425" name1="Non" onChange={handleTabagismeChange} type="radio" value="Non" name="gender1" />
                    <InputRd  id="2152" name1="Oui" onChange={handleTabagismeChange} type="radio" value="Oui" name="gender1" />
                    </div>
                    <div>
                    {tabagisme == true && (
                  <div>

                            <FormInput5 placeholder="Nombre de cigarettes/jour"
                                min={0}   
                                max={300}
                                onChangeText={handleNbCigarettesChange}
                            />


                            <FormInput5 placeholder="Frequence de Chicha/semaine"
                                min={0}   max={10} 
                                onChangeText={handleFreqChichaChange}
                            />
                        </div>

                    )}
                    </div>
                    <label class="form-label mx-4">Drogues/cannabis ?</label>
                     <div class="row mx-4">
                    <InputRd  id="3255" name1="Non" onChange={handleDrogueChange} type="radio" value="Non" name="gender2" />
                    <InputRd  id="42456" name1="Oui" onChange={handleDrogueChange} type="radio" value="Oui" name="gender2" />
                    </div>
                    <label class="form-label mx-4">Alcool ?</label>
                     <div class="row mx-4">
                    <InputRd  id="45525" name1="Non" onChange={handleAlcoolChange} type="radio" value="Non" name="gender3" />
                    <InputRd  id="12556" name1="Oui" onChange={handleAlcoolChange} type="radio" value="Oui" name="gender3" />
                    </div>
                    
                    <FormInput5 placeholder="Poids"
                                min={0}   
                                max={500}
                                onChangeText={handlePoidsChange}
                            />
                    <FormInput5 placeholder="Taille (cm)"
                                min={0}   
                                max={2000}
                                onChangeText={handleTailleChange}
                            />
                    <FormInput5 placeholder="GS"
                                min={0}   
                                max={1000}
                                onChangeText={handleGsChange}
                            />
               
                    <form class="row justify-content-center">
                    <FormButton title="Annuler" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux1") }} />
                    <FormButton title="Enregistrer" onPress={handleSubmit} />
                    <FormButton title="Suivant" onPress={() => { props.navigation.navigate("ConfirmationDiag1") }} />
                    </form>
                   </form>

                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </div>
            <Steps current={3} class="col-md-6"/>
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
    patientList: state.medicalService.patientList
});
const mapActionToProps = {
    habitudesDeViePatient: actions.habitudesDeViePatient

};

export default connect(mapStateToProps, mapActionToProps)(HabitudesDeVie1);
