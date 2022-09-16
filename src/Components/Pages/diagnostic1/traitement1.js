import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from '../../Form/FormInput';
import FormButton from '../../Form/FormButton';
import FormButton2 from '../../Form/FormButton2';
import FormInput3 from '../../Form/FormInput3';
import CaracCls from "../../Form/CaracCls";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
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



const Traitement1 = (props) => {

    const [trait, setTrait] = useState(true)
    const [dateD, setDateD] = useState()
    const [dateF, setDateF] = useState()
    const [pactt, setPactt] = useState()
    const [dosage, setDosage] = useState()
    const [autre, setAutre] = useState()

    //carac
    const [lop, setLop] = useState(false)
    const [chlo, setChlo] = useState(false)
    const [hydro, setHydro] = useState(false)
    const [azith, setAzith] = useState(false)
    const [rem, setRem] = useState(false)
    const [od, setOd] = useState(false)
    const [hfnc, setHfnc] = useState(false)
    const [cpap, setCpap] = useState(false)
    const [vni, setVni] = useState(false)
    const [vmi, setVmi] = useState(false)
    const [para, setPara] = useState(false)
    const [anti, setAnti] = useState(false)
    const [hdo, setHdo] = useState(false)
    const [ado, setAdo] = useState(false)
    const [insul, setinsul] = useState(false)
    const [nebC, setNebC] = useState(false)
    const [nebB, setNebB] = useState(false)
    const [amoxi, setAmoxi] = useState(false)
    const [cefo, setCefo] = useState(false)
    const [ceft, setCeft] = useState(false)
    const [autreA, setAutreA] = useState(false)
  
    var handleAutreChange= (data) => {
      setAutre(data)
}
var handlePacttChange = (data) => {
  setPactt(data.target.value)
 }
    var handleDoseChange = (data) => {
            setDosage(data)
    }
    var handledateD = (data) => {
        setDateD(data.target.value)
           }
           var handledateF = (data) => {
            setDateF(data.target.value)
               }

    var handleTraitChange = (data) => {
    if (data.target.value==="Oui")
        setTrait(true)
    else setTrait(false)
}
    var handleSubmitCarac = (item) => {
        var values = {
            type: item,
            trait:trait,
            dateD: dateD,
            dateF: dateF,
            pactt:pactt,
            dosage:dosage,
            autre:autre,
        }
        console.log(values)
        props.addTraitment(props.patientList["cin"], values)

    }
    //functions
    return (
        <div className="landing-background16">
      <div class="row">
<div class=" d-flex  m-4 col-md-6  " >
        <MDBContainer  >
              <MDBRow>
                <MDBCol >
                  <MDBCard style={{backgroundColor:"#c9cecb"}}>
                  <form>
                  <h2 class="font-weight-bold text-center p-5 text-primary">Traitement</h2>
                  <div class="row mx-4">
      <label class="form-label mx-3">Traitement ?</label>
      <div class="form-check mx-1">
      <label class="form-check-label" for="1203">
      <input  class="form-check-input" id="1203" onChange={handleTraitChange} type="radio" value="Oui" name="gender" />Oui
      </label>
      </div>
      <div class="form-check mx-1">
      <label class="form-check-label" for="1452">
      <input  class="form-check-input" id="1452" onChange={handleTraitChange} type="radio" value="Non" name="gender" />Non
      </label>
      </div>
      </div>
      <div  >
      <div class="row mx-4 p-3">
    <InputRd  id="66461" name1="Bras 1" onChange={handlePacttChange} type="radio" value="PathRespChronique" name="gender1" />
    <InputRd  id="24646" name1="Bras 2" onChange={handlePacttChange} type="radio" value="Cardiopathies" name="gender1" />
    <InputRd  id="46463" name1="Non" onChange={handlePacttChange} type="radio" value="TrRythCardiaque" name="gender1" />
    </div>
    </div>

      {
                trait === true &&
                <div>

                    
                    <FormButton2 title="Lopinavir/ritonavir" onPress={() => setLop(!lop)}/>
                    {
                        lop === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Lopinavir_ritonavir")} />
                        </div>
                    }
                    <FormButton2 title="Chloroquine phosphate" onPress={() => setChlo(!chlo)}/>
                    {
                        chlo === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Chloroquine_phosphate")} />
                        </div>
                    }
                    <FormButton2 title="Hydroxy-Chloroquine " onPress={() => setHydro(!hydro)}/>
                    {
                        hydro === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Hydroxy_Chloroquine")} />
                        </div>
                    }
                    <FormButton2 title="Azithromycine" onPress={() => setAzith(!azith)}/>
                    {
                        azith === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Azithromycine")} />
                        </div>
                    }
                    <FormButton2 title="Remdesivir" onPress={() => setRem(!rem)}/>
                    {
                        rem === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Remdesivir")} />
                        </div>
                    }
                    <FormButton2 title="O2" onPress={() => setOd(!od)}/>
                    {
                        od === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("O2")} />
                        </div>
                    }
                    <FormButton2 title="HFNC" onPress={() => setHfnc(!hfnc)}/>
                    {
                        hfnc === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("HFNC")} />
                        </div>
                    }
                    <FormButton2 title="CPAP" onPress={() => setCpap(!cpap)}/>
                    {
                        cpap === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("CPAP")} />
                        </div>
                    }
                    <FormButton2 title="VNI" onPress={() => setVni(!vni)}/>
                    {
                        vni === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("VNI")} />
                        </div>
                    }
                    <FormButton2 title="VMI" onPress={() => setVmi(!vmi)}/>
                    {
                        vmi === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("VMI")} />
                        </div>
                    }
                    <FormButton2 title="Paracétamol" onPress={() => setPara(!para)}/>
                    {
                        para === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Paracetamol")} />
                        </div>
                    }
                    <FormButton2 title="Anti coagulant" onPress={() => setAnti(!anti)}/>
                    {
                        anti === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Anti_coagulant")} />
                        </div>
                    }
                    <FormButton2 title="H2O" onPress={() => setHdo(!hdo)}/>
                    {
                        hdo === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("H2O")} />
                        </div>
                    }
                    <FormButton2 title="ADO" onPress={() => setAdo(!ado)}/>
                    {
                        ado === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("ADO")} />
                        </div>
                    }
                    <FormButton2 title="Insulinothérapie" onPress={() => setinsul(!insul)}/>
                    {
                        insul === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Insulinotherapie")} />
                        </div>
                    }
                    <FormButton2 title="Nébulisation corticoïdes" onPress={() => setNebC(!nebC)}/>
                    {
                        nebC === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Nebulisation_corticoides")} />
                        </div>
                    }
                    <FormButton2 title="Nébulisation bronchodilatateurs" onPress={() => setNebB(!nebB)}/>
                    {
                        nebB === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Nebulisation_bronchodilatateurs")} />
                        </div>
                    }
                    <FormButton2 title="Amoxicilline/ Acide clavulanique" onPress={() => setAmoxi(!amoxi)}/>
                    {
                        amoxi === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Amoxicilline")} />
                        </div>
                    }
                    <FormButton2 title="Cefotaxime" onPress={() => setCefo(!cefo)}/>
                    {
                        cefo === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Cefotaxime")} />
                        </div>
                    }
                    <FormButton2 title="Ceftriaxone" onPress={() => setCeft(!ceft)}/>
                    {
                        ceft === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Ceftriaxone")} />
                        </div>
                    }
                    <FormButton2 title="Autre" onPress={() => setAutreA(!autreA)}/>
                    {
                        autreA === true && <div>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Autre"onChangeText={handleAutreChange}/>
                          <FormInput3 mask="aaaaaaaaaaa" placeholder="Dosage"onChangeText={handleDoseChange}/>
                            <CaracCls dateD={dateD} dateF={dateF} setDateD={handledateD} setDateF={handledateF} onPress={ handleSubmitCarac("Autre")} />
                        </div>
                    }
                    

                </div>
            }
                   <form class="row justify-content-center">
                   <FormButton title="Retour" onPress={() => { props.navigation.navigate("ExamBio1") }} />
                    {trait === false && <FormButton title="Enregistrer" onPress={() => { handleSubmitCarac(""); props.navigation.navigate("Traitement1") }} />}
                    <FormButton title="Suivant" onPress={() => { props.navigation.navigate("Evolution1") }} />
                   </form>
                   </form> 
                    
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            </div>
            <Steps  current={10} class="col-md-10"/>  
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
    addTraitment: actions.addTraitment
};

export default connect(mapStateToProps, mapActionToProps)(Traitement1);
