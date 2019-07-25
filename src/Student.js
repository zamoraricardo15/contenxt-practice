import React from 'react';
import AppContext from './AppContext';

export default class Student extends React.Component{

    static contextType = AppContext;

    render(){
        return (<div>
                    {this.context.firstName} {this.context.lastName}
                </div>)
    }
}