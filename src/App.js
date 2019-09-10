import React from 'react';
import './App.css';
import Student from "./Student";
import AppContext from './AppContext';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName : "Mike",
            lastName : "Willis",
            age : 30,
            bootcamp: "Fullstack Flex Bootcamp"
        }
    }

    handleClick = () => {
        console.log("Clicked handleClick");
    };

    render(){
        let contextValues = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            age : this.state.age,
            bootcamp : this.state.bootcamp,
            handleClick : this.handleClick
        };

        return (
            <AppContext.Provider value={contextValues}>
                <div className="App">
                    <Student/>
                </div>
            </AppContext.Provider>

        );
    }

}

export default App;
