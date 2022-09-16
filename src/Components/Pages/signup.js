import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import MDBInput from "../Form/FormInput4";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { Text, View, Image} from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
import SideNav from '../Form/SideNav'
import MaskedInput from "react-text-mask";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)
const Login = (props) => {
  useEffect(() => {
  }, [props.loggedUser])
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [hospitalName,setHospitalName ] = useState();
  const [medicalServiceName, setMedicalServiceName] = useState();
  const [address, setAddress] = useState();

  const handleHospitalNameChange = (text) => {
    setHospitalName(text)

  }
  const handleMedicalServiceNameChange = (text) => {
    setMedicalServiceName(text)

  }
  const handleAddressChange = (text) => {
    setAddress(text)

  }
  const handleUsernameChange = (text) => {
    setUsername(text)
    
  }

  const handlePasswordChange = (text) => {

    setPassword(text)
    
  }

  const handleSubmit = (e) => {
    const values = {
      username: username,
      password: password,
      hospitalName:hospitalName,
      medicalServiceName:medicalServiceName,
      address:address,
    }
    e.preventDefault();
    props.login(values);
    console.log(localStorage.getItem("loggedUser1"))
    if(props.loggedUser1 == "Ok"){
      props.navigation.navigate("Home")
    }
  }

  return (
    <section className="landing-background1">
      <div class=" d-flex align-items-center m-4 " style={{height: "550px"}}>
<MDBContainer  style={{height: "350px"}}>
      <MDBRow>
        <MDBCol md="6">
        {(props.loggedUser !== null) && typeof (props.loggedUser) !== 'string' && (props.navigation.navigate("Home"))}
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChangeText={handleUsernameChange}
              />
              
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
                onChangeText={handlePasswordChange}
              />
              <MDBInput
                label="Hospital Name"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChangeText={handleHospitalNameChange}
              />
              <MDBInput
                label="Medical Service Name"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChangeText={handleMedicalServiceNameChange}
              />
              <MDBInput
                label="Address"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChangeText={handleAddressChange}
              />
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={handleSubmit}
                >
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </section>
  );
};


const mapStateToProps = (state) => ({
  loggedUser1: state.medicalService.loggedUser1,
});
const mapActionToProps = {
  signup: actions.signup,
};
export default connect(mapStateToProps, mapActionToProps)(Login);
