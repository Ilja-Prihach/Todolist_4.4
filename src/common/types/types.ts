// export type FieldError = {
//   error: string
//   field: string
// }
//
// export type BaseResponse<T = {}> = {
//   data: T
//   resultCode: number
//   messages: string[]
//   fieldsErrors: FieldError[]
// }

import { z }  from 'zod'
import { ResultCode } from "@/common/enums"

export const fieldErrorSchema = z.object({
  error: z.string(),
  field: z.string(),
})

type FieldError = z.infer<typeof fieldErrorSchema>

export type BaseResponse<T = {}> = {
  data: T
  resultCode: number
  messages: string[]
  fieldsErrors: FieldError[]
}

export const baseResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    data: schema,
    resultCode: z.nativeEnum(ResultCode),
    messages: z.string().array(),
    fieldsErrors: fieldErrorSchema.array(),
  })

export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"

export const defaultResponseSchema = baseResponseSchema(z.object({}))
export type DefaultResponse = z.infer<typeof defaultResponseSchema>
