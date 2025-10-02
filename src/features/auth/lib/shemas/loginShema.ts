import * as z from 'zod'

export const loginSchema = z.object({
  email: z.email({ error: 'Incorrect email address' }),
  password: z.string().min(4, 'Passwort is too short'),
  rememberMe: z.boolean().optional(),
})

export type LoginInputs = z.infer<typeof loginSchema>