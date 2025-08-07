import React from 'react';
import { render, fireEvent,} from '@testing-library/react';
import AddContact from '../Component/AddContact';

describe('AddContact Component', () => {
    it('should render correctly', () => {
        const { getByText, getByPlaceholderText } = render(<AddContact />);

        // Check if the component's title is rendered
        expect(getByText('Add New Contact')).toBeInTheDocument();

        // Check if form elements are rendered
        expect(getByPlaceholderText('First Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Last Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Email Id')).toBeInTheDocument();
        expect(getByPlaceholderText('Contact No')).toBeInTheDocument();
        expect(getByPlaceholderText('Address')).toBeInTheDocument();
        expect(getByPlaceholderText('Organization')).toBeInTheDocument();

        // Check if buttons are rendered
        expect(getByText('Add Contact')).toBeInTheDocument();
        expect(getByText('Reset Form')).toBeInTheDocument();
    });

    it('should handle form input changes', () => {
        const { getByPlaceholderText } = render(<AddContact />);
        const firstNameInput = getByPlaceholderText('First Name');
        const lastNameInput = getByPlaceholderText('Last Name');
        const emailInput = getByPlaceholderText('Email Id');
        const contactNoInput = getByPlaceholderText('Contact No');
        const addressInput = getByPlaceholderText('Address');
        const organizationInput = getByPlaceholderText('Organization');
    
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.change(contactNoInput, { target: { value: '1234567890' } });
        fireEvent.change(addressInput, { target: { value: '123 Main St' } });
        fireEvent.change(organizationInput, { target: { value: 'Example Corp' } });
    
        expect(firstNameInput.value).toBe('John');
        expect(lastNameInput.value).toBe('Doe');
        expect(emailInput.value).toBe('john@example.com');
        expect(contactNoInput.value).toBe('1234567890');
        expect(addressInput.value).toBe('123 Main St');
        expect(organizationInput.value).toBe('Example Corp');
      });

      it('should reset form fields when "Reset Form" is clicked', () => {
        const { getByPlaceholderText, getByText } = render(<AddContact />);
        const firstNameInput = getByPlaceholderText('First Name');
        const addContactButton = getByText('Add Contact');
        const resetFormButton = getByText('Reset Form');
    
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.click(resetFormButton);
    
        expect(firstNameInput.value).toBe('');
      });
})