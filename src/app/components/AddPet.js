import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                age: '',
                place: ''
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

        if(!formData['name']) {
            isFormValid = false;
            errors['name'] = 'Mandatory Field';
        }
        if(!formData['age']) {
            isFormValid = false;
            errors['age'] = 'Mandatory Field';
        }
        if(!formData['place']) {
            isFormValid = false;
            errors['place'] = 'Mandatory Field';
        }
        this.setState({errors});
        return isFormValid;
    }

    handleSubmit = (event) => {
        console.log(this.state.formData);
        event.preventDefault();
        if (this.handleValidation()) {
            console.log('form valid', this.state.formData)
        } else {
            console.log('form innnnnnnnvalid', this.state.formData)
        }
    }


    render() {
        return (
            <div className="addPet">
                <div>
                    {this.state.notification ? <div className="alert alert-danger" >{this.state.notification}</div> : ''}
                </div>
                <form name="addPetForm" >
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="name">Name</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={this.handleChange} />
                            <span style={{color: 'red'}}>{this.state.errors.name}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="age">age</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="number" className="form-control" id="age" placeholder="Enter Age" name="age" onChange={this.handleChange} />
                            <span style={{color: 'red'}}>{this.state.errors.age}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="place">Place</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="text" className="form-control" id="place" placeholder="Enter Place" name="place" onChange={this.handleChange} />
                            <span style={{color: 'red'}}>{this.state.errors.place}</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} id="save">Save</button>
                            <button type="reset" className="btn btn-default">Cancel</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default AddPet;