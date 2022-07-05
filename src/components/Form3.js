import React, {Component} from 'react'

export class Form3 extends Component {
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
                <div className="title"><h2><b>Phone Number</b></h2><p>Enter your phone number. This requires a one time phone verification</p></div>
                <div className="form">
               <form>
               <div className="input-container">
                <input
                type="number"
                placeholder="Number"
                onChange={handleChange('number')}
                defaultValue={values.number}
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



export default Form3