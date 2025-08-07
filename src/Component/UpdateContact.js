import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useParams, useNavigate } from 'react-router-dom';
import ContactService from '../Services/ContactService';
import CancelButton from './CancelButton';
import UpdateIcon from '@mui/icons-material/Update';

function UpdateContact() {
    const { id } = useParams(); // Access the id route parameter
    const navigate = useNavigate(); // Access the navigation function

    const [contact, setContact] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        address: '',
        organization: '',
    });

    useEffect(() => {
        // Fetch the contact data when the component mounts
        ContactService.getContactById(id).then((res) => {
            const contactData = res.data;
            setContact({
                id: contactData.id,
                firstName: contactData.firstName,
                lastName: contactData.lastName,
                email: contactData.email,
                contactNo: contactData.contactNo,
                address: contactData.address,
                organization: contactData.organization,
            });
        });
    }, [id]);

    const updateContact = (e) => {
        e.preventDefault();
        // Implement your update logic here
        ContactService.addContact(contact).then((res) => {
            alert('Successfully updated');
            navigate(`/contactlist`); // Navigate back to the contact's profile
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };
    return (
        <div className='modal-overlay'>
            <div className='edit-form-container'>
                <h2>Edit Contacts</h2>
                <form>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>FirstName:</label>
                        <div className='col-md-7'>
                            <input
                                type='text'
                                className='form-control'
                                name='firstName'
                                value={contact.firstName}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>LastName:</label>
                        <div className='col-sm-7'>
                            <input
                                type='text'
                                className='form-control'
                                name='lastName'
                                value={contact.lastName}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Email:</label>
                        <div className='col-sm-7'>
                            <input
                                type='text'
                                className='form-control'
                                name='email'
                                value={contact.email}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>ContactNo:</label>
                        <div className='col-sm-7'>
                            <input
                                type='text'
                                className='form-control'
                                name='contactNo'
                                value={contact.contactNo}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Address:</label>
                        <div className='col-sm-7'>
                            <input
                                type='text'
                                className='form-control'
                                name='address'
                                value={contact.address}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>Organization:</label>
                        <div className='col-sm-7'>
                            <input
                                type='text'
                                className='form-control'
                                name='organization'
                                value={contact.organization}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" endIcon={<UpdateIcon />} onClick={updateContact}>Update</Button>
                        <CancelButton />
                    </Stack>
                </form>
            </div>
        </div>
    )
}

export default UpdateContact