import * as z from 'zod'

export const todolistShema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title cannot be empty"),
  order: z.int(),
  addedDate: z.iso.datetime({ local: true }),
})

export const todolistsResponseSchema = z.array(todolistShema);

export type Todolist = z.infer<typeof todolistShema>;
export type TodolistsResponse = z.infer<typeof todolistsResponseSchema>;