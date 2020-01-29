import React, { Component } from "react";
import { CtxConsumer } from "../index";

class Footer extends Component{
    state = {
        name: "",
        age: 21,
        isLogin: true
    }

    componentDidMount(){
        this.setState({name: "MyName"});
        // subscribe
    }

    // componentWillUnmount(){
    //     // unsubscribe

    // }

    changed = evt => {
        // console.log(this.state.name)
        
        this.setState({name: evt.target.value});
        console.log(this.state.name);


    }

    render() {
        return(
            <CtxConsumer>
                { (context) => (
                    <div>
                        {context.animals.map(animal => {
                            return(
                                <div key={animal}>
                                    <h1>{animal}</h1>
                                </div>
                            );
                        })}
                    </div>
                )}
            </CtxConsumer>
        )
    }




        
        }
                {/* {animals.map(animal => {
                    return (
                        <div key={animal}>
                            <h1>{animal}</h1>
                        </div>
                    );
                })} */}

                {/* <h2 onClick={this.props.myalert}>
                    {this.props.trademark}
                </h2>
                <input value={this.state.name} onChange={this.changed} type="text"/> */}

                {/* { this.state.isLogin ? (
                    <React.Fragment>
                    <h2 onClick={this.props.myalert}>
                        {this.props.trademark}
                    </h2>
                    <input value={this.state.name}
                    onChange={this.changed} type="text"/>
                    </React.Fragment>
                    ) : (
                        <React.Fragment>
                        <h2>You can't see this content</h2>
                        <h2>You must be loggedin</h2>

                        </React.Fragment>
                        )} */}
            


export default Footer;