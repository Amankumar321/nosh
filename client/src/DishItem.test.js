import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest, expect, test, describe } from "@jest/globals"
import DishItem from './DishItem';
import { socket } from './socket';

jest.mock('./socket')

describe('DishItem component', () => {
    test('recieves socket updates', async () => {
        const mockDish = { dishId: 1, dishName: 'Pizza', imageUrl: 'pizza.jpg', isPublished: true };
        const { container } = render(<DishItem dish={mockDish}/>);

        expect(container.querySelector('input[type="checkbox"]').checked).toBe(true);

        act(() => {
            socket.emit('changePublished', { dishId: 1, isPublished: false });
        })

        expect(socket.listeners('changePublished')).toHaveLength(1);
        expect(container.querySelector('input[type="checkbox"]').checked).toBe(false);
    })
})