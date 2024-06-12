import axios from "axios";
import { BackendRoutesEnum } from "../routes";
import { ChatRoomUserDto } from "../model/chat/chat.dto";

const chatRoomRelationApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/${BackendRoutesEnum.CHATROOMRELATION}`,
    withCredentials: true,
});

export async function createChatRoomUser({
    chatRoomUser
  }: {
    chatRoomUser: ChatRoomUserDto;
  }) {
    return await chatRoomRelationApi.post("/", chatRoomUser);
  }
  
  export async function findAllByUserId(userId: string) {
    return await chatRoomRelationApi.get(`/${userId}`);
  }

  export async function findAllByChatRoomId(chatRoomId: string) {
    return await chatRoomRelationApi.get(`/${chatRoomId}`);
  }
  