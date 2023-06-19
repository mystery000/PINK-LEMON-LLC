import { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (input.trim() === '') return;

        const newMessage = {
            id: messages.length + 1,
            text: input
        };

        setMessages([...messages, newMessage]);
        setInput('');
    };

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message) => (
                    <div key={message.id} className="message">
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleFormSubmit} className="chat-form">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
