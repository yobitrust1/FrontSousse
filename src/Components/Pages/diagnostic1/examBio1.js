import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormInput5 from "../../Form/FormInput5";
import InputRd from '../../Form/inputrd';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { div, Text, StyleSheet } from 'react-native';
import { DatePicker } from '@assenti/rui-components';
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



const ExamBio1 = (props) => {
  const [type, setType] = useState("NFS")
  const [datePr, setDatePr] = useState();
  //NFS
  const [gb, setGb] = useState()
  const [lym, setLym] = useState()
  const [pla, setPla] = useState()
  const [hb, setHb] = useState()
  const [ht, setHt] = useState()
  //BIlan renal
  const [creat, setCreat] = useState()
  const [clairCreat, setClairCreat] = useState()
  const [uree, setUree] = useState()

  //Bilan hepatique
  const [biliru, setBiliru] = useState()
  const [biliru1, setBiliru1] = useState()
  const [alat, setAlat] = useState()
  const [asat, setAsat] = useState()
  const [tp, setTp] = useState()
  const [facteurV, setFacteurV] = useState()
  const [fibrinogene, setFibrinogene] = useState()
  const [cpk_mb, setCpk_mb] = useState()
  const [troponine, setTroponine] = useState()
  const [pro_bnp, setPro_bnp] = useState()
  const [albumi, setAlbumi] = useState()
  const [d_dimère, setD_dimère] = useState()
  const [ldh, setLdh] = useState()
  const [crp, setCrp] = useState()
  const [procal, setProcal] = useState()
  const [ferri, setFerri] = useState()
  //GDSA
  const [ph, setPh] = useState()
  const [pao2, setPao2] = useState()
  const [paco2, setPaco2] = useState()
  const [hco3_, setHco3_] = useState()
  const [sao2, setSao2] = useState()

  //ionogramme
  const [nak, setNak] = useState()
  const [nak1, setNak1] = useState()
  const [nakUr, setNakUr] = useState()
  const [nakUr1, setNakUr1] = useState()
  //Autre
  const [fileName, setFileName] = useState()
  const [file, setFile] = useState()
  // controle de saisie
  const [test, setTest] = useState()
  var handleTypeSdate5 = (data) => {
    setDatePr(data.target.value)
       }

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
                   var handleTypeSdate4 = (data) => {
                    setDatePr(data.target.value)
                       }
  var handleSubmit = () => {

    var values = {
      datePr: datePr,
      type: type,
      gb: gb,
      lym: lym,
      pla: pla,
      hb: hb,
      ht: ht,
      creat: creat,
      clairCreat: clairCreat,
      uree: uree,
      ph: ph,
      paco2: paco2,
      pao2: pao2,
      hco3_: hco3_,
      sao2: sao2,
      nak: nak,
      nak1: nak1,
      nakUr: nakUr,
      nakUr1: nakUr1,
      biliru: biliru,
      biliru1: biliru1,
      alat: alat,
      asat: asat,
      tp: tp,
      facteurV: facteurV,
      fibrinogene: fibrinogene,
      cpk_mb: cpk_mb,
      troponine: troponine,
      pro_bnp: pro_bnp,
      albumi: albumi,
      d_dimère: d_dimère,
      ldh: ldh,
      crp: crp,
      procal: procal,
      ferri: ferri


    }
    //console.log(values)
    props.addExamBio(props.patientList["cin"], values)
    props.navigation.navigate("ExamBio1")

  }



  var handleTypeChange = (data) => {
      setType(data.target.value)
    setDatePr()

  }

  return (
<div className="landing-background13">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer  >
      <MDBRow>
        <MDBCol >
          <MDBCard style={{backgroundColor:"#c9cecb"}}>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Examens Biologiques</h2>
          <div class="row mx-4">
      <InputRd  onChange={handleTypeChange} type="radio" value="NFS" name="gender"id="4251" name1="NFS" />
      <InputRd  onChange={handleTypeChange} type="radio" value="BilanRenal" name="gender"id="426" name1="Bilan renal" />
      <InputRd  onChange={handleTypeChange} type="radio" value="BilanHepa" name="gender"id="4523" name1="Bilan hepatique" />
      <InputRd  onChange={handleTypeChange} type="radio" value="GDSA" name="gender"id="4425" name1="GDSA" />
      <InputRd  onChange={handleTypeChange} type="radio" value="Ionogra" name="gender"id="2455" name1="Ionogramme" />
      <InputRd  onChange={handleTypeChange} type="radio" value="Autre" name="gender" id="6566" name1="Autres"/>
      </div>
      <label class="form-label mx-4">{test !== undefined && test}</label>
      {
        type === "NFS" && <div>
        <label class="form-label mx-4">Date de prise de l'examen</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate5}/>
          <FormInput5 placeholder="GB" onChangeText={setGb}  min={0}   max={10000}   />
          <FormInput5 placeholder="Lymphocyte" onChangeText={setLym}   min={0}   max={1000}   />
          <FormInput5 placeholder="Plaquette" onChangeText={setPla}  min={0}   max={1000000}   />
          <FormInput5 placeholder="Hb" onChangeText={setHb}   min={0}   max={20}   />
          <FormInput5 placeholder="Ht" onChangeText={setHt}  min={0}   max={1000000000}   />
          <FormButton title="Enregitrer" onPress={handleSubmit}   min={0}   max={1000000000}   />

        </div>
      }
      {
        type === "BilanRenal" && <div>
        <label class="form-label mx-4">Date de prise de l'examen</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          <FormInput5 placeholder="Creat" onChangeText={setCreat}   min={0}   max={10000}   />
          <FormInput5 placeholder="Clairance de la creat" onChangeText={setClairCreat}   min={0}   max={30}   />
          <FormInput5 placeholder="Urée" onChangeText={setUree}   min={0}   max={580}   />
          <FormButton title="Enregitrer" onPress={handleSubmit} />
        </div>
      }
      {
        type === "GDSA" && <div>
        <label class="form-label mx-4">Date de prise de l'examen</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
          <FormInput5 placeholder="pH" onChangeText={setPh}   min={0}   max={15}   />
          <FormInput5 placeholder="PaO2" onChangeText={setPao2}   min={0}   max={100}   />
          <FormInput5 placeholder="PaCO2" onChangeText={setPaco2}   min={0}   max={3}   />
          <FormInput5 placeholder="HCO3-" onChangeText={setHco3_}   min={0}   max={26}   />
          <FormInput5 placeholder="SaO2" onChangeText={setSao2}   min={0}   max={100}   />
          <FormButton title="Enregitrer" onPress={handleSubmit} />

        </div>
      }
      {
        type === "BilanHepa" && <div>
        <label class="form-label mx-4">Date de prise de l'examen</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate2}/>

          <FormInput5 placeholder="Bilirubine (T)" onChangeText={setBiliru}   min={0}   max={8}   />
          <FormInput5 placeholder="Bilirubine (D)" onChangeText={setBiliru1}   min={0}   max={8}   />
          <FormInput5 placeholder="ALAT" onChangeText={setAlat}   min={0}   max={41}   />
          <FormInput5 placeholder="ASAT" onChangeText={setAsat}   min={0}   max={40}   />
          <FormInput5 placeholder="TP" onChangeText={setTp}   min={0}   max={200}   />
          <FormInput5 placeholder="Facteur V" onChangeText={setFacteurV}   min={0}   max={1000000000}   />
          <FormInput5 placeholder="Fibrinogene" onChangeText={setFibrinogene}   min={0}   max={10}   />
          <FormInput5 placeholder="CPK-MB" onChangeText={setCpk_mb}   min={0}   max={1000000000}   />
          <FormInput5 placeholder="Troponine" onChangeText={setTroponine}   min={0}   max={100}   />
          <FormInput5 placeholder="Pro BNP" onChangeText={setPro_bnp}   min={0}   max={2000}   />
          <FormInput5 placeholder="ALbuminémie" onChangeText={setAlbumi}   min={0}   max={60}   />
          <FormInput5 placeholder="D-Dimère" onChangeText={setD_dimère}   min={0}   max={5000}   />
          <FormInput5 placeholder="LDH" onChangeText={setLdh}   min={0}   max={1000}   />
          <FormInput5 placeholder="CRP" onChangeText={setCrp}   min={0}   max={10}   />
          <FormInput5 placeholder="Procalcitonine" onChangeText={setProcal}   min={0}   max={10}   />
          <FormInput5 placeholder="FErritinemie" onChangeText={setFerri}   min={0}   max={600}   />
          <FormButton title="Enregitrer" onPress={handleSubmit} />


        </div>
      }
      {
        type === "Ionogra" && <div>
        <label class="form-label mx-4">Date de prise de l'examen</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate3}/>

          <FormInput5 placeholder="Na+" onChangeText={setNak}   min={0}   max={1000000000}   />
          <FormInput5 placeholder="K+" onChangeText={setNak1}   min={0}   max={1000000000}   />
          <FormInput5 placeholder="Na+ urinaire" onChangeText={setNakUr}   min={0}   max={1000000000}   />
          <FormInput5 placeholder="K+ urinaire" onChangeText={setNakUr1}   min={0}   max={1000000000}   />
          <FormButton title="Enregitrer" onPress={handleSubmit} />

        </div>
      }
      {
        type === "Autre" && <div>
        <label class="form-label mx-4">Date de prise de l'examen</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate4}/>
          <FormButton title="Enregitrer" onPress={handleSubmit} />
        </div>
      }
      <form class="row justify-content-center">
      <FormButton title="Retour" onPress={() => props.navigation.navigate("ExamenRadioParaCli1")} />
      <FormButton title="Suivant" onPress={() => props.navigation.navigate("Traitement1")} />
      </form>
           </form>

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={9} class="col-md-6"/>
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
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout,
  addExamBio: actions.addExamBio
};
export default connect(mapStateToProps, mapActionToProps)(ExamBio1);
