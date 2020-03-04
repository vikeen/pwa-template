import React, {useState} from 'react';
import './App.css';
import NewMessageForm from './components/NewMessageForm/NewMessageForm';
import MessageList from './components/MessageList/MessageList';

function App() {
    const [messages, setMessages] = useState<string[]>([]);

    const handleSend = (newMessage: string) => {
        setMessages([newMessage, ...messages]);
    };

    return (
        <div>
            <NewMessageForm onSend={handleSend}/>
            <MessageList messages={messages}/>
        </div>
    );
}

export default App;
