

// export type Todolist = {
//   id: string
//   title: string
//   addedDate: string
//   order: number
// }


import { Todolist } from "@/features/auth/lib/shemas/todolistShema.ts"

export type CreateTodolistResponse = {
  data: {
    item: Todolist
  }
  resultCode: number
  messages: string[]
}

export type DeleteTodolistResponse = {
  resultCode: number
  messages: string[]
}

export type UpdateTodolistResponse = {
  resultCode: number
  messages: string[]
}