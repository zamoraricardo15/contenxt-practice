import React from 'react';
import AppContext from './AppContext';
import StudentError from './StudentError';

export default class Student extends React.Component{

    static contextType = AppContext;

    render(){
        if( this.context.firstName === ""){
            return (<StudentError />);
        }
        else{
            return (<div onClick={this.context.handleClick}>
                        {this.context.firstName} {this.context.lastName}
                    </div>);
        }
    }
}