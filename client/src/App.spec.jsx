import React from 'react';
import {
    render,
} from '@testing-library/react';
import App from "./App";

it('renders app successfully', () => {
    const {getByText} = render(<App/>);
    expect(getByText(/React App/)).toBeDefined();
});