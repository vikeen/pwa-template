import React from 'react';
import {
    render,
    fireEvent,
    cleanup,
} from '@testing-library/react';
import NewMessageForm from './NewMessageForm';

let sendHandler: () => string;

beforeEach(() => {
    sendHandler = jest.fn();
});

afterEach(cleanup);

it('clears the text field', () => {
    const {getByTestId} = render(<NewMessageForm onSend={sendHandler}/>);
    const $message = getByTestId('messageText') as HTMLInputElement;
    const $button = getByTestId('sendButton');

    fireEvent.change($message, {target: {value: 'New message'}});
    fireEvent.click($button);

    expect($message.value).toEqual('');
});

it('calls the send handler', () => {
    const {getByTestId} = render(<NewMessageForm onSend={sendHandler}/>);
    const $message = getByTestId('messageText') as HTMLInputElement;
    const $button = getByTestId('sendButton');

    fireEvent.change($message, {target: {value: 'New message'}});
    fireEvent.click($button);

    expect(sendHandler).toHaveBeenCalledWith('New message');
});