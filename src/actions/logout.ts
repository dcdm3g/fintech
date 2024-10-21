import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerAction } from 'zsa'

export const logout = createServerAction().handler(async () => {
  cookies().delete('access_token')
  redirect('/login')
})
