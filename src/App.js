import React, {Component} from 'react';
import './App.css';
import {PunshesContext} from "./PunshesContext";
import Policeman from "./Components/Policeman";
import AminesHand from "./Components/AminesHand";
import Ui from "./Components/UI";

class App extends Component {

    // policeman
    // amines hand
    // bunch btn
    // score
    // intro vs score animation

    constructor(props) {
        super(props);
        this.state = {
            score: {
                value: 0,
                setScore: this.setScore
            },
            punsh: {
                value: false,
                setPunsh: this.setPunsh,
            }
        };
    }


    setScore = (value) => {
        this.setState({ score: {
                ...this.state.score,
                value: value,
            } });
    };

    setPunsh = (value) => {
        this.setState({ punsh: {
                ...this.state.punsh,
                value: value,
            } });
    };


    render() {
        return (
            <div className="App">
                <PunshesContext.Provider value={{score: this.state.score, punsh: this.state.punsh}}>
                <div className="background">

                    <Policeman/>
                    <AminesHand/>
                    <Ui/>

                </div>
                </PunshesContext.Provider>
            </div>
        );
    }
}

export default App;
