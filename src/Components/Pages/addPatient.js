import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormInput from "../Form/FormInput";
import FormInput3 from "../Form/FormInput3";
import tailwind from 'tailwind-rn';
import Steps from "../Form/Steps";
import FormButton from '../Form/FormButton';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import MDBInput from "../Form/FormInput";

const AddPatient = (props) => {
  useEffect(() => {
  }, [localStorage.getItem("addPatientMessage")])

  const [cin, setCin] = useState(0)
  const [matricule, setMatricule] = useState(0)
  const [identifiant, setIdentifiant] = useState("")
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [date, setDate] = useState("")
  const [sexe, setSexe] = useState("Male")
  const [adresse, setAdresse] = useState("")
  const [nationnalite, setNationnalite] = useState("")
  const [telDomicile, setTelDomicile] = useState("")
  const [telProtable, setTelPortable] = useState("")
  const [profession, setProfession] = useState("")
  const [marie, setMarie] = useState("")
  const [vitSeul, setVitSeul] = useState(false)
  const [nbIndiv, setNbIndiv] = useState(0)
  const [nbEnf, setNbEnf] = useState(0)
  const [nbCham, setNbCham] = useState(0)
  const [nivEtude, setNivEtude] = useState("")
  var handleTypeSdate = (data) => {
    setDate(data.target.value)
       }
  var handleNivEtude = (data) => {
    console.log(data.target.value)
      setNivEtude(data.target.value)
  }

  var handleNbCham = (text) => {
    setNbCham(text)
  }

  var handleNbEnf = (text) => {
    setNbEnf(text)
  }
  var handleNbIndivChange = (text) => {
    setNbIndiv(text)
  }

  var handleProfessionChange = (text) => {
    setProfession(text)
  }
  var handleTelPortable = (text) => {
    setTelPortable(text)
  }
  var handleTelDomicile = (text) => {
    setTelDomicile(text)
  }
  var handleNationnaliteChange = (text) => {
    setNationnalite(text)
  }
  var handleCinChange = (text) => {
    setCin(text)
  }

  var handleMatriculeChange = (text) => {
    setMatricule(text)
  }
  var handleNomChange = (text) => {
    setNom(text)
  }
  var handleIdentifiantChange = (text) => {
    setIdentifiant(text)
  }
  var handlePrenomChange = (text) => {

    setPrenom(text)
  }
  var handleAddresseChange = (text) => {
    setAdresse(text)
  }

  var handleSexeChange = (data) => {
    console.log(data.target.value)
      setSexe(data.target.value)
  }
  var handleMarieChange = (data) => {
      setMarie(data.target.value)
  }

  var handleVitSeul = (data) => {
    setVitSeul(data.target.value)
  }


  var handleSubmit = (e) => {
    var values = {
      cin: cin,
      matricule: matricule,
      identifiant:identifiant,
      nom: nom,
      prenom: prenom,
      sexe: sexe,
      birthDate: date,
      nationnalite: nationnalite,
      adresse: adresse,
      telPort: telProtable,
      telDomicile: telDomicile,
      profession: profession,
      niveauEtude: nivEtude,
      vitSeul: vitSeul,
      individu: nbIndiv,
      enfant: nbEnf,
      chambres: nbCham,
      mariee: marie

    }
    e.preventDefault()
       props.cc(values)
         props.navigation.navigate("SearchPatient1")
     }
  var handleExit = (e) => {
    localStorage.setItem("addPatientMessage", JSON.stringify(null))
    props.navigation.navigate("SearchPatient1")
  }
  /*<FormInput3 
        mask="999999"
        placeholder="Cin"
        onChange={handleCinChange}
        />*/
  return (
    <section className="landing-background5">
      <div class="row">
<div class=" d-flex align-items-center m-4 col-md-6  " >
<MDBContainer    >
      <MDBRow >
        <MDBCol >
          <MDBCard style={{backgroundColor:"#c9cecb"}}>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Add Patient</h2>
          <FormInput3
          mask="999999999"
          placeholder="Cin"
          type="number-pad"
          onChangeText={handleCinChange}
        />
        <FormInput3
          mask="9999999999"
          placeholder="Matricule"
          onChangeText={handleMatriculeChange}
        />
        <FormInput
          placeholder="Identifiant"
          onChangeText={handleIdentifiantChange}
        />
        <FormInput3
        mask="aaaaaaaaaaa"
          placeholder="Nom"
          onChangeText={handleNomChange}
        />
        <FormInput3
        mask="aaaaaaaaaaa"
          placeholder="Prenom"
          onChangeText={handlePrenomChange}
        />
        
      <div class="row mx-4 p-3">
      <label class="form-label mx-3">Sexe ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Male">
        <input type="radio" class="form-check-input" id="Male" name="optradio" value="Male" onChange={handleSexeChange}/>Male 
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Female">
        <input type="radio" class="form-check-input" id="Female" name="optradio" value="Female" onChange={handleSexeChange}/>Female
      </label>
      </div>
      
      </div>
      <div>
          <label class="form-label p-3 mx-4">Date De Naissance ?</label>
          <input class="border border-primary" type="date"  data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          </div>
    <FormInput3
          placeholder="Adresse"
          onChangeText={handleAddresseChange}
        />
        <FormInput3
          placeholder="Nationalité"
          onChangeText={handleNationnaliteChange}
        />
        <FormInput3
          mask="(+216)-99-999-999"
          placeholder="Telephone Domicile"
          onChangeText={handleTelDomicile}
        />
        <FormInput3
          mask="(+216)-99-999-999"
          placeholder="Telephone portable"
          onChangeText={handleTelPortable}
        />
        <FormInput3
          mask="aaaaaaaaaaaaaaaaa"
          placeholder="Profession"
          onChangeText={handleProfessionChange}
        />
              <label class="form-label p-3 mx-4">Niveau d'étude ?</label>
        <div class="row mx-4">
      <div class="form-check mx-1">
      <label class="form-check-label" for="Non Scolarisé">
      <input  class="form-check-input" id="Non Scolarisé" onChange={handleNivEtude} type="radio" value="Non Scolarisé" name="gender1" />Non Scolarisé 
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Primaire">
      <input  class="form-check-input" id="Primaire" onChange={handleNivEtude} type="radio" value="Primaire" name="gender1" />Primaire
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Collège">
      <input  class="form-check-input" id="Collège" onChange={handleNivEtude} type="radio" value="Collège" name="gender1" />Collège
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Secondaire">
      <input  class="form-check-input" id="Secondaire" onChange={handleNivEtude} type="radio" value="Secondaire" name="gender1" />Secondaire
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Universiatire">
      <input  class="form-check-input" id="Universiatire" onChange={handleNivEtude} type="radio" value="Universiatire" name="gender1" />Universiatire      
      </label>
      </div>
      </div>
      <div class="row mx-4 p-3">
      <label class="form-label mx-3">Marié ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Oui1">
        <input type="radio" class="form-check-input" id="Oui1" name="optradio" value="Oui" onChange={handleMarieChange}/>Oui
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Non1">
        <input type="radio" class="form-check-input" id="Non1" name="optradio" value="Non" onChange={handleMarieChange}/>Non 
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="Autre1">
        <input type="radio" class="form-check-input" id="Autre1" name="optradio" value="Autre" onChange={handleMarieChange}/>Autre 
      </label>
      </div>
      </div>
      <div class="row mx-4 p-3">
      <label class="form-label mx-3">Vit seul ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="i12">
        <input type="radio" class="form-check-input" id="i12" name="radio1" value={true} onChange={handleVitSeul} />Oui
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="n145">
        <input type="radio" class="form-check-input" id="n145" name="radio1" value={false} onChange={handleVitSeul}/>Non 
      </label>
      </div>
      </div>
      <FormInput3
          mask="99"
          placeholder="Nbre d'individus par famille"
          onChangeText={handleNbIndivChange}
        />

        <FormInput3
          mask="99"
          placeholder="Nbre d'enfants à cahrge"
          onChangeText={handleNbEnf}
        />

        <FormInput3
          mask="99"
          placeholder="Nbre de chambres dans la maison"
          onChangeText={handleNbCham}
        />
        <FormButton title="Annuler" onPress={handleExit} />
        <FormButton title="Ajouter" onPress={handleSubmit} />
           </form> 
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    <Steps  class="col-md-6"/>  
    </div>

    </section>
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
const mystyle = {
  color: "white",

  backgroundsize: "cover"
};
const mapStateToProps = (state) => ({
  message: state.medicalService.message
});
const mapActionToProps = {
  cc: actions.addPatient
};

export default connect(mapStateToProps, mapActionToProps)(AddPatient);