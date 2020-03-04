import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';
import MessageList from "./MessageList";

afterEach(cleanup);

it('renders without error', () => {
    const {queryByText} = render(<MessageList messages={["hello", "world"]}/>);

    expect(queryByText('hello')).toBeDefined();
    expect(queryByText('world')).toBeDefined();
});