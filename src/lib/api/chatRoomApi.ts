import axios from "axios";
import { BackendRoutesEnum } from "../routes";
import { ChatRoomDto } from "../model/chat/chat.dto";

const chatRoomApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/${BackendRoutesEnum.CHATROOM}`,
    withCredentials: true,
});

export async function createChatRoomUser({
    chatRoom
  }: {
    chatRoom: ChatRoomDto;
  }) {
    return await chatRoomApi.post("/", chatRoom);
  }
  
  export async function findOne(chatRoomId: string) {
    return await chatRoomApi.get(`/${chatRoomId}`);
  }

  