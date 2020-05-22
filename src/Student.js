import React from 'react';
import AppContext from './AppContext';
import StudentError from './StudentError';

/*
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
*/
export default function Student( ){

    return(
        <AppContext.Consumer>
            {( context ) => {
                if( context.firstName === "" ){
                    return (<StudentError />);
                }
                else{
                    return (<div onClick={context.handleClick}>
                                {context.firstName} {context.lastName}
                            </div>);
                }
            }}
        </AppContext.Consumer>
    )
}