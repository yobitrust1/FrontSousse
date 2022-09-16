import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import MDBInput from "../../Form/FormInput4";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { Text, View, Image} from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css";
import '../login.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import SideNav from '../../Form/SideNav'
import MaskedInput from "react-text-mask";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
const Admin = (props) => {
  useEffect(() => {
  }, [props.loggedUser])
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();



  const handleUsernameChange = (text) => {
    setUsername(text)

  }

  const handlePasswordChange = (text) => {
    setPassword(text)

  }

  const handleSubmit = (e) => {
    const values = {
      username: username,
      password: password
    }
    e.preventDefault();
    props.loginAdmin(values);
    console.log(localStorage.getItem("loggedUserAdmin"))
  }

  return (
    <section className="landing-background1">
      <div class=" d-flex align-items-center m-4 " style={{height: "550px"}}>
<MDBContainer  style={{height: "350px"}}>
      <MDBRow>
        <MDBCol md="6">
      {(props.loggedUserAdmin !== null) && typeof (props.loggedUserAdmin) !== 'string' && (props.navigation.navigate("HomeAdmin"))}          <MDBCard>
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
  loggedUserAdmin: state.medicalService.loggedUserAdmin,
});
const mapActionToProps = {
  loginAdmin: actions.loginAdmin,
};
export default connect(mapStateToProps, mapActionToProps)(Admin);
