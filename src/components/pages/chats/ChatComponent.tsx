import { useEffect } from "react";
import ChatPreview, { ChatProbs } from "./ChatPreview";

export default function ChatComponent(){
    const chat1: ChatProbs = {
        time: '10:00 AM',
        chat: 'Hello, how are you?',
        sender: 'Alice'
    };
    
    const chat2: ChatProbs = {
        time: '10:05 AM',
        chat: 'I am good, thanks! How about you?',
        sender: 'Bob'
    };
    
    const chat3: ChatProbs = {
        time: '10:10 AM',
        chat: 'I am doing great, thanks for asking!',
        sender: 'Alice'
    };
    
    const chat4: ChatProbs = {
        time: '10:15 AM',
        chat: 'What are your plans for today?',
        sender: 'Bob'
    };
    
    const chat5: ChatProbs = {
        time: '10:20 AM',
        chat: 'I have a meeting in the afternoon. How about you?',
        sender: 'Alice'
    };

    const chats = [chat1,chat2,chat3,chat4,chat5];

    useEffect(() => {
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [chats]);

    return(
        <div id="chat-container" className="chat-container mt-16 mb-20 overflow-y-auto">
            <ChatPreview chats={chats} />
        </div>
    )
}