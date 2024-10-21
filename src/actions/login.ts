import { prisma } from '@/lib/prisma'
import { createAccessToken } from '@/utils/create-access-token'
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { ZSAError, createServerAction } from 'zsa'

export const login = createServerAction()
  .input(
    z.object({
      email: z.string().trim().email(),
      password: z.string().trim().min(8),
    }),
  )
  .handler(async ({ input: { email, password } }) => {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new ZSAError('NOT_AUTHORIZED', 'Invalid credentials')
    }

    const passwordsMatch = await bcrypt.compare(user.password, password)

    if (!passwordsMatch) {
      throw new ZSAError('NOT_AUTHORIZED', 'Invalid credentials')
    }

    const accessToken = await createAccessToken(user.id)

    cookies().set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 90, // 90 days
    })

    redirect('/')
  })
