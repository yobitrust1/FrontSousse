import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import FormCheckBox from "../Form/CheckBox";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text } from 'react-native';
import { AsyncStorage } from 'AsyncStorage';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import './home.css';
import Modal from "../Form/modal";
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
const Home = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const logout = (e) => {


    props.logout();
    AsyncStorage.setItem("loggedUser", JSON.stringify(null))
    props.navigation.navigate("Login")
    console.log(AsyncStorage.getItem("loggedUser"));

    console.log(props.loggedUser)

  }
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


  return (

    <>
    
    <section className="landing-background">
<div class=" d-flex align-items-center m-4 " >
<div >

<h2>Plate-forme VRR-Sars-Cov</h2>
<h2>et autre maladie infectieuse</h2>
<MDBRow>
<MDBCol md='2' >
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={img1}              
              alt='food'
            />
          </MDBView>
          <MDBCardBody>
            <h5 className='user-edit'>
              <MDBIcon icon='fas fa-user-edit' /> 
            </h5>
            <MDBCardTitle className='font-weight-bold'>
            Créer un dossier patient
            </MDBCardTitle>
            <MDBBtn color='unique' onClick={() => props.navigation.navigate("AddPatient")}>Suivant</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
<MDBCol md='2'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src={img2}
              alt='food'
            />
          </MDBView>
          <MDBCardBody>
            <h5 className='user'>
              <MDBIcon icon='fas fa-user' /> 
            </h5>
            <MDBCardTitle className='font-weight-bold'>
            Rechercher un dossier patient
            </MDBCardTitle>
            <MDBBtn color='unique' onClick={() => props.navigation.navigate("SearchPatient")}>Suivant</MDBBtn>
            
          </MDBCardBody>
        </MDBCard>
        
      </MDBCol>

</MDBRow>
<FormButton title="Deconnexion" onPress={logout} />



</div>
</div>
    </section>
 </>
  );
};
const mystyle = {
      color: "white",

      backgroundposition: "center",
      backgroundrepeat: "no-repeat",
      backgroundsize: "cover"
    };
const mapStateToProps = (state) => ({
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout
};

export default connect(mapStateToProps, mapActionToProps)(Home);
