import React from 'react';
import { render, screen } from '@testing-library/react';
import ListContact from '../Component/ListContact';

describe('ListContact Component', () => {
    it('renders without errors', () => {
        render(<ListContact />);
        const headerElement = screen.getByText('Contact List');
        expect(headerElement).toBeInTheDocument();
      });
})
