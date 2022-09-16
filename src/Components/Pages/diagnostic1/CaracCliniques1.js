import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from '../../Form/FormInput';
import FormInput5 from '../../Form/FormInput5';
import FormButton from '../../Form/FormButton';
import FormButton2 from '../../Form/FormButton2';
import CaracCls from "../../Form/CaracCls";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
import toast, { Toaster } from 'react-hot-toast';
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



const CaracCliniques = (props) => {

    const [sym, setSym] = useState(true)
    const [dateD, setDateD] = useState()
    const [dateF, setDateF] = useState()
    const [temperature, setTemperature] = useState()
    const [typeT, settypeT] = useState("Séche")
    const [selle, setSelle] = useState()
    const [autre, setAutre] = useState()
    const [nbEpisodes, setNbEpisodes] = useState()

    //carac
    const [fievre, setFievre] = useState(false)
    const [toux, setToux] = useState(false)
    const [cepah, setCeph] = useState(false)
    const [asth, setAsth] = useState(false)
    const [mya, setMya] = useState(false)
    const [ody, setOdy] = useState(false)
    const [rhi, setRhi] = useState(false)
    const [ano, setAno] = useState(false)
    const [agu, setAgu] = useState(false)
    const [dia, setDia] = useState(false)
    const [nau, setNau] = useState(false)
    const [eru, setEru] = useState(false)
    const [eng, setEng] = useState(false)
    const [dou, setDou] = useState(false)
    const [gen, setGen] = useState(false)
    const [ess, setEss] = useState(false)
    const [aut, setAut] = useState(false)


    const [test, setTest] = useState(false)

    var handleTemperatureChange = (text) => {
        if (text < 32 || text > 43)
            setTest(false)
        else setTest(true)
        setTemperature(text)
    }
    var handletypeT = (data) => {
            settypeT(data.target.value)
    }
    var handledateD = (data) => {
        setDateD(data.target.value)
           }
           var handledateF = (data) => {
            setDateF(data.target.value)
               }
           
    var handleSelle = (text) => {
        setSelle(text)
    }
    var handleAutre = (text) => {
        setAutre(text)
    }
    var handleNbEpisodes = (text) => {
        setNbEpisodes(text)
    }
    var handleSymChange = (data) => {
    if (data.target.value==="Oui")
        setSym(true)
    else setSym(false)
}
    var handleSubmitCarac = (item) => {
        if (test === false && item === "Fievre")
            return;
        var values = {
            type: item,
            typeT: typeT,
            temperature: temperature,
            selle: selle,
            nbEpisodes: nbEpisodes,
            autre: autre,
            dateD: dateD,
            dateF: dateF,
            sym: sym

        }
        console.log(values)
        props.addCaracCliniques(props.patientList["cin"], values)

    }
    //functions
    return (
        <div className="landing-background9">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
        <MDBContainer  >
              <MDBRow>
                <MDBCol >
                  <MDBCard style={{backgroundColor:"#c9cecb"}}>
                  <div>
                  <h2 class="font-weight-bold text-center p-5 text-primary">Caractéristiques cliniques du cas</h2>
                  <div class="row mx-4">
      <label class="form-label mx-3">Symptomatique ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Oui">
      <input  class="form-check-input" id="Oui" onChange={handleSymChange} type="radio" value="Oui" name="gender" />Oui
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Non">
      <input  class="form-check-input" id="Non" onChange={handleSymChange} type="radio" value="Non" name="gender" />Non
      </label>
      </div>
      </div>
      {
                sym === true &&
                <div>

                    <FormButton2 title="Fièvre" onPress={() => setFievre(!fievre)}>
                        <Text >Fièvre</Text>
                    </FormButton2>
                    {
                        fievre === true && <div>
                            <label class="form-label mx-4">{test === false && "La temperature doit etre entre 36 et 43 °C"}</label>
                            <FormInput5 placeholder="Si mesuré" min={33}   max={44}  onChangeText={handleTemperatureChange} />
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={handleSubmitCarac("Fievre")} />
                        </div>
                    }
                    <FormButton2  title="Toux" onPress={() => setToux(!toux)} />
                    {
                        toux === true && <div >
                        <div class="row mx-4">
                        <label class="form-label mx-3">Equilibré?</label>
                        <div class="form-check mx-1">
                        <label class="form-check-label" for="Séche">
                        <input  class="form-check-input" id="Séche" onChange={handletypeT} type="radio" value="Séche" name="gender1" />Séche
                        </label>
                        </div>
                        <div class="form-check mx-1">
                        <label class="form-check-label" for="Productive">
                        <input  class="form-check-input" id="Productive" onChange={handletypeT} type="radio" value="Productive" name="gender1" />Productive
                        </label>
                        </div>
                        </div>
                        <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Toux")} />
                        </div>
                    }
                    <FormButton2  title="Cépahlées" onPress={() => setCeph(!cepah)}/>
                    {
                        cepah === true && <div >
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Cephalees")} />
                        </div>
                    }
                    <FormButton2  title="Asthénie/fatigue" onPress={() => setAsth(!asth)}/>
                    {
                        asth === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("AshthFat")} />
                        </div>
                    }
                    <FormButton2 title="Myalgies/courabatures" onPress={() => setMya(!mya)}/>
                    {
                        mya === true && <div >
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("MyalCourba")} />
                        </div>
                    }
                    <FormButton2  title="Odynophagie" onPress={() => setOdy(!ody)}/>
                    {
                        ody === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={handleSubmitCarac("Odynophagie")} />
                        </div>
                    }
                    <FormButton2 title="Rhinorrhée/Congestion nasale" onPress={() => setRhi(!rhi)}/>
                    {
                        rhi === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("RhinoCongNas")} />
                        </div>
                    }
                    <FormButton2 title="Anosmie" onPress={() => setAno(!ano)}/>
                    {
                        ano === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={handleSubmitCarac("Anosmie")} />
                        </div>
                    }
                    <FormButton2 title="Agueusie" onPress={() => setAgu(!agu)}/>
                    {
                        agu === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={handleSubmitCarac("Agueusie")} />
                        </div>
                    }
                    <FormButton2 title="Diarrhée" onPress={() => setDia(!dia)}/>
                    {
                        dia === true && <div>
                            <FormInput5 placeholder="Nb selles/jour" onChangeText={handleSelle} maxLength={Number("2")} min={0}   max={100}  />
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={handleSubmitCarac("Diarrhee")} />
                        </div>
                    }
                    <FormButton2 title="Nausée/voumissement" onPress={() => setNau(!nau)}/>
                    {
                        nau === true && <div>
                            <FormInput5 placeholder="Nb episodes/jour" onChangeText={handleNbEpisodes}  maxLength={Number("2")} min={0}   max={100} />
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("NauVoumi")} />
                        </div>
                    }

                    <FormButton2 title="ERuption cutanée" onPress={() => setEru(!eru)}/>
                    {
                        eru === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={handleSubmitCarac("ErruptionCu")} />
                        </div>
                    }
                    <FormButton2 title="Engelure" onPress={() => setEng(!eng)}/>
                    {
                        eng === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Engelure")} />
                        </div>
                    }
                    <FormButton2 title="Douleur thoracique" onPress={() => setDou(!dou)}/>
                    {
                        dou === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={handleSubmitCarac("DouleurThora")} />
                        </div>
                    }
                    <FormButton2 title="Génie respiratoire" onPress={() => setGen(!gen)}/>
                    {
                        gen === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("GeneRespi")} />
                        </div>
                    }
                    <FormButton2 title="Essoufflement" onPress={() => setEss(!ess)}/>
                    {
                        ess === true && <div>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Essouflement")} />
                        </div>
                    }
                    <FormButton2 title="Autres signes cliniques" onPress={() => setAut(!aut)}/>
                    {
                        aut === true && <div>
                            <FormInput placeholder="Préciser" onChangeText={handleAutre} />
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Autre")} />
                        </div>
                    }

                </div>
            }
                   <form class="row justify-content-center">
                   <FormButton title="Retour" onPress={() => { props.navigation.navigate("Admission1") }} />
                    {sym === false && <FormButton title="Enregistrer" onPress={() => { handleSubmitCarac(""); props.navigation.navigate("ExamenCliniques1") }} />}
                    <FormButton title="Suivant" onPress={() => { props.navigation.navigate("ExamenCliniques1") }} />
                   </form>
                   </div> 
                    
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </div>
            <Steps  current={6} class="col-md-6"/>  
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
    addCaracCliniques: actions.addCaracCliniques
};
export default connect(mapStateToProps, mapActionToProps)(CaracCliniques);
