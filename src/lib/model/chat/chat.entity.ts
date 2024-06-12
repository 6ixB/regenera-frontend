import { z } from 'zod';
import { UserEntitySchema } from '../user/user.entity';
import { ProjectEntitySchema } from '../project/project.entity';

export const ChatRoomEntitySchema = z.lazy(() => z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.date().default(() => new Date()),
  chats: ChatEntitySchema.array(),
  users: UserEntitySchema.array(),
  project: ProjectEntitySchema,
  projectId: z.string(),
}));

export const ChatEntitySchema = z.object({
  id: z.string(),
  message: z.string().nullable(),
  image: z.string().nullable(),
  userId: z.string(),
  createdAt: z.date().default(() => new Date()),
  chatRoomId: z.string(),
  user: UserEntitySchema,
});


export const ChatRoomUserEntitySchema = z.object({
  chatRoomId: z.string(),
  userId: z.string(),
  chatRoom: ChatRoomEntitySchema,
  user: UserEntitySchema,
});

export type ChatRoomUserEntity = z.infer<typeof ChatRoomUserEntitySchema>;
export type ChatRoomEntity = z.infer<typeof ChatRoomEntitySchema>;
export type ChatEntity = z.infer<typeof ChatEntitySchema>;
