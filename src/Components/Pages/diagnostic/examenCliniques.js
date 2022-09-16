import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormButton2 from "../../Form/FormButton2";
import FormInput from "../../Form/FormInput";
import FormInput5 from "../../Form/FormInput5";
import FormInput2 from "../../Form/FormInput2";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { div, Text, StyleSheet } from 'react-native';
import FormCheckBox from "../../Form/CheckBox";
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


const ExamenCliniques = (props) => {

    var handleExamOroChange = (newValue, text) => {
        if (newValue == true) setExamOro(examOro + " " + text)
        else setExamOro(examOro.replace(text + " ", ""))
        if (text === " Autre" && newValue == true) setAutreOro(true)
        if (text === " Autre" && newValue == false) setAutreOro(false)
    }

    var handleExamenOphtaChange = (newValue, text) => {
        if (newValue == true) setExamOphta(examOphta + " " + text)
        else setExamOphta(examOphta.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreOphta(true)
        if (text === "Autre" && newValue == false) setAutreOphta(false)
    }


    var handleExamPulChange = (newValue, text) => {
        if (newValue == true) setExamPulmo(examPulmo + " " + text)
        else setExamPulmo(examPulmo.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutrePul(true)
        if (text === "Autre" && newValue == false) setAutrePul(false)
    }

    var handleExamCutChange = (newValue, text) => {
        if (newValue == true) setExamCut(examCut + " " + text)
        else setExamCut(examCut.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreCut(true)
        if (text === "Autre" && newValue == false) setAutreCut(false)
    }

    var handleExamNeuroChange = (newValue, text) => {
        if (newValue == true) setExamNeuro(examNeuro + " " + text)
        else setExamNeuro(examNeuro.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreNeuro(true)
        if (text === "Autre" && newValue == false) setAutreNeuro(false)
    }
    var handleExamenCarChange = (newValue, text) => {
        if (newValue == true) setExamCardio(examCardio + " " + text)
        else setExamCardio(examCardio.replace(text + " ", ""))
        if (text === "Autre" && newValue == true) setAutreCar(true)
        if (text === "Autre" && newValue == false) setAutreCar(false)
    }


    //component
    const [oro, setOro] = useState(false)
    const [pul, setPul] = useState(false)
    const [oph, setOph] = useState(false)
    const [cut, setCut] = useState(false)
    const [neu, setNeu] = useState(false)
    const [card, setCard] = useState(false)
    const [aut, setAut] = useState(false)
    //values
    const [temperature, setTemperature] = useState()
    const [fr, setFr] = useState()
    const [fc, setFc] = useState()
    const [sao2, setSao2] = useState()
    const [pa_sys, setPa_sys] = useState()
    const [pa_dya, setPa_dya] = useState()

    const [scoreGlas, setScoreGlas] = useState()
    const [scoreGlas1, setScoreGlas1] = useState()
    const [poids, setPoids] = useState()
    const [taille, setTaille] = useState()
    const [examOro, setExamOro] = useState("")
    const [examPulmo, setExamPulmo] = useState("Tirage intercostal")
    const [examOphta, setExamOphta] = useState("hyperhèmie conjonctivale unilatérale")
    const [examCut, setExamCut] = useState("Erruption maculo-papuleuse géneralisée")
    const [examNeuro, setExamNeuro] = useState("Désorientation temporo-spatiale")
    const [examCardio, setExamCardio] = useState("Assourdissement des bruits du coeur")
    const [autre, setAutre] = useState()
    //autre cb values values
    const [autreOro, setAutreOro] = useState(false)
    const [autrePul, setAutrePul] = useState(false)
    const [autreOphta, setAutreOphta] = useState(false)
    const [autreCut, setAutreCut] = useState(false)
    const [autreNeuro, setAutreNeuro] = useState(false)
    const [autreCar, setAutreCar] = useState(false)
    // autre inputVlaues
    const [autreInputOro, setAutreInputOro] = useState(false)
    const [autreInputPul, setAutreInputPul] = useState(false)
    const [autreInputOphta, setAutreInputOphta] = useState(false)
    const [autreInputCut, setAutreInputCut] = useState(false)
    const [autreInputNeuro, setAutreInputNeuro] = useState(false)
    const [autreInputCar, setAutreInputCar] = useState(false)


    // form validation
    const [validation, setValidation] = useState()

    var handleAutreChange = (text) => {
        setAutre(text)
    }
    //autrecb handle change functions
    var handleChangeAutreOro = (text) => {
        setAutreInputOro(text)
    }

    var handleChangeAutrePul = (text) => {
        setAutreInputPul(text)

    }
    var handleChangeAutreOpht = (text) => {
        setAutreInputOphta(text)
    }
    var handleChangeAutreCut = (text) => {
        setAutreInputCut(text)
    }
    var handleChangeAUtreNeu = (text) => {
        setAutreInputNeuro(text)
    }
    var handleChangeAutreCar = (text) => {
        setAutreInputCar(text)
    }
    //submit function
    var handleSubmit = () => {


        if (temperature > 43 || temperature < 30 || temperature === undefined) { setValidation("La temperature doit etre comprise entre 30et 43 °C"); return; }
        if (fr > 250 || fr < 0 || fr === undefined) { setValidation("La valuer du FR doit etre comprise entre 0 et 250 C/min !"); return }
        if (fc > 150 || fc < 0 || fc == undefined) { setValidation("La valeur du FC doit etre comprise entre 0 et 150 bpm"); return }
        if (sao2 > 100 || sao2 < 0 || sao2 === undefined) { setValidation("Le pourcentage de SaO2  doit etre compris entre 0 % et 100 % !"); return }
        if (pa_sys > 200 || pa_sys < 80 || pa_sys === undefined) { setValidation("La pression arterielle systolique doit ete comprise entre 80 et 200 !"); return }
        if (pa_dya > 200 || pa_dya < 80 || pa_dya === undefined) { setValidation("La pression arterielle systolique doit ete comprise entre 40 et 150!"); return }
        if (scoreGlas > 15 || scoreGlas < 0 || scoreGlas === undefined) { setValidation("Le score de Glasgow doit etre entre 0 et 15 !") }
        if (scoreGlas1 > 15 || scoreGlas1 < 0 || scoreGlas1 === undefined) { setValidation("Le score de Glasgow doit etre entre 0 et 15 !") }
        var x = examOro.replace("Autre", "Autre:" + autreInputOro)
        var values = {
            fr: fr,
            fc: fc,
            pa_sys: pa_sys,
            pa_dya: pa_dya,
            sao2: sao2,
            scoreGlas: scoreGlas,
            scoreGlas1: scoreGlas1,
            poids: poids,
            taille: taille,
            examOro: examOro.replace("Autre", "Autre:" + autreInputOro),
            examPulmo: examPulmo.replace("Autre", "Autre:" + autreInputPul),
            examOphta: examOphta.replace("Autre", "Autre:" + autreInputOphta),
            examCut: examCut.replace("Autre", "Autre:" + autreInputCut),
            examNeuro: examNeuro.replace("Autre", "Autre:" + autreInputNeuro),
            examCardio: examCardio.replace("Autre", "Autre:" + autreInputCar),
            autre: autre,
            temperature: temperature,
        }
        //console.log(values)
        props.addExamCli(props.patientList["cin"], values)
        props.navigation.navigate("DiagnosticDetails")
    }



    return (
        <div className="landing-background18">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
        <MDBContainer  >
              <MDBRow>
                <MDBCol >
                  <MDBCard style={{backgroundColor:"#c9cecb"}}>
                  <form>
                  <h2 class="font-weight-bold text-center p-5 text-primary">Examen clinique a l'admission</h2>
                  <label class="form-label mx-4">{validation}</label>
                  <FormInput5 placeholder="Température en °C"   min={33}   max={44}   onChangeText={setTemperature} />
                <FormInput5 placeholder="FR  C/min"   min={0}   max={250}   onChangeText={setFr} />
                <FormInput5 placeholder="FC bpm"   min={0}   max={150}   onChangeText={setFc} />
                <FormInput5 placeholder="SaO2 %"   min={0}   max={100}   onChangeText={setSao2} />
                <FormInput2 placeholder1="PA systolique" placeholder2="PA diastolique" onChangeText1={setPa_sys} onChangeText2={setPa_dya} />
                <FormInput2 placeholder1="Score de Glasgow"   placeholder2="15" onChangeText1={setScoreGlas} onChangeText2={setScoreGlas1} />
                <FormInput5 placeholder="Poids kg"   min={0}   max={500}   maxLength={Number("3")} onChangeText={setPoids} />
                <FormInput5 placeholder="Taille m" min={0}   max={3}  onChangeText={setTaille}  maxLength={Number("3")}/>
                <FormButton2 title="Examen oro-pharyngé" onPress={() => setOro(!oro)}/>
                {
                    oro === true &&
                    <div>
                        <FormCheckBox text='Gorge Rouge' value={false} onPress={handleExamOroChange} />
                        <FormCheckBox text="Hypertrophie des amygdales" value={false} onPress={handleExamOroChange} />
                        <FormCheckBox text="Anosmie" value={false}  onPress={handleExamOroChange} />
                        <FormCheckBox text=" Agueusie" value={false}  onPress={handleExamOroChange} />
                        <FormCheckBox text=" Autre" value={false}  onPress={handleExamOroChange} />


                    </div>


                }
                {autreOro === true && oro === true && <div ><FormInput placeholder="Autre" onChangeText={handleChangeAutreOro} /></div>}
                <FormButton2 title="Examen pulmonaire" onPress={() => setPul(!pul)}/>
                {
                    pul === true &&
                    <div>
                        <FormCheckBox text="Tirage intercostal" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Tirage sus-sternal" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Silence auscultoire" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Hyper-sonorité" value={false} onPress={handleExamPulChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamPulChange} />
                    </div>

                }
                {autrePul === true && pul === true && <div ><FormInput placeholder="Autre" onChangeText={handleChangeAutrePul} /></div>}
                <FormButton2 title="Examen ophtalmologique" onPress={() => setOph(!oph)}/>
                {
                    oph === true &&
                    <div>
                        <FormCheckBox text="Hyperhèmie conjonctivale unilatérale" value={false} onPress={handleExamenOphtaChange} />
                        <FormCheckBox text="Hyperhèmie conjonctivale bilatérale" value={false} onPress={handleExamenOphtaChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamenOphtaChange} />
                    </div>
                }
                {autreOphta === true && oph === true && <div ><FormInput placeholder="Autre" onChangeText={handleChangeAutreOpht} /></div>}
                <FormButton2 title="Examen cutané" onPress={() => setCut(!cut)}/>
                {
                    cut === true && <div>
                        <FormCheckBox text="Erruption maculo-papuleuse géneralisée" value={false} onPress={handleExamCutChange} />
                        <FormCheckBox text="Erruption purpurique" value={false} onPress={handleExamCutChange} />
                        <FormCheckBox text="Engelure" value={false} onPress={handleExamCutChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamCutChange} />
                    </div>
                }
                {autreCut === true && cut === true && <div ><FormInput placeholder="Autre" onChangeText={handleChangeAutreCut} /></div>}
                <FormButton2 title="Examen neurologique" onPress={() => setNeu(!neu)}/>
                {
                    neu === true && <div>
                        <FormCheckBox text="Désorientation temporo-spatiale" value={false} onPress={handleExamNeuroChange} />
                        <FormCheckBox text="Agitation" value={false} onPress={handleExamNeuroChange} />
                        <FormCheckBox text="Trouble de comportement" value={false} onPress={handleExamNeuroChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamNeuroChange} />
                    </div>
                }
                {autreNeuro === true && neu === true && <div ><FormInput placeholder="Autre" onChangeText={handleChangeAUtreNeu} /></div>}
                <FormButton2 title="Examen cardiovasculaire" onPress={() => setCard(!card)}/>
                {
                    card === true &&
                    <div>
                        <FormCheckBox text="Assourdissement des bruits du coeur" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Rythme cardiaque irrégulier" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Souffre cardiaque si oui" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Froideur des extrémités" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Marbures aux genoux /generalisées" value={false} onPress={handleExamenCarChange} />
                        <FormCheckBox text="Autre" value={false} onPress={handleExamenCarChange} />
                    </div>

                }
                {autreCar === true && card === true && <div ><FormInput placeholder="Autre" onChangeText={handleChangeAutreCar} /></div>}
                <FormButton2 title="Autres éléments de l'examen physique" onPress={() => setAut(!aut)}/>
                {aut && <div ><FormInput placeholder="Précisier" onChangeText={handleAutreChange} /></div>}
                <form class="row justify-content-center">
                <FormButton title="Retour" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
                <FormButton title="Enregistrer" onPress={handleSubmit} />
                </form>
                   </form>

                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </div>
            <Steps current={7} class="col-md-6"/>
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
    addExamCli: actions.addExamCli
};
export default connect(mapStateToProps, mapActionToProps)(ExamenCliniques);
