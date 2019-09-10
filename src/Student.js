import React from 'react';
import AppContext from './AppContext';

export default class Student extends React.Component{

    static contextType = AppContext;

    render(){
        return (<div onClick={this.context.handleClick}>
                    {this.context.firstName} {this.context.lastName}
                </div>)
    }
}