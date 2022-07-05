import React, {Component} from 'react';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from  './Form4';
import Form5 from './Form5';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        title: "",
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        occupation: "",
        email: "",
        dob: "",
        number: "",
        password: "",
        pin: ""
    }

    // Preceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Previous to next step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value}); 
    }

    render(){
        const { step } = this.state;
        const {title, firstName, middleName, lastName, gender, occupation, dob, email, password, number, pin} = this.state
        const values = {title, firstName, middleName, lastName, gender, occupation, dob, email, password, number, pin}
        
        switch(step) {
            case 1:

            return (
                <Form
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
            case 2:
                return (
                    <Form2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Form3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Form4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 5:
                return (
                    <Form5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 6:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 7:
                return (
                    <Success />
                )
        }
    }

}



export default UserForm