
import "./App.css";
import React from "react";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            Person : {
                fullName:"Amin" ,
                imgSrc: './Hbaieb Amin IMG1.png', //can implement the linked image directly here if the img src is public
                Bio:
                    "I am a Tunisian youth from Sfax, I am 31 years old and I like programming",
                 profession  : "Full-Stack Développeur"
            },
            show: true,
            time: new Date(),
        };
    }
    componentDidMount() {
       this.interval=  setInterval(() => this.setState({ time: new Date() }), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
     
    render() {
        return (
            <div
                className="App"
                style={{
                    backgroundColor: "#645d79",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <button
                    style={{
                        border: "transparent",
                        borderRadius: "1em",
                        marginTop: "1em",
                        backgroundColor: "#C1F4F0",
                        fontSize: "small",
                        fontWeight: "lighter",
                    }}
                    onClick={() => this.setState({ show: !this.state.show })}
                    
                >
                    Show/Hide the profile
                </button>
                <div
                    style={{
                        color: "black",
                        fontWeight: "normal",
                        textAlign: "center",
                    }}
                >
                    You have spent{" "}
                    <span style={{ color: "white", fontWeight: "bolder" }}>
                        {this.state.time.toLocaleTimeString()} 
                    </span>{" "}
                    looking at my profile.
                </div>
                {this.state.show ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "10px",
                            width: "20em",
                            height: "27em",
                            margin: "auto",
                            backgroundColor: "#F1F2E2 ",
                            marginTop: "30px",
                        }}
                    >
                        {/* <img
                            src={this.state.Person.imgSrc}
                            style={{
                                width: "8em",
                                height: "8em",
                                border: "solid 5px #E91E63",
                                borderRadius: "50%",
                            }}
                            alt="profile"
                        /> */}
                        <img style={{width: "8em",height: "8em",border: "transparent",
                        borderRadius: "1em",}} src={this.state.Person.imgSrc} className="myimg" alt="my profile"/>
                        <h1 style={{ color: "#4e30aa" }}>
                            {this.state.Person.fullName}
                        </h1>
                        <h4 style={{ color: "#9E9E9E" }}>
                            {this.state.Person.Bio}
                        </h4>
                        <h2 style={{ color: "#212121", fontSize: "1em" }}>
                            My profession: {this.state.Person.profession}
                        </h2>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default App;
