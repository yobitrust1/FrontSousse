import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./Actions/store";
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./Components/Pages/login";
import AntecedentsList from "./Components/Pages/antecedentsList";
import Admin from "./Components/Pages/admin/Admin";
import Csv from "./Components/Pages/admin/csv";
import HomeAdmin from "./Components/Pages/admin/homeAdmin";
import FilePatient from "./Components/Pages/admin/filePatient";
import Patient from "./Components/Pages/admin/patient";
import Home from "./Components/Pages/home";
import Open from "./Components/Pages/open";
import AddPatient from "./Components/Pages/addPatient";
import SearchPatient from "./Components/Pages/searchPatient";
import SearchPatient1 from "./Components/Pages/save/searchPatient1";
import PatientDetails from "./Components/Pages/patientDetails";
import Information from "./Components/Pages/info/information";
import Info from "./Components/Pages/info/info";
import Dashbord from "./Components/Pages/dashbord";
import HabitudesDeVie from "./Components/Pages/habitudesDeVie";
import HabitudesDeVie1 from "./Components/Pages/save/habitudesDeVie1";
import InfosGenerales from "./Components/Pages/infosGenerales";
import AntecendentsMedicaux from "./Components/Pages/antecedentsMedicaux";
import AddAntecendentsMedicaux from "./Components/Pages/addAntecedentsMedicaux";
import AddAntecendentsMedicaux1 from "./Components/Pages/save/addAntecedentsMedicaux1";
import PathRespChronique from "./Components/Pages/antecedentsMedicaux/pathRespChronique";
import Cardiopathies from "./Components/Pages/antecedentsMedicaux/cardiopathies";
import TrRythCardiaque from "./Components/Pages/antecedentsMedicaux/trRythCardiaque";
import HTA from "./Components/Pages/antecedentsMedicaux/hta";
import Diabete from "./Components/Pages/antecedentsMedicaux/diabete";
import InsRenaleChro from "./Components/Pages/antecedentsMedicaux/insRenaleChro";
import AVC from "./Components/Pages/antecedentsMedicaux/avc";
import Retinopathie from "./Components/Pages/antecedentsMedicaux/retinopathie";
import ATCDchir from "./Components/Pages/antecedentsMedicaux/ATCDchir";
import AutresATCD from "./Components/Pages/antecedentsMedicaux/autresATCD";
import Grossesse from "./Components/Pages/antecedentsMedicaux/grossesse";
import PriseAINS from "./Components/Pages/antecedentsMedicaux/priseAINS";
import Immunosuppreseur from "./Components/Pages/antecedentsMedicaux/immunosuppreseur";

import PathRespChronique1 from "./Components/Pages/antecedentsMedicaux1/pathRespChronique1";
import Cardiopathies1 from "./Components/Pages/antecedentsMedicaux1/cardiopathies1";
import TrRythCardiaque1 from "./Components/Pages/antecedentsMedicaux1/trRythCardiaque1";
import HTA1 from "./Components/Pages/antecedentsMedicaux1/hta1";
import Diabete1 from "./Components/Pages/antecedentsMedicaux1/diabete1";
import InsRenaleChro1 from "./Components/Pages/antecedentsMedicaux1/insRenaleChro1";
import AVC1 from "./Components/Pages/antecedentsMedicaux1/avc1";
import Retinopathie1 from "./Components/Pages/antecedentsMedicaux1/retinopathie1";
import ATCDchir1 from "./Components/Pages/antecedentsMedicaux1/ATCDchir1";
import AutresATCD1 from "./Components/Pages/antecedentsMedicaux1/autresATCD1";
import Grossesse1 from "./Components/Pages/antecedentsMedicaux1/grossesse1";
import PriseAINS1 from "./Components/Pages/antecedentsMedicaux1/priseAINS1";
import Immunosuppreseur1 from "./Components/Pages/antecedentsMedicaux1/immunosuppreseur1";
import DiagnosticDetails from "./Components/Pages/diagnosticDetails";
import CaracCliniques from "./Components/Pages/diagnostic/CaracCliniques";
import Admission from "./Components/Pages/diagnostic/admission";
import Traitement from "./Components/Pages/diagnostic/traitement";
import Exposition from "./Components/Pages/diagnostic/exposition";
import ExamBio from "./Components/Pages/diagnostic/examBio";
import ConfirmationDiag from "./Components/Pages/diagnostic/confirmationDiag";
import EvaluationFinale from "./Components/Pages/diagnostic/evaluationFinale";
import Dash1 from "./Components/Pages/Dashbord/dash1";
import Dash2 from "./Components/Pages/Dashbord/dash2";
import Json1 from "./Components/Pages/json/json1";
import Json2 from "./Components/Pages/json/json2";
import Json3 from "./Components/Pages/json/json3";
import Json4 from "./Components/Pages/json/json4";
import Json5 from "./Components/Pages/json/json5";
import Json6 from "./Components/Pages/json/json6";
import Json7 from "./Components/Pages/json/json7";
import Json8 from "./Components/Pages/json/json8";
import Json9 from "./Components/Pages/json/json9";
import Json10 from "./Components/Pages/json/json10";
import Json11 from "./Components/Pages/json/json11";
import Json12 from "./Components/Pages/json/json12";
import Json1_2 from "./Components/Pages/json/json1_2";
import ExamenCliniques from "./Components/Pages/diagnostic/examenCliniques";
import ExamenRadioParaCli from "./Components/Pages/diagnostic/examenRadioParaCli";
import Evolution from "./Components/Pages/diagnostic/evolution";


import Exposition1 from "./Components/Pages/diagnostic1/exposition1";
import ConfirmationDiag1 from "./Components/Pages/diagnostic1/confirmationDiag1";
import Admission1 from "./Components/Pages/diagnostic1/admission1";
import CaracCliniques1 from "./Components/Pages/diagnostic1/CaracCliniques1";
import ExamenCliniques1 from "./Components/Pages/diagnostic1/examenCliniques1";
import ExamenRadioParaCli1 from "./Components/Pages/diagnostic1/examenRadioParaCli1";
import EvaluationFinale1 from "./Components/Pages/diagnostic1/evaluationFinale1";
import ExamBio1 from "./Components/Pages/diagnostic1/examBio1";
import Traitement1 from "./Components/Pages/diagnostic1/traitement1";
import Evolution1 from "./Components/Pages/diagnostic1/evolution1";

import InfosGenerales2 from "./Components/Pages/info/infosGenerales2";
const App = () => {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer >

<Stack.Navigator initialRouteName="Open" screenOptions={{
          headerShown: false

        }}
        >
          <Stack.Screen name="Open" component={Open} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Admin" component={Admin} />
          <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
          <Stack.Screen name="FilePatient" component={FilePatient} />
          <Stack.Screen name="Patient" component={Patient} />
          <Stack.Screen name="Csv" component={Csv} />
          <Stack.Screen name="AddPatient" component={AddPatient} />
          <Stack.Screen name="SearchPatient" component={SearchPatient} />
          <Stack.Screen name="SearchPatient1" component={SearchPatient1} />
          <Stack.Screen name="PatientDetails" component={PatientDetails} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="Info" component={Info} />
          <Stack.Screen name="Dashbord" component={Dashbord} />
          <Stack.Screen name="HabitudesDeVie" component={HabitudesDeVie} />
          <Stack.Screen name="HabitudesDeVie1" component={HabitudesDeVie1} />
          <Stack.Screen name="InfosGenerales" component={InfosGenerales} />
          <Stack.Screen name="AntecendentsMedicaux" component={AntecendentsMedicaux} />
          <Stack.Screen name="AddAntecendentsMedicaux" component={AddAntecendentsMedicaux} />
          <Stack.Screen name="AddAntecendentsMedicaux1" component={AddAntecendentsMedicaux1} />
          <Stack.Screen name="PathRespChronique" component={PathRespChronique} />
          <Stack.Screen name="Cardiopathies" component={Cardiopathies} />
          <Stack.Screen name="TrRythCardiaque" component={TrRythCardiaque} />
          <Stack.Screen name="HTA" component={HTA} />
          <Stack.Screen name="Diabete" component={Diabete} />
          <Stack.Screen name="InsRenaleChro" component={InsRenaleChro} />
          <Stack.Screen name="AVC" component={AVC} />
          <Stack.Screen name="Retinopathie" component={Retinopathie} />
          <Stack.Screen name="ATCDchir" component={ATCDchir} />
          <Stack.Screen name="AutresATCD" component={AutresATCD} />
          <Stack.Screen name="Grossesse" component={Grossesse} />
          <Stack.Screen name="PriseAINS" component={PriseAINS} />
          <Stack.Screen name="Immunosuppreseur" component={Immunosuppreseur} />

          <Stack.Screen name="PathRespChronique1" component={PathRespChronique1} />
          <Stack.Screen name="Cardiopathies1" component={Cardiopathies1} />
          <Stack.Screen name="TrRythCardiaque1" component={TrRythCardiaque1} />
          <Stack.Screen name="HTA1" component={HTA1} />
          <Stack.Screen name="Diabete1" component={Diabete1} />
          <Stack.Screen name="InsRenaleChro1" component={InsRenaleChro1} />
          <Stack.Screen name="AVC1" component={AVC1} />
          <Stack.Screen name="Retinopathie1" component={Retinopathie1} />
          <Stack.Screen name="ATCDchir1" component={ATCDchir1} />
          <Stack.Screen name="AutresATCD1" component={AutresATCD1} />
          <Stack.Screen name="Grossesse1" component={Grossesse1} />
          <Stack.Screen name="PriseAINS1" component={PriseAINS1} />
          <Stack.Screen name="Immunosuppreseur1" component={Immunosuppreseur1} />

          <Stack.Screen name="Admission" component={Admission} />
          <Stack.Screen name="DiagnosticDetails" component={DiagnosticDetails} />
          <Stack.Screen name="CaracCliniques" component={CaracCliniques} />
          <Stack.Screen name="Traitement" component={Traitement}/>
          <Stack.Screen name="Exposition" component={Exposition} />
          <Stack.Screen name="ExamBio" component={ExamBio} />
          <Stack.Screen name="ConfirmationDiag" component={ConfirmationDiag} />
          <Stack.Screen name="EvaluationFinale" component={EvaluationFinale} />
          <Stack.Screen name="Dash1" component={Dash1} />
          <Stack.Screen name="Dash2" component={Dash2} />
          <Stack.Screen name="Json1" component={Json1} />
          <Stack.Screen name="Json2" component={Json2} />
          <Stack.Screen name="Json3" component={Json3} />
          <Stack.Screen name="Json4" component={Json4} />
          <Stack.Screen name="Json5" component={Json5} />
          <Stack.Screen name="Json6" component={Json6} />
          <Stack.Screen name="Json7" component={Json7} />
          <Stack.Screen name="Json8" component={Json8} />
          <Stack.Screen name="Json9" component={Json9} />
          <Stack.Screen name="Json1_2" component={Json1_2} />
          <Stack.Screen name="Json10" component={Json10} />
          <Stack.Screen name="Json11" component={Json11} />
          <Stack.Screen name="Json12" component={Json12} />
          <Stack.Screen name="ExamenCliniques" component={ExamenCliniques} />
          <Stack.Screen name="ExamenRadioParaCli" component={ExamenRadioParaCli} />
          <Stack.Screen name="Evolution" component={Evolution}/>


          <Stack.Screen name="Exposition1" component={Exposition1} />
          <Stack.Screen name="ConfirmationDiag1" component={ConfirmationDiag1} />
          <Stack.Screen name="Admission1" component={Admission1} />
          <Stack.Screen name="CaracCliniques1" component={CaracCliniques1} />
          <Stack.Screen name="ExamenCliniques1" component={ExamenCliniques1} />
          <Stack.Screen name="ExamenRadioParaCli1" component={ExamenRadioParaCli1} />
          <Stack.Screen name="EvaluationFinale1" component={EvaluationFinale1} />
          <Stack.Screen name="ExamBio1" component={ExamBio1} />
          <Stack.Screen name="Traitement1" component={Traitement1}/>
          <Stack.Screen name="Evolution1" component={Evolution1}/>
          <Stack.Screen name="AntecedentsList" component={AntecedentsList}/>

          <Stack.Screen name="InfosGenerales2" component={InfosGenerales2} />
        </Stack.Navigator>

      </NavigationContainer>

    </Provider>
  );
};


export default App;
