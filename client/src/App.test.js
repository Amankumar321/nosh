import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import axios from 'axios';
import { jest, expect, test, describe } from "@jest/globals"

jest.mock('axios');
jest.mock('./socket');

describe('App component', () => {
    test('fetches and displays dishes', async () => {
        const mockData = [
            { dishId: 1, dishName: 'Pizza', imageUrl: 'pizza.jpg', isPublished: true },
            { dishId: 2, dishName: 'Pasta', imageUrl: 'pasta.jpg', isPublished: false },
        ];
        axios.get.mockResolvedValue({ data: mockData });
        const { container } = render(<App />);

        await waitFor(() => {
            const dishElements = container.getElementsByClassName('dish-card')
            expect(dishElements).toHaveLength(mockData.length);
            expect(screen.getByText('Pizza')).toBeInTheDocument();
            expect(screen.getByText('Pasta')).toBeInTheDocument();
        });
    });
});

