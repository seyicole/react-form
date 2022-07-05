import React, {Component} from 'react'

export class Form2 extends Component {
    continue = e => {
       e.preventDefault(); 
       this.props.nextStep();
    }

    back = e => {
        e.preventDefault(); 
        this.props.prevStep();
     }

    render(){
        const {values, handleChange} = this.props; 
        return (
            <React.Fragment>
                 <div className="app">
                <div className="login-form">
                {/* <img src={logo2} className="App-logo" alt="logo"/> */}
                <div className="title"><h2><b>Personal Data</b></h2><p>Your personal data is secure in compliance with strict data protection regulations</p></div>
                <div className="form">
               <form>
               <div className="input-container">
                <input
                type="text"
                placeholder="Email Address"
                onChange={handleChange('email')}
                defaultValue={values.email}
                />
               </div>
                {/* <label>Gender</label> */}
                <div className="input-container">
                <input
                type='text'
                placeholder="Gender"
                onChange={handleChange('gender')}
                defaultValue={values.gender}
                />
                </div>
                {/* <label>Occupation</label> */}
                <div className="input-container">
                <input
                type='text'
                placeholder="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
                />
                </div>
                {/* <label>Date of Birth</label> */}
                <div className="input-container">
                <input
                type='text'
                placeholder="Date of Birth"
                onChange={handleChange('dob')}
                defaultValue={values.dob}
                />
                </div>
                </form>
                <button onClick={this.continue}>Continue</button>
                <button onClick={this.back}>back</button>
                </div>
                </div>
                </div>
              </React.Fragment>
            
        )
    }

}



export default Form2