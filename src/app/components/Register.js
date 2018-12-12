import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                password: '',
                confirmPassword: ''
            },
            errors: {},
            notification: ''
        }
    }
    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleValidation = () => {
        let formData = this.state.formData;
        let errors = {};
        let isFormValid = true;

        if(!formData['userName']) {
            isFormValid = false;
            errors['userName'] = 'Mandatory Field';
        }
        if(!formData['password']) {
            isFormValid = false;
            errors['password'] = 'Mandatory Field';
        }
        if(!formData['confirmPassword']) {
            isFormValid = false;
            errors['confirmPassword'] = 'Mandatory Field';
        }

        if(formData['password'] !== formData['confirmPassword']) {
            isFormValid = false;
            errors['confirmPassword'] = 'Passwords do not match';
        }
        this.setState({errors});
        return isFormValid;
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.formData);
        if (this.handleValidation()) {
            console.log('form valid', this.state.formData)
        } else {
            console.log('form innnnnnnnvalid', this.state.formData)
        }
    }

    render() {
        return (
            <div className="register">
                <div>
                    {this.state.notification ? <div className="alert alert-danger" >{this.state.notification}</div> : ''}
                </div>
                <form name="registerForm" >
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="userName">E-Mail</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="email" className="form-control" id="userName" placeholder="Enter User Name" name="userName" onChange={this.handleChange} />
                            <span style={{color: 'red'}}>{this.state.errors.userName}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="email">Password</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" onChange={this.handleChange} />
                            <span style={{color: 'red'}}>{this.state.errors.password}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="confirmPassword">Confirm Password</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Enter Confirm Password" name="confirmPassword" onChange={this.handleChange} />
                            <span style={{color: 'red'}}>{this.state.errors.confirmPassword}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} id="submitBtn">Submit</button>
                            <button type="reset" className="btn btn-default">Cancel</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Register;