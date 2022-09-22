import React, { useState, useEffect } from 'react';
import FormButton from "../Form/FormButton";
import Container from '@material-ui/core/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';
import Modal from "react-responsive-modal";
const Open = (props) => {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
 
  return (
    <>
    <section className="landing-background">
<div class=" d-flex align-items-center m-4 " style={{height: "550px"}}>
<div >
<h1>Plate-forme VRR-Sars-Cov</h1>
<h1>et autre maladie infectieuse</h1>
<Container class="rounded d-inline-flex p-2" style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main"  >
<div class="row d-flix justify-centent-center">
<FormButton title="Admin" onPress={() => props.navigation.navigate("Admin")} />
<FormButton title="User" onPress={() => props.navigation.navigate("Login")} />

</div>
</Container>
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


export default Open;
