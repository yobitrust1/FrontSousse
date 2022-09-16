import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../../Form/FormInput';
import FormInput5 from '../../Form/FormInput5';
import FormInput2 from '../../Form/FormInput2';
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import FormButton2 from "../../Form/FormButton2";
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

const Evolution = (props) => {

  //dateTime picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //date.setTime(date.getTime()-date.getTimezoneOffset()*60*1000)
    setTime(date)
    hideDatePicker();
  };

  const [category, setCategory] = useState()
  const [type, setType] = useState()
  const [time, setTime] = useState()
  const [value, setValue] = useState()
  const [validation, setValidation] = useState()

  const [dateD, setDateD] = useState()
  const [dateF, setDateF] = useState()
  const [saps2, setSaps2] = useState()
  const [apache2, setApache2] = useState()
  const [sofa, setSofa] = useState()
  const [dateS, setDateS] = useState()
  const [typeS, setTypeS] = useState()
  const [dateH, setDateH] = useState()
  const [hopital, setHopital] = useState()
  const [service, setService] = useState()
  const [ville, setVille] = useState()
  const [lieu, setLieu] = useState()

  const [hospi, setHospi] = useState()


  var handleHospiChange = (data) => {
    if (data.target.value==="0") setHospi(true)
    if (data.target.value==="1") setHospi(false)
  }

  var handleTypeSChange = (data) => {
 setTypeS(data.target.value)

    }



  var handleValueCb = (data) => {
    if (data.target.value==="oui")
      setValue(1.0)
    if (data.target.value==="non")
      setValue(0.0)
  }

  var handleEvolutionType = (data) => {
    if (data.target.value==="0") {
      setType("IHH")
      setTypeS("")

    }
    if (data.target.value==="1") {
      setType("Ho")
      setTypeS("Transfert inter-hopital")
    }

  }






  var handleTypeChange = (data) => {
 setType(data.target.value)
    }

  var handleSubmit = () => {
    if (type === "Température" && (value > 43 || value < 30)) {
      setValidation("La temperature doit etre comprise entre 30et 43 °C !")
      return
    }

    if (type === "SaO2" && (value > 100 || value < 0)) {
      setValidation("Le pourcentage de SaO2  doit etre compris entre 0 % et 100 % !");
      return
    }


    if (type === "FR" && (value > 250 || value < 0)) {
      setValidation("La valuer du FR doit etre comprise entre 0 et 250 C/min !");
      return
    }

    if (type === "FC" && (value > 150 || value < 0)) {
      setValidation("La valuer du FC doit etre comprise entre 0 et 150 C/min !");
      return
    }
    if (type === "Score de glasgow" && (value > 15 || value < 0)) {
      setValidation("Le score de Glasgow doit etre entre 0 et 15 !");
      return
    }
    if (category === "USI") {
      if (dateD === undefined) { setValidation("La date du transfert au USI est obligatoire !"); return; }
      if (saps2 === undefined) { setValidation("SAPS2 est obligatoire"); return; }
      if (saps2 > 194) { setValidation("SAPS2 doit etre compris entre 0 et 194 "); return; }
      if (apache2 === undefined) { setValidation("APACHE2 est obligatoire !"); return }
      if (apache2 > 74) { setValidation("APACHE 2 doit etre compris entre 0 et 74"); return }
      if (sofa > 24) { setValidation("SOFA doit etre compris entre 0 et 24"); return }

    }

    if (category === "AssResp") {
      if (dateD === undefined) { setValidation("La date de début est obligatoire!"); return; }

    }
    if(category ==="Evolution"){
      if(dateS === undefined) {setValidation("La date de sortie est obligatoire");return}
    }



    var values = {
      time: time,
      type: type,
      category: category,
      value: value,
      dateD: dateD,
      dateF: dateF,
      apache2: apache2,
      saps2: saps2,
      sofa: sofa,
      dateS: dateS,
      typeS: typeS,
      dateH: dateH,
      hopital: hopital,
      service: service,
      ville: ville,
      lieu: lieu

    }
    console.log(values)
    setCategory()
    setTime()
    setValue()
    setDateF()
    setDateD()
    setSofa()
    setApache2()
    setSaps2()
    props.addEvolution(props.patientList["cin"], values)

  }

  return (
    <div className="landing-background15">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
<MDBContainer  >
      <MDBRow>
        <MDBCol >
          <MDBCard style={{backgroundColor:"#c9cecb"}}>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Evolution</h2>
          <FormButton2 title="Evolution quotidienne" onPress={() => { setCategory("evaluValues"); setType("Température"); setValidation() }}/>
          {
          category === "evaluValues" && <div>
          <div  >
          <div class="row mx-4">
      <div class="form-check mx-1">
      <label class="form-check-label" for="Température">
      <input  class="form-check-input" id="Température" onChange={handleTypeChange} type="radio" value="Température" name="gender" />Température
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="SaO2">
      <input  class="form-check-input" id="SaO2" onChange={handleTypeChange} type="radio" value="SaO2" name="gender" />SaO2
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Besoin en O2">
      <input  class="form-check-input" id="Besoin en O2" onChange={handleTypeChange} type="radio" value="Besoin en O2" name="gender" />Besoin en O2
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="TA">
      <input  class="form-check-input" id="TA" onChange={handleTypeChange} type="radio" value="TA" name="gender" />TA
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="FR">
      <input  class="form-check-input" id="FR" onChange={handleTypeChange} type="radio" value="FR" name="gender" />FR
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Signes de lutte">
      <input  class="form-check-input" id="Signes de lutte" onChange={handleTypeChange} type="radio" value="Signes de lutte" name="gender" />Signes de lutte
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="FC">
      <input  class="form-check-input" id="FC" onChange={handleTypeChange} type="radio" value="FC" name="gender" />FC
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Froideur">
      <input  class="form-check-input" id="Froideur" onChange={handleTypeChange} type="radio" value="Froideur" name="gender" />Froideur
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Marbrures">
      <input  class="form-check-input" id="Marbrures" onChange={handleTypeChange} type="radio" value="Marbrures" name="gender" />Marbrures
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Angoisse/Agitation">
      <input  class="form-check-input" id="Angoisse/Agitation" onChange={handleTypeChange} type="radio" value="Angoisse/Agitation" name="gender" />Angoisse/Agitation
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Score de glasgow">
      <input  class="form-check-input" id="Score de glasgow" onChange={handleTypeChange} type="radio" value="Score de glasgow" name="gender" />Score de glasgow
      </label>
      </div>
      </div>
          </div>
          <label class="form-label mx-4">{validation}</label>
            {(type === "Température" || type === "SaO2" || type === "Besoin en O2" || type === "TA" || type === "FR" || type === "FC" || type === "Score de glasgow") &&
              <FormInput5 placeholder={type}   min={0}   max={1000000000}   onChangeText={setValue} />
            }
            {
              (type === "Signes de lutte" || type === "Froideur" || type === "Marbrures" || type === "Angoisse/Agitation") &&
              <div>
                <div class="row mx-4">
                <label class="form-label mx-3">{type + "?"}</label>
                <div class="form-check mx-1">
                <label class="form-check-label" for="oui">
                <input  class="form-check-input" id="oui" onChange={handleValueCb} type="radio" value="oui" name="gender1" />Oui
                </label>
                </div>
                <div class="form-check mx-1">
                <label class="form-check-label" for="non">
                <input  class="form-check-input" id="non" onChange={handleValueCb} type="radio" value="non" name="gender1" />Non
                </label>
                </div>
                <div class="form-check mx-1">
                <label class="form-check-label" for="row">
                <input  class="form-check-input" id="row" onChange={handleValueCb} type="radio" value="row" name="gender1" />row
                </label>
                </div>
                </div>
              </div>
            }
            <FormButton title="Enregistrer" onPress={handleSubmit} />
          </div>

        }
        <FormButton2 title="Transfert en USI" onPress={() => { setCategory("USI"); setValidation(); setType("IRA grave (3)"); }}/>
        {
          category === "USI" && <div >
            <div class="row mx-4">
      <label class="form-label mx-3">Choisir la méthode de transfert ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="IRA grave (3)">
      <input  class="form-check-input" id="IRA grave (3)" onChange={handleTypeChange} type="radio" value="IRA grave (3)" name="gender2" />IRA grave (3)
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Sepsis/Choc septique">
      <input  class="form-check-input" id="Sepsis/Choc septique" onChange={handleTypeChange} type="radio" value="Sepsis/Choc septique" name="gender2" />Sepsis/Choc septique
      </label>
      </div>
      </div>
            <div class="p-4">
            <label class="form-label mx-4">Date de début</label>
            <DatePicker
            color="primary"
            placeholder="YYYY-MM-DD"
            value={dateD}
            clearable
            minDate="1920-05-01"
            maxDate={new Date()}
            onDate={(dateD) => {
            setDateD(dateD)
            }}
            onClear={() => setDateD('')}
            width={250}
            onChange={(value) => setDateD(value)}/>
            <label class="form-label mx-4">Date de fin</label>
              <DatePicker
              color="primary"
              placeholder="YYYY-MM-DD"
              value={dateF}
              clearable
              minDate="1920-05-01"
              maxDate={new Date()}
              onDate={(dateF) => {
              setDateF(dateF)
              }}
              onClear={() => setDateF('')}
              width={250}
              onChange={(value) => setDateF(value)}/>
              <FormInput5 placeholder={"SAPS 2"} onChangeText={setSaps2}   min={0}   max={96}   maxLength={Number("8")} />
              <FormInput5 placeholder={"APACHE 2"} onChangeText={setApache2}   min={0}   max={8871}   maxLength={Number("8")} />
              <FormInput5 placeholder={"SOFA"} onChangeText={setSofa}   min={0}   max={30}   maxLength={Number("8")} />
              <FormButton title="Enregistrer" onPress={handleSubmit} />
            </div>


          </div>

        }
        <FormButton2 title="Assistance respiratoire" onPress={() => { setCategory("AssResp"); setValidation() }}/>
        {
          category === "AssResp" && <div >
            <label class="form-label mx-4">{validation}</label>
            <label class="form-label mx-4">Choisir la méthode de transfert ?</label>
            <div class="row mx-4">
            <label class="form-label mx-3">Niveau d'étude ?</label>
            <div class="form-check mx-1">
            <label class="form-check-label" for="HFNC / CPAP min 12h">
            <input  class="form-check-input" id="HFNC / CPAP min 12h" onChange={handleTypeChange} type="radio" value="HFNC / CPAP min 12h" name="gender3" />HFNC / CPAP min 12h
            </label>
            </div>
            <div class="form-check mx-1">
            <label class="form-check-label" for="VNI min 12h">
            <input  class="form-check-input" id="VNI min 12h" onChange={handleTypeChange} type="radio" value="VNI min 12h" name="gender3" />VNI min 12h
            </label>
            </div>
            <div class="form-check mx-1">
            <label class="form-check-label" for="VMI">
            <input  class="form-check-input" id="VMI" onChange={handleTypeChange} type="radio" value="VMI" name="gender3" />VMI
            </label>
            </div>
            <div class="form-check mx-1">
            <label class="form-check-label" for="DV">
            <input  class="form-check-input" id="DV" onChange={handleTypeChange} type="radio" value="DV" name="gender3" />DV
            </label>
            </div>
            <div class="form-check mx-1">
            <label class="form-check-label" for="Protective ventilation">
            <input  class="form-check-input" id="Protective ventilation" onChange={handleTypeChange} type="radio" value="Protective ventilation" name="gender3" />Protective ventilation
            </label>
            </div>
            <div class="form-check mx-1">
            <label class="form-check-label" for="Ventilation free days">
            <input  class="form-check-input" id="Ventilation free days" onChange={handleTypeChange} type="radio" value="Ventilation free days" name="gender3" />Ventilation free days
            </label>
            </div>
            <div class="form-check mx-1">
            <label class="form-check-label" for="Device free days">
            <input  class="form-check-input" id="Device free days" onChange={handleTypeChange} type="radio" value="Device free days" name="gender3" />Device free days
            </label>
            </div>
            </div>
            <div class="p-4">
            <label class="form-label mx-4">Date de début</label>
            <DatePicker
            color="primary"
            placeholder="YYYY-MM-DD"
            value={dateD}
            clearable
            minDate="1920-05-01"
            maxDate={new Date()}
            onDate={(dateD) => {
            setDateD(dateD)
            }}
            onClear={() => setDateD('')}
            width={250}
            onChange={(value) => setDateD(value)}/>
            <label class="form-label mx-4">Date de fin</label>
              <DatePicker
              color="primary"
              placeholder="YYYY-MM-DD"
              value={dateF}
              clearable
              minDate="1920-05-01"
              maxDate={new Date()}
              onDate={(dateF) => {
              setDateF(dateF)
              }}
              onClear={() => setDateF('')}
              width={250}
              onChange={(value) => setDateF(value)}/>
              <FormButton title="Enregistrer" onPress={handleSubmit} />
            </div>
          </div>
        }
        <FormButton2 title="Evolution de l'isolement/hospitalisation" onPress={() => { setCategory("Evolution"); setValidation(); setType("IHH"); setHospi(true) }}/>

        {
          category === "Evolution" && <div >
            <div class="row mx-4">
            <label class="form-label mx-3">{validation}</label>
            <div class="form-check mx-1">
            <label class="form-check-label" for="0">
            <input  class="form-check-input" id="1" onChange={handleEvolutionType} type="radio" value="0" name="gender4" />Evolution de l'isolement hors hopital
            </label>
            </div>
            <div class="form-check mx-1">
            <label class="form-check-label" for="0">
            <input  class="form-check-input" id="1" onChange={handleEvolutionType} type="radio" value="1" name="gender4" />Evolution de l'hospitalisation
            </label>
            </div>
            </div>
            {
              type === "IHH" && <div class="p-4">
                <label class="form-label mx-4">Date de début </label>
                <DatePicker
                color="primary"
                placeholder="YYYY-MM-DD"
                value={dateS}
                clearable
                minDate="1920-05-01"
                maxDate={new Date()}
                onDate={(dateS) => {
                setDateS(dateS)
                }}
                onClear={() => setDateS('')}
                width={250}
                onChange={(value) => setDateS(value)}/>
                <div class="row mx-4">
                <label class="form-label mx-3">Hospitalisé ?</label>
                <div class="form-check mx-1">
                <label class="form-check-label" for="00">
                <input  class="form-check-input" id="00" onChange={handleHospiChange} type="radio" value="0" name="gender5" />Oui
                </label>
                </div>
                <div class="form-check mx-1">
                <label class="form-check-label" for="11">
                <input  class="form-check-input" id="11" onChange={handleHospiChange} type="radio" value="1" name="gender5" />Non
                </label>
                </div>
                </div>
                {
                  hospi === true && <div>
                  <DatePicker
                  color="primary"
                  placeholder="YYYY-MM-DD"
                  value={dateH}
                  clearable
                  minDate="1920-05-01"
                  maxDate={new Date()}
                  onDate={(dateH) => {
                  setDateH(dateH)
                  }}
                  onClear={() => setDateH('')}
                  width={250}
                  onChange={(value) => setDateH(value)}/>

                    <FormInput placeholder="Hopital" onChangeText={setHopital} />
                    <FormInput placeholder="Service" onChangeText={setService} />
                    <FormInput placeholder="Ville" onChangeText={setVille} />
                  </div>
                }
                {
                  hospi === false &&
                  <div class="row mx-4">
                  <div class="form-check mx-1">
                  <label class="form-check-label" for="Evolution de l'isolement hors hopital">
                  <input  class="form-check-input" id="Evolution de l'isolement hors hopital" onChange={handleTypeSChange} type="radio" value="Evolution de l'isolement hors hopital" name="gender6" />Evolution de l'isolement hors hopital
                  </label>
                  </div>
                  <div class="form-check mx-1">
                  <label class="form-check-label" for="Evolution de l'hospitalisation">
                  <input  class="form-check-input" id="Evolution de l'hospitalisation" onChange={handleTypeSChange} type="radio" value="Evolution de l'hospitalisation" name="gender6" />Evolution de l'hospitalisation
                  </label>
                  </div>
                  <div class="form-check mx-1">
                  <label class="form-check-label" for="Deccés">
                  <input  class="form-check-input" id="Deccés" onChange={handleTypeSChange} type="radio" value="Deccés" name="gender6" />Deccés
                  </label>
                  </div>
                  </div>
                }
                  <FormButton title="Enregistrer" onPress={handleSubmit} />
              </div>
            }

            {
              type === "Ho" && <div>
              <DatePicker
              color="primary"
              placeholder="YYYY-MM-DD"
              value={dateS}
              clearable
              minDate="1920-05-01"
              maxDate={new Date()}
              onDate={(dateS) => {
              setDateS(dateS)
              }}
              onClear={() => setDateS('')}
              width={250}
              onChange={(value) => setDateS(value)}/>
              <div class="row mx-4">
      <label class="form-label mx-3">Niveau d'étude ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Transfert inter-hopital">
      <input  class="form-check-input" id="Transfert inter-hopital" onChange={handleTypeSChange} type="radio" value="Transfert inter-hopital" name="gender7" />Transfert inter-hopital
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Transfert inter-service">
      <input  class="form-check-input" id="Transfert inter-service" onChange={handleTypeSChange} type="radio" value="Transfert inter-service" name="gender7" />Transfert inter-service
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Retour à domicile en quarantine">
      <input  class="form-check-input" id="Retour à domicile en quarantine" onChange={handleTypeSChange} type="radio" value="Retour à domicile en quarantine" name="gender7" />Retour à domicile en quarantine
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Transfert à domicile sans quarantine">
      <input  class="form-check-input" id="Transfert à domicile sans quarantine" onChange={handleTypeSChange} type="radio" value="Transfert à domicile sans quarantine" name="gender7" />Transfert à domicile sans quarantine
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Deccés">
      <input  class="form-check-input" id="Deccés" onChange={handleTypeSChange} type="radio" value="Deccés" name="gender7" />Deccés
      </label>
      </div>
      </div>
                {
                  (typeS === "Transfert inter-hopital" || typeS === "Transfert inter-service") && <FormInput placeholder="Lieu" onChangeText={setLieu} />
                }

                <div>
                  <FormButton title="Enregistrer" onPress={handleSubmit} />
                </div>
              </div>
            }

          </div>

        }
        <form class="row justify-content-center">
          <FormButton title="Retour" onPress={() => props.navigation.navigate("DiagnosticDetails")} />
        </form>
           </form>

          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps current={11} class="col-md-6"/>
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
  evolutionList: state.medicalService.evolutionList
});
const mapActionToProps = {

  addEvolution: actions.addEvolution,
  getEvolution: actions.getEvolution,
};
export default connect(mapStateToProps, mapActionToProps)(Evolution);
