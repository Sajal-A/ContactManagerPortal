import React, { Component } from 'react';
import ContactService from '../Services/ContactService';

class AddContact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      address: '',
      organization: '',
      // Initialize error messages for each field
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      contactNoError: '',
      addressError: '',
      organizationError: '',
    }
    this.changeIdHandler = this.changeIdHandler.bind(this)
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
    this.changeEmailHandler = this.changeEmailHandler.bind(this)
    this.changeContactNoHandler = this.changeContactNoHandler.bind(this)
    this.changeAddressHandler = this.changeAddressHandler.bind(this)
    this.changeOrganizationHandler = this.changeOrganizationHandler.bind(this)

    this.saveContact = this.saveContact.bind(this)
  }

  saveContact = (e) => {
    e.preventDefault();
    let contact = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      contactNo: this.state.contactNo,
      address: this.state.address,
      organization: this.state.organization
    }
    console.log('Contact => ' + JSON.stringify(contact))

    ContactService.addContact(contact).then(res => {
      if (res) {
        console.log(res)
      }
      alert("Successfully added")
      this.setState({
        id: "", // You can replace these with default values or empty strings
        firstName: "",
        lastName: "",
        email: "",
        contactNo: "",
        address: "",
        organization: "",
        // Clear error messages when submission is successful
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        contactNoError: '',
        addressError: '',
        organizationError: '',

      });
    }).catch((error) => {
      if (error.response && error.response.status === 400) {
        const validationErrors = error.response.data;
        console.log(validationErrors)
        this.setState({
          firstNameError: validationErrors.firstNameError || '',
          lastNameError: validationErrors.lastNameError || '',
          emailError: validationErrors.emailError || '',
          contactNoError: validationErrors.contactNoError || '',
          addressError: validationErrors.addressError || '',
          organizationError: validationErrors.organizationError || '',
        });
      }
    })
  }

  resetEvent = () => {
    this.setState({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      address: '',
      organization: ''
    })
  }

  changeIdHandler = (event) => {
    this.setState({
      id: event.target.value
    })
  }

  changeFirstNameHandler = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  changeLastNameHandler = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  changeEmailHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  changeContactNoHandler = (event) => {
    this.setState({
      contactNo: event.target.value
    })
  }
  changeAddressHandler = (event) => {
    this.setState({
      address: event.target.value
    })
  }
  changeOrganizationHandler = (event) => {
    this.setState({
      organization: event.target.value
    })
  }

  render() {
    return (
      <div className='con'>
        <div >
          <h3>Add New Contact</h3>
          <div>
            <form>
              {/* <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>SL No</label>
                <div className="col-sm-3">
                  <input placeholder='Sl No' name='id' className='form-control'
                    value={this.state.id} onChange={this.changeIdHandler} />
                </div>
              </div> */}
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label table-label'>First Name</label>
                <div className="col-sm-3">
                  <input placeholder='First Name' name='firstName' className='form-control'
                    value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                </div>
                <div className='error'>{this.state.firstNameError}</div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label table-label' >Last Name</label>
                <div className="col-sm-3">
                  <input placeholder='Last Name' name='lastName' className='form-control'
                    value={this.state.lastName} onChange={this.changeLastNameHandler} />
                </div>
                <div className='error'>{this.state.lastNameError}</div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label table-label'>Email ID</label>
                <div className="col-sm-3">
                  <input placeholder='Email Id' name='email' className='form-control'
                    value={this.state.email} onChange={this.changeEmailHandler} />
                </div>
                <div className='error'>{this.state.emailError}</div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label table-label'>Contact No</label>
                <div className="col-sm-3">
                  <input placeholder='Contact No' name='contactNo' className='form-control'
                    value={this.state.contactNo} onChange={this.changeContactNoHandler} />
                </div>
                <div className='error'>{this.state.contactNoError}</div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label table-label'>Address</label>
                <div className="col-sm-3">
                  <input placeholder='Address' name='address' className='form-control'
                    value={this.state.address} onChange={this.changeAddressHandler} />
                </div>
                <div className='error'>{this.state.addressError}</div>
              </div>
              <div className='form-group row'>
                <label className='col-sm-2 col-form-label table-label'>Organization</label>
                <div className="col-sm-3">
                  <input placeholder='Organization' name='organization' className='form-control'
                    value={this.state.organization} onChange={this.changeOrganizationHandler} />
                </div>
                <div className='error'>{this.state.organizationError}</div>
              </div>
              <button className='btn btn-success' onClick={this.saveContact}>Add Contact</button>
              <button type='submit' className='btn btn-danger' style={{ margin: "5px" }} onClick={this.resetEvent} >Reset Form</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddContact