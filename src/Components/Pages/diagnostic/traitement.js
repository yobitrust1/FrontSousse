import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from '../../Form/FormInput';
import FormButton from '../../Form/FormButton';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { div, Text, StyleSheet } from 'react-native';
import '@assenti/rui-components/css/index.css';
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




const Traitement = (props) => {
  var handleTypeSdate = (data) => {
    setDateD(data.target.value)
       }
       var handleTypeSdate1 = (data) => {
        setDateF(data.target.value)
           }
  useEffect(() => {
    props.getTraitment(props.patientList["cin"], {
      trai: trai
    })
   if ( props.traitmentList !=null &&typeof(props.traitmentList)!=="string"&& props.traitmentList["dateD"] !== null &&   props.traitmentList["dateD"] !== undefined &&oper === "M") setDateD(props.traitmentList["dateD"].slice(0, 10))
    //else setDateD()
    //if (typeof(props.traitmentList)!=="string"&& props.traitmentList["dateF"] !== null && oper === "M") setDateF(props.traitmentList["dateF"].slice(0, 10))
    //else setDateF()
  })

  const [oldPactt, setOldPactt] = useState(true)
  const [pactt, setPactt] =  useState("Bras 1")
  const [type, setType] = useState("M")
  const [trai, setTrai] = useState("Lopinavir/ritonavir")
  const [oper, setOper] = useState("A")
  const [dateD, setDateD] = useState()
  const [dateF, setDateF] = useState()
  const [autreBox, setAutreBox] = useState(trai === "Autre")
  const [dosage, setDosage] =  useState()

  //formValidation
  const [validation, setValidation] = useState()



  var handlePacttChange = (data) => {
   setPactt(data.target.value)
  }


  var handleOperChange = (data) => {
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setOper(data[i].label[0]); setDateF(); setDateD(); }

      if (data[i].label[0]==="M" && typeof(props.traitmentList)!=="string"&& props.traitmentList["dosage"] !== null  && props.traitmentList["dosage"] !== undefined)
       {setDosage(props.traitmentList["dosage"])}

    }
  }
  var handleTypeChange = (data) => {
    /* var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setType(data[i].label.charAt(0)) ;  }

    }*/
    if (data.target.value==="1") {
      setType("M"); setTrai("Lopinavir/ritonavir"); setDateD(); setDateF()
    }
    if (data.target.value==="2") {
      setType("P"); setTrai("O2"); setDateD(); setDateF()
    }
    if (data.target.value==="3") {
      setType("A"); setTrai("Amoxicilline/Acide clavunique"); setDateD(); setDateF()
    }
  }

  var handlePacttChange = (data) => {
     setPactt(data.target.value)
  }
  var handleTraiChange = (data) => {
      setDateF()
      setDateD()
      setTrai(data.target.value);

        if (data.target.value === "Autre") { setAutreBox(true); setTrai() }
        else setAutreBox(false)
        props.getTraitment(props.patientList["cin"], {
          trai: trai
        })
      }



  //SubmitFunction
  var handleSUbmit = () => {
    var values = {
      dosage: dosage,
      dateD: dateD,
      dateF: dateF,
      trai: trai,
      pactt:pactt
    }
    console.log(values)
     if(trai ===undefined)
     { setValidation("Veuillez choisir un traitment") ;return;}
      if(dosage ===undefined)
      {setValidation("Veuillez precisier un dosage");return}
      if(dateD ===undefined)
     { setValidation("La date de debut de traitement est obligatoire");return}
     setValidation()

    props.addTraitment(props.patientList["cin"], values)
    props.navigation.navigate("DiagnosticDetails")

  }

  return (
<div style={{backgroundColor:"rgba(171, 235, 198)",backgroundsize: "cover"}}>
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer  >
      <MDBRow>
        <MDBCol >
          <MDBCard style={{backgroundColor:"#c9cecb"}}>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Traitement</h2>
          {validation !== undefined && <div>
      <label class="form-label mx-4">{validation}</label>
      <label class="form-label mx-4">Participation au projet PACTT ?</label>
      </div>}
      { (props.patientList["traitement"]["pactt"] !== null && props.patientList["traitement"]["pactt"] !== undefined&& oldPactt === true) && <div >
      <label class="form-label mx-4">{props.patientList["traitement"]["pactt"]}</label>
        <FormButton title="Modifier ?" onPress={() => setOldPactt(false)}/>
      </div>
          }

      {(props.patientList["traitement"]["pactt"] == null && props.patientList["traitement"]["pactt"] == undefined  || oldPactt === false) &&
      <div  >
      <div class="row mx-4 p-3">
    <InputRd  id="66461" name1="Bras 1" onChange={handlePacttChange} type="radio" value="PathRespChronique" name="gender" />
    <InputRd  id="24646" name1="Bras 2" onChange={handlePacttChange} type="radio" value="Cardiopathies" name="gender" />
    <InputRd  id="46463" name1="Non" onChange={handlePacttChange} type="radio" value="TrRythCardiaque" name="gender" />
    </div>
    </div>
  }

      <label class="form-label mx-4">Modifier ajouter les traitements</label>
      <div class=" mx-4 p-3">
    <InputRd  id="4344" name1="Molécules" onChange={handleTypeChange} type="radio" value="1" name="gender1" />
    <InputRd  id="53346" name1="Prise en charge standard" onChange={handleTypeChange} type="radio" value="2" name="gender1" />
    <InputRd  id="6333" name1="Antibiothérapie" onChange={handleTypeChange} type="radio" value="3" name="gender1" />
    </div>
        <label class="form-label mx-4">Lequel/Laquelle ?</label>
        {
          type === "M" &&
          <div class=" mx-4 p-3">
        <InputRd  id="7756" name1="Lopinavir/ritonavir" onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender2" />
        <InputRd  id="43438" name1="Chloroquine phosphate" onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender2" />
        <InputRd  id="434349" name1="Hydroxy-Chloroquine" onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender2" />
        <InputRd  id="434310" name1="Azithromycine" onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender2" />
        <InputRd  id="14341" name1="Remdesivir" onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender2" />
        <InputRd  id="134342" name1="Autre" onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender2" />
        </div>

        }

        {
          type === "P" &&
          <div class=" mx-4 p-3">
          <InputRd  id="16443" name1="O2" onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender3" />
          <InputRd  id="1444" name1="HFNC" onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" />
          <InputRd  id="144" name1="CPAP" onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender3" />
          <InputRd  id="416" name1="VNI" onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender3" />
          <InputRd  id="143437" name1="VMI" onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" />
          <InputRd  id="143438" name1="Paracétamol" onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender3" />
          <InputRd  id="14349" name1="Anti coaguant" onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender3" />
          <InputRd  id="24340" name1="H2O" onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender3" />
          <InputRd  id="2341" name1="ADO" onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" />
          <InputRd  id="24342" name1="Insulinothérapie" onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender3" />
          <InputRd  id="2643" name1="Nébulisation corticoides" onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" />
          <InputRd  id="24434" name1="Nébulisation bronchodilateurs" onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" />
          </div>
        }
        {
          type === "A" &&
          <div class=" mx-4 p-3">
          <InputRd  id="26345" name1="Amoxicilline/Acide clavunique" onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender4" />
          <InputRd  id="264647" name1="Cefotaxime" onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender4" />
          <InputRd  id="24747" name1="Ceftriaxone" onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender4" />
          <InputRd  id="28666" name1="Autre" onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender4" />
          </div>
        }
        {autreBox === true && <div >
          <FormInput placeholder="Autre traitement ..." onChangeText={setTrai} />
        </div>}
        <label class="form-label mx-4">Choisir l'opération ?</label>
        <div class=" mx-4 p-3">
        <InputRd  id="25369" name1="Amoxicilline/Acide clavunique" onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender5" />
        <InputRd  id="36760" name1="Cefotaxime" onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender5" />
        <InputRd  id="36761" name1="Ceftriaxone" onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender5" />
        <InputRd  id="381" name1="Autre" onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender5" />
        </div>
        <div class=" mx-4 p-3">
        <InputRd  id="362" name1="Ajouter Autre" onChange={handleOperChange} type="radio" value="PathRespChronique" name="gender6" />
        <InputRd  id="373" name1="Modifier date fin" onChange={handleOperChange} type="radio" value="Cardiopathies" name="gender6" />
        </div>
        {
          (oper === "A") && <div class=" mx-4 p-3">
            <FormInput placeholder={"Dosage"} onChangeText={setDosage}  />
            <div><div class="row container p-3"><label class="form-label mx-4">Date de debut</label>
            <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
            </div>
            <div class="row container p-3"><label class="form-label mx-4">Date fin</label>
            <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
            </div>
          </div></div>
        }
        {
          oper === "M" && typeof (props.traitmentList) === "string" && <Text style={tailwind("text-center py-4 font-bold  text-red-500")}>{"Aucun traitement " + trai + " trouvé , Veuillez ajouter autre !"}</Text>
        }
        {
          oper === "M" && typeof (props.traitmentList) !== "string" && props.traitmentList !== null && <div >
            <FormInput placeholder={"Doage/Debit:" + props.traitmentList["dosage"]} editable="false" />
            <div class="row p-3 "><label class="form-label mx-4 p-3">Date de debut</label>
            <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
            </div>
            <div class="row container p-3"><label class="form-label mx-4 p-3">Date fin</label>
            <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
            </div>
          </div>
        }
        <form class="row justify-content-center">
          <FormButton title="Retour" onPress={() => props.navigation.navigate("DiagnosticDetails")} />
          <FormButton title="Enregistrer" onPress={handleSUbmit} />
        </form>
           </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={10} class="col-md-6"/>
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
  traitmentList: state.medicalService.traitmentList
});
const mapActionToProps = {
  getTraitment: actions.getTraitment,
  addTraitment: actions.addTraitment

};
export default connect(mapStateToProps, mapActionToProps)(Traitement);
