import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput5 from "../../Form/FormInput5";
import FormButton from "../../Form/FormButton";
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


const SearchPatient1 = (props) => {
  var test=JSON.parse(localStorage.getItem("loggedUser"));

  useEffect(() => {
    props.search(search,test.username)
  }, [])


  const [search, setSearch] = useState(0)
  const [search2, setSearch2] = useState(0)

  const handleSearchChange = (text) => {
    setSearch(text)
    //console.log(search)
  }
  const handleSearch = () => {
    setSearch2(search)
    console.log(search)
    props.search(search,test.username)


  }
  return (
    <section className="landing-background">
    <div class="fas fa-3x d-flex align-items-center m-4 " style={{height: "550px"}}>
<MDBContainer  style={{height: "350px"}}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
          <form>
          <h2 class="font-weight-bold text-center p-5 text-primary">Search Patient</h2>
          
          <FormInput5
            placeholder="Search...Type CIN"
            onChangeText={handleSearchChange}
            
            min={0}   max={1000000000}       />
          <FormButton title="Rechercher" onPress={handleSearch} />
          <label class="form-label mx-4">
              {(search2 != 0) && ((typeof (props.patientList) === 'string' && props.patientList) ||
                (
                  <div >
                  <label class="form-label mx-4">patient:</label>
                  <label class="form-label mx-4">Nom:{props.patientList["generalInformation"]["nom"]}</label>
                  <label class="form-label mx-4">prenom:{props.patientList["generalInformation"]["prenom"]}</label>
                    <FormButton title="Suivant" onPress={() => { props.navigation.navigate("Exposition1") }} />
                  </div>
                ))}

            </label>
            <form class="row">
            <FormButton title="Ajouter un patient" onPress={() => { props.navigation.navigate("AddPatient"); }} />
          <FormButton title="Annuler" onPress={() => { props.navigation.navigate("Home"); }} />
            </form>
           </form> 
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  search: actions.searchPatient
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

export default connect(mapStateToProps, mapActionToProps)(SearchPatient1);
