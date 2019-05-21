import React, {Component} from 'react';
import PlicemanImg from '../media/policeman.png'
import {PunshesContext} from "../PunshesContext";
import PolicemanFoot from '../media/policeman-foot.png';
import Smack from "../media/smack-png-13.png"


class Policeman extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        let punshing = this.context.punsh.value ? {zoom: "130%", display: "none"} : {transform: "rotate(5deg)"};
        let police = this.context.punsh.value ? {transformStyle: "preserve-3d", transform: "rotateX(-5deg)"} : {  };
        let smack = this.context.punsh.value ? {opacity: 1} : {  opacity: 0 };
        return (
            <>
                <img src={Smack} style={{...styles.smack, ...smack}} alt=""/>
                <img src={PlicemanImg} style={{...styles.img, ...police}} alt=""/>
                <img src={PolicemanFoot} style={{...styles.img, ...punshing}} alt=""/>
            </>
        );
    }
}

Policeman.contextType = PunshesContext;

let styles = {
    img: {
        padding: 0,
        margin: 0,
        zoom: "130%",
        position:"absolute",
        left: 0,
        top: 0,
        transition: "all 0.2s ease",


        // border: "1px solid blue"
    },
    smack: {
        width: "100%",
        padding: 0,
        margin: 0,
        zoom: "130%",
        position:"absolute",
        left: 0,
        top: 0,
        transition: "all 0.1s ease",
    }
};

export default Policeman;