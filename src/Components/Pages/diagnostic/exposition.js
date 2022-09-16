import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { div, Text, StyleSheet } from 'react-native';
import FormInput from '../../Form/FormInput';
import FormInput5 from '../../Form/FormInput5';
import FormButton from '../../Form/FormButton';
import FormButton2 from '../../Form/FormButton2';
import { medicalService } from '../../../Reducers/medicalService';
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



const Exposition = (props) => {

  var handleTypeSdate = (data) => {
    setDateD(data.target.value)
       }
           var handleTypeSdate1 = (data) => {
            setDateF(data.target.value)
               }
               var handleTypeSdate2 = (data) => {
                setDateEnt(data.target.value)
                   }
                   var handleTypeSdate3 = (data) => {
                    setDateV1(data.target.value)
                       }
                       var handleTypeSdate4 = (data) => {
                        setDateV2(data.target.value)
                           }
                           var handleTypeSdate5 = (data) => {
                            setDateDebutC(data.target.value)
                               }
                               var handleTypeSdate6 = (data) => {
                                setDateFinC(data.target.value)
                                   }
                                   var handleTypeSdate7 = (data) => {
                                    setDateDQu(data.target.value)
                                       }
                                       var handleTypeSdate8 = (data) => {
                                        setDateFQu(data.target.value)
                                           }

  //component test variable
  const [sejour, setSejour] = useState(false)
  const [arivee, setArivee] = useState(false)
  const [parcours, setParcours] = useState(false)
  const [etroit, setEtoit] = useState(false)
  const [autres, setAutres] = useState(false)
  const [quarantine, setQurarantine] = useState(false)
  //checkbox variable
  const [contactC, setContactC] = useState("Oui")
  const [autreBox, setAutreBox] = useState("Oui")
  const [miseQuarantine, setMiseQuarantine] = useState("Oui")

  //values
  //Sejour /Transit component
  const [habite, setHabite] = useState(true)
  const [dateD, setDateD] = useState()
  const [dateF, setDateF] = useState()
  const [villes, setVilles] = useState()
  //arivee en tunisie
  const [dateEnt, setDateEnt] = useState()
  const [lieuEnt, setLieuEnt] = useState()
  const [moyensTran, setMoyensTran] = useState()
  //parcours en Tunise
  const [villesPar, setVillesPar] = useState()
  const [dateV1, setDateV1] = useState()
  const [moyenTranV1, setMoyenTranV1] = useState()
  const [dateV2, setDateV2] = useState()
  const [moyenTranV2, setMoyenTranV2] = useState()
  const [moyenTranQu, setMoyenTranQu] = useState()
  //contact etroit
  const [idTun, setIdTun] = useState(0)
  const [dateDebutC, setDateDebutC] = useState()
  const [dateFinC, setDateFinC] = useState()
  //Autres criteres ayant conduit

  const [details, setDetails] = useState()
  //mise en quarantine
  const [dateDQu, setDateDQu] = useState()
  const [dateFDQu, setDateFQu] = useState()
  const [respect, setRespect] = useState(true)

  //values handleChange functions
  //sejour/transit values
  var habiteHandleChange = (data) => {
    if (data.target.value==="Oui")
      setHabite(true)
    if (data.target.value==="Non")
      setHabite(false)
  }
  var handleVillesChange = (text) => {
    setVilles(text)
  }
  //arrivee values
  var handleLieuEnt = (text) => {
    setLieuEnt(text)
  }
  var handletMoyensTran = (text) => {
    setMoyensTran(text)
  }
  //parcours en Tunisie
  var handleVillesPar = (text) => {
    setVillesPar(text)
  }
  var handleMoyenTranV1 = (text) => {
    setMoyenTranV1(text)
  }
  var handleMoyenTranV2 = (text) => {
    setMoyenTranV2(text)
  }
  var handleMoyenTranQu = (text) => {
    setMoyenTranQu(text)
  }
  //contact etroit
  var handleIdTun = (text) => {
    setIdTun(text)
  }
  //AUtres criteres

  var handleDetailsChange = (text) => {
    setDetails(text)
  }
  //Mise en quarantine
  var handleRespectChange = (data) => {
    if (data.target.value=="Oui")
      setRespect(true)
    else setRespect(false)
  }

  var handleSejourChange = () => {
    setSejour(!sejour)
  }
  var handleAriveeChange = () => {
    setArivee(!arivee)
  }
  var handleParousChange = () => {
    setParcours(!parcours)
  }
  var handleEtroitChange = () => {
    setEtoit(!etroit)
  }
  var handleAutresChange = () => {
    setAutres(!autres)
  }
  var handleQuarantineChange = () => {
    setQurarantine(!quarantine)
  }
  var handleContactCChange = (data) => {
      setContactC(data.target.value)
  }
  var handleAutreBoxChange = (data) => {
      setAutreBox(data.target.value)
  }
  var handleMiseQuarantineChange = (data) => {
    if (data.target.value==="Oui")
      setMiseQuarantine("Oui")
    else setMiseQuarantine("Non")
  }

  //submit function
  var handleSubmit = (e) => {
    e.preventDefault()
    var values = {
      //Sejour /transit
      habite: habite,
      dateD: dateD,
      dateF: dateF,
      villes: villes,
      // Arivee
      dateEnt: dateEnt,
      lieuEnt: lieuEnt,
      moyensTran: moyensTran,
      // parcours en tunisie
      villesPar: villesPar,
      dateV1: dateV1,
      dateV2: dateV2,
      moyenTranV1: moyenTranV1,
      moyenTranV2: moyenTranV2,
      moyenTranQu: moyenTranQu,

      //contact etroit
      contact: contactC,
      idTun: idTun,
      dateDebutC: dateDebutC,
      dateFinC: dateFinC,

      //autre critere
      autre: autreBox,
      details: details,

      //mise en quarantine
      dateDQu: dateDQu,
      dateFDQu: dateFDQu,
      respect: respect


    }
    console.log(values)

    props.addExposition(props.patientList["cin"], values)
    props.navigation.navigate("PatientDetails")
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
          <h2 class="font-weight-bold text-center p-5 text-primary">Expositions à Risque</h2>
          <FormButton2  title="Séjour ou transit dans une zone a risque" onPress={handleSejourChange}/>
          {sejour == true && <div>
            <label class="form-label mx-4">Réside habituellement dans la zone a risque  ?</label>
          <div class="row mx-4">
          <InputRd  onChange={habiteHandleChange} type="radio" value="Oui" name="gender" id="0" name1="Oui"/>
          <InputRd  onChange={habiteHandleChange} type="radio" value="Non" name="gender" id="1" name1="Non"/>
          <InputRd  onChange={habiteHandleChange} type="radio" value="row" name="gender" id="2" name1="row"/>
        </div>
        <label class="form-label mx-4">Séjour ou transit dans zone risque ?</label>
        <div><label class="form-label mx-4">Du ?</label>
            <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/></div>
            <div>
            <label class="form-label mx-4">Au ?</label>
            <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
            </div>
          </div>
          }
          <FormButton2 title="Arivée sur le territoire tunisien" onPress={handleAriveeChange}/>
          {arivee == true && <div>
            <label class="form-label mx-4">Date d'arrivée en Tunisie?</label>
          <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate2}/>

            <FormInput placeholder="Lieu d'entrée" onChangeText={handleLieuEnt} />
            <FormInput placeholder="Moyen de transport" onChangeText={handletMoyensTran} />
          </div>}
          <FormButton2 title="Parcours en Tunisie" onPress={handleParousChange}/>
          {(parcours == true) && <div>
            <FormInput placeholder="Villes visités en Tunisie" onChangeText={handleVillesPar} />
            <label class="form-label mx-4">Date d'arrivée ville 1</label>
            <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate3}/>

            <FormInput placeholder="Moyens de transport" onChangeText={handleMoyenTranV1} />
            <label class="form-label mx-4">Date d'arrivée ville 2</label>
            <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate4}/>

            <FormInput placeholder="Moyens de transport" onChangeText={handleMoyenTranV2} />
            <FormInput placeholder="Moyen de transport quotidien" onChangeText={handleMoyenTranQu} />

          </div>}
          <FormButton2 title="Contact étroit" onPress={handleEtroitChange}/>
          {
            (etroit == true) && (<div>
              <label class="form-label mx-3">Contact avec un cas confirmé ou suspect ?</label>
            <div class="row mx-4">

           <InputRd  onChange={handleContactCChange} type="radio" value="Oui" name="gender1" id="3" name1="Oui"/>
          <InputRd  onChange={handleContactCChange} type="radio" value="Non" name="gender1" id="4" name1="Non"/>
          <InputRd  onChange={handleContactCChange} type="radio" value="Ne sait pas" name="gender1" id="5" name1="Ne sait pas"/>
          <InputRd  onChange={handleContactCChange} type="radio" value="row" name="gender1" id="6" name1="row"/>
        </div>
            </div>
            )}
          {(contactC === "Oui" && etroit == true) && (<div p-5 >
            <label class="form-label mx-4 ">Du ?</label>
          <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate5}/>
          <label class="form-label mx-4">Au ?</label>
          <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate6}/>

            <FormInput5 placeholder="Identifiant en Tunisie" min={0}   max={1000000000}  onChangeText={handleIdTun} />
          </div>)}

          <FormButton2 title="Autres critères ayant conduit au classement en cas possible" onPress={handleAutresChange}/>
          {(autres == true) && <div>

            <label class="form-label mx-3">Contact avec un cas confirmé ou suspect ?</label>
           <div class="row mx-4">

            <InputRd  onChange={handleAutreBoxChange} type="radio" value="Oui" name="gender2" id="7" name1="Oui"/>
            <InputRd  onChange={handleAutreBoxChange} type="radio" value="Non" name="gender2" id="8" name1="Non"/>
            <InputRd  onChange={handleAutreBoxChange} type="radio" value="NSP" name="gender2" id="9" name1="NSP"/>
            <InputRd  onChange={handleAutreBoxChange} type="radio" value="row" name="gender2" id="10" name1="row"/>
          </div>
            {autreBox === "Oui" && <FormInput placeholder="Précisier" onChangeText={handleDetailsChange} />}


          </div>}
          <FormButton2 title="Mise en quarantine" onPress={handleQuarantineChange}/>
          {(quarantine == true) && <div>
            <label class="form-label mx-4">Mise en quarantine ?</label>
          <div class="row mx-4">
            <InputRd  onChange={handleMiseQuarantineChange} type="radio" value="Oui" name="gender3" id="11" name1="Oui"/>
            <InputRd  onChange={handleMiseQuarantineChange} type="radio" value="Non" name="gender3" id="12" name1="Non"/>
            <InputRd  onChange={handleMiseQuarantineChange} type="radio" value="row" name="gender3" id="13" name1="row"/>
          </div>

              <label class="form-label mx-4">Mise en quarantine ?</label>
          </div>}
          {(quarantine == true && miseQuarantine === "Oui") &&
          <div p-5 >
            <label class="form-label mx-4 ">Du ?</label>
          <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate7}/>
          <label class="form-label mx-4">Au ?</label>
          <input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate8}/>
          <div><label class="form-label mx-3">Respect de la quarantine ?</label></div>
          <div class="row mx-4">

            <InputRd  onChange={handleRespectChange} type="radio" value="Oui" name="gender4" id="14" name1="Oui"/>
            <InputRd  onChange={handleRespectChange} type="radio" value="Non" name="gender4" id="15" name1="Non"/>
            <InputRd  onChange={handleRespectChange} type="radio" value="row" name="gender4" id="16" name1="row"/>
          </div>
          </div>}
          <form class="row justify-content-center">
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("PatientDetails") }} />
          <FormButton title="Enregistrer" onPress={handleSubmit} />
          </form>
           </form>

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={2} class="col-md-6"/>
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
  //loggedUser: state.medicalService.loggedUser,
  patientList: state.medicalService.patientList
});
const mapActionToProps = {
  //login: actions.login,
  addExposition: actions.addExposition
};
export default connect(mapStateToProps, mapActionToProps)(Exposition);
