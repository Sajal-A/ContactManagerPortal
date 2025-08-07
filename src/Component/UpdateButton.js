import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import UpdateIcon from '@mui/icons-material/Update';

function UpdateButton(props) {
    const {contactid} = props
    const navigate = useNavigate();

    const handleUpdateClick = () => {
        navigate(`/editcontact/${contactid}`); // Replace with your actual route path
    };

    return (
        <Button variant="contained" endIcon={<UpdateIcon />} onClick={handleUpdateClick}>Update</Button>
    );
}

export default UpdateButton