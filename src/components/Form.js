import React, {Component} from 'react'

export class Form extends Component {
    continue = e => {
       e.preventDefault(); 
       this.props.nextStep();
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
                    {/* <label>Title</label> */}
                <input
                type="text"
                placeholder="Enter Title"
                id='title'
                onChange={handleChange('title')}
                defaultValue={values.title}
                required />
                </div>
                <div className="input-container">
                {/* <label>Firstname</label> */}
                <input
                type='text'
                placeholder="Enter Firstname"
                id='fname'
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
                required />
                </div>
                <div className="input-container">
                {/* <label>Middlename</label> */}
                <input
                type='text'
                placeholder="Enter Middlename"
                id='mname'
                onChange={handleChange('middleName')}
                defaultValue={values.middleName}
                required />
                </div>
                <div className="input-container">
                {/* <label>Lastname</label> */}
                <input
                type='text'
                placeholder="Enter Lastname"
                id='lname'
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
                required />
                </div>
               </form>
                <button onClick={this.continue}>Continue</button>
                </div>
                <div>Have an account? <a>Sign in</a></div>
                </div>
                </div>
              </React.Fragment>
            
        )
    }

}



export default Form