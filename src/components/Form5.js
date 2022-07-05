import React, {Component} from 'react'

export class Form5 extends Component {
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
                <div className="title"><h2><b>Set Pin</b></h2><p>Enter a new Pin to setup this device</p></div>
                <div className="form">
               <form>
               <div className="input-container">
                <input
                type="number"
                placeholder="Pin"
                onChange={handleChange('pin')}
                defaultValue={values.pin}
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



export default Form5