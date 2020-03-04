import React, {useState, ChangeEvent} from 'react';

interface NewMessageFormProps {
    onSend: (text: string) => void;
}

const NewMessageForm = ({onSend}: NewMessageFormProps) => {
    const [text, setText] = useState("");

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSend = () => {
        setText('');
        onSend(text);
    };

    return (
        <div>
            <input type="text" value={text} onChange={handleTextChange} data-testid="messageText"/>
            <button type="submit" onClick={handleSend} data-testid="sendButton">Send</button>
        </div>
    );
};

export default NewMessageForm;