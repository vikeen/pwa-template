import React from 'react';

interface MessageListProps {
    messages: string[]
}

const MessageList = ({messages}: MessageListProps) => {
    return (
        <div>
            <ul>
                {messages.map(message => <li key={message}>{message}</li>)}
            </ul>
        </div>
    );
};

export default MessageList;