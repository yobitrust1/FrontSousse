import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormInput from "../../Form/FormInput";
import FormInput5 from "../../Form/FormInput5";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormCheckBox from "../../Form/CheckBox";
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import { divide } from 'lodash';
import InputRd from '../../Form/inputrd';

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





const ExamenRadioParaCli1 = (props) => {

  const [type, setType] = useState("Thorax")
  const [datePr, setDatePr] = useState()
  const [result, setResult] = useState("Normale")
  const [espaceQT, setEspaceQT] = useState()
  const [aspect, setAspect] = useState()
  const [nbQua, setNbQua] = useState()

  var handleCheckBoxChange = (newValue, text) => {
    if (newValue === true) setResult(result + text + " ")
    else { setResult(result.replace(text + " ", "")) }

  }


  var handleResultChange = (data) => {
     setResult(data.target.value) }
  var handleTypeChange = (data) => {
    if (data.target.value==="0") {
      setType("Thorax")
      setDatePr()
      setResult("Normale")
    }

    if (data.target.value==="1") {
      setType("TdmTho")
      setDatePr()
      setResult("")
    }

    if (data.target.value==="2") {
      setType("ECG")
      setDatePr()
      setResult("")
    }


  }
  var handleTypeSdate = (data) => {
    setDatePr(data.target.value)
    }
  var handleSubmit = (e) => {
    e.preventDefault()
    var values = {
      type: type,
      datePr: datePr,
      result: result,
      espaceQT: espaceQT,
      aspect: aspect,
      nbQua: nbQua,
      datepr: datePr
    }
    props.addExamRadioParaCli(props.patientList["cin"], values)
    props.navigation.navigate("DiagnosticDetails")
    console.log(values)

  }


  return (
    <div className="landing-background17">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer  >
      <MDBRow>
        <MDBCol >
          <MDBCard style={{backgroundColor:"#c9cecb"}}>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Examens radiologiques et para-cliniques</h2>
          <div class="row mx-4">
          <label class="form-label mx-3">Ajouter un examen?</label>
          <InputRd  id="145" name1="Radio Thorax"  onChange={handleTypeChange} type="radio" value="0" name="gender" />
          <InputRd  id="2425" name1="TDM thoracique"  onChange={handleTypeChange} type="radio" value="1" name="gender" />
          <InputRd  id="3425" name1="ECG"  onChange={handleTypeChange} type="radio" value="2" name="gender" />
          </div>
          <label class="form-label mx-5 p-3">Date</label>
          <input class="border border-primary mx-5" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          {
        type === "Thorax" && <div>
          <div class="row mx-4">
          <label class="form-label mx-3">Radio Thorax</label>
        <InputRd  id="4554" name1="Normale"  onChange={handleResultChange} type="radio" value="Normale" name="gender1" />
        <InputRd  id="5425" name1="Opacité alvéolaire"  onChange={handleResultChange} type="radio" value="Opacité alvéolaire" name="gender1" />
        <InputRd  id="6145" name1="Opacité interstitielle"  onChange={handleResultChange} type="radio" value="Opacité interstitielle" name="gender1" />
        </div>
          <FormInput5 placeholder="Nb de quadrants atteints" min={0}   max={1000}  onChangeText={setNbQua} />
        </div>
      }
      {
        type === "TdmTho" && <div>
          <label class="form-label mx-4">TDM thoracique</label>
            <div>
            <FormCheckBox text="Normale" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte alvéolaire" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte interstitielle" value={false}  onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte bilatérale" value={false}  onPress={handleCheckBoxChange} />
            <FormCheckBox text="Atteinte unilatérale" value={false} onPress={handleCheckBoxChange} />
            </div>
            <FormInput placeholder="Aspect en verre dépoli"  onChangeText={setAspect} />
          </div>
      }
      {
        type === "ECG" && <div>
          <label class="form-label mx-4">ECG</label>
            <div>
            <FormCheckBox text="Normale" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Troubles de la repolarisation" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Troubles du rythme" value={false} onPress={handleCheckBoxChange} />
            <FormCheckBox text="Bloc auriculo vantriculaire" value={false} onPress={handleCheckBoxChange} />
            </div>
            <FormInput5 placeholder="Espace Qt"   min={0}   max={1000000000}   onChangeText={setEspaceQT} />
        </div>
      }
      <form class="row justify-content-center">
      <FormButton title="Retour" onPress={() => props.navigation.navigate("DiagnosticDetails")} />
      <FormButton title="Enregistrer" onPress={handleSubmit} />
      </form>
           </form>

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={8} class="col-md-6"/>
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
  addExamRadioParaCli: actions.addExamRadioParaCli
};
export default connect(mapStateToProps, mapActionToProps)(ExamenRadioParaCli1);
