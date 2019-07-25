import React from 'react';
import './App.css';
import AppContext from './AppContext';
import Student from "./Student";

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

    render(){
        let contextValues = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            age : this.state.age,
            bootcamp: this.state.bootcamp
        };

        return (
            <AppContext.Provider value={contextValues} >
                <div className="App">
                    <Student/>
                </div>
            </AppContext.Provider>
        );
    }

}

export default App;
