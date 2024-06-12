import io, { Socket } from 'socket.io-client';
import { ChatDto, chatRoomUsertoSchema, chattoSchema } from '../model/chat/chat.dto';
import { z } from 'zod';

class ChatWebSocketApi {
  private socket: Socket | null = null;
  private namespace: string;
  private url: string;

  constructor(namespace = 'chat', url = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL) {
    this.namespace = namespace;
    this.url = `${url}/${namespace}`;
    this.initializeSocket();
  }

  private initializeSocket() {
    if (typeof window !== 'undefined') {
      this.socket = io(this.url, {
        transports: ['websocket'],
      });

      this.socket.on('connect', () => {
        console.log('Connected to WebSocket server');
      });

      this.socket.on('disconnect', () => {
        console.log('Disconnected from WebSocket server');
      });
    }
  }

  public onMessage(callback: (message: ChatDto) => void) {
    if (this.socket) {
      this.socket.on('message', (message) => {
        try {
          const parsedMessage = chattoSchema.parse(message);
          callback(parsedMessage);
        } catch (error) {
          console.error('Invalid message format received:', error);
        }
      });
    }
  }

  public onChatsInRoom(callback: (chats: ChatDto[]) => void) {
    if (this.socket) {
      this.socket.on('chatsInRoom', (chats) => {
        try {
          const parsedChats = z.array(chattoSchema).parse(chats);
          callback(parsedChats);
        } catch (error) {
          console.error('Invalid chats format received:', error);
        }
      });
    }
  }

  public sendMessage(message: ChatDto) {
    try {
      chattoSchema.parse(message);
      if (this.socket) {
        this.socket.emit('sendMessage', message);
      }
    } catch (error) {
      console.error('Invalid message format:', error);
    }
  }

  public joinRoom(chatRoomId: string, userId: string) {
    try {
      chatRoomUsertoSchema.parse({ chatRoomId, userId });
      if (this.socket) {
        this.socket.emit('joinRoom', { chatRoomId });
      }
    } catch (error) {
      console.error('Invalid chatRoomId format:', error);
    }
  }

  public leaveRoom(chatRoomId: string, userId: string) {
    try {
      chatRoomUsertoSchema.parse({ chatRoomId, userId });
      if (this.socket) {
        this.socket.emit('leaveRoom', { chatRoomId });
      }
    } catch (error) {
      console.error('Invalid chatRoomId format:', error);
    }
  }

   public getChatsInRoom(chatRoomId: string, userId: string) {
    try {
      chatRoomUsertoSchema.parse({ chatRoomId, userId });
      if (this.socket) {
        this.socket.emit('getChatsInRoom', { chatRoomId });
      }
    } catch (error) {
      console.error('Invalid chatRoomId format:', error);
    }
  }
}

export const chatWebSocketApi = new ChatWebSocketApi();
