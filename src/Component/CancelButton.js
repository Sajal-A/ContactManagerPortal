import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function CancelButton() {
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate('/contactlist'); // Replace with your actual route path
    };

    return (
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleCancelClick}>Cancel</Button>
    );
}

export default CancelButton