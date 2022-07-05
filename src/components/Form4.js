import React, {Component} from 'react'

export class Form4 extends Component {
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
                <div className="title"><h2><b>Set Password</b></h2><p>Let's secure your account. Create a password to protect your account from external use</p></div>
                <div className="form">
               <form>
               <div className="input-container">
                <input
                type="password"
                placeholder="Password"
                onChange={handleChange('password')}
                defaultValue={values.password}
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



export default Form4