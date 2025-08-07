import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from '../Component/Navbar';

describe('Navbar Component', () => {
    it('should render the Navbar component with links', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );

        // Check if the "Contact Manager" text is present in the Navbar
        expect(screen.getByText('Contact Manager')).toBeInTheDocument();

        // Check if the "Home" link is present
        expect(screen.getByText('Home')).toBeInTheDocument();

        // Check if the "New Contact" link is present
        expect(screen.getByText('New Contact')).toBeInTheDocument();

        // Check if the "List Contact" link is present
        expect(screen.getByText('List Contact')).toBeInTheDocument();

        // Check if the "About US" link is present
        expect(screen.getByText('About US')).toBeInTheDocument();
    });
    it('should navigate to the correct route when a link is clicked', () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <Navbar />
            </Router>
        );

        // Click the "Home" link
        screen.getByText('Home').click();
        // Assert that the current route is '/'
        expect(history.location.pathname).toBe('/');
    })

})