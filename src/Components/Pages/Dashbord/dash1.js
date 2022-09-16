import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./upload-files.component";
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import '../home.css';
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
function Dash1(props) {
  return (
    <section className="landing-background2">
    <div class=" d-flex align-items-center m-4 " style={{height: "550px"}}>
  <MDBContainer  style={{height: "350px"}}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
          <form>
          <div className="container" >
        <div style={{ margin: "20px" }}>
          <h3>upload</h3>
          <h4>React upload Files</h4>
        </div>
        <UploadFiles />
        <FormButton title="Retour" onPress={() => { props.navigation.navigate("SearchPatient") }} />
      </div>
          </form>


          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </section>
  );
}

export default Dash1;
