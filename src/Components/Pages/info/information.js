import React from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text} from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';


const Information = (props) => {
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
                    <FormButton title="Informations générales" onPress={() => { props.navigation.navigate("InfosGenerales2") }} />
                    <FormButton title="Habitudes de vie" onPress={() => { props.navigation.navigate("HabitudesDeVie") }} />
                    <FormButton title="Antécédents médicaux" onPress={() => { props.navigation.navigate("AntecendentsMedicaux") }} />
                    <FormButton title="Expositions a risque" onPress={() => { props.navigation.navigate("Exposition") }} />
                    <FormButton title="Diagnostics" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
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
export default connect(mapStateToProps, mapActionToProps)(Information);
