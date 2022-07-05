import React, {Component} from 'react'

export class Confirm extends Component {
    continue = e => {
       e.preventDefault(); 
    //    Process form by sending data to API
       this.props.nextStep();
    }

    back = e => {
        e.preventDefault(); 
        this.props.prevStep();
     }

    render(){
        const {values: {title, firstName, middleName, lastName, gender, occupation, dob, email, number, pin}} = this.props; 
        return (
            <React.Fragment>
                <h2>Confirm user data</h2>
                <li>
                    <ul><p>Title:</p>{title}</ul>
                    <ul><p>firstname:</p>{firstName}</ul>
                    <ul><p>middlename:</p>{middleName}</ul>
                    <ul><p>lastname:</p>{lastName}</ul>
                    <ul><p>email:</p>{email}</ul>
                    <ul><p>gender</p>{gender}</ul>
                    <ul><p>occupation</p>{occupation}</ul>
                    <ul><p>DoB</p>{dob}</ul>
                    <ul><p>Phone Number</p>{number}</ul>
                    <ul><p>Pin</p>{pin}</ul>
                   
                </li>
                <button onClick={this.back}>back</button>
                <button onClick={this.continue}>Confirm</button>
              </React.Fragment>
            
        )
    }

}



export default Confirm