import React, {Component} from 'react';
import PunchIMG from "../media/punch.png";
import {PunshesContext} from "../PunshesContext";
import Head from "../media/ar-head.png"

class Ui extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: {
                width: 100
            },
            counter: 0,
            gameOver: false,
            isStarted: false,
            maxGame: 60
        };
    }

    punch = (e, type) => {
        e.preventDefault();

        let {score, punsh} = this.context;
        // console.log(score)

        if(type === "down"){
            score.setScore(score.value + 1)
        }

        let width = type === "down" ? 120: 100;
        this.setState({
            img: {
                width: width
            }
        })

        let punshed = type === "down";
        punsh.setPunsh(punshed)
    };

    count = () => {

        setTimeout(() => {
            this.setState({
                counter : this.state.counter + 1
            });
            console.log( this.state.counter )
            if( this.state.counter < this.state.maxGame ) {
                this.count()
            }else {
                this.setState({
                    gameOver : true
                });
            }
        }, 1000 )

    };


    startGame = () => {

        this.setState({
            isStarted : true
        });

        this.count()
    };


    restartGame = () => {

        let {score} = this.context;

        score.setScore(0)

        this.setState({
            counter: 0,
            gameOver: false,
            isStarted: true,
        });

        this.count()
    };


    componentDidMount() {


    }


    render() {
        let cursor = (this.state.counter / this.state.maxGame) * 100 ;
        return (
            <>
                <img
                    src={PunchIMG}
                    style={{...styles.img, ...this.state.img}}
                    alt=""
                    // onClick={(e) => this.punch(e)}
                    onMouseDown={(e) => this.punch(e, "down")}
                    onMouseUp={(e) => this.punch(e, "out")}
                />
                <div className="score" style={styles.score} >
                    {this.context.score.value}
                </div>

                <div className="timer">
                    <span className="time">{this.state.counter} s</span>
                    <span className="cursor" style={{width: cursor + "%"}} ></span>
                </div>

                {this.state.gameOver ?
                <div className="overlay" style={{...styles.overlay}}>
                    <h1>Game Over</h1>
                    <p>Your Score</p>
                    <p>{this.context.score.value}</p>
                    <p className="btn" onClick={() => this.restartGame()}>Play Again</p>
                </div>
                    : ""
                }

                { !this.state.isStarted ?
                    <div className="overlay" style={{...styles.overlay, ...styles.bghead}}>
                        <h1 className="btn" onClick={() => this.startGame()}>Start</h1>
                        <p><small>Punsh amine in 60 seconds</small></p>
                    </div>
                    : ""
                }


            </>
        );
    }
}

Ui.contextType = PunshesContext;

let styles = {
    img: {
        padding: 0,
        margin: 0,
        position:"absolute",
        right: 10,
        top: 0,
        width: 100,
        cursor: "pointer"
    },
    score: {
        padding: 0,
        margin: 0,
        position:"absolute",
        left: 20,
        top: 10,
        fontSize: 55,
        color: "#FFF",
        textShadow: "1px 1px #ff0000",
    },
    overlay: {
        padding: 0,
        margin: 0,
        position:"absolute",
        left: 0,
        top: 0,
        fontSize: 30,
        color: "#FFF",
        textShadow: "1px 1px #ff0000",
        width: "100%",
        height: "100%",
        background: "#000",
    },
    bghead: {
        backgroundImage: "url('./ar-head.png')",
        backgroundPosition: "center",
    }
};

export default Ui;