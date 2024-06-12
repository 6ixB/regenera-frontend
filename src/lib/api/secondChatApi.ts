import { useEffect, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { ChatEntity } from '../model/chat/chat.entity';
import { ChatDto } from '../model/chat/chat.dto';
import { chatRoomUsertoSchema, chattoSchema } from '../model/chat/chat.dto';

const useChatWebSocket = (chatRoomId: string, userId: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chats, setChats] = useState<ChatEntity[]>([]);

  useEffect(() => {
    const socketInstance = io('http://localhost:4000/chat', {
      transports: ['websocket'],
    });

    socketInstance.on('connect', () => {
      console.log('Connected to WebSocket server');
      socketInstance.emit('joinRoom', { chatRoomId });
    });

    socketInstance.on('message', (chat: ChatEntity) => {
      console.log('testing')
      setChats(prevChats => [...prevChats, chat]);
      console.log(chat)
    });

    socketInstance.on('chatsInRoom', (chats: ChatEntity[]) => {
      setChats(chats);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.emit('leaveRoom', { chatRoomId });
      socketInstance.disconnect();
    };
  }, [chatRoomId]);

  const sendMessage = useCallback((iMessage: string, file: any) => {
    if (socket) {
      let newChat: ChatDto;

      if (file) {
        newChat = {
          message: iMessage,
          userId: userId,
          image: file,
          chatRoomId: chatRoomId
        };
      } else {
        console.log("file is empty")
        newChat = {
          message: iMessage,
          userId: userId,
          image: null,
          chatRoomId: chatRoomId
        };
      }

      try {
        chattoSchema.parse(newChat); 
        console.log(chattoSchema.parse(newChat))
        socket.emit('sendMessage', newChat);
      } catch (error) {
        console.error('Invalid message format:', error);
      }
    }
  }, [socket, userId, chatRoomId]);

  const getChatsInRoom = useCallback((chatRoomId: string, userId: string) => {
    return new Promise<ChatEntity[]>((resolve, reject) => {
      try {
        chatRoomUsertoSchema.parse({ chatRoomId, userId });
        if (socket) {
          socket.emit('getChatsInRoom', { chatRoomId });
          socket.once('chatsInRoom', (chats: ChatEntity[]) => {
            resolve(chats);
          });
        } else {
          reject('Socket not initialized');
        }
      } catch (error) {
        console.error('Invalid chatRoomId format:', error);
        reject(error);
      }
    });
  }, [socket]);

  return { chats, sendMessage, getChatsInRoom };
};

export default useChatWebSocket;
