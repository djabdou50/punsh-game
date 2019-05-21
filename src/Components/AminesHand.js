import React, {Component} from 'react';
import AminesHandImg from "../media/ar-hand.png";
import {PunshesContext} from "../PunshesContext";

class AminesHand extends Component {
    render() {
        let shake = this.context.punsh.value ? {} : {transform: "rotate(-5deg)"};
        return (
            <>
                <img src={AminesHandImg} style={{...styles.img, ...shake}} alt=""/>
            </>
        );
    }
}

AminesHand.contextType = PunshesContext;

let styles = {
    img: {
        padding: 0,
        margin: 0,
        // zoom: "100%",
        position:"absolute",
        left: 50,
        top: 110,
    }
};

export default AminesHand;