import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterPage from './RegisterPage';
import { server } from 'Frontend/frontend/mocks/server.js';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('RegisterPage', () => {
    it('submits the form', async () => {
        const { getByLabelText, getByRole } = render(<RegisterPage />);

        userEvent.type(getByLabelText(/name/i), 'John Doe');
        userEvent.type(getByLabelText(/email/i), 'john.doe@example.com');
        userEvent.type(getByLabelText(/password/i), 'password123');
        userEvent.type(getByLabelText(/phone/i), '1234567890');

        fireEvent.click(getByRole('button'));

        await waitFor(() => {
            server.printHandlers();
            expect(server.handlers[0].test({ url: `${process.env.REACT_APP_API_URL}/register`, method: 'POST' })).toBe(true);
        });
    });
});