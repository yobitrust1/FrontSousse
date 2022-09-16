import React from 'react';
import { Steps } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
const Steps1 = (props) => {
  return (
    <>
     <div class="font-weight-bold ">
    <Steps  current={props.current} vertical >
      <Steps.Item title="Informations générales" />
      <Steps.Item title="Expositions à Risque" />
      <Steps.Item title="Antécédents medicaux" />
      <Steps.Item title="Habitudes de vie"  />
      <Steps.Item title="Confirmation diagnostique"  />
      <Steps.Item title="Admission d'un cas confirmé"  />
      <Steps.Item title="Caractéristiques cliniques du cas"  />
      <Steps.Item title="Examen clinique a l'admission"  />
      <Steps.Item title="Examens radiologiques et para-cliniques"  />
      <Steps.Item title="Examens Biologiques"  />
      <Steps.Item title="Traitement"  />
      <Steps.Item title="Evolution"  />
      <Steps.Item title="Evaluation finale"  />
      <Steps.Item title="Save File"  />
    </Steps>
  </div>
    </>
  );
};
const styles1 = {
    width: '150px',
    display: 'inline-table',
    verticalAlign: 'top'
  };
export default Steps1;
