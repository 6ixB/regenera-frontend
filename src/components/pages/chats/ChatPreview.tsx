export interface ChatProbs{
    time:string;
    chat:string;
    sender:string;
}

export interface ChatPreviewProps {
    chats: ChatProbs[];
}

const ChatPreview: React.FC<ChatPreviewProps> = ({ chats }) => {
    console.log(chats.length)

    return (
        <div className="chat-preview space-y-4 p-4 bg-gray-100 rounded-lg">
            {chats.map((chat, index) => {
                const isSender = chat.sender === "Alice";
                return (
                    <div key={index} className={`flex items-start mb-4 ${isSender ? 'justify-end' : ''}`}>
                        <div className={`flex items-start`} >
                            {!isSender && <img src={chat.profilePicture} alt="Profile" className="w-10 h-10 rounded-full mr-3 mt-2" />}
                            <div className="flex flex-col">
                                <div className={`flex text-sm font-semibold mb-1 ${isSender ? 'justify-end' : 'justify-start'}`}>{chat.sender}</div>
                                <div className={`relative max-w-xs p-4 rounded-lg shadow ${isSender ? 'bg-light-primary-100 text-white' : 'bg-light-background-300'}`}>
                                    <div className="text-sm">{chat.chat}</div>
                                </div>
                                <div className={`flex text-xs mt-1 ${isSender ? 'right-1 bottom-1 justify-end' : 'left-1 bottom-1 justify-start'}`}>{chat.time}</div>
                            </div>
                            {isSender && <img src={chat.profilePicture} alt="Profile" className="w-10 h-10 rounded-full ml-3 mt-2" />}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ChatPreview;