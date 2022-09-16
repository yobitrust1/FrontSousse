import React from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';


const Dashbord = (props) => {
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


      <div>
      <div class="big">
      <Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
            <View style={tailwind(' items-center ')} >
                <View style={tailwind('py-24')}>
                    <FormButton title="Save File" onPress={() => { props.navigation.navigate("Dash1") }} />
                    <FormButton title="Dash2" onPress={() => { props.navigation.navigate("Dash2") }} />
                    <FormButton title="Dash3" onPress={() => { props.navigation.navigate("Dash3") }} />
                    <FormButton title="Dash4" onPress={() => { props.navigation.navigate("Dash4") }} />
                </View>

                <FormButton title="Retour" onPress={() => { props.navigation.navigate("SearchPatient") }} />

            </View>
            </Container>
</div>
<ParticlesBg type="cobweb" config={config} bg={true} />
</div>

    );
};

const mapStateToProps = (state) => ({
    patientList: state.medicalService.patientList
});
const mapActionToProps = {
};

export default connect(mapStateToProps, mapActionToProps)(Dashbord);
